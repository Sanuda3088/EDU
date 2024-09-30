package com.MiniProject.automate_results.service.resultsCollection.impl;

import com.MiniProject.automate_results.entity.results.StudentResult;
import com.MiniProject.automate_results.entity.results.SubjectResultSheet;
import com.MiniProject.automate_results.entity.resultsCollection.ResultsCollection;
import com.MiniProject.automate_results.repository.ResultsCollectionRepository;
import com.MiniProject.automate_results.service.exception.RecordNotFoundException;
import com.MiniProject.automate_results.service.results.resultsImpl.ManageResultsServiceImpl;
import com.MiniProject.automate_results.service.resultsCollection.ResultsCollectionService;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.Binary;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.util.*;
import java.util.stream.Collectors;
@Service
@Slf4j
public class ResultsCollectionServiceImpl implements ResultsCollectionService {

    private final ResultsCollectionRepository resultsCollectionRepository;
    private static final Logger logger = LoggerFactory.getLogger(ManageResultsServiceImpl.class);

    public ResultsCollectionServiceImpl(ResultsCollectionRepository resultsCollectionRepository) {
        this.resultsCollectionRepository = resultsCollectionRepository;
    }

    public Map<String, Map<String, String>> generateTable(ResultsCollection resultCollection) {
        Map<String, Map<String, String>> studentResultsTable = new HashMap<>();

        // Iterate over the subject result sheets to extract unique indexes
        for (SubjectResultSheet subjectResultSheet : resultCollection.getSubjectResultSheets()) {
            String subjectCode = subjectResultSheet.getSubjectCode();

            // Iterate over each student's result
            for (StudentResult studentResult : subjectResultSheet.getStudentResults()) {
                String studentIndex = studentResult.getIndex();
                String grade = studentResult.getGrade();

                // If the index doesn't exist in the map, create a new map for the subject results
                studentResultsTable.computeIfAbsent(studentIndex, k -> new HashMap<>());

                // Fill in the grade for the current subject
                studentResultsTable.get(studentIndex).put(subjectCode, grade);
            }
        }

        // Fill missing subjects with "N/A"
        for (String index : studentResultsTable.keySet()) {
            for (SubjectResultSheet subjectResultSheet : resultCollection.getSubjectResultSheets()) {
                String subjectCode = subjectResultSheet.getSubjectCode();
                studentResultsTable.get(index).putIfAbsent(subjectCode, "N/A");
            }
        }

        return studentResultsTable;
    }


    public Binary createPdf(Map<String, Map<String, String>> studentResultsTable) throws Exception {
        // Create a byte array output stream to hold the PDF data
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

        // Initialize the PdfWriter with the byte array output stream
        PdfWriter writer = new PdfWriter(byteArrayOutputStream);

        // Initialize PDF document
        PdfDocument pdf = new PdfDocument(writer);

        // Initialize document for layout purposes
        Document document = new Document(pdf);

        // Add title
        document.add(new Paragraph("Student Results"));

        // Number of columns = subjects + 1 (for the index column)
        int numColumns = studentResultsTable.values().iterator().next().size() + 1;
        Table table = new Table(numColumns);

        // Add headers (Index + Subject Codes)
        table.addCell("Index");
        for (String subjectCode : studentResultsTable.values().iterator().next().keySet()) {
            table.addCell(subjectCode);
        }

        // Add student results
        for (String index : studentResultsTable.keySet()) {
            table.addCell(index);
            for (String grade : studentResultsTable.get(index).values()) {
                table.addCell(grade);
            }
        }

        // Add table to document
        document.add(table);

        // Close the document
        document.close();

        // Convert the byte array output stream to a Binary object
        byte[] pdfBytes = byteArrayOutputStream.toByteArray();
        return new Binary(pdfBytes);
    }


    public void saveResultsWithPdf(String id) throws Exception {

        Optional<ResultsCollection> resultCollections = resultsCollectionRepository.findById(id);
        if(resultCollections.isPresent()){
            ResultsCollection resultsCollections = resultCollections.get();
        // Generate the result table
        Map <String, Map<String, String>> resultTable = generateTable(resultsCollections);

        // Generate the PDF and get it as a Binary object
        Binary pdfContent = createPdf(resultTable);

        // Save the PDF content in the resultsCollection entity
        resultsCollections.setPdfContent(pdfContent);

        // Save the updated resultsCollection back to the database
        resultsCollectionRepository.save(resultsCollections);

        }else{
            throw new RecordNotFoundException("The collection is not found");
        }
    }

}

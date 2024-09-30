import React, { useState } from 'react'
import DropDown from './DropDown'
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import ResultTable from './ResultTable';
import { useSelector } from 'react-redux';

function ResultForm() {

    const results = ['A', 'B', 'C', 'D', 'E', 'F']
    const [students, setStudents] = useState([
        {
            index: '19APC3951',
            result: 'A'
        },
        {
            index: '19APC3952',
            result: 'B'
        },
        {
            index: '19APC3953',
            result: 'C'
        },
        {
            index: '19APC3954',
            result: 'D'
        }
    ])
    const [enableEdit, setEnableEdit] = useState(false)

    const handleAddResult = () => {
        setStudents([...students, 'Student5'])
    }

    const handleEditResult = () => {
        setEnableEdit(!enableEdit)
    }

    const numbers = useSelector((store) => store.numberSlice.number)

    return (
        <div>
            <div className='mx-8 mt-5 flex flex-col items-center'>
                <div className='w-full flex justify-start'>
                    <h3 className='text-xl text-primary-txt'>Enter Exam Results</h3>
                </div>
                <div className='w-9/12 mt-3'>
                    <div className='grid grid-cols-7 gap-3'>
                        <div className=' col-span-3'>
                            <input
                                type='text'
                                placeholder='Enter Index Number'
                                className='p-4 w-full h-12 border-[1px] border-black rounded-lg focus:border-secondary focus:border-2 focus:outline-none placeholder-table-txt placeholder-opacity-100'
                            ></input>
                        </div>
                        <div className='col-span-3'>
                            <DropDown type="Result" options={results} />
                        </div>
                        <div className=' col-span-1 bg-primary'>
                            <button
                                onClick={handleAddResult}
                                className='w-full h-12 bg-secondary text-white border-btn-border text-[16px] border-[1px]'
                            >Add</button>
                        </div>
                    </div>
                </div>
                {/* <div className='ml-12 mt-10 w-[839px]'>
                    <div className='grid grid-cols-8 gap-[1px]'>
                        <div className='col-span-1 bg-primary'></div>
                        <div className='p-2 col-span-2 flex items-center justify-center bg-primary'>
                            <h3 className='text-lg text-white'>No</h3>
                        </div>
                        <div className='col-span-2 flex items-center justify-center bg-primary'>
                            <h3 className='text-lg text-white'>Student Index</h3>
                        </div>
                        <div className='col-span-2 flex items-center justify-center bg-primary'>
                            <h3 className='text-lg text-white'>Result</h3>
                        </div>
                        <div className='col-span-1 flex items-center justify-center bg-primary'></div>
                    </div>
                </div>
                {students.map((student, index) => (
                    <div className='ml-12 mt-1 w-[839px]'>
                        <div className='grid grid-cols-8 gap-[1px]'>
                            <div className='p-3 col-span-1 flex items-center justify-center bg-table-bg'>
                                <input type='checkbox' className='w-5 h-5'></input>
                            </div>
                            <div className='p-3 col-span-2 flex items-center justify-center bg-table-bg'>
                                <p className='text-lg text-table-txt'>1</p>
                            </div>
                            <div className='p-0 col-span-2 flex items-center justify-center bg-table-bg'>
                                <input
                                    disabled={!enableEdit}
                                    type='text'
                                    placeholder='19APC3955'
                                    className='p-3 w-full h-full text-lg text-center bg-transparent border-transparent focus:border-secondary focus:border-2 focus:outline-none placeholder-table-txt placeholder-opacity-100'
                                ></input>
                            </div>
                            <div className='p-0 col-span-2 flex items-center justify-center bg-table-bg border-none'>
                                <input
                                    disabled={!enableEdit}
                                    type='text'
                                    placeholder='A'
                                    className='p-3 w-full h-full text-lg text-center bg-transparent border border-transparent focus:border-secondary focus:border-2 focus:outline-none  placeholder-table-txt placeholder-opacity-100'
                                ></input>
                            </div>
                            <div className='p-3 col-span-1 flex items-center justify-center gap-1 bg-table-bg'>
                                <MdEdit size={20}
                                    onClick={handleEditResult}
                                    className='text-edit-icon-bg cursor-pointer'
                                />
                                <RiDeleteBin6Line size={20} className='text-dlt-icon-bg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                ))} */}
                <div className='w-full mt-2'>
                   <ResultTable />
                </div>
                <div className='w-full mt-5 mr-16 flex justify-end'>
                    <button className='py-2 px-10 bg-secondary text-white border-btn-border text-[16px] border-[1px]'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ResultForm

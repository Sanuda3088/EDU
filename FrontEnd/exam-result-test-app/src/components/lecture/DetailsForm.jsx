import React from 'react'
import DropDown from './DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { clickDetailsProceed } from '../../store/reducers/LectureNavigationSlice'

function DetailsForm({ setIsSetupDetails , isSetupDetails }) {

    const faculties = ['Faculty1', 'Faculty2', 'Faculty3', 'Faculty4']
    const departments = ['Department1', 'Department2', 'Department3', 'Department4']
    const degrees = ['Degree1', 'Degree2', 'Degree3', 'Degree4']
    const batches = ['Batch1', 'Batch2', 'Batch3', 'Batch4']
    const semesters = ['Semester1', 'Semester2', 'Semester3', 'Semester4']
    const subjects = ['Subject1', 'Subject2', 'Subject3', 'Subject4']
    const subjectCodes = ['Code1', 'Code2', 'Code3', 'Code4']

    //const number = useSelector((store) => store.numberSlice.number)

    const lectureNavigation = useSelector((store) => store.lectureNavigationSlice)
    const dispatch = useDispatch()
    
    const handleProceed = () => {
        dispatch(clickDetailsProceed(true))
    }
    
    return (
        <div>
            <div className='mx-7 mt-10 flex flex-col'>
                <div>
                    <h3 className='text-xl text-txt-primary'>Enter Details</h3>
                </div>
                <div className='m-10 grid grid-cols-2 gap-5'>
                    <DropDown type="Faculty Name" options={faculties} />
                    <DropDown type="Department Name" options={departments} />
                    <DropDown type="Degree Name" options={degrees} />
                    <DropDown type="Batch Name" options={batches} />
                    <DropDown type="Semester Name" options={semesters} />
                    <div>
                        <input type='date' placeholder='Month' className='p-4 w-full h-12 border-[1px] border-black rounded-lg focus:border-secondary focus:border-2 active:border-white duration-300'></input>
                    </div>
                    <DropDown type="Subject Name" options={subjects} />
                    <DropDown type="Subject Code" options={subjectCodes} />
                </div>
                <div className='mx-10 mt-5 flex justify-end gap-10'>
                    <button className='min-w-36 h-12 hover:bg-secondary text-black hover:text-white text-[16px] border-black hover:border-btn-border border-[1px]'>Cancel</button>
                    <button
                        onClick={handleProceed}
                        className='min-w-36 h-12 bg-secondary text-white border-btn-border text-[16px] border-[1px]'
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsForm

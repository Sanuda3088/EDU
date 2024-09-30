import React from 'react'
import DropDown from './DropDown'
import { TfiMenuAlt } from "react-icons/tfi";
import { PiSquaresFourBold } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { clickViewResult } from '../../store/reducers/LectureNavigationSlice';

function ApprovePendingResultList() {

    const faculties = ['Faculty1', 'Faculty2', 'Faculty3', 'Faculty4']
    const departments = ['Department1', 'Department2', 'Department3', 'Department4']
    const subjects = ['Subject1', 'Subject2', 'Subject3', 'Subject4']

    const lectureNavigation = useSelector((store)=>store.lectureNavigationSlice)
    const dispatch = useDispatch()

    const resultSheets = ['shhet1', 'sheet2', 'sheet3', 'sheet4', 'sheet5', 'sheet6', 'sheet7', 'sheet8', 'sheet9', 'sheet10', 'shwet11', 'sheet12', 'sheet13', 'sheet14', 'sheet15', 'sheet16', 'sheet17', 'sheet18', 'sheet19', 'sheet20']
    
    const handleViewResult = ()=>{
        if(lectureNavigation.isClickedApprovalPendingResults){
            dispatch(clickViewResult(true))
        }
    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='mt-5 w-5/6 flex items-center justify-between'>
                    <h3 className='text-xl text-primary-txt'>Approve Pending Result</h3>
                    <div className='basis-7/12 grid grid-cols-7 gap-2'>
                        <div className='col-span-2'>
                            <DropDown type="Faculty" options={faculties} />
                        </div>
                        <div className='col-span-2'>
                            <DropDown type="Department" options={departments} />
                        </div>
                        <div className='col-span-2'>
                            <DropDown type="Subject" options={subjects} />
                        </div>
                        <div className='col-span-1 flex items-center justify-center gap-2 bg-secondary rounded-lg'>
                            <TfiMenuAlt size={25} color='white' />
                            <PiSquaresFourBold size={25} color='white' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-10'>
                        <div className='pb-2 w-full grid grid-cols-12 gap-1 border-black border-b-[1px]'>
                            <div className='h-10 col-span-1 flex items-center justify-start'>
                                <input type='checkbox' className='w-5 h-5'></input>
                            </div>
                            <div className='h-10 col-span-2 flex items-center justify-start'>
                                <p className='text-lg text-black'>Subject Code</p>
                            </div>
                            <div className='h-10 col-span-3 flex items-center justify-start'>
                                <p className='ml-5 text-lg text-primary-txt'>Subject Name</p>
                            </div>
                            <div className='h-10 col-span-2 flex items-center justify-start'>
                                <p className='ml-3 text-lg text-black'>Faculty</p>
                            </div>
                            <div className='h-10 col-span-2 flex items-center justify-start'>
                                <p className='ml-2 text-lg text-black'>Department</p>
                            </div>
                            <div className='h-10 col-span-2 flex items-center justify-center'>
                                <p className='text-lg text-black'>Action</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-10 max-h-80 overflow-y-auto'>
                        {resultSheets.map((sheet, index) => (
                            <div className='py-2 w-full grid grid-cols-12 gap-1 gradient-border-bottom border-b-[1px]'>
                                <div className='h-10 col-span-1 flex items-center justify-start'>
                                    <input type='checkbox' className='w-5 h-5'></input>
                                </div>
                                <div className='h-10 col-span-2 flex items-center justify-start'>
                                    <p className='ml-5 text-lg text-black'>741D</p>
                                </div>
                                <div className='h-10 col-span-3 flex items-center justify-start'>
                                    <p className='text-lg text-primary-txt'>Static Distribution</p>
                                </div>
                                <div className='h-10 col-span-2 flex items-center justify-start'>
                                    <p className='text-lg text-black'>Information T</p>
                                </div>
                                <div className='h-10 col-span-2 flex items-center justify-start'>
                                    <p className='text-lg text-black'>Computer Science</p>
                                </div>
                                <div className='h-10 col-span-2 flex items-center justify-center gap-3'>
                                    <MdEdit size={20}
                                        //onClick={handleEditResult}
                                        className='text-edit-icon-bg cursor-pointer'
                                    />
                                    <button
                                        onClick={handleViewResult}
                                        className='py-1 px-4 flex itmes-center justify-center bg-view-btn-bg text-black text-[14px] rounded-3xl'
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovePendingResultList

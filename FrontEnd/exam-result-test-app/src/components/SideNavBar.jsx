import React, { useState } from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbHistory } from "react-icons/tb";
import { BiSolidLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { clickAddResult, clickDetailsProceed, clickedAprovalPendingResults, clickHistory, clickViewResult } from '../store/reducers/LectureNavigationSlice';

function SideNavBar({setIsClickedAprrovalResults}) {

    const sideNavLinks = [
        {
            name: 'Add Results',
            icon: <MdOutlineSpaceDashboard size={20} color='white' />
        },
        {
            name: 'Approve Pending Results',
            icon: <MdOutlinePendingActions size={20} color='white' />
        },
        {
            name:'History',
            icon: <TbHistory size={20} color='white' />
        }
    ]
     
    const [activeLink, setActiveLink] = useState('Add Results')

    const handleNavLinkClick = (name) => {
        setActiveLink(name)
        if(name === 'Approve Pending Results'){
            //dispatch(clickedAprovalPendingResults(false, false))
            if(lectureNavigation.isClickedAddResult){
                dispatch(clickAddResult(false))
                dispatch(clickDetailsProceed(false))
                dispatch(clickedAprovalPendingResults(true))
            }
            if(lectureNavigation.isClickedHistory){
                dispatch(clickHistory(false))
                dispatch(clickedAprovalPendingResults(true))
            }
            
        }
        else if( name === 'Add Results'){
            if(lectureNavigation.isClickedApprovalPendingResults){
                dispatch(clickedAprovalPendingResults(false))
                dispatch(clickViewResult(false))
            }
            if(!lectureNavigation.isClickedAddResult){
                dispatch(clickAddResult(true))
                dispatch(clickDetailsProceed(false))
            }
            if(lectureNavigation.isClickedHistory){
                dispatch(clickHistory(false))
                
            }
        }else{
            if(lectureNavigation.isClickedApprovalPendingResults){
                dispatch(clickedAprovalPendingResults(false))
                dispatch(clickViewResult(false))
            }
            if(lectureNavigation.isClickedAddResult){
                dispatch(clickAddResult(false))
                dispatch(clickDetailsProceed(false))
            }
            if(!lectureNavigation.isClickedHistory){
                dispatch(clickHistory(true))
            }
        }
    }

    const lectureNavigation = useSelector((store)=>store.lectureNavigationSlice)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='flex flex-col h-screen bg-primary'>

                <div className='flex items-center justify-center h-32 w-full'>
                    <h1 className='text-white text-2xl font-bold'>Logo</h1>
                </div>

                <div className='mt-10 basis-7/12 flex flex-col items-center'>

                    {sideNavLinks.map((link, index) =>
                    (<div className={`mx-0 my-1 flex items-center w-11/12 h-12 ${activeLink===link.name? "bg-secondary":""} 
                        rounded-md cursor-pointer hover:bg-secondary`}
                       onClick={()=>handleNavLinkClick(link.name)} key={index}
                      >
                        <div className='ml-5'>
                            {link.icon}
                        </div>
                        <p className='ml-2 text-white'>{link.name}</p>
                    </div>))}

                </div>

                <div className='mt-5 flex justify-center'>
                    <button className='mt-10 w-full h-12 flex items-center justify-start gap-3'>
                        <BiSolidLogOut size={20} color='white' className='ml-8' />
                        <p className='text-white'>Logout</p>
                    </button>
                </div>

            </div>
        </div>
    )
}


export default SideNavBar

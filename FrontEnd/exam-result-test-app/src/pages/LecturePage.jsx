import React from 'react'
import { useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import TopVerticalBar from '../components/TopVerticalBar'
import DetailsForm from '../components/lecture/DetailsForm'
import ResultForm from '../components/lecture/ResultForm'
import App from '../App'
import ApprovePendingResultList from '../components/lecture/ApprovePendingResultList'
import ApprovePendingResult from '../components/lecture/ApprovePendingResult'
import { useSelector } from 'react-redux'
import ApprovedResultList from '../components/lecture/ApprovedResultList'


function LecturePage() {

  const [isSetupDetails, setIsSetupDetails] = useState(false)
  const [isClickedAddResult, setIsClickedAddResult] = useState(false)
  const [isClickedAprrovalResults, setIsClickedAprrovalResults] = useState(false)

  const lectureNavigation = useSelector((store) => store.lectureNavigationSlice)

  const [students, setStudents] = useState([
    {
      index: '19APC3951',
      result: 'A'
    },
    {
      index: '19APC3952',
      result: 'AB'
    },
    {
      index: '19APC3953',
      result: 'C'
    },
    {
      index: '19APC3954',
      result: 'Medical'
    },
    {
      index: '19APC3951',
      result: 'A'
    },
    {
      index: '19APC3952',
      result: 'AB'
    },
    {
      index: '19APC3953',
      result: 'C'
    },
    {
      index: '19APC3954',
      result: 'Medical'
    }
  ])

  const [students2, setStudents2] = useState([
    {
      index: '19APC3951',
      result: 'A'
    },
    {
      index: '19APC3952',
      result: 'A'
    },
    {
      index: '19APC3953',
      result: 'C'
    },
    {
      index: '19APC3954',
      result: 'C+'
    },
    {
      index: '19APC3951',
      result: 'A'
    },
    {
      index: '19APC3952',
      result: 'A'
    },
    {
      index: '19APC3953',
      result: 'C'
    },
    {
      index: '19APC3954',
      result: 'A'
    }
  ])

  return (
    <div className='w-screen'>
      <div className='grid grid-cols-5 gap-0'>
        <div className='col-span-1 h-screen'>
          <SideNavBar
            setIsClickedAddResult={setIsClickedAddResult}
            setIsClickedAprrovalResults={setIsClickedAprrovalResults}

          />
        </div>
        <div className='col-span-4 flex flex-col'>
          <TopVerticalBar />
          {
            lectureNavigation.isClickedAddResult ?
              lectureNavigation.isSetupDetails ?
                <ResultForm />
                : <DetailsForm setIsSetupDetails={setIsSetupDetails} isSetupDetails={isSetupDetails} />
              : <></>
          }
          {
            lectureNavigation.isClickedApprovalPendingResults ?
              lectureNavigation.isclickedViewResult ?
                <ApprovePendingResult students={students} setStudents={setStudents} />
                : <ApprovePendingResultList />
              : <></>
          }
          {
            lectureNavigation.isClickedHistory && !lectureNavigation.isClickedApprovalPendingResults ? <ApprovedResultList /> : <></>
          }
        </div>
      </div>
    </div>
  )
}

export default LecturePage

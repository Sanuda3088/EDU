import React from 'react'
import SideNavBar from '../components/SideNavBar'
import TopVerticalBar from '../components/TopVerticalBar'

function DptSecretary() {
    return (
        <div>
            <div className='flex'>
                <div className='fixed top-0 left-0 min-w-3/12 w-3/12'>
                    <SideNavBar />
                </div>
                <div className='absolute top-0 left-1/4 w-3/4 flex flex-col'>
                    <TopVerticalBar />
                </div>
            </div>
        </div>
    )
}

export default DptSecretary

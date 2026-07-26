import React from 'react'
import LatestJobCard from './LatestJobCard'
import { useSelector } from 'react-redux'

function LatestJobs() {
    // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8]
    const {allJobs}= useSelector(state=>state.job)
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold text-cyan-950'>Latest & Top
                <span className='text-indigo-700'> Job Openings</span>
            </h1>
            <div className='grid grid-cols-3 gap-8 my-8'>
                {allJobs.slice(0, 6).map((job, i) => <LatestJobCard key={i} job={job}/>)}
            </div>
        </div>
    )
}

export default LatestJobs
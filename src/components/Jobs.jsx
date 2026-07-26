import React from 'react'
import Navbar from './shared/Navbar'
import Filter from './Filter'
import Job from './Job'
import useGetAllJobs from '@/hooks/getAllJobs'
import { useSelector } from 'react-redux'

export default function Jobs() {
    useGetAllJobs()
    // const jobsArray = [1, 2, 3, 4, 5, 6, 7]
    const { allJobs } = useSelector(state => state.job)
    // console.log(allJobs)
    return (
        <div className='min-h-screen bg-purple-50'>

            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    {/* filter */}
                    <div className='w-[15%]'>
                        <Filter />

                    </div>

                    {/* job cards */}
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                allJobs.map((job, i) => <Job key={i} job={job} />)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

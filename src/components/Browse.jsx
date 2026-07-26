import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import useGetAllJobs from '@/hooks/getAllJobs'
import { useSelector } from 'react-redux'
const randomJobs = [1, 3, 5, 7, 8, 9, 11]

export default function Browse() {
  useGetAllJobs();
  const { allJobs } = useSelector(state => state.job)

  useEffect(() => {
    // Set blue background only on Home page
    document.body.style.backgroundColor = '#cffafe'

    // Reset when leaving Home page
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>

        <h1 className='text-xl font-bold my-10'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
          {
            randomJobs.map((item, i) => <Job key={i} />)
          }
        </div>
      </div>
    </div>
  )
}

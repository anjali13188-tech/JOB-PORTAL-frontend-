import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCard({ job }) {
    return (
        <div className='border-gray-300 p-6 rounded-md shadow-2xl bg-blue-200'>
            <div>
                <h1 className='font-medium text-lg capitalize'>{job?.companyId?.name}</h1>
                <p className='text-sm text-gray-500'>{job?.location}</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 capitalize'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>10 Positions</Badge>
                <Badge className={'text-red-700 font-bold'} variant='ghost'>Part Time</Badge>
                <Badge className={'text-purple-700 font-bold'} variant='ghost'>8LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCard
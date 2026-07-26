import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { NavLink } from 'react-router-dom'
import { Badge } from './ui/badge'


function Job({ job }) {
console.log(job);
console.log(job?.createdAt);
    const calculateDays = (date) => {
        const createdAt = new Date(date)
        const currentDate = new Date()
        const timeDifference = currentDate - createdAt
        const oneDay = 1000 * 60 * 60 * 24
        const days = Math.floor(timeDifference / oneDay)
        return days
    }

    return (
        <>
            <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>

                <div className='flex items-center justify-between'>
                    <p>{calculateDays(job?.createdAt) === 0 ? "Today" : `${calculateDays(job?.createdAt)}`} days ago</p>
                    <Button variant='outline'><Bookmark /></Button>
                </div>

                <div className='flex items-center gap-2 my-2'>
                    <Button className="p-6" variant="outline" size="icon">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                    </Button>
                    <div>
                        <h1 className='font-medium text-lg'>{job?.companyId?.name}</h1>
                        <p className='text-sm text-gray-500'>{job?.location}</p>
                    </div>
                </div>


                <div>
                    <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                    <p className='text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>


                <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-blue-700 font-bold'} variant="ghost">
                        {job?.positions}Positions</Badge>
                    <Badge className={'text-[#F83002] font-bold'} variant="ghost">
                        {job?.jobType} </Badge>
                    <Badge className={'text-[#7209b7] font-bold'} variant="ghost">
                        {job?.salary}</Badge>
                </div>


                <div className='flex items-center gap-4 mt-4'>
                    <Button variant="outline"  >
                        <NavLink to={`/jobs/details/${job?._id}`}>Job Details</NavLink>
                    </Button>
                    <Button className="bg-[#7209b7]">Save For Later</Button>
                </div>

            </div>
        </>
    )
}

export default Job
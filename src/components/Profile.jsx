import React, { useState } from 'react'
import Navbar from './shared/Navbar'

import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobsTable from './AppliedJobsTable'
import UpdateProfile from './UpdateProfile'
import { useSelector } from 'react-redux'

// const skills = ["Html","CSS","Javascript","Reactjs",Nodejs"]

export default function Profile() {
    const isResume = true
    const [open,setOpen] = useState(false)
    const {user} = useSelector(state=>state.auth)
    // console.log(user)
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto border border-b-gray-200 my-7 rounded-xl p-8'>
                {/* section 1 */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className={'h-24 w-24'}>
                            <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>

                        <div>
                            <h1 className='font-medium text-xl'>{user?.name}</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <Button variant='outline' onClick={()=>setOpen(true)}  className={'text-right'}><Pen /></Button>
                    </div>
                </div>
                {/* section2 */}
                <div className='my-5'>
                    <div className='flex items-center gap-4'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Contact />
                        <span>{user?.phone}</span>
                    </div>
                </div>
                {/* section 3 */}
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) =>
                         <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                        {/* {skills.map((skill, i) => <Badge>{skill}</Badge>)} */}
                    </div>
                </div>
                {/* resume section */}
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold text-xl">Resume</Label>
                    {
                        // <a target='blank' href="" className='text-blue-500 w-full hover:underline cursor-pointer'>
                        //     resume link
                        // </a>
                         
                        isResume ? <a target='blank' href={user?.profile?.resume}
                         className='text-blue-500 w-full hover:underline cursor-pointer'>
                        {user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    
                    }
                </div>

                <div>
                    <h1 className='font-bold text-xl my-5'>Applied Jobs</h1>
                    <AppliedJobsTable/>
                </div>
            </div>
              <UpdateProfile open={open} setOpen={setOpen}/>
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import CompanyJobTable from './CompanyJobTable'
import { setSearchJobByText } from '@/redux/jobSlice'

export default function AdminJobs() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [search,setSearch]= useState("")    
    
    useEffect(()=>{
          dispatch(setSearchJobByText(search))
    },[search])

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex justify-between items-center mx-5 gap-x-2 '>
                    <Input className={'m-fit'}
                        placeholder="Filter by name"
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <Button className={'hover:cursor-pointer'}
                        onClick={() => navigate("/admin/job/create")}>
                        Post New Job
                    </Button>
                </div>
                <CompanyJobTable />
            </div>
        </div>
    )
}


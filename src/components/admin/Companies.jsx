import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import CompaniesTables from './CompaniesTables'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByName } from '@/redux/companiesSlice'

export default function Companies() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [search,setSearch]= useState("")
 useEffect(()=>{
  dispatch(setSearchCompanyByName(search))
 },[search])
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex justify-between items-center mx-5 gap-x-2'>
          <Input className={'m-fit'}
            placeholder="Filter by name"
            onChange ={(e)=>setSearch(e.target.value)}
          />
          <Button className={'hover:cursor-pointer'}
            onClick={() => navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTables />
      </div>
    </div>
  )
}

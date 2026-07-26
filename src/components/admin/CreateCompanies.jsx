import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner'
import { setSingleCompany } from '@/redux/companiesSlice'
import { useDispatch } from 'react-redux'

export default function CreateCompanies() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState("")

    //Create Company
    
    async function registerNewCompany() {
        try {
             if(!name.trim()){
            toast.error("company name is required")
            return
        }
            const { data } = await axios.post("http://localhost:4040/api/v1/company/create", { name },
                { withCredentials: true }
            )
            // console.log(data)
            if (data?.success) {
                dispatch(setSingleCompany(data?.company))
                toast.success(data?.message)
                navigate(`/admin/companies/update/${data?.company?._id}`)
            }

        } catch (error) {
            console.log(error?.response?.data)
            toast.error(
                error?.response?.data?.message ||
                "Something went wrong"
            )
        }
       
    }

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className='my-10 mx-6'>
                    <h1 className='text-2xl font-medium'>Your Company Name</h1>
                    <p className='text-gray-950 my-1'>what would you like to give your company name ?
                        you can change  change it later.</p>
                </div>
            </div>
            <div className='w-6xl mx-5'>
                <Label>Company Name</Label>
                <Input
                    placeholder="Google , amazon, flipkart etc.. "
                    className={' mt-1 '}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='flex gap-x-2 my-5 mx-5'>
                <Button variant='outline' className={'hover:cursor-pointer'}
                    onClick={() => navigate("/admin/companies")}
                >cancel</Button>
                <Button className={'hover:cursor-pointer'} onClick={registerNewCompany}>Continue</Button>

            </div>
        </div>


    )
}

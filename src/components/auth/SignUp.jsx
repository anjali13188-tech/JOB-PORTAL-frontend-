import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import axios from 'axios'
import { Loader2Icon } from 'lucide-react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    // console.log(SignUp)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", password: "", role: "", file: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFile = (e)=>{
        setFormData({...formData,file:e.target.files?.[0]})
    }

    const handleSubmit = async (e) => {
       
        e.preventDefault()
        try {
            setLoading(true)
            const userData = new FormData()
            userData.append("name", formData.name)
            userData.append("email", formData.email)
            userData.append("phone", formData.phone)
            userData.append("password", formData.password)
            userData.append("role", formData.role)
            if (formData.file) {
                userData.append("file", formData.file)
            }

            // console.log(userData)
            const { data } = await axios.post(`http://localhost:4040/api/v1/users/register`, userData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            if (data?.success) {
                toast.success(data?.message)
                navigate("/login")

            }

        } catch (error) {
            setError(error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={handleSubmit} className='w-1/2 border border-gray-200 rounded-md p-4 my-10' encType="multipart/form-data">

                    <h1 className='font-bold text-xl mb-5'>SignUp</h1>
                    <span style={{ color: "red", fontWeight: "bold", padding: "5px 0px" }}>{error}</span>
                    <div className='space-y-2 my-2'>
                        <Label htmlFor="email">Name</Label>
                        <Input type={'text'} placeholder="Fullname"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='space-y-2 my-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input type={'email'} placeholder="xyz@test.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='space-y-2 my-2'>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input type={'phone'} placeholder="+910000000000"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}

                        />
                    </div>
                    <div className='space-y-2 my-2'>
                        <Label htmlFor="password">Password</Label>
                        <Input type={'password'} placeholder="******"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    className="cursor-pointer"
                                    name="role"
                                    value="student"
                                    onChange={handleChange}
                                    id="r1"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    className="cursor-pointer"
                                    name="role"
                                    value="recruiter"
                                    onChange={handleChange}
                                    id="r2"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Label>Profile</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            name="file"
                            className="cursor-pointer"
                            onChange={handleFile}
                        />
                    </div>
                    <div className='mt-3'>

                        {
                            loading
                                ? <Button className={'w-full bg-fuchsia-800 hover:bg-fuchsia-900 hover:cursor-pointer'}>
                                    <Loader2Icon className="animate-spin" /> Please wait
                                </Button>
                                : <Button className={'w-full bg-fuchsia-800 hover:bg-fuchsia-900 hover:cursor-pointer'} >
                                    Signup
                                </Button>
                        }

                    </div>
                </form>

            </div>
        </>
    )
}

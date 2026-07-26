import getAllCompanies from '@/hooks/getAllCompanies'  // ✅ 1. import karo
import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export default function PostJob() {
        getAllCompanies()  // ✅ 2. call karo — yeh companies Redux mein daalega

    const { companies } = useSelector(state => state.company)
    const navigate = useNavigate()

    const [input, setInput] = useState({
        title: "", description: "", requirements: "", salary: "", location: "", jobType: "",
        experienceLevel: "",
        position: 0, companyId: ""
    });
    // handleChange
    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id });
    };

    // handlePost
    async function handlePost(e) {
        // /api/api/v1/job/add
        e.preventDefault()
        try {
            console.log(input)
            const { data } = await axios.post(`http://localhost:4040/api/v1/job/add`, input,
                {
                    withCredentials: true
                }
            );
            if (data?.success) {
                toast.success(data?.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center w-screen my-5'>
                <form className='p-8 max-w-6xl border border-gray-200 shadow-lg rounded-md'
                    onSubmit={handlePost}>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input.title}
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input.requirements}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input
                                type="text"
                                name="salary"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input.salary}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                name="location"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input?.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input.jobType}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Expericence Level</Label>
                            <Input
                                type="text"
                                name="experienceLevel"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input.experienceLevel}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>No of positions</Label>
                            <Input
                                type="number"
                                name="position"
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                value={input.position}
                                onChange={handleChange}
                            />
                        </div>
                        {/* select  */}
                        <div>
                            <Select onValueChange={selectChangeHandler}>
                                <SelectTrigger className="w-45">
                                    <SelectValue placeholder="Select A Company" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                         {
                                            companies?.map((company) => (
                                                // <SelectItem value={company?.name?.toLowerCase()}>
                                                <SelectItem
                                                    key={company?._id}
                                                    value={company?.name?.toLowerCase()}
                                                >
                                                    {company?.name}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button type="submit" className="w-full my-4">Post New Job</Button>
                    {
                        companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>
                            *Please register a company first, before posting a jobs
                        </p>
                    }

                </form>
            </div>
        </div>
    )
}

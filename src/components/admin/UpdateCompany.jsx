import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { toast } from 'sonner'
import useGetCompanyById from '@/hooks/getCompanyById'
import { useSelector } from 'react-redux'

export default function UpdateCompany() {
  const { cid } = useParams()
  const navigate = useNavigate()
  const { singleCompany } = useSelector(state => state.company)
  useGetCompanyById(cid)
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null
  });

  async function updateCompany(e) {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append("name", input.name)
      formData.append("description", input.description)
      formData.append("website", input.website)
      formData.append("location", input.location)
      if (input.file) {
        formData.append("file", input.file);
      }
      const { data } = await axios.put(
        `https://job-portal-backend-si47.onrender.com/api/v1/company/update/${cid}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          withCredentials: true
        }
      )
      if (data?.success) {
        toast.success(data?.message)
        navigate("/admin/companies")
      }
    } catch (error) {
      console.log(error)
    }
  }
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  function handleFile(e) {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  useEffect(() => {
    setInput({
      name: singleCompany?.name || "",
      description: singleCompany?.description || "",
      website: singleCompany?.website || "",
      file: singleCompany?.file || "",
      location: singleCompany?.location || ""
    })
  }, [singleCompany])
  return (
    <>
      <Navbar />
      <div className='max-w-xl mx-auto my-10'>
        <form onSubmit={updateCompany}>

          {/* Header */}
          <div className='flex items-center gap-5 p-8'>
            <Button

              onClick={() => navigate("/admin/companies/create")}
              variant='outline'
              className="flex items-center gap-2 text-gray-600 font-semibold">

              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className='font-bold text-xl'>Company Setup</h1>
          </div>

          {/* Form Fields */}
          <div className='grid grid-cols-2 gap-4'>

            <div>
              <Label className='mb-1'>Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input type="text"
                name="website"
                value={input.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input type="text"
                name="location"
                value={input.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Logo</Label>
              <Input
                type="file"
                name="image/"
                onChange={handleFile}
              />
            </div>
          </div>
          {/* Submit Button */}
          <Button type="submit" className='w-full my-4'>Update</Button>
        </form>
      </div>
    </>
  )
}



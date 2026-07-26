import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import axios from 'axios'
import { Loader2Icon } from 'lucide-react'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    email: "", password: ""
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {

    e.preventDefault()
    try {
      const { data } = await axios.post(`http://https://job-portal-backend-si47.onrender.com/api/v1/users/login`,
        formData,
        {
          withCredentials: true

        })
      // console.log(data)
      if (data?.success) {
        // console.log(data)

        dispatch(setUser(data?.user))
        toast.success(data?.message)

        //switching between recuirter and studentd page
        data?.user?.role === "recruiter"
          ? navigate("/admin/companies")
          : navigate("/")
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
        <form onSubmit={handleSubmit} className='w-1/2 border border-b-fuchsia-200 rounded-md p-10 my-20'>
          <h1 className='font-bold text-xl mb-5'>Login</h1>
          <span style={{ color: "red", fontWeight: "bold", padding: "5px 0px" }}>{error}</span>

          <div className='space-y-4 my-4'>
            <Label htmlFor="email">Email</Label>
            <Input type={'email'} placeholder="xyz@test.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='space-y-4 my-4'>
            <Label htmlFor="password">Password</Label>
            <Input type={'password'} placeholder="******"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className='mt-3 space-y-4'>
            {
              loading
                ? <Button className={'w-full p-5 bg-fuchsia-800 hover:bg-fuchsia-900 hover:cursor-pointer'}>
                  <Loader2Icon className="animate-spin" /> Please wait
                </Button>
                : <Button className={'w-full p-5 bg-fuchsia-800 hover:bg-fuchsia-900 hover:cursor-pointer'} >
                  Login
                </Button>
            }
          </div>
        </form>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { setUser } from '@/redux/authSlice'
export default function Navbar() {
    const { user } = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function handleLogout() {
        console.log("ok")
        try {
            const { data } = await axios.post(`/api/api/v1/users/logout`)

            if (data?.success) {
                dispatch(setUser(null))
                toast.success(data?.message)
                navigate("/")

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <div className='flex justify-between items-center m-auto max-w-7xl h-14 px-10'>
                {/* {JSON.stringify(user,null)} */}

                <div>
                    <h1 className='text-2xl font-bold'>Job
                        <span className='text-blue-500'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    {
                        user?.role === "recruiter"
                            ? (<ul className='flex font-medium items-center gap-5 hover:cursor-pointer '>
                                <NavLink to={'/admin/companies'}>
                                    {({ isActive }) => (
                                        <li
                                            variant="outline"
                                            className={`hover:cursor-pointer px-2 py-1 rounded hover:bg-fuchsia-600 hover:text-white ${isActive ? "bg-fuchsia-800 text-white" : ""}`}
                                        >
                                            Companies
                                        </li>
                                    )}
                                </NavLink>

                                <NavLink to={'/admin/jobs'}>
                                    {({ isActive }) => (
                                        <li
                                            variant="outline"
                                            className={`hover:cursor-pointer px-2 py-1 rounded hover:bg-fuchsia-600 hover:text-white ${isActive ? "bg-fuchsia-800 text-white" : ""}`}
                                        >
                                            Jobs
                                        </li>
                                    )}
                                </NavLink>

                            </ul>)
                            : (<ul className='flex font-medium items-center gap-5 hover:cursor-pointer '>
                                <NavLink to={'/'} >
                                
                                    {({ isActive }) => (
                                        <li
                                            variant="outline"
                                            className={`hover:cursor-pointer px-2 py-1 rounded hover:bg-fuchsia-600 hover:text-white ${isActive ? "bg-fuchsia-800 text-white" : ""}`}
                                        >
                                            Home
                                        </li>
                                    )}
                                </NavLink>
                                <NavLink to={'/jobs'}>
                                    {({ isActive }) => (
                                        <li
                                            variant="outline"
                                            className={`hover:cursor-pointer px-2 py-1 rounded hover:bg-fuchsia-600 hover:text-white ${isActive ? "bg-fuchsia-800 text-white" : ""}`}
                                        >
                                            Jobs
                                        </li>
                                    )}
                                </NavLink>
                                <NavLink to={'/browse'}>
                                    {({ isActive }) => (
                                        <li
                                            variant="outline"
                                            className={`hover:cursor-pointer px-2 py-1 rounded hover:bg-fuchsia-600 hover:text-white ${isActive ? "bg-fuchsia-800 text-white" : ""}`}
                                        >
                                            Browse
                                        </li>
                                    )}
                                </NavLink>
                            </ul>)
                    }
                    {
                        !user
                            ? (<div className='flex gap-2'>

                                <NavLink to="/signup">
                                    {({ isActive }) => (
                                        <Button
                                            variant="outline"
                                            className={`hover:cursor-pointer hover:bg-fuchsia-600 hover:text-white ${isActive ? "bg-fuchsia-800 text-white" : ""}`}
                                        >
                                            SignUp
                                        </Button>
                                    )}
                                </NavLink>

                                <NavLink to="/login">
                                    {({ isActive }) => (
                                        <Button
                                            variant="outline"
                                            className={`hover:cursor-pointer  hover:bg-fuchsia-600 hover:text-white ${isActive ? "bg-fuchsia-800 text-white" : ""}`}
                                        >
                                            Login
                                        </Button>
                                    )}
                                </NavLink>

                            </div>)
                            : (<Popover>
                                <PopoverTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src={user?.profile?.profilePhoto} />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar>
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                        </Avatar>
                                        <div>
                                            <h1 className='font-medium'>Ducat</h1>
                                            <p className='text-sm text-muted-foreground'>Welcome to ducat</p>
                                        </div>
                                    </div>
                                    {
                                        user?.role === "recruiter"
                                            ? (<div className='flex flex-col text-gray-600'>

                                                <div className='flex w-fit items-center gap-2'>
                                                    <LogOut />
                                                    <Button variant='link'
                                                        className={'hover:cursor-pointer'}
                                                        onClick={handleLogout} >Logout</Button>
                                                </div>
                                            </div>)
                                            : (
                                                <div className='flex flex-col text-gray-600'>
                                                    <div className='flex w-fit items-center gap-2'>
                                                        <User2 />
                                                        <NavLink to={'/profile'}>
                                                            <Button variant='link'
                                                                className={'hover:cursor-pointer'}>View Profile</Button>
                                                        </NavLink>
                                                    </div>

                                                    <div className='flex w-fit items-center gap-2'>
                                                        <LogOut />
                                                        <Button variant='link'
                                                            className={'hover:cursor-pointer'}
                                                            onClick={handleLogout} >Logout</Button>
                                                    </div>
                                                </div>
                                            )
                                    }
                                </PopoverContent>
                            </Popover>)
                    }
                </div>
            </div>
        </>
    )
}

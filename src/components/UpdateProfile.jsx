
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
// import { Label } from './ui/label'
// import { Input } from './ui/input'
// import { Button } from './ui/button'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { setUser } from '@/redux/authSlice'
// import { useState } from 'react'
// import { toast } from 'sonner'



// function UpdateProfile({ open, setOpen }) { 
//      const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)
//     const { user } = useSelector(state => state.auth)

//     const dispatch = useDispatch()

//     const [formData, setFormData] = useState({
//         name: user?.name  ||"",
//         email: user?.email || "",
//         phone: user?.phone || "",
//         skills: user?.profile?.skills?.map(skill => skill) || "",
//         file: user?.profile?.resume || ""
//     })

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     }

//     const handleFile = (e) => {
//         setFormData({ ...formData, file: e.target.files?.[0] })
//     }

//     const handleUpdate = async (e) => {

//         e.preventDefault()
//         try {
//             setLoading(true)

//             const userData = new FormData()
//             userData.append("name", formData.name)
//             userData.append("email", formData.email)
//             userData.append("phone", formData.phone)
//             userData.append("bio", formData.bio)
//             userData.append("skills", formData.skills)
//             if (formData.file) {
//                 userData.append("file", formData.file)
//             }

//             // console.log(userData)

//             const res = await axios.put(`/api/v1/users/profile`, userData, {

//                 headers: {
//                     "Content-Type": "multipart/form-data"
//                 }
//             })

//             dispatch(setUser(res?.data?.user))

//             console.log(res?.data)

//             if (res?.data?.success) {
//                 toast.success(res?.data?.message)

//             }
//             setOpen(false)

//         }
//         //  catch (error) {
//         //     setError(error?.response?.data?.message)
//         // }
//         catch (error) {
//             setError(error?.response?.data?.message)
//             toast.error(error?.response?.data?.message)
//         }
//         finally {
//             setLoading(false)
//         }
//     }
//  return (
//         <div>
//             <Dialog open={open}>
//                 <DialogContent onInteractOutside={() => setOpen(false)}>
//                     <DialogHeader>
//                         <DialogTitle>Update Profile</DialogTitle>
//                     </DialogHeader>
//                     <form onSubmit={handleUpdate}>
//                         <div className='grid gap-4 py-4'>
//                             <div className='grid grid-cols-4 items-center gap-2'>
//                                 <Label htmlFor="name" className={'text-right'}>Name</Label>
//                                 <Input
//                                     id='name'
//                                     name="name"
//                                     className={'col-span-3'}
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-2'>
//                                 <Label htmlFor="email" className={'text-right'}>Email</Label>
//                                 <Input
//                                     id='email'
//                                     name="email"
//                                     className={'col-span-3'}
//                                     onChange={handleChange}
//                                     value={formData.email}
//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-2'>
//                                 <Label htmlFor="phone" className={'text-right'}>Phone</Label>
//                                 <Input
//                                     id='phone'
//                                     name="phone"
//                                     className={'col-span-3'}
//                                     value={formData.phone}
//                                     onChange={handleChange}

//                                 />
//                             </div>
//                             <div className='grid grid-cols-4 items-center gap-2'>
//                                 <Label htmlFor="bio" className={'text-right'}>Bio</Label>
//                                 <Input
//                                     id='bio'
//                                     name="bio"
//                                     className={'col-span-3'}
//                                     value={formData.bio}
//                                     onChange={handleChange}

//                                 />
//                             </div>

//                             <div className='grid grid-cols-4 items-center gap-4'>
//                                 <Label htmlFor="skills" className="text-right">Skills</Label>
//                                 <Input
//                                     id="skills"
//                                     name="skills"
//                                     value={formData.skills}
//                                     onChange={handleChange}
//                                     className="col-span-3"
//                                 />
//                             </div>

//                             <div className='grid grid-cols-4 items-center gap-2'>
//                                 <Label htmlFor="file" className={'text-right'}>Resume</Label>
//                                 <Input
//                                     id='file'
//                                     name="bio"
//                                     type="file"
//                                     accept="application/pdf"
//                                     className={'col-span-3'}
//                                     onChange={handleFile}
//                                 />
//                             </div>
//                         </div>
//                         <DialogFooter>
//                             <Button type="submit" className={'w-full'}>Update</Button>
//                         </DialogFooter>

//                     </form>

//                 </DialogContent>
//             </Dialog>
//         </div>
//     )
// }
//  export default UpdateProfile

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { useState } from 'react'
import { toast } from 'sonner'

function UpdateProfile({ open, setOpen }) {
    const [loading, setLoading] = useState(false)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill => skill) || "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFile = (e) => {
        setFormData({ ...formData, file: e.target.files?.[0] })
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            const userData = new FormData()
            userData.append("name", formData.name)
            userData.append("email", formData.email)
            userData.append("phone", formData.phone)
            userData.append("bio", formData.bio)
            userData.append("skills", formData.skills)
            if (formData.file) {
                userData.append("file", formData.file)
            }

            const res = await axios.put(
                "/api/v1/users/profile",
                userData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )


            dispatch(setUser(res?.data?.user))

            if (res?.data?.success) {
                toast.success(res?.data?.message)
            }

            setOpen(false)

            // } catch (error) {
            //     toast.error(error?.response?.data?.message)
        } catch (error) {
            // console.log("ERROR:", error.response)
            toast.error(error?.response?.data?.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open}>
            <DialogContent onInteractOutside={() => setOpen(false)}>
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpdate}>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-2'>
                            <Label htmlFor="name" className='text-right'>Name</Label>
                            <Input id='name' name="name" className='col-span-3' value={formData.name} onChange={handleChange} />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-2'>
                            <Label htmlFor="email" className='text-right'>Email</Label>
                            <Input id='email' name="email" className='col-span-3' value={formData.email} onChange={handleChange} />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-2'>
                            <Label htmlFor="phone" className='text-right'>Phone</Label>
                            <Input id='phone' name="phone" className='col-span-3' value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-2'>
                            <Label htmlFor="bio" className='text-right'>Bio</Label>
                            <Input id='bio' name="bio" className='col-span-3' value={formData.bio} onChange={handleChange} />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="skills" className="text-right">Skills</Label>
                            <Input id="skills" name="skills" className="col-span-3" value={formData.skills} onChange={handleChange} />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-2'>
                            <Label htmlFor="file" className='text-right'>Resume</Label>
                            <Input
                                id='file'
                                name="file"
                                type="file"
                                accept="application/pdf"
                                className='col-span-3'
                                onChange={handleFile}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className='w-full'>
                            update
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default UpdateProfile
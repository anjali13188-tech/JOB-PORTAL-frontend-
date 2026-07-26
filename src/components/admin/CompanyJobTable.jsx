import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table'

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '../ui/popover'

import { Eye, MoreHorizontal, Pen } from 'lucide-react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import useGetAllAdminJobs from '@/hooks/getAllAdminJobs'

function CompanyJobTable() {

    useGetAllAdminJobs();

    // 👇 Add these right here
    // console.log("allAdminJobs", allAdminJobs);
    // console.log("searchJobByText", searchJobByText)
    // console.log("allAdminJobs from redux:", allAdminJobs) // 👈 add this line

    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // console.log('called')
        // console.log(searchJobByText)

        const filteredJobs = allAdminJobs.filter((job) => {
            // console.log("TABLE COMPONENT:", allAdminJobs) // 👈 add THIS line
            if (!searchJobByText) {
                return true;
            }
            return (
                job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
                job?.companyId?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
            );
        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText]);

    return (
        <div className='px-4 mt-3'>
            <Table>
                <TableCaption>
                    List of your recent posted jobs
                </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        filterJobs?.map((job) => (

                            <TableRow key={job?._id}>
                                <TableCell>{job?.companyId?.name} </TableCell>

                                <TableCell>{job?.title}</TableCell>

                                <TableCell>
                                    {
                                        job?.createdAt
                                            ? job.createdAt.split("T")[0]
                                            : "N/A"
                                    }
                                </TableCell>

                                <TableCell>
                                    <Popover>

                                        <PopoverTrigger asChild>
                                            <MoreHorizontal className='cursor-pointer' />
                                        </PopoverTrigger>

                                        <PopoverContent className='w-32'>
                                            <div
                                                className='flex items-center gap-2 cursor-pointer'
                                                onClick={() =>
                                                    navigate(`/admin/job/${job?._id}`)
                                                }
                                            >
                                                <Pen size={16} />
                                                <span>Edit</span>
                                            </div>
                                            <div className='flex items-center gap-3 cursor-pointer'
                                                onClick={() => navigate(`/admin/jobs/${job?._id}/applicants`)}
                                            >
                                                <Eye size={20} />
                                               <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
export default CompanyJobTable
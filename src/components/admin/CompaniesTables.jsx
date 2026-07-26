import React, { useEffect, useState } from 'react'
import { Table, TableCaption, TableCell, TableHead, TableHeader, TableRow,TableBody } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PopoverContent, PopoverTrigger,Popover } from '../ui/popover'
import { MoreHorizontal, Pen } from 'lucide-react'
import useGetAllCompanies from '@/hooks/getAllCompanies'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function CompaniesTables() {
    const {companies,searchCompanyByName} = useSelector(state=>state.company)
    const[filterCompanies,setFilterCompanies]= useState(companies)

    useEffect(()=>{
        const filterData = companies.length>0 && companies?.filter((company)=>{
            // let data =`$ {company?.name} ${company?.city}`
            // console.log("companies:", companies);
// console.log("filterCompanies:", filterCompanies);

            if(!searchCompanyByName){
                return true
            }
//             console.log("type:", typeof filterCompanies)
// console.log("isArray:", Array.isArray(filterCompanies))
             return company?.name?.toLowerCase()?.includes(searchCompanyByName?.toLowerCase())
        })
        setFilterCompanies(filterData)
    },[companies,searchCompanyByName])
// useEffect(() => {
//     const filterData = companies?.length > 0 ? companies?.filter((company) => {
//         if (!searchCompanyByName) {
//             return true
//         }
//         return company?.name?.toLowerCase()?.includes(searchCompanyByName?.toLowerCase())
//     }) : [];

//     setFilterCompanies(filterData)
// }, [companies, searchCompanyByName])
  
  const navigate = useNavigate()
   useGetAllCompanies()
    return (
        <div>
            <Table>
                <TableCaption>List of your recent registered Companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                    companies.map((company)=>                    
                    <TableRow key={company?._id}>
                        <TableCell>
                            <Avatar>
                                <AvatarImage
                                    src={`${company?.logo}`}
                                    alt="logo"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                        </TableCell>
                        <TableCell>{company?.name}</TableCell>
                        <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                        <TableCell>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <MoreHorizontal />
                                </PopoverTrigger>
                                <PopoverContent className={'flex gap-x-2 hover:cursor-pointer w-20'}
                                onClick={()=>navigate(`/admin/companies/update/${company?._id}`)}>
                                   <Pen/>
                                   <span>Edit</span>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}

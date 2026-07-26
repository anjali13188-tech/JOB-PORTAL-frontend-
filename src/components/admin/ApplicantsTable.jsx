import React, { useEffect } from 'react'
import { Table, TableBody, TableCaption, TableCell, 
TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useParams } from 'react-router-dom';


function ApplicantsTable() {
  const {id}=useParams()
//  console.log(id) 
async function getApplicants(){
  try {
    const res = await fetch(`http://localhost:4040/api/v1/application/${id}/applicants `,{
       method:"GET",
       credentials:"include"
    });
    const data = await res.json()
    console.log(data)
  
 } catch (error) {
  console.log(error)
 }
}
 useEffect(()=>{
  getApplicants()
 },[id])
  return (
    <div>
      <Table>
      <TableCaption>A list of your recent applied user</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>FullName</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Resume</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

        <tr>
          <TableCell>fullname</TableCell>
          <TableCell>email</TableCell>
          <TableCell>phoneNumber</TableCell>
          <TableCell >
            resume
          </TableCell>
          <TableCell>1/2/2026</TableCell>
          <TableCell className="float-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
              </PopoverTrigger>
              <PopoverContent className="w-32">
                status
              </PopoverContent>
            </Popover>

          </TableCell>

        </tr>



      </TableBody>

    </Table></div>
  )
}

export default ApplicantsTable  
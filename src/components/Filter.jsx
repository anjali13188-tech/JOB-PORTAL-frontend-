import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Banglore", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend", "Backend", "Fullstack"]
    },
    {
        filterType: "Salary",
        array: ["0-10LPA", "11-20LPA", "20-40LPA"]
    }

]

function Filter() {
    return (
        <div className='w-full bg-fuchsia-100 p-3 rounded-md'> 
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    filterData.map((data, i) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item,i)=>(
                                    <div className='flex items-center space-x-2 my-2'>
                                        <RadioGroupItem value={item}>{item}</RadioGroupItem>
                                        <Label>{item}</Label>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default Filter
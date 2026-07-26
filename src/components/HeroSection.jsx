import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

function HeroSection() {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-y-4'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-cyan-800 font-medium'>No.1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold text-shadow-neutral-900'>Search, Apply & <br /> Get Your
                    <span className='text-indigo-600'> Dream Jobs</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>

                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        className='outline-none border-none w-full'

                    />
                    <Button className="rounded-r-full bg-indigo-500">
                        <Search className='h-16 w-10' />
                    </Button>

                </div>

            </div>
        </div>
    )
}

export default HeroSection
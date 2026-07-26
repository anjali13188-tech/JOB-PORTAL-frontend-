import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Digital Marketing",
    "Graphic Designer",
    "Fullstack Developer"
]

export default function CategoryCarousel() {
    return (
        <>
            <Carousel className="w-full max-w-lg my-20 mx-auto ">
                <CarouselContent>
                    {
                        categories.map((category, i) =>
                            <CarouselItem key={i} className={'md:basis-1/2 lg:basis-1/3'}>
                                <Button variant='outline'>{category}</Button>
                            </CarouselItem>)
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}


import React, { useState, useRef, useEffect, useCallback } from 'react';
import Robotic3 from '../assets/Robotic-3.jpg'
import Robotic2 from '../assets/Robotic-2.jpg'
import MiniCat from '../assets/mini-cat.jpg'
import People1 from '../assets/people-1.jpg'
import Ninja from '/images/ninja.jpg'
import Verified from '../assets/verified.png'
import BlockChain from '../assets/blockchain.png'
import { Button } from '.';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';


export function CardsHots() {

    const [hasBefore, setHasBefore] = useState(false)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20,
        },
    };
    const carouselRef = useRef(null);

    const handlePrevSlide = () => {
        const { currentSlide } = carouselRef.current?.state
        carouselRef.current?.previous();

        if (currentSlide >= 1) {
            setHasBefore(true)
        } else {
            setHasBefore(false)
        }
    };

    const handleNextSlide = () => {
        carouselRef.current?.next();
    };

    return (
        <div className="overflow-hidden w-full" >

            <Carousel
                ref={carouselRef}
                responsive={responsive}
                infinite={false}
                arrows={false}
                autoPlay={false}
                className="overflow-hidden w-[1344px]"
            >
                <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm w-96 z-10 space-y-4 max-lg:items-center'>
                    <div className='flex gap-4'>
                        <div className="rounded-full border-2 h-12 w-12 relative overflow-hidden">
                            <img className="w-full h-full rounded-lg absolute inset-0" src={People1} />
                        </div>
                        <div className='flex flex-col items-start space-y-2'>
                            <h1 className='text-gray-50 font-bold font-inter'>OWNER BY</h1>
                            <div className='flex items-center space-x-2'>
                                <span className='text-gray-600 text-sm'>COURTNEY HENRY</span>
                                <img width={22} src={Verified} />
                            </div>

                        </div>
                    </div>
                    <div className='flex space-y-4 flex-col items-start'>
                        <div className='w-full h-72 relative overflow-hidden rounded-lg'>
                            <img className='w-full rounded-lg h-auto object-cover absolute inset-0' src={Robotic2} />
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1 className='text-gray-50 text-2xl leading-relaxed'>EVOL Benji</h1>
                            <span className='bg-text-gradient bg-clip-text font-bold text-transparent text-2xl'>10:03:26</span>
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-start justify-between gap-4 w-full">
                            <div className='flex gap-4'>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className="text-gray-200">Highest Bird</span>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <Button size='md' color='violet' >Get Shop</Button>
                        </div>
                    </div>
                </div>

                <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm w-96 z-10 space-y-4'>
                    <div className='flex gap-4'>
                        <div className="rounded-full border-2 h-12 w-12 relative overflow-hidden">
                            <img className="w-full h-full rounded-lg absolute inset-0" src={People1} />
                        </div>
                        <div className='flex flex-col items-start space-y-2'>
                            <h1 className='text-gray-50 font-bold font-inter'>OWNER BY</h1>
                            <div className='flex items-center space-x-2'>
                                <span className='text-gray-600 text-sm'>COURTNEY HENRY</span>
                                <img width={22} src={Verified} />
                            </div>

                        </div>
                    </div>
                    <div className='flex space-y-4 flex-col items-start'>
                        <div className='w-full h-72 relative overflow-hidden rounded-lg'>
                            <img className='w-full rounded-lg h-auto object-cover absolute inset-0' src={Robotic3} />
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1 className='text-gray-50 text-2xl leading-relaxed'>EVOL Benji</h1>
                            <span className='bg-text-gradient bg-clip-text font-bold text-transparent text-2xl'>10:03:26</span>
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-start justify-between gap-4 w-full">
                            <div className='flex gap-4'>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className="text-gray-200">Highest Bird</span>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <Button size='md' color='violet' >Get Shop</Button>
                        </div>
                    </div>
                </div>

                <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm w-96 z-10 space-y-4'>
                    <div className='flex gap-4'>
                        <div className="rounded-full border-2 h-12 w-12 relative overflow-hidden">
                            <img className="w-full h-full rounded-lg absolute inset-0" src={People1} />
                        </div>
                        <div className='flex flex-col items-start space-y-2'>
                            <h1 className='text-gray-50 font-bold font-inter'>OWNER BY</h1>
                            <div className='flex items-center space-x-2'>
                                <span className='text-gray-600 text-sm'>COURTNEY HENRY</span>
                                <img width={22} src={Verified} />
                            </div>

                        </div>
                    </div>
                    <div className='flex space-y-4 flex-col items-start'>
                        <div className='w-full h-72 relative overflow-hidden rounded-lg'>
                            <img className='w-full rounded-lg h-auto object-cover absolute inset-0' src={MiniCat} />
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1 className='text-gray-50 text-2xl leading-relaxed'>EVOL Benji</h1>
                            <span className='bg-text-gradient bg-clip-text font-bold text-transparent text-2xl'>10:03:26</span>
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-start justify-between gap-4 w-full">
                            <div className='flex gap-4'>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className="text-gray-200">Highest Bird</span>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <Button size='md' color='violet' >Get Shop</Button>
                        </div>
                    </div>
                </div>

                <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm w-96 z-10 space-y-4'>
                    <div className='flex gap-4'>
                        <div className="rounded-full border-2 h-12 w-12 relative overflow-hidden">
                            <img className="w-full h-full rounded-lg absolute inset-0" src={People1} />
                        </div>
                        <div className='flex flex-col items-start space-y-2'>
                            <h1 className='text-gray-50 font-bold font-inter'>OWNER BY</h1>
                            <div className='flex items-center space-x-2'>
                                <span className='text-gray-600 text-sm'>COURTNEY HENRY</span>
                                <img width={22} src={Verified} />
                            </div>

                        </div>
                    </div>
                    <div className='flex space-y-4 flex-col items-start'>
                        <div className='w-full h-72 relative overflow-hidden rounded-lg'>
                            <img className='w-full rounded-lg h-auto object-cover absolute inset-0' src={Ninja} />
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1 className='text-gray-50 text-2xl leading-relaxed'>EVOL Benji</h1>
                            <span className='bg-text-gradient bg-clip-text font-bold text-transparent text-2xl'>10:03:26</span>
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-start justify-between gap-4 w-full">
                            <div className='flex gap-4'>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className="text-gray-200">Highest Bird</span>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <Button size='md' color='violet' >Get Shop</Button>
                        </div>
                    </div>
                </div>
            </Carousel>
            <div className="flex space-x-4 w-full items-center justify-center pt-8">
                <button className={`${!
                    hasBefore ? 'text-gray-50' : 'text-gray-500'} `} onClick={handlePrevSlide}>
                    <ArrowLeft />
                </button>
                <button className="text-2xl text-gray-50" onClick={handleNextSlide}>
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}
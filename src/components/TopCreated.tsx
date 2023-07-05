import { Title, Button } from ".";
import React, { useState } from 'react';
import MiniSodie from '../assets/mini-soldier.jpg'
import MiniSodie2 from '../assets/mini-soldier-2.jpg'
import Deadpool from '../assets/deadpool.jpg';
import Spiderman from '../assets/spiderman.jpg'
import Robotic2 from '../assets/Robotic-2.jpg'
import People1 from '../assets/people-1.jpg'
import Verified from '../assets/verified.png'
import BlockChain from '../assets/blockchain.png'
import { ArrowRight, Heart } from 'lucide-react'
import Astrounata1 from '/images/astronauta-1.jpg'
import Astrounata2 from '/images/astrounata-2.jpg'
import Astrounata3 from '/images/astrounata-3.jpg'
import Astrounata4 from '/images/astrounata-4.jpg'
import Reptil1 from '/images/reptil-1.jpg'
import Reptil2 from '/images/reptil-2.jpg'
import Reptil3 from '/images/reptil-3.jpg'
import Reptil4 from '/images/reptil-4.jpg'

export function TopCreated() {
    return (
        <section className="relative pt-32 pb-16">
            <div className="container">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between max-xl:flex-col max-xl:gap-6">
                        <Title className="w-[600px] " theme="h1" size="xl" color="white">Unveiling NFT's Finest: Discover the
                            <h1 className="bg-text-gradient bg-clip-text font-bold text-transparent inline-flex">
                                Top Creators
                            </h1></Title >
                        <Title className="flex-1" theme="base" size="base" color="gray">Explore their captivating portfolios and embrace a world where innovation meets imagination. Elevate your NFT experience and immerse yourself in the brilliance of our esteemed Top Creators.</Title>
                        <a className="text-gray-50 underline flex gap-2">
                            <span>Explore All</span>
                            <ArrowRight />
                        </a>
                    </div>
                    <div className="relative pt-16 grid grid-cols-3 gap-8">
                        <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm max-w-full w-[450px] z-10 space-y-4 h-[550px] overflow-hidden'>
                            <div className='flex gap-4'>
                                <div className="rounded-full border-2 h-12 w-12 relative overflow-hidden">
                                    <img className="w-full h-full rounded-lg absolute inset-0" src={People1} />
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <span className='text-gray-50 font-bold italic text-sm capitalize'>@COURTNEY HENRY</span>
                                    <img width={22} src={Verified} />
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-4'>
                                <div className='w-full h-72 relative rounded-lg'>
                                    <img className='w-full rounded-lg h-full object-cover object-top' src={MiniSodie} />
                                </div>
                                <div className="flex  gap-4 w-full">
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={MiniSodie2} />
                                    </div>
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Deadpool} />
                                    </div>
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Spiderman} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm max-w-full w-[450px] z-10 space-y-4 h-[550px] overflow-hidden'>
                            <div className='flex gap-4'>
                                <div className="rounded-full border-2 h-12 w-12 relative overflow-hidden">
                                    <img className="w-full h-full rounded-lg absolute inset-0" src={Astrounata1} />
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <span className='text-gray-50 font-bold italic text-sm capitalize'>@COURTNEY HENRY</span>
                                    <img width={22} src={Verified} />
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-4'>
                                <div className='w-full h-72 relative rounded-lg'>
                                    <img className='w-full rounded-lg h-full object-cover object-top' src={Astrounata2} />
                                </div>
                                <div className="flex  gap-4 w-full">
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Astrounata1} />
                                    </div>
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Astrounata3} />
                                    </div>
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Astrounata4} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#0f0f0f] shadow-lg p-4 rounded-sm max-w-full w-[450px] z-10 space-y-4 h-[550px] overflow-hidden'>
                            <div className='flex gap-4'>
                                <div className="rounded-full border-2 h-12 w-12 relative overflow-hidden">
                                    <img className="w-full h-full rounded-lg absolute inset-0" src={Reptil1} />
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <span className='text-gray-50 font-bold italic text-sm capitalize'>@COURTNEY HENRY</span>
                                    <img width={22} src={Verified} />
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-4'>
                                <div className='w-full h-72 relative rounded-lg'>
                                    <img className='w-full rounded-lg h-full object-cover object-top' src={Reptil1} />
                                </div>
                                <div className="flex  gap-4 w-full">
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Reptil3} />
                                    </div>
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Reptil4} />
                                    </div>
                                    <div className="relative w-full h-32">
                                        <img className='w-full h-full rounded-lg object-cover absolute inset-0' src={Reptil2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
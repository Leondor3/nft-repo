import { useState } from 'react'
import { Title } from ".";
import Cyberpunk from '../assets/cyberpunk.jpg'
import BlockChain from '../assets/blockchain.png'
import Goku from '/images/goku.jpg'
import Isometric from '/images/isometric.jpg'
import { MoreHorizontal, Flame, ArrowDownIcon } from "lucide-react";

import FaceEvil from '/images/face-evil.jpg'

interface TabsCardsProps {
    title: string;
}

const tabsCards: TabsCardsProps[] = [
    {
        title: 'All'
    },
    {
        title: 'Art'
    },
    {
        title: 'Coolectibles'
    },
    {
        title: 'Music'
    }
]

export function TrendingCategory() {
    const [selectedItem, setSelectedItem] = useState("");
    return (
        <section className="relative pt-16 pb-60 bg-[#0f0f0f]" id="explore">
            <div className="container">
                <div className="text-center">
                    <Title color="white" theme="h1" size="xl" className='max-sm:text-4xl'>Trending Categories</Title>
                </div>
                <div className="pt-16 flex justify-between items-start max-md:flex-col max-md:gap-8">
                    <div className="flex gap-4 flex-wrap">
                        {tabsCards.map((item, index) => (
                            <div className={`px-4 py-2 rounded-md border border-zinc-800 ${index === 0 ? 'bg-purple-600' : 'hover:bg-purple-600'}`}>
                                <a className="font-bold">{item.title}</a>
                            </div>
                        ))}
                    </div>

                    <fieldset className="max-sm:w-full">
                        <select
                            className=" bg-zinc-950 max-sm:w-full border appearance-none rounded-md border-zinc-800 placeholder:font-bold flex py-3 px-4  justify-center items-center "
                            value={selectedItem}
                            onChange={(e) => setSelectedItem(e.target.value)}
                            defaultValue=""
                        >
                            <option disabled value="">Trending</option>
                            {tabsCards.map((item) => (
                                <option key={item.title} value={item.title}>{item.title}</option>
                            ))}
                        </select>
                    </fieldset>
                </div>
                <div className="pt-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <div className="bg-zinc-950 shadow-md p-4 rounded-lg space-y-4">
                        <div className="relative h-72">
                            <img className="rounded-lg w-full h-full object-cover scale-95 hover:scale-100 transition-all" src={Cyberpunk} alt="" />
                            <div className="absolute top-4 right-4 bg-zinc-950 p-1 flex gap-1 rounded-md items-center">
                                <Flame strokeWidth={1} size={16} />
                                <span className="text-sm text-gray-400">187</span>
                            </div>
                        </div>
                        <div className="flex items-start justify-between gap-4 w-full">
                            <span className="text-gray-200">Highest Bird</span>
                            <MoreHorizontal />
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-center justify-between gap-4 w-full max-xl:flex-col">
                            <div className='flex gap-4 items-center'>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="text-purple-400">Buy Now</a>
                        </div>
                    </div>

                    <div className="bg-zinc-950 shadow-md p-4 rounded-lg space-y-4">
                        <div className="relative h-72">
                            <img className="rounded-lg w-full h-full object-cover" src={FaceEvil} alt="" />
                            <div className="absolute top-4 right-4 bg-zinc-950 p-1 flex gap-1 rounded-md items-center">
                                <Flame strokeWidth={1} size={16} />
                                <span className="text-sm text-gray-400">187</span>

                            </div>
                        </div>
                        <div className="flex items-start justify-between gap-4 w-full">
                            <span className="text-gray-200">Highest Bird</span>
                            <MoreHorizontal />
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-center justify-between gap-4 w-full max-xl:flex-col">
                            <div className='flex gap-4 items-center '>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="text-purple-400">Buy Now</a>
                        </div>
                    </div>

                    <div className="bg-zinc-950 shadow-md p-4 rounded-lg space-y-4">
                        <div className="relative h-72">
                            <img className="rounded-lg w-full h-full object-cover" src={Goku} alt="" />
                            <div className="absolute top-4 right-4 bg-zinc-950 p-1 flex gap-1 rounded-md items-center">
                                <Flame strokeWidth={1} size={16} />
                                <span className="text-sm text-gray-400">187</span>
                            </div>
                        </div>
                        <div className="flex items-start justify-between gap-4 w-full">
                            <span className="text-gray-200">Highest Bird</span>
                            <MoreHorizontal />
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-center justify-between gap-4 w-full max-xl:flex-col">
                            <div className='flex gap-4 items-center'>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="text-purple-400">Buy Now</a>
                        </div>
                    </div>

                    <div className="bg-zinc-950 shadow-md p-4 rounded-lg space-y-4">
                        <div className="relative h-72">
                            <img className="rounded-lg h-full object-cover w-full" src={Isometric} alt="" />
                            <div className="absolute top-4 right-4 bg-zinc-950 p-1 flex gap-1 rounded-md items-center">
                                <Flame strokeWidth={1} size={16} />
                                <span className="text-sm text-gray-400">187</span>

                            </div>
                        </div>
                        <div className="flex items-start justify-between gap-4 w-full">
                            <span className="text-gray-200">Highest Bird</span>
                            <MoreHorizontal />
                        </div>
                        <hr className='border w-full border-zinc-800' />
                        <div className="flex items-center justify-between gap-4 w-full max-xl:flex-col">
                            <div className='flex gap-4 items-center'>
                                <img width={40} src={BlockChain} />
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col w-full items-start'>
                                        <span className='text-gray-200 text-3xl font-bold'>8.32 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="text-purple-400">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

import { Title } from ".";
import Cyberpunk from '../assets/cyberpunk.jpg'
import BlockChain from '../assets/blockchain.png'
import Goku from '/images/goku.jpg'
import Isometric from '/images/isometric.jpg'
import { MoreHorizontal, Flame } from "lucide-react";

import FaceEvil from '/images/face-evil.jpg'
export function TrendingCategory() {
    return (
        <section className="relative pt-16 pb-60 bg-[#0f0f0f]">
            <div className="container">
                <div className="text-center">
                    <Title color="white" theme="h1" size="xl">Trending Categories</Title>
                </div>
                <div className="pt-16 flex justify-between">
                    <div className="flex gap-4">
                        <div className="px-4 py-2 rounded-md border border-zinc-800 bg-purple-600">
                            <a className="text-gray-50 font-bold" href="">All</a>
                        </div>
                        <div className="px-4 py-2 rounded-md border border-zinc-800">
                            <a className="text-gray-50 font-bold" href="">Art</a>
                        </div>
                        <div className="px-4 py-2 rounded-md border border-zinc-800">
                            <a className="text-gray-50 font-bold" href="">Collectibles</a>
                        </div>
                        <div className="px-4 py-2 rounded-md border border-zinc-800">
                            <a className="text-gray-50 font-bold" href="">Domain</a>
                        </div>
                        <div className="px-4 py-2 rounded-md border border-zinc-800">
                            <a className="text-gray-50 font-bold" href="">Music</a>
                        </div>
                        <div className="px-4 py-2 rounded-md border border-zinc-800">
                            <a className="text-gray-50 font-bold" href="">Photography</a>
                        </div>
                        <div className="px-4 py-2 rounded-md border border-zinc-800">
                            <a className="text-gray-50 font-bold" href="">Virtual Word</a>
                        </div>
                    </div>
                    <fieldset className="relative flex items-center justify-center">
                        <label className="text-gray-50 absolute left-4">Trending</label>
                        <select placeholder="Trending" className="text-gray-50 px-16 py-2 bg-zinc-950 border rounded-md border-zinc-800 placeholder:text-gray-50">Trending</select>
                    </fieldset>
                </div>
                <div className="pt-8 grid grid-cols-4 max-lg:grid-cols-3 gap-4">
                    <div className="bg-zinc-950 shadow-md p-4 rounded-lg space-y-4">
                        <div className="relative">
                            <img className="rounded-lg" src={Cyberpunk} alt="" />
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
                        <div className="flex items-center justify-between gap-4 w-full">
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
                        <div className="relative">
                            <img className="rounded-lg" src={FaceEvil} alt="" />
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
                        <div className="flex items-center justify-between gap-4 w-full">
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
                        <div className="flex items-center justify-between gap-4 w-full">
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
                        <div className="flex items-center justify-between gap-4 w-full">
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
        </section>
    )
}

import { Button, Title } from ".";
import Hero from '../assets/hero.jpg'
import People1 from '../assets/people-1.jpg'
import People2 from '../assets/people-2.png'
import BlockChain from '../assets/blockchain.png'
import BlockChain2 from '/images/blockchain.jpg'
import Neon from '../assets/neon.png';

export function Banner() {
    return (
        <section className="relative py-32" id="home">
            <div className="container">
                <div className="flex justify-between h-full max-xl:flex-col max-xl:gap-16">
                    <div className="h-full flex flex-col items-start justify-start text-left space-y-8 w-1/2 z-40 max-xl:w-full">
                        <div className="flex flex-col space-y-4 max-xl:w-full">
                            <Title color="white" size="xl" theme="h1">Discover, Collect, and sell
                                <span className="bg-text-gradient bg-clip-text font-bold text-transparent"> NFT
                                </span>
                            </Title>
                            <Title className="w-[550px] max-xl:w-full" color="gray" size="base" theme="base">Discover a world where art and technology intertwine, as we bring you a curated collection of unique and mesmerizing NFTs. Our website is your gateway to a diverse array of digital artwork, each piece crafted with passion and innovation.</Title>
                        </div>
                        <Button color="violet" size="xl">Get Started</Button>
                        <div className="grid grid-cols-3 gap-16">
                            <div className="flex flex-col items-start">
                                <h1 className="text-gray-50 font-bold text-2xl">240K+</h1>
                                <span className="text-gray-200">Total Sales</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <h1 className="text-gray-50 font-bold text-2xl">240K+</h1>
                                <span className="text-gray-200">Auctions</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <h1 className="text-gray-50 font-bold text-2xl">240K+</h1>
                                <span className="text-gray-200">Artists</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-[550px] flex gap-4 max-xl:w-full max-sm:items-center max-sm:justify-center">
                        <div className="bg-zinc-900 p-4 h-max rounded-md w-96 z-10 space-y-4">
                            <div className="w-full relative">
                                <div className="absolute inset-0 z-10">
                                    <img src={BlockChain2} />
                                </div>
                                <img className="w-full h-full object-cover z-20 relative" src={People2} />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <h1 className="text-gray-50 text-2xl font-bold">Futuristic skull soldier</h1>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full h-8 w-8 relative overflow-hidden">
                                        <img className="w-full h-full rounded-full absolute inset-0" src={People1} />
                                    </div>
                                    <span className="text-gray-200">Leandro de Araujo</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-md w-96 rotate-6 z-0 -ml-40 ">
                            <div className="h-96 w-full">
                                <img className="w-full h-full object-cover" src={Hero} />
                            </div>
                            <div>
                                DHSAUDSHAU
                            </div>
                        </div>
                    </div>
                    <div className="bg-hero-pattern absolute bottom-0 w-full h-full left-0 z-20" />

                </div>
            </div>
        </section>
    )
}
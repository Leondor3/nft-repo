import { Button, Title } from ".";
import Desktop from '/images/desktop.png'
import { MoveUpRightIcon } from "lucide-react";
export function CallNFT() {
    return (
        <section className="-mt-32 z-20 relative pb-16">
            <div className="container">
                <div className="border bg-zinc-950 border-zinc-800 p-16 relative">
                    <div className="bg-hero-pattern absolute bottom-0 w-full h-full left-0" />
                    <div className="flex max-xl:flex-col">
                        <div className="flex flex-col space-y-8 z-40 relative">
                            <Title size="xl" color="white" theme="h1" className='max-sm:text-4xl'>
                                Discover, create and sell 
                                <h1 className="bg-text-gradient bg-clip-text font-bold text-transparent">your own NFT</h1>
                            </Title>
                            <div className="flex gap-4 max-sm:flex-col">
                                <Button className="flex gap-2 items-center" color="violet">
                                    <span className="font-bold">Explore Now</span>
                                    <MoveUpRightIcon size={16} />
                                </Button>
                                <Button className="border border-purple-600">Create Your First NFT</Button>
                            </div>
                        </div>
                        <div className="max-w-96 w-full -mt-16 -mr-16 max-xl:mt-16">
                            <img src={Desktop} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
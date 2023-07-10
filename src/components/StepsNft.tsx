import { useState, useEffect } from 'react';

import { Title } from ".";
import Wallet from '/images/wallet.png'
import Document from '/images/document.png'
import Bank from '/images/piggy-bank.png'
import Money from '/images/money-bag.png'
import { ArrowRight, ArrowDown } from "lucide-react";

export function Steps() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Função de retorno do useEffect para remover o event listener quando o componente é desmontado
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Adiciona um event listener para atualizar a largura da janela sempre que houver redimensionamento
        window.addEventListener('resize', handleResize);

        // Remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <section className="relative pt-32 pb-32 ">
            <div className="container">
                <div>
                    <Title size="xl" color="white" theme="h1" className='max-sm:text-4xl'>Step By Step Create and sell your Nft</Title>
                    <div className="pt-16 gap-8 grid grid-cols-4 max-lg:grid-cols-3 max-lg:gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                        <div className="flex items-center max-sm:flex-col max-lg:gap-8">
                            <div className="flex flex-col space-y-4 items-center">
                                <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-4">
                                    <img width={32} src={Wallet} />
                                </div>
                                <span className="text-gray-400">Step 1</span>
                                <div className="text-center space-y-4">
                                    <Title size="base" color="white" theme="h1">Set Up Your Wallet</Title>
                                    <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis similique expedita odit! </p>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col space-y-4 items-center">
                                <div className="bg-zinc-950 border border-zinc-800 rounded-md px-8 py-4">
                                    <img width={32} src={Document} />
                                </div>
                                <span className="text-gray-400">Step 2</span>
                                <div className="text-center space-y-4">
                                    <Title size="base" color="white" theme="h1">Set Up Your Wallet</Title>
                                    <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis similique expedita odit! </p>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col space-y-4 items-center">
                                <div className="bg-zinc-950 border border-zinc-800 rounded-md px-8 py-4">
                                    <img width={32} src={Bank} />
                                </div>
                                <span className="text-gray-400">Step 3</span>
                                <div className="text-center space-y-4">
                                    <Title size="base" color="white" theme="h1">Set Up Your Wallet</Title>
                                    <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis similique expedita odit! </p>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col space-y-4 items-center">
                            <div className="bg-zinc-950 border border-zinc-800 rounded-md px-8 py-4">
                                <img width={32} src={Money} />
                            </div>
                            <span className="text-gray-400">Step 4</span>
                            <div className="text-center space-y-4">
                                <Title size="base" color="white" theme="h1">Set Up Your Wallet</Title>
                                <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nobis similique expedita odit! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
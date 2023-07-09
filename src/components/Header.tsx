import { useState, useEffect } from "react";
import BlockChain from '../assets/blockchain.png'
import { Button } from ".";
import { SunIcon } from "lucide-react";
import Hamburger from 'hamburger-react'
import { Navigation } from "./Navigation";
import { Login } from "./Login/login";

export function Header() {

    const [sticky, setSticky] = useState(false);

    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });

    return (
        <header className={`header h-20  top-0 left-0 z-50 flex w-full items-center bg-transparent border-bottom ${sticky
            ? "!fixed !z-[9999] shadow-sticky backdrop-blur-sm !transition !bg-primary !bg-opacity-20"
            : "absolute"
            }`}>
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <div className="flex gap-8 items-center">
                        <a className="text-gray-50 font-bold text-2xl flex items-center gap-4" href="">
                            <img width={48} src={BlockChain} /> NFTL25
                        </a>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Navigation />
                        <Login />
                    </div>
                </div>
            </div>
        </header>
    );
}
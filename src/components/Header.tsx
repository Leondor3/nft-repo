import { useState, useEffect } from "react";
import BlockChain from '../assets/blockchain.png'
import { Button } from ".";
import { SunIcon } from "lucide-react";


export function Header() {

    const [sticky, setSticky] = useState(false)

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
        <header className={`header h-20 top-0 left-0 z-40 flex w-full items-center bg-transparent border-bottom ${sticky
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
                    <nav className="flex items-center px-4 gap-4 ">
                        {[
                            ["Home", "#home"],
                            ["About Us", "#about"],
                            ["Explore", "#about"],
                            ["Blog", "#technology"],
                            ["Support", "#experiences"],
                            ["Contact", "#experiences"],
                        ].map(([title, url]) => (
                            <a
                                href={url}
                                className="rounded-lg px-3 py-2 text-white font-medium hover:text-purple-400 transition text-base"
                            >
                                {title}
                            </a>
                        ))}
                    </nav>
                    <div className="flex gap-4 items-center">
                        <Button color="violet">Sign In</Button>
                        <SunIcon />
                    </div>
                </div>
            </div>
        </header>
    );
}
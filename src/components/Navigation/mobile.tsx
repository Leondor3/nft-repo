import { useState } from 'react';
import { Link } from "react-router-dom";

interface NavigationMobileProps {
    title: string;
    url: string;
}

export function NavigationMobile({ title, url }: NavigationMobileProps) {

    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (event: React.FormEvent<HTMLElement>, url: string) => {
        event.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(url);
        element!.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`absolute right-0 top-0 z-99 flex h-max w-full flex-col items-end justify-start bg-zinc-950 ${isOpen ? '' : ''}`}>
            {[
                ["Home", "#home"],
                ["Colletions", "#colletions"],
                ["Top Creators", "#top-creators"],
                ["Explore", "#explore"],
            ].map(([title, url]) => (
                <Link
                    onClick={(e) => handleItemClick(e, url)}
                    key={url}
                    to={url}
                    className="rounded-lg px-3 py-2 font-medium hover:text-purple-500 transition text-base"
                >
                    {title}
                </Link>
            ))}
        </nav>
    )
}
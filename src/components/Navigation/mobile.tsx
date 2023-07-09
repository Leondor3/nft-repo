import { useState } from 'react';

interface NavigationMobileProps {
    title: string;
    url: string;
}

export function NavigationMobile({ title, url }: NavigationMobileProps) {

    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (event: React.FormEvent<HTMLElement>) => {
        event?.preventDefault()
        setIsOpen(false); // Fecha o menu quando o item for clicado
    };

    return (
        <nav className={`absolute right-0 top-0 z-99 flex h-max w-full flex-col items-end justify-start bg-zinc-950 ${isOpen ? 'open' : ''}`}>            {[
            ['Home', '/Home'],
            ['Team', '/About'],
            ['Projects', '/About'],
        ].map(([title, url]) => (
            <a href={url} onClick={handleItemClick} className="rounded-lg px-3 py-2 text-gray-200 font-medium hover:text-white transition-all">{title}</a>
        ))}
        </nav>
    )
}
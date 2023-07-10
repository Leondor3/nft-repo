import { Link } from "react-router-dom";

interface NavigationDesktopProps {
    title: string;
    url: string;
}

export function NavigationDesktop({ title, url }: NavigationDesktopProps) {
    return (
        <>
            <nav className="flex items-center px-4 gap-4 max-md:hidden">
                {[
                    ["Home", "#home"],
                    ["Colletions", "#colletions"],
                    ["Top Creators", "#top-creators"],
                    ["Explore", "#explore"],
                ].map(([title, url]) => (
                    <Link
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector(url);
                            element!.scrollIntoView({ behavior: "smooth" });
                        }}
                        key={url}
                        to={url}
                        className="rounded-lg px-3 py-2 font-medium hover:text-purple-500 transition text-base"
                    >
                        {title}
                    </Link>
                ))}
            </nav>
        </>
    )
}

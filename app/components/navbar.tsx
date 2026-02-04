"use client"

import Link from "next/link"

const navItems = [
    { name: "Home", href: "/", page: 1 },
    { name: "Events", href: "/events", page: 2 },
    { name: "Rules", href: "/rules", page: 3 },
    { name: "Gallery", href: "/gallery", page: 4 },
    { name: "About", href: "/about", page: 5 },
]

export default function Navbar(currentPage: {currentPage: Number} = {currentPage: 1}){
    const getActiveClass = (page: number) => {
        return currentPage.currentPage === page 
            ? "bg-[rgba(239,219,146,0.2)] px-4 py-3 rounded-full font-jetbrains-mono max-sm:px-2 max-sm:py-2 max-sm:text-sm" 
            : "hover:bg-[rgba(255,255,255,0.09)] px-4 py-3 rounded-full font-jetbrains-mono max-sm:px-2 max-sm:py-2 max-sm:text-sm";
    };

    return(
        <div className="w-auto h-auto bg-[rgba(255,255,255,0.04)] backdrop-blur-lg flex items-center 
        justify-center fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-10 py-3 border border-[rgba(255,255,255,0.16)] z-10 max-sm:px-2 max-sm:py-2 max-sm:bottom-3 max-sm:left-1/2 max-sm:w-[95vw] max-sm:max-w-[400px]">
            <div className="flex text-[#efdb92] gap-4 max-sm:gap-2 max-sm:justify-center max-sm:w-full">
                {navItems.map((item) => (
                    <Link 
                        key={item.page}
                        href={item.href}
                        className={getActiveClass(item.page)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
    { name: "Home", href: "/", page: 1 },
    { name: "Events", href: "/events", page: 2 },
    { name: "Rules", href: "/rules", page: 3 },
    { name: "Schedule", href: "/schedule", page: 4 },
    { name: "Gallery", href: "/gallery", page: 5 },
    { name: "About", href: "/about", page: 6 },
]

export default function Navbar(currentPage: {currentPage: Number} = {currentPage: 1}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getActiveClass = (page: number) => {
        return currentPage.currentPage === page 
            ? "bg-[rgba(239,219,146,0.2)] px-4 py-3 rounded-full font-jetbrains-mono" 
            : "hover:bg-[rgba(255,255,255,0.09)] px-4 py-3 rounded-full font-jetbrains-mono";
    };

    const getMobileActiveClass = (page: number) => {
        return currentPage.currentPage === page 
            ? "bg-[rgba(239,219,146,0.2)] px-4 py-3 rounded-lg font-jetbrains-mono w-full text-center" 
            : "hover:bg-[rgba(255,255,255,0.09)] px-4 py-3 rounded-lg font-jetbrains-mono w-full text-center";
    };

    return(
        <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex w-auto h-auto bg-[rgba(255,255,255,0.04)] backdrop-blur-lg items-center 
            justify-center fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-10 py-3 border border-[rgba(255,255,255,0.16)] z-10">
                <div className="flex text-[#efdb92] gap-4">
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

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[rgba(255,255,255,0.04)] backdrop-blur-lg rounded-full border border-[rgba(255,255,255,0.16)] flex items-center justify-center"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-[#efdb92] rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-[#efdb92] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-[#efdb92] rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
        </button>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>
                
                {/* Menu Panel */}
                <div className={`absolute bottom-0 left-0 right-0 bg-[rgba(10,10,10,0.98)] backdrop-blur-lg border-t border-[rgba(255,255,255,0.16)] transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="flex flex-col text-[#efdb92] gap-2 p-6">
                        {navItems.map((item) => (
                            <Link 
                                key={item.page}
                                href={item.href}
                                className={getMobileActiveClass(item.page)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
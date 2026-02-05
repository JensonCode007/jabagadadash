"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const activeIndex = navItems.findIndex(item => item.page === currentPage.currentPage);
    const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    // Track indicator position with state for proper animation
    const [indicatorPos, setIndicatorPos] = useState<{ left: number, width: number } | null>(null);
    const initialPositionSet = useRef(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Initialize indicator position immediately on mount (no animation)
    useEffect(() => {
        if (!initialPositionSet.current) {
            const activeItem = itemRefs.current[activeIndex];
            if (activeItem && navRef.current) {
                const navRect = navRef.current.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                setIndicatorPos({
                    left: itemRect.left - navRect.left,
                    width: itemRect.width
                });
                initialPositionSet.current = true;
            }
        }
    }, [activeIndex, mounted]);

    // Update indicator position on hover/active change (with animation)
    useEffect(() => {
        if (!initialPositionSet.current) return;
        
        const updateIndicator = () => {
            const currentItem = itemRefs.current[displayIndex];
            if (currentItem && navRef.current) {
                const navRect = navRef.current.getBoundingClientRect();
                const itemRect = currentItem.getBoundingClientRect();
                setIndicatorPos({
                    left: itemRect.left - navRect.left,
                    width: itemRect.width
                });
            }
        };
        
        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => {
            window.removeEventListener('resize', updateIndicator);
        };
    }, [displayIndex, mounted]);

    return(
        <>
            {/* Desktop Navigation */}
            <div 
                className="hidden md:flex w-auto h-auto bg-[rgba(255,255,255,0.04)] backdrop-blur-lg items-center 
                justify-center fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-10 py-3 border border-[rgba(255,255,255,0.16)] z-20"
            >
                <div ref={navRef} className="flex text-[#efdb92] gap-1 relative">
                    {/* Only render indicators after initial position is set */}
                    {indicatorPos && (
                        <>
                            {/* Glow Effect Layer */}
                            <motion.div
                                className="absolute top-0 bottom-0 rounded-full pointer-events-none"
                                initial={false}
                                animate={{
                                    left: indicatorPos.left,
                                    width: indicatorPos.width
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 35,
                                    mass: 0.8
                                }}
                                style={{
                                    background: "radial-gradient(ellipse at center, rgba(239,219,146,0.4) 0%, transparent 70%)",
                                    filter: "blur(12px)",
                                    opacity: hoveredIndex !== null ? 1 : 0.5
                                }}
                            />
                            
                            {/* Main Indicator */}
                            <motion.div
                                className="absolute top-0 bottom-0 rounded-full"
                                initial={false}
                                animate={{
                                    left: indicatorPos.left,
                                    width: indicatorPos.width
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 35,
                                    mass: 0.8
                                }}
                                style={{
                                    background: "linear-gradient(135deg, rgba(239,219,146,0.25) 0%, rgba(239,219,146,0.15) 100%)",
                                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), 0 0 20px rgba(239,219,146,0.2)"
                                }}
                            />
                            
                            {/* Border Highlight */}
                            <motion.div
                                className="absolute top-0 bottom-0 rounded-full pointer-events-none"
                                initial={false}
                                animate={{
                                    left: indicatorPos.left,
                                    width: indicatorPos.width,
                                    opacity: hoveredIndex !== null ? 1 : 0.5
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 35,
                                    mass: 0.8
                                }}
                                style={{
                                    border: "1px solid rgba(239,219,146,0.3)"
                                }}
                            />
                        </>
                    )}
                    
                    {navItems.map((item, index) => {
                        const isActive = displayIndex === index;
                        
                        return (
                            <Link 
                                key={item.page}
                                ref={(el) => { itemRefs.current[index] = el; }}
                                href={item.href}
                                className="relative px-4 py-3 rounded-full font-jetbrains-mono z-10"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <motion.span
                                    className="relative z-10 inline-block"
                                    animate={{
                                        scale: isActive ? 1.05 : 1,
                                        textShadow: isActive 
                                            ? "0 0 20px rgba(239,219,146,0.8), 0 0 40px rgba(239,219,146,0.4)" 
                                            : "0 0 0px rgba(239,219,146,0)"
                                    }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                >
                                    {item.name}
                                </motion.span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Hamburger Button */}
            <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[rgba(255,255,255,0.04)] backdrop-blur-lg rounded-full border border-[rgba(255,255,255,0.16)] flex items-center justify-center"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <motion.span 
                        className="w-full h-0.5 bg-[#efdb92] rounded-full origin-center"
                        animate={isMenuOpen 
                            ? { rotate: 45, y: 9, scaleX: 1.1 } 
                            : { rotate: 0, y: 0, scaleX: 1 }
                        }
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                    <motion.span 
                        className="w-full h-0.5 bg-[#efdb92] rounded-full"
                        animate={isMenuOpen 
                            ? { opacity: 0, scaleX: 0 } 
                            : { opacity: 1, scaleX: 1 }
                        }
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span 
                        className="w-full h-0.5 bg-[#efdb92] rounded-full origin-center"
                        animate={isMenuOpen 
                            ? { rotate: -45, y: -9, scaleX: 1.1 } 
                            : { rotate: 0, y: 0, scaleX: 1 }
                        }
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                </div>
            </motion.button>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 z-40 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Backdrop with blur */}
                <motion.div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-t border-[rgba(239,219,146,0.2)] rounded-t-3xl"
                    initial={{ y: "100%" }}
                    animate={{ y: isMenuOpen ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Decorative handle */}
                    <div className="flex justify-center pt-3 pb-2">
                        <div className="w-12 h-1 bg-[rgba(239,219,146,0.3)] rounded-full" />
                    </div>
                    
                    <div className="flex flex-col text-[#efdb92] gap-1 p-4 pb-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.page}
                                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                animate={{ 
                                    opacity: isMenuOpen ? 1 : 0, 
                                    x: isMenuOpen ? 0 : -30,
                                    filter: isMenuOpen ? "blur(0px)" : "blur(10px)"
                                }}
                                transition={{ 
                                    delay: isMenuOpen ? 0.1 + index * 0.06 : 0,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                            >
                                <Link 
                                    href={item.href}
                                    className={`relative block px-5 py-4 rounded-xl font-jetbrains-mono w-full text-center text-lg overflow-hidden group ${
                                        currentPage.currentPage === item.page 
                                            ? "bg-[rgba(239,219,146,0.15)]" 
                                            : ""
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {/* Hover gradient */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-[rgba(239,219,146,0.1)] via-[rgba(239,219,146,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    
                                    {/* Active indicator dot */}
                                    {currentPage.currentPage === item.page && (
                                        <motion.span 
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#efdb92] rounded-full"
                                            layoutId="mobile-active-dot"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                    
                                    <span className="relative z-10">{item.name}</span>
                                    
                                    {/* Arrow on hover */}
                                    <motion.span 
                                        className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        initial={{ x: -10 }}
                                        whileHover={{ x: 0 }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}
"use client"

import Image from "next/image"
import { useState, useRef } from "react"

interface constraints{
    title: string,
    desc?: string,
    link?: string,
    imagesrc?: string,

}


export default function UpdatesComponents({title, desc, imagesrc}: constraints){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }
    return(
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="w-full h-80 bg-black rounded-xl flex flex-col justify-end overflow-hidden border border-[rgba(255,255,255,0.16)] cursor-pointer relative group hover:scale-105 transition"
        >
            {/* Background Image */}
            {imagesrc && (
                <Image 
                    src={imagesrc} 
                    width={400} 
                    height={320} 
                    alt={title} 
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
            
            {/* Hover Glow Effect */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
                }}
            />
            
            {/* Content with translucent background */}
            <div className="flex flex-col px-5 py-4 gap-1.5 relative z-10 bg-[rgba(0,0,0,0.6)] border-t border-[rgba(255,255,255,0.1)]">
                <h1 className="font-bold text-2xl text-[#efdb92] font-cormorant">{title}</h1>
                <p className="text-[#ffffff7f] font-light text-sm">{desc}</p>
            </div>
            
        </div>
    )
}
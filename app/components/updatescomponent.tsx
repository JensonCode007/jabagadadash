"use client"

import Image from "next/image"
import { useState, useRef } from "react"

interface constraints{
    title: string,
    desc?: string,
    link?: string,
    imagesrc?: string,

}



export default function UpdatesComponents({title, desc}: constraints){
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
            className="w-full h-65 bg-black rounded-xl flex flex-col justify-between overflow-hidden border border-[rgba(255,255,255,0.16)] cursor-pointer relative group hover:scale-110 transition"
        >
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
                }}
            />
            <Image src={""}  alt="image"/>
            <div className="flex flex-col px-5 py-3 text-white relative z-10">
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="">{desc}</p>
            </div>
            
        </div>
    )
}
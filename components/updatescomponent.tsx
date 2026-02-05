"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

interface constraints{
    title: string,
    desc?: string,
    modalDesc?: string,
    link?: string,
    imagesrc?: string,

}


export default function UpdatesComponents({title, desc, modalDesc, link, imagesrc}: constraints){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const handleRegisterClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    }

    return(
        <>
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onClick={() => setIsModalOpen(true)}
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

            {/* Modal */}
            {isModalOpen && (
                <div 
                    onClick={() => setIsModalOpen(false)}
                    className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
                >
                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#0f0f0f] border border-[#2a2a2a] shadow-[0_0_60px_rgba(239,219,146,0.1)] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-slideUp"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2a2a2a] p-4 sm:p-5 md:p-6 flex justify-between items-start">
                            <div>
                                <h2 className="text-[#efdb92] text-xl sm:text-2xl md:text-3xl font-bold font-cormorant">{title}</h2>
                            </div>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-[#efdb92] text-3xl leading-none transition-colors duration-200"
                            >
                                ×
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6 overflow-y-auto">
                            {/* Description */}
                            {modalDesc && (
                                <div>
                                    <p className="text-gray-400 leading-relaxed whitespace-pre-line text-base">
                                        {modalDesc}
                                    </p>
                                </div>
                            )}

                            {/* Register Button */}
                            {link && (
                                <div className="pt-2 sm:pt-4">
                                    <button
                                        onClick={handleRegisterClick}
                                        className="w-full text-center bg-[#efdb92] text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(239,219,146,0.3)] transition-all duration-300"
                                    >
                                        Register Now →
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
import Link from "next/link"

export default function Navbar(currentPage: {currentPage: Number} = {currentPage: 1}){
    const getActiveClass = (page: number) => {
        return currentPage.currentPage === page 
            ? "bg-[rgba(239,219,146,0.2)] px-4 py-3 rounded-full" 
            : "hover:bg-[rgba(255,255,255,0.09)] px-4 py-3 rounded-full";
    };

    return(
        <div className="w-auto h-18 bg-[rgba(255,255,255,0.04)] backdrop-blur-lg flex items-center 
        justify-center fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full px-10 border border-[rgba(255,255,255,0.16)] z-10">
            <div className="flex text-[#efdb92] gap-4">
                <Link className={getActiveClass(1)} href="/">Home</Link>
                <Link className={getActiveClass(2)} href="/events">Events</Link>
                <Link className={getActiveClass(3)} href="/rules">Rules</Link>
                <Link className={getActiveClass(4)} href="/schedule">Schedule</Link>
                <Link className={getActiveClass(5)} href="/gallery">Gallery</Link>
                <Link className={getActiveClass(6)} href="/about">About</Link>
            </div>
        </div>
    )
}
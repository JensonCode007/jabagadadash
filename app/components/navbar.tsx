import Image from "next/image"
import Logo from "../../public/logo.png"

export default function Navbar(){
    return(
        <div className="w-1/2 h-20 bg-[rgba(255,255,255,0.04)] backdrop-blur-lg flex items-center justify-between absolute top-6 left-1/2 -translate-x-1/2 rounded-full px-8 border border-[rgba(255,255,255,0.16)]">
            <Image alt="Logo" src={Logo} className="w-50"/>
            <div className="flex text-[#efdb92] gap-8">
                <a>Home</a>
                <a href="./events">Events</a>
                <a>Rules</a>
                <a>Gallery</a>
                <a>About</a>
            </div>
        </div>
    )
}
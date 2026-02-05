"use client";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

interface WrapperProps {
    children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps){
    const pathname = usePathname();
    
    const getPageNumber = () => {
        if (pathname === "/") return 1;
        if (pathname === "/events") return 2;
        if (pathname === "/rules") return 3;
        if (pathname === "/schedule") return 4;
        if (pathname === "/gallery") return 5;
        if (pathname === "/about") return 6;
        return 1;
    };

    return(
        <>
            <Navbar currentPage={getPageNumber()}/>
            {children}
        </>
    )
}
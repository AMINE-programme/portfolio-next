"use client"

import { Sheet,SheetContent,SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"
import Image from "next/image"
import Link from "next/link"


const links = [
    {
        name:"home",
        path:"/"
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"work",
        path:"/work"
    },
    {
        name:"contact",
        path:"/contact"
    },
]


const MobileNav = () => {
    const pathaname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-white"></CiMenuFries>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* Logo*/}
            <div className="mt-20 mb-28 text-center flex justify-center items-center text-2xl">
                <Link href="/">
                <Image 
                
        src="/logo.svg"
        width={100}
        height={30}
        alt="Picture of the author"/>
                </Link>
                </div>
             {/* nav*/}
             <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link,index)=>
                
                {
                    return(
                    <Link
                    href={link.path}
                    key={link.index}
                    className={` ${link.path === pathaname && "text-default border-b-2 border-default"} " text-xl capitalize hover:text-default transition-all`} 
                   
                    >
                    {link.name}
                    </Link>
                    )

                })}

             </nav>
            </SheetContent>
        </Sheet>
  )
}

export default MobileNav
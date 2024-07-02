"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Links = 
[
{
    index:"1",
    name: "home",
    path : "/"
},
{
    index:"2",
    name: "services",
    path : "/services"
},
{
    index:"3",
    name: "resume",
    path : "/resume"
},
{
    index:"4",
    name: "work",
    path : "/work"
},
{
    index:"5",
    name: "contact",
    path : "/contact"
},

]



function Nav() {
const pathname = usePathname();
console.log(pathname)
  return (
    
    <nav className="flex gap-8 ">
        {Links.map((link,index)=>{
            return (
            <Link className={`${link.path === pathname && "text-default border-b-2 border-default "} capitalize  font-medium hover:text-default transition-all ` } href={link.path} key={index}> {link.name} </Link>
        )
    })}
    </nav>
  )
}

export default Nav
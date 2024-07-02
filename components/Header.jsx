import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
function Header() {
  return (
    <header className="  py:8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
       <Link href="/">
        <Image 
        src="/logo.svg"
        width={100}
        height={100}
        alt="Picture of the author"/> 
        </Link>
        
{/*desktop nav & hire me button */}
<div className="hidden xl:flex items-center gap-8">
<Nav />
<Link href="/contact">
<Button className=" h-9 w-36">Hire me </Button>
</Link>
</div>
{/*mpobile nav  */}
<div className="xl:hidden"> 
  <MobileNav/>
</div>
      </div>
    </header>
  )
}

export default Header
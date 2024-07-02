import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import Link from "next/link"

const socials = [
    {icon:<FaGithub />, path:"/"},
    {icon:<FaLinkedinIn />, path:"/"},

]
export const Social = ({containerStyles, iconStyles}) => {


  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path}  className={iconStyles}>
                    {item.icon}
                </Link>
            )

        })}
    </div>
  )
}

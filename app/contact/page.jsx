"use client"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/Input"
import {Textarea} from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
}
from "@/components/ui/select"

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title:"Phone",
    description:"(+212) 638 949 565"
  },
  {
    icon: <FaEnvelope  />,
    title:"Email",
    description:"mohamedaminelazrak8@gmail.com"

  },
  {
    icon: <FaMapMarkedAlt />,
    title:"Address",
    description:"Rue Meknas N78 TAZA"
  },


]

import {motion} from "framer-motion"


export default function Contact() {
  return (

   <motion.section  
   initial={{opacity:0}}
   animate={{
    opacity:1,
    transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
     
    className="py-6"
  >
  <div className="container max-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">
     {/* form*/}
      <div className="xl:w-[54%] order-2 xl:order-none">
      <form className="flex flex-col gap-6 p-10 bg-[] rounded-xl">
        <h3 className="text-4xl text-default " >Let's Work together</h3>
        <p className="text-white/60">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, culpa?</p>
        {/* input*/}
        <div className="grid grid-cols-1 md:grid-cols:2 gap-6">
        
          <Input type="firstname" placeholder="Firstname" />
          <Input type="lastname" placeholder="Lastname" />
          <Input type="email" placeholder="Email Address" />
          <Input type="phone" placeholder="Phone Number" />
         
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue  placeholder="select a service"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>  Select a service</SelectLabel>
              <SelectItem value="est">portfolio</SelectItem>
              <SelectItem value="cst">landing page</SelectItem>
              <SelectItem value="mst">e-commerce website</SelectItem>
              <SelectItem value="nst">wordpress website</SelectItem>
            </SelectGroup>
          </SelectContent>

        </Select>
        <Textarea className="h-[200px]"
        placeholder="Type your message here."/>
        {/* button send */}
        <Button size="md" className="max-w-40 h-10">Send Message</Button>
      </form>
      </div>

      {/* info*/}
      <div className="flex-1 flex items-center xl:justify-end order-1
      xl:order-none mb-8 xl:mb-0">
        <ul className="flex flex-col gap-10">
          {info.map((item,index)=>{
              return(
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px]  h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-default rounded-md flex
                  items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
          })}

        </ul>
      </div>
    </div>
  </div>
    
   </motion.section>
  )
}

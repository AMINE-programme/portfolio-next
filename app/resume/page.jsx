"use client"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

// about data


const about={
  title:'About me',
  description:"Lorem ipsum adipisicing elit. Tempore animi quae quia officiis dolorum nulla officia harum!",
  info:[{
    fieldName:"Name",
    fieldValue:"Mohamed Amine Lazrak"
  },
  {
    fieldName:"Experience",
    fieldValue:"2 Years"
  },
  {
    fieldName:"Nationality",
    fieldValue:"Moroccan"
  },
  {
    fieldName:"Email",
    fieldValue:"mohamedaminelazrak8@gmail.com"
  },
 
  {
    fieldName:"Phome",
    fieldValue:"(+212) 638 949 565"
  },
  {
    fieldName:"Skype",
    fieldValue:"Avalaible"
  },
  {
    fieldName:"Freelance",
    fieldValue:"Avalaible"
  },
  
  {
    fieldName:"Languages",
    fieldValue:"English, French"
  },






]


} 

// Experience data
const experience = {
  icon:"/assets/resume/badge.svg",
  title:"My Experience",
  description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum perspiciatis ",
  items:[
    {
      company:"E-market solution",
      position:"Agent mailer",
      duration :"2023 - 2024"
    
    },
    {
      company:"commune taza",
      position:"stagiaire",
      duration :"12/2022 - 02/2023 "
    
    }
  ]
  
}

// Experience education
const education = {
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum perspiciatis ",
  items:[
    {
      university:"OFPPT",
      position:"Technicien specialise en developpement informatique",
      duration :"2019 - 2021"
    
    },
    {
      university:"Ibn Al Yassamin",
      position:"etudiant",
      duration :"2013/2016 "
    
    }
  ]
  
}

//skills data
const skills = {
  title:"My Skills",
  description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum perspiciatis ",
  skillslist:[
    {
      icons:<FaHtml5/>,
      name:"Html"

    },
    {
      icons:<FaCss3/>,
      name:"Css3"

    },
    {
      icons:<FaJs/>,
      name:"javascript"

    },
    {
      icons:<FaReact/>,
      name:"React js"

    },
    {
      icons:<FaNodeJs/>,
      name:"NodeJs"

    },
    {
      icons:<SiTailwindcss/>,
      name:"Tailwind.css"

    },

]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import {motion} from "framer-motion"







export default function Resume() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.4, duration:0.4, ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills </TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
                   return(
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                    flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-default">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div  className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-default"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                   )
                  })}
                </ul>

              </ScrollArea>
              
              </div>
            </TabsContent>


            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index)=>{
                   return(
                    <li key={index} className="bg-[#232329] h-[184px] py-10 px-10 rounded-xl flex
                    flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-default">{item.duration}</span>
                      <h3 className=" text-xl leading-2 max-w-[268px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div  className="flex items-center gap-3 pt-8">
                        <span className="w-[6px] h-[6px] rounded-full bg-default"></span>
                        <p className="text-white/60">{item.university}</p>
                      </div>
                    </li>
                   )
                  })}
                </ul>

              </ScrollArea>
              
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {skills.description}</p>
                  </div>
                
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:gap-[30px] gap-4">
                  {skills.skillslist.map((skill,index)=>{
                    return(
                    
                    <li key={index}>
                    <TooltipProvider delayDuration={100}>
                    <Tooltip>

                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] 
                    rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-default transition-all duration-300">
                      {skill.icons}</div>  
                    </TooltipTrigger>
                    <TooltipContent className="capitalize bg-white text-black">
                      <p>{skill.name}</p>
                    </TooltipContent>
                    
                    </Tooltip>
                    </TooltipProvider>
                     </li>
                    
                  )})}
                </ul>

              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
             <div className="flex flex-col gap[50px]">
                 <h3 className="text-4xl font-bold ">{about.title}</h3>
                 <p className="max-w-[600px] text-white/600 mx-auto xl:mx-0 pt-3">
                 {about.description}
                 </p>
                 <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  py-8 max-w-[680px]
                 mx-auto xl:mx-0">
                 {about.info.map((item,index)=>{
                  return(
                    <li key={index} className="flex items-center justify-center
                    xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>

                    </li>
                  )

                 })} 
                 </ul>
             </div>
            </TabsContent>
          </div>
        </Tabs>

      </div>



    </motion.div>
  )
}

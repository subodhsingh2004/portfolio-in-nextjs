"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Geist_Mono } from 'next/font/google'
import { useStore } from '@/store/useStore';

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const skills = [
  "java", "javascript", "python", "|",
  "html", "css", "tailwindcss", "reactjs", "nextjs", "typescript", "|",
  "nodejs", "expressjs", "|",
  "mongodb"
]

function About() {
  const { language } = useStore()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5, ease: "easeInOut" }}
    >

      <div className={`${geistMono.className} flex flex-col justify-center space-y-12 leading-none`}>


        {/* Skills */}
        <div className='gap-3 flex flex-col flex-wrap'>
          <h2 className={`border-y border-[#202020] text-[22px] text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200 font-semibold ${language == "hi" ? "leading-10" : null}`}>
            {
              language == "en" ? "SKILLS" : "कौशल"
            }
          </h2>
          <div className='flex flex-wrap w-full space-x-1 border-y border-[#202020]'>
            {
              skills.map((skill, index) => (
                skill == "|" ? null :
                  <span key={index} className={`${geistMono.className} text-sm text-gray-300`}>
                    {skill.toUpperCase() + ", "}
                  </span>
              ))
            }
          </div>
        </div>

        <div className='gap-3 flex flex-col flex-wrap '>
          <h2 className={`border-y border-[#202020] text-[22px] text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-white font-semibold ${language == "hi" ? "leading-10" : null}`}>
            {
              language == "en" ? "EDUCATION" : "शिक्षा"
            }
          </h2>
          <div className='flex border-t border-[#202020] justify-between items-center'>
            <div className='flex flex-col -space-y-0.5'>
              <span className='text-sm'>B.Tech in Computer Science</span>
              <span className='text-sm text-gray-400'>Maharishi Dayanand University</span>
            </div>
            <span className='text-sm'>7.4 CGPA</span>
          </div>
          <div className='flex border-b border-[#202020] justify-between items-center'>
            <div className='flex flex-col -space-y-0.5'>
              <span className='text-sm'>Senior Secondary School</span>
              <span className='text-sm text-gray-400'>Atal Adarsh Vidhyalay</span>
            </div>
            <span className='text-sm'>80 %</span>
          </div>
        </div>

        <div>

        </div>

      </div>

    </motion.div >
  )
}

export default About
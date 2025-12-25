"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { Geist_Mono } from 'next/font/google'

const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["400"]
})

function NotFound() {
    return (
        <motion.div
            className={` ${geistMono.className} w-[90%] sm:w-[60%] lg:w-[65%] xl:w-[48%] border-x border-[#202020] flex flex-col items-center justify-center`}
        >
            <div className='border-y border-[#202020] w-full text-lg flex justify-center items-center'>
                404 PAGE NOT FOUND
            </div>

        </motion.div>
    )
}

export default NotFound
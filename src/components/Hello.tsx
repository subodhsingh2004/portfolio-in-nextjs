"use client"
import React from 'react'
import { Geist } from 'next/font/google'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore';

const geistSans = Geist({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function Hello() {
    const { language } = useStore()
    return (
        <motion.div
            className="flex items-center justify-center border-y border-[#191919] w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, ease: 'easeInOut' }}
        >

            <h2 className={`${geistSans.className} text-5xl leading-18 ${language == "en" ? "md:text-6xl" : null} text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200 font-semibold`}>
                {
                    language == "en" ? "Hello" : "हैलो"
                }
            </h2>

            <motion.span
                className="text-5xl"
                animate={{
                    rotate: [0, 20, -10, 20, -10, 0],
                }}
                transition={{
                    duration: 1,
                    delay: .5,
                }}
            >
                👋
            </motion.span>
        </motion.div>
    )
}

export default Hello
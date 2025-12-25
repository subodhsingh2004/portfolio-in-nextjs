"use client"

import React from 'react'
import { Roboto_Mono, Geist_Mono } from 'next/font/google'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useStore } from '@/store/useStore'

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
})

interface NavItem {
    path: string
    labels: Record<"en" | "hi", string>
    // you can add more fields here like icon, tooltip, etc.
}

const navItems: NavItem[] = [
    {
        path: '/',
        labels: {
            en: 'HOME',
            hi: 'होम',
        },
    },
    {
        path: '/about',
        labels: {
            en: 'ABOUT',
            hi: 'परिचय',
        },
    },
    {
        path: '/projects',
        labels: {
            en: 'PROJECTS',
            hi: 'परियोजनाएँ',
        },
    },
    {
        path: '/extras',
        labels: {
            en: 'EXTRAS✨',
            hi: 'अतिरिक्त✨',
        },
    },
]

function Navbar() {
    const pathName = usePathname()
    const { language } = useStore()

    return (
        <div className={`${robotoMono.className} w-full flex justify-center items-center h-[70px] z-50 fixed text-white`}>

            <ul className='flex w-[90%] h-full sm:w-[60%] lg:w-[65%] xl:w-[48%] backdrop-blur-md bg-black/30 shadow-md items-center justify-center space-x-8 sm:space-x-10 border-x border-b border-[#202020]'>
                {
                    navItems.map((item, index) => {
                        const label = item.labels[language]
                        const isActive = item.path == pathName
                        const delay = pathName == "/" ? 1 + (index * 0.25) : 0

                        return (
                            pathName == "/" ?
                                <motion.li
                                    key={index}
                                    className={`${isActive ? "text-blue-600 font-medium" : "text-white"} ${language == "hi" ? "text-[16px]]" : "text-sm"} md:text-[16px]`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: .25, delay: delay, ease: 'easeInOut' }}
                                >
                                    <Link href={item.path}>
                                        {label}
                                    </Link>
                                </motion.li> :

                                <li
                                    key={index}
                                    className={`${isActive ? "text-blue-600 font-medium" : "text-white"} ${language == "hi" ? "text-[16px]]" : "text-sm"} md:text-[16px]`}
                                >
                                    <Link href={item.path}>
                                        {label}
                                    </Link>
                                </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Navbar
"use client"
import React from 'react'
import { Geist_Mono } from 'next/font/google'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import Link from 'next/link'
import Image from 'next/image'

const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
})

const Projects = [

    {
        name: "SHOPSPHERE",
        techStack: "REACTJS, EXPRESS, MONGODB",
        description: {
            en: "Developed a full-featured eCommerce platform with secure authentication, dynamic cart management, seamless Razorpay integration, responsive UI,  and smooth user experience across devices.",
            hi: "एक पूर्ण विशेषताओं वाला ई-कॉमर्स प्लेटफ़ॉर्म विकसित किया जिसमें सुरक्षित प्रमाणीकरण, गतिशील कार्ट प्रबंधन, निर्बाध Razorpay एकीकरण, उत्तरदायी UI, और उपकरणों के बीच सुचारू उपयोगकर्ता अनुभव शामिल है।"
        },
        image: "/shopsphere2.png",
        link: "https://shopsphere-80d1.onrender.com/"
    },
    {
        name: "BLOGBUZZ",
        techStack: "REACTJS, EXPRESS, MONGODB",
        description: {
            en: "Developed a blogging platform with user authentication, CRUD operations for posts and responsive design for seamless user experience across devices.",
            hi: "यूज़र लॉगिन सिस्टम, पोस्ट को जोड़ने, देखने, बदलने और हटाने की सुविधा तथा हर डिवाइस पर सही तरह से चलने वाला रिस्पॉन्सिव ब्लॉगिंग प्लेटफ़ॉर्म बनाया।"
        },
        image: "/blogbuzz.png",
        link: "https://blogbuzz-72f9.onrender.com/"
    }

]

function MyProjects() {
    const { language } = useStore()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5, ease: "easeInOut" }}
        >
            <div className={`${geistMono.className} flex flex-col justify-center space-y-14`}>

                {
                    Projects.map((project, index) => (
                        <div key={index} className='flex flex-col space-y-4'>
                            <div className='flex justify-between items-center border-y border-[#202020] leading-none space-y-1'>
                                <div className='flex flex-col'>
                                    <h2 className='bg-linear-to-b from-gray-500 to-white bg-clip-text text-transparent font-medium pt-1 text-[21px]'>{project.name}</h2>
                                    <span className='text-xs text-gray-500'>{project.techStack}</span>
                                </div>
                                <Link href={project.link}>
                                    <Image src={"/arrow.png"} width={20} height={20} alt='arrow' />
                                </Link>
                            </div>
                            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1 border-y border-[#202020]'>
                                <Image src={project.image} alt="project-image" className='w-full border-b md:border-r border-[#202020] md:w-[280px]' />
                                <p className='text-sm border-t border-[#202020] text-center md:text-start text-gray-400'>
                                    {language === "en" ? project.description.en : project.description.hi}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </motion.div>
    )
}

export default MyProjects
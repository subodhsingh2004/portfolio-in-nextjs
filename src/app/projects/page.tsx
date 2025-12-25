import React from 'react'
import { Metadata } from 'next'
// import { Geist_Mono } from 'next/font/google';
import MyProjects from '@/components/MyProjects';

// const geistMono = Geist_Mono({
//     subsets: ["latin"],
//     weight: ["400", "700"]
// })

export const metadata: Metadata = {
    title: "Projects ~ Subodh Singh",
    description: "A showcase of my projects",
};


function page() {
    return (

        <div className="w-[90%] sm:w-[60%] lg:w-[65%] xl:w-[48%] border-x border-[#202020] flex flex-col items-center justify-center space-y-6 pt-[100px] lg:p-0 pb-20">

            <MyProjects />

        </div >
    )
}

export default page
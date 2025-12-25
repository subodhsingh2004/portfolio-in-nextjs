import About from '@/components/About';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About ~ Subodh Singh",
  description: "About me",
};

function page() {
  return (
    <div className="w-[90%] sm:w-[60%] lg:w-[65%] xl:w-[48%] border-x border-[#202020] flex flex-col items-center justify-center space-y-6">

      <About />

    </div>

  )
}

export default page
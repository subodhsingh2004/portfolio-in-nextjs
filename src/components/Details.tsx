"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { Roboto_Mono } from 'next/font/google';
import { useStore } from '@/store/useStore';

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    weight: ["400", "600"],
});

function Details() {
    const { language } = useStore()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5, delay: .5, ease: "easeInOut" }}
            className='flex flex-col items-center border-y border-[#191919]'
        >
            {
                language == "en" ?
                    <p
                        className={`${robotoMono.className} text-gray-400 leading-6 sm:leading-6 tracking-tighter text-center text-sm md:text-[16px] select-none cursor-text`}
                    >
                        I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Subodh Singh</span> a full-stack developer who loves turning ideas
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.4, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: .5,
                                ease: "easeInOut",
                            }}
                        >💡</motion.span>
                        into clean, functional code. From slick frontends 🎨to solid backends🛠️. I build stuff that works and looks good😎. I level up ⬆️through lines of code and battle ⚔️ bugs daily.
                    </p> :
                    <p className={`${robotoMono.className} text-gray-400 leading-6 sm:leading-6 tracking-tighter text-center text-sm md:text-[16px] select-none cursor-text`}>
                        मैं एक फुल-स्टैक डेवलपर हूँ जिसे आइडियाज़ को साफ़, काम करने वाले कोड में बदलना बहुत पसंद है। स्टाइलिश फ्रंटएंड्स से लेकर मज़बूत बैकएंड्स तक — मैं ऐसी चीज़ें बनाता हूँ जो बढ़िया दिखती हैं और बेहतरीन तरीके से काम करती हैं।
                    </p>
            }

        </motion.div >
    )
}

export default Details
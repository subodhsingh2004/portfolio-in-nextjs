"use client"

import React from 'react'
import { Geist_Mono } from 'next/font/google';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TranslateIcon from '@mui/icons-material/Translate';
import { useStore } from '@/store/useStore';
import { LinkedIn, X } from '@mui/icons-material';
import Game from './Game';
import Link from 'next/link';

const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
})

type Language = "en" | "hi";
type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

type Greetings = {
    [key in Language]: {
        [key in TimeOfDay]: string;
    }
};

const greetings: Greetings = {
    en: {
        morning: 'GOOD MORNING',
        afternoon: 'GOOD AFTERNOON',
        evening: 'GOOD EVENING',
        night: 'GOOD NIGHT',
    },
    hi: {
        morning: 'सुप्रभात',
        afternoon: 'शुभ दोपहर',
        evening: 'शुभ संध्या',
        night: 'शुभ रात्रि',
    }
};

function Extras() {

    const { language, gameOneBoxVisibility, toggleLanguage, toggleGameOneBoxVisibility } = useStore()

    // function to check whether it is morning, afternoon or evening
    const getTimeOfDay = (): TimeOfDay => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 16) return 'afternoon';
        if (hour >= 16 && hour < 19) return 'evening';
        return 'night';
    };

    return (
        <div
            className={`${geistMono.className} h-full space-y-10 relative flex flex-col w-full`}
        >
            {gameOneBoxVisibility && <Game />}


            <h2 className={`border-y border-[#202020] text-[20px] lg:text-[22px] text-transparent bg-clip-text bg-linear-to-b from-gray-500 to-gray-200 font-semibold`}>
                {greetings[language][getTimeOfDay()]}
            </h2>

            <div className='flex flex-col lg:flex-row justify-between items-center lg:border-y border-[#202020]'>

                <div className='text-sm md:text-[16px] space-x-2 py-2 w-full border-y lg:border-y-0 lg:border-r border-[#202020] text-gray-400 flex items-center'>
                    <SportsEsportsIcon sx={{ fontSize: "50px" }} />
                    <div className='flex flex-col items-start'>
                        <span>
                            {
                                language == "en" ? "Want to play a game?" : "क्या आप खेल खेलना चाहते हैं?"
                            }
                        </span>
                        <button onClick={toggleGameOneBoxVisibility} className='text-blue-400 cursor-pointer hover:text-blue-500'>
                            {
                                language == "en" ? "click" : "क्लिक करें"
                            }
                        </button>
                    </div>
                </div>

                <div className='text-sm lg:text-[16px] space-x-2 py-2 w-full border-y lg:border-y-0 lg:border-l border-[#202020] text-gray-400 flex items-center'>
                    <TranslateIcon sx={{ fontSize: "50px" }} />
                    <div className='flex flex-col items-start'>
                        <span>
                            {
                                language == "en" ? "Translate to hindi" : "अंग्रेज़ी में अनुवाद करें"
                            }
                        </span>
                        <button onClick={toggleLanguage} className='text-blue-400 cursor-pointer hover:text-blue-500'>
                            {
                                language == "en" ? "click" : "क्लिक करें"
                            }
                        </button>
                    </div>
                </div>

                {/* Add another section here */}


            </div>

            <div className='w-full py-2 text-center border-y border-[#202020]'>
                <span>
                    {
                        language == "en" ? "More section will be added soon..." :
                            "अधिक अनुभाग शीघ्र ही जोड़े जाएंगे..."
                    }
                </span>
                <p className='text-gray-400'>
                    {
                        language == "en" ? "Have an idea? Let me know!" : "कोई विचार है? मुझे बताएं!"
                    }
                </p>
                <div className='pt-4 gap-2 flex items-center justify-center text-gray-400'>

                    <Link href={"https://x.com/SubodhSingh05"}>
                    <X sx={{ fontSize: 20, cursor: 'pointer' }} />
                    </Link>

                    <Link href={"https://www.linkedin.com/in/subodh-singh05"}>
                    <LinkedIn sx={{ fontSize: 24, cursor: 'pointer' }} />
                    </Link>
                </div>
            </div>

            {/* last updated section */}
            <div className='w-full bottom-0 absolute py-2 text-center border-y border-[#202020]'>
                <span className='text-xs text-gray-400'>
                    {
                        language == "en" ? "Last updated at 19 NOV" : "अखिरी बार 19 नवंबर को अपडेट किया गया"
                    }
                </span>
            </div>

        </div>

    )
}

export default Extras
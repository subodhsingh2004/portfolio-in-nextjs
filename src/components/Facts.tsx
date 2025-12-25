"use client"
import React, { useEffect, useState } from 'react'
import { Roboto_Mono } from 'next/font/google';
import LoopIcon from '@mui/icons-material/Loop';
import { motion, useAnimation } from "framer-motion"
import { useStore } from '@/store/useStore';

const facts = [
  {
    "en": "First website launched in 1991.",
    "hi": "पहली वेबसाइट 1991 में लॉन्च हुई थी।"
  },
  {
    "en": "Octopuses have three hearts.",
    "hi": "ऑक्टोपस के तीन दिल होते हैं।"
  },
  {
    "en": "Moon experiences small moonquakes.",
    "hi": "चाँद पर छोटे-छोटे भूकंप आते हैं।"
  },
  {
    "en": "Email invented in 1971.",
    "hi": "ईमेल का आविष्कार 1971 में हुआ था।"
  },
  {
    "en": "Strawberries aren't berries.",
    "hi": "स्ट्रॉबेरी वास्तव में बेरी नहीं होती।"
  },
  {
    "en": "Lightning hotter than the sun.",
    "hi": "बिजली सूरज से भी ज्यादा गर्म होती है।"
  },
  {
    "en": "Eiffel Tower grows in summer.",
    "hi": "गर्मी में एफिल टावर लंबा हो जाता है।"
  },
  {
    "en": "Ants never sleep.",
    "hi": "चींटियाँ कभी नहीं सोतीं।"
  },
  {
    "en": "Honey never spoils.",
    "hi": "शहद कभी खराब नहीं होता।"
  },
  {
    "en": "Sharks predate trees.",
    "hi": "शार्क पेड़ों से पहले अस्तित्व में थीं।"
  },
  {
    "en": "Venus rotates backward compared to Earth.",
    "hi": "शुक्र ग्रह पृथ्वी की तुलना में उल्टी दिशा में घूमता है।"
  },
  {
    "en": "Day on Venus longer than year.",
    "hi": "शुक्र ग्रह का एक दिन उसके एक साल से लंबा होता है।"
  },
  {
    "en": "Bones are stronger than steel.",
    "hi": "हड्डियाँ स्टील से ज्यादा मजबूत होती हैं।"
  },
  {
    "en": "Humans share DNA with bananas.",
    "hi": "मनुष्यों का डीएनए केले से काफी हद तक मेल खाता है।"
  },
  {
    "en": "Space smells like burnt metal.",
    "hi": "अंतरिक्ष में जले हुए धातु जैसी गंध आती है।"
  },
  {
    "en": "Sneezes can exceed 100 mph.",
    "hi": "छींके 100 मील प्रति घंटे से तेज़ हो सकती हैं।"
  },
  {
    "en": "Jupiter’s Great Red Spot is shrinking.",
    "hi": "बृहस्पति का ग्रेट रेड स्पॉट छोटा हो रहा है।"
  },
  {
    "en": "Octopuses have nine brains.",
    "hi": "ऑक्टोपस के नौ दिमाग होते हैं।"
  },
  {
    "en": "Neutron stars spin 600x/second.",
    "hi": "न्यूट्रॉन तारे प्रति सेकंड 600 बार घूम सकते हैं।"
  },
  {
    "en": "Mars has the tallest volcano ever",
    "hi": "मंगल ग्रह पर अब तक का सबसे ऊँचा ज्वालामुखी है।"
  },
  {
    "en": "Cows have best friends.",
    "hi": "गायों के भी सबसे अच्छे दोस्त होते हैं।"
  },
  {
    "en": "A day on Mars is 24.6 hours long.",
    "hi": "मंगल ग्रह का एक दिन 24.6 घंटे का होता है।"
  },
  {
    "en": "Heart beats 100,000 times daily.",
    "hi": "दिल रोज़ाना 100,000 बार धड़कता है।"
  },
  {
    "en": "Humans have 5 million hairs.",
    "hi": "मनुष्य के शरीर पर लगभग 50 लाख बाल होते हैं।"
  },
  {
    "en": "Sun makes up 99.8% mass.",
    "hi": "सूरज पूरे सौरमंडल के द्रव्यमान का 99.8% है।"
  },
  {
    "en": "First mouse was wooden.",
    "hi": "पहला कंप्यूटर माउस लकड़ी का बना था।"
  },
  {
    "en": "Stomach lining renews every 3 days.",
    "hi": "पेट की परत हर 3 दिन में नई बन जाती है।"
  },
  {
    "en": "Space smells like seared steak.",
    "hi": "अंतरिक्ष में जली हुई स्टेक जैसी गंध आती है।"
  },
  {
    "en": "Planet made of diamonds exists.",
    "hi": "हीरों से बना एक ग्रह मौजूद है।"
  },
  {
    "en": "Europa may have alien oceans.",
    "hi": "यूरोपा पर एलियन महासागर हो सकते हैं।"
  },
  {
    "en": "Rain contains vitamin B12.",
    "hi": "बारिश में विटामिन B12 पाया जाता है।"
  }
]

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Facts() {

  const { language } = useStore()
  const [today, setToday] = useState<number>(0)
  const controls = useAnimation();

  const getToday = () => {
    const date = new Date()
    const day = date.getDate()
    setToday(day)
  }

  useEffect(() => {
    getToday()
  }, [])

  const getFacts = () => {
    if (!today) return
    return facts[today - 1][language];
  }

  const handleClick = () => {
    // Trigger the rotation animation
    controls.start({
      rotate: [0, -180],
      transition: { ease: "easeIn", duration: 0.25 },
    });

    setToday(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className='flex items-center'>

      <span>⚡</span>

      <div className={`${robotoMono.className} flex items-center text-xs text-gray-500 tracking-tight`}>
        {getFacts()}
      </div>

      <button onClick={handleClick} className="cursor-pointer flex items-center justify-center">
        <motion.span
          animate={controls}
          initial={{ rotate: 0 }}
          className='flex items-center justify-center'
        >
          <LoopIcon sx={{ fontSize: "18px", color: "#6a7282" }} />
        </motion.span>
      </button>

    </motion.div>
  )
}

export default Facts

import { Cancel } from '@mui/icons-material'
import React, { useState } from 'react'
import { useStore } from '@/store/useStore'

function Game() {
    const { language, toggleGameOneBoxVisibility } = useStore()
    const [move, setMove] = useState<string | null>(null)
    const [computerMove, setComputerMove] = useState<string | null>(null)
    const [status, setStatus] = useState<string | null>(null)
    const [myScore, setMyScore] = useState<number>(0)
    const [computerScore, setComputerScore] = useState<number>(0)

    const getMoveInHindi = (move: string) => {
        switch (move) {
            case "rock": return "पत्थर"
            case "paper": return "कागज"
            case "scissors": return "कैंची"
            default: return ""
        }
    }

    const setSelectedMove = (selectedMove: string) => {
        setMove(selectedMove)

        // computer's move
        const moves = ["rock", "paper", "scissors"]
        const computerMove = moves[Math.floor(Math.random() * moves.length)]
        setComputerMove(computerMove)

        // check winner
        if (selectedMove === computerMove) {
            language == "en" ? setStatus("draw") : setStatus("बराबरी")
        }
        else if (
            (selectedMove === "rock" && computerMove === "scissors") ||
            (selectedMove === "paper" && computerMove === "rock") ||
            (selectedMove === "scissors" && computerMove === "paper")
        ) {
            language == "en" ? setStatus("win") : setStatus("जीत")
            setMyScore(prev => prev + 1)
            setComputerScore(prev => prev - 1)
        } else {
            language == "en" ? setStatus("lose") : setStatus("हार")
            setMyScore(prev => prev - 1)
            setComputerScore(prev => prev + 1)
        }
    }

    return (
        <div className='w-full h-full backdrop-blur-sm bg-white/7 fixed top-0 left-0 z-50 flex justify-center items-center'>

            <div className='min-w-[320px] sm:w-[450px] h-[450px] bg-black flex flex-col items-center relative gap-10'>

                <div className='p-3 border-b border-[#202020] w-full flex justify-center items-center'>
                    <h2 className='text-lg text-transparent bg-clip-text bg-linear-to-b from-gray-500 to-gray-200 font-semibold'>
                        {
                            language == "en" ? "ROCK · PAPER · SCISSORS" :
                                "पत्थर · कागज · कैंची"
                        }
                    </h2>
                    <button onClick={toggleGameOneBoxVisibility} className='cursor-pointer absolute right-3 top-3 text-gray-400'><Cancel /></button>
                </div>

                <div>
                    <p className='text-sm text-gray-400 text-center'>
                        {language == "en" ? "You are playing against the computer" : "आप कंप्यूटर के खिलाफ खेल रहे हैं"}
                        <br />
                        <span>{language == "en" ? "+1 on win, -1 on lose" : "जीत पर +1, हार पर -1"}</span>
                    </p>
                </div>

                {/* Move Selection box */}
                <div className='flex flex-col w-full items-center border-y border-[#202020] justify-center gap-2'>
                    <span className='text-sm text-gray-400'>
                        {
                            language == "en" ? "Pick one from these options:" : "इन विकल्पों में से एक चुनें:"
                        }
                    </span>
                    <div className='space-x-5 text-sm border-t border-[#202020] w-full flex justify-center items-center'>
                        <button onClick={() => setSelectedMove("rock")} className={`border-x border-[#202020] px-4 py-2 cursor-pointer ${move === "rock" ? "bg-[#202020]" : ""} hover:bg-[#202020]`}>
                            {
                                language == "en" ? "🪨ROCK" : "🪨पत्थर"
                            }
                        </button>
                        <button onClick={() => setSelectedMove("paper")} className={`border-x border-[#202020] px-4 py-2 cursor-pointer ${move === "paper" ? "bg-[#202020]" : ""} hover:bg-[#202020]`}>
                            {
                                language == "en" ? "📄PAPER" : "📄कागज"
                            }
                        </button>
                        <button onClick={() => setSelectedMove("scissors")} className={`border-x border-[#202020] px-4 py-2 cursor-pointer ${move === "scissors" ? "bg-[#202020]" : ""} hover:bg-[#202020]`}>
                            {
                                language == "en" ? "✂️SCISSORS" : "✂️कैंची"
                            }
                        </button>
                    </div>
                </div>

                <div className='w-full flex justify-between border-y border-[#202020] px-1 text-sm'>
                    <div className='w-1/2 flex flex-col items-start pr-1'>
                        <span className='text-gray-400'>
                            {
                                language == "en" ? "You picked" : "तुमने चुना"
                            }
                        </span>
                        <span>
                            {move ? (language == "en" ? move.toUpperCase() : getMoveInHindi(move)) : ""}
                        </span>
                    </div>
                    <div className='w-1/2 text-right border-l border-[#202020] pl-1 flex flex-col items-end'>
                        <span className='text-gray-400'>
                            {
                                language == "en" ? "Computer picked" : "कंप्यूटर ने चुना"
                            }
                        </span>
                        <span>
                            {computerMove ? (language == "en" ? computerMove.toUpperCase() : getMoveInHindi(computerMove)) : ""}
                        </span>
                    </div>
                </div>


                <span className='text-blue-500 text-xl'>
                    {status ? (language == "en" ? status.toUpperCase() : status) : ""}
                </span>

                {/* Score Section */}
                <div className='absolute bottom-0 flex justify-between items-center border-t border-[#202020] w-full text-sm p-1'>

                    <span className='text-sm text-gray-200'>
                        {
                            language == "en" ? "YOU:" : "तुम:"
                        }
                        {
                            myScore
                        }
                    </span>
                    <span className='text-sm text-gray-400'>
                        {
                            language == "en" ? "COMPUTER:" : "कंप्यूटर:"
                        }
                        {
                            computerScore
                        }
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Game
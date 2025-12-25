import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Store {
    language: "en" | "hi"
    getLanguage: () => "en" | "hi"
    toggleLanguage: () => void
    gameOneBoxVisibility: boolean
    toggleGameOneBoxVisibility: () => void
}

export const useStore = create<Store>()(
    persist(
        (set, get) => ({
            language: "en",
            gameOneBoxVisibility: false,

            getLanguage: () => get().language,

            toggleLanguage: () => {
                set((state) => ({
                    language: state.language == "en" ? "hi" : "en"
                }))
            },
            toggleGameOneBoxVisibility: () => {
                set((state) => ({
                    gameOneBoxVisibility: !state.gameOneBoxVisibility
                }))
            }
        }),

        {
            name: 'store',
        }
    )
)

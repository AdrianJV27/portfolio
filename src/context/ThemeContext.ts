import { createContext } from "react"

interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

export type Theme = 'dark' | 'light'

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

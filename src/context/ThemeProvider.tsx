import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export function ThemeProvider({children}: {children: ReactNode}){
    const [theme, setTheme] = useState<Theme>( () => {
        const themeSaved = localStorage.getItem('theme') as Theme | null
        if (themeSaved) {
            return themeSaved
        }else if( window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark'
        }else{
            return 'light'
        }
    })

    useEffect(() => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark')
            document.querySelector('html')?.classList.add('dark')
        }else{
            localStorage.setItem('theme', 'light')
            document.querySelector('html')?.classList.remove('dark')
        }

    }, [theme])

    
    const toggleTheme = () => {
        setTheme( (prevState) => {
            return prevState === 'dark' ? 'light' : 'dark'
        })
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
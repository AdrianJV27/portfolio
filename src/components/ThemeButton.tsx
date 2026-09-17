import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from '../hooks/useTheme';

export function ThemeButton(){
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={ () => toggleTheme() } className=" cursor-pointer px-4 py-2 text-xs font-semibold rounded-full border transition-all">
                {
                  theme === 'dark' ? <MdOutlineLightMode/> : <MdDarkMode/> 
                }
              </button>
    )
}
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icons } from "@/components/icons";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [ isClient, setIsClient ] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined')
    })

    return (
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' && isClient ? <Icons.moon /> : <Icons.sun />}
        </div>
    )
}
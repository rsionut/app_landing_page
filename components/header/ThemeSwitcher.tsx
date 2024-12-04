'use client'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icons } from "@/components/icons";
import { cn } from "@/utils/cn";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined')
    }, [])

    const renderIcons = () => {
        if (!isClient) return null;
        return theme === 'light' ? <Icons.moon /> : <Icons.sun />;
    }

    return (
        <div
            className="w-12 rounded-full h-6 bg-contrast cursor-pointer flex items-center px-1/2 border relative select-none"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            role="button"
        >
            <span
                className={cn(
                    "text-center text-sm flex-shrink ml-auto absolute top-3 -translate-y-1/2",
                    isClient && theme === 'light' ? "ml-1/4 left-0" : "right-0 mr-1/4"
                )}
                role="img"
                aria-label="theme emoji"
            >
                {renderIcons()}
            </span>
        </div>
    )
}
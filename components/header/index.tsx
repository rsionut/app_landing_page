'use client'
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/utils/cn";
import AnimationLogo from "./AnimationLogo";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
    const { scrollY } = useScroll();
    const [ hasScrolled, setHasScrolled ] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setHasScrolled(latest > 20);
    })

    return (
        <div
            className={cn(
                'fixed top-0 z-50 w-full flex justify-between items-center',
                hasScrolled ? 'shadow-lg' : '',
            )}
        >
            <div>
                <AnimationLogo className='h-10 w-10' />
            </div>
            <div>menu</div>
            <div className="flex items-center gap-x-6">
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
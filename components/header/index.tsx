'use client'
import { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/cn";
import AnimationLogo from "./AnimationLogo";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
    const { scrollY } = useScroll();
    const [ hasScrolled, setHasScrolled ] = useState(false);
    const t = useTranslations();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setHasScrolled(latest > 20);
    })

    return (
        <div
            className={cn(
                'hidden fixed top-0 z-50 w-full justify-between items-center py-4 px-16',
                hasScrolled ? 'shadow-lg bg-gray-200/[0.2]' : '',
            )}
        >
            <div>
                <AnimationLogo className='h-16' />
            </div>
            <div className="hidden md:flex gap-4 lg:gap-8 text-2xl font-extrabold text-white font-[Manrope]">
                <Link href={"/"}>{t('home')}</Link>
                <Link href={"#feature"}>{t('feature')}</Link>
                <Link href={"#contact"}>{t('contact')}</Link>
            </div>
            <div className="flex items-center gap-x-6">
                <ThemeSwitcher />
                <LangSwitcher className = "w-36" />
            </div>
        </div>
    )
}
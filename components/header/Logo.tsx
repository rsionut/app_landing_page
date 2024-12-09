import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = ({
    className = '',
}) => {
    return (
        <div className={cn('flex items-center gap-x-4', className)}>
            <Image src="/images/rouleur_logo.png" alt="rouleur_logo" className="rounded-full shadow-[0_10px_10px_rgba(184, 224, 210)]" width={48} height={48} />
            <p className="hidden md:block text-[#95B8D1] text-[40px]">Rouleur</p>
        </div>
    )
}

export default Logo;
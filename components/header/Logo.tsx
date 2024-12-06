import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { LogoProps } from "./types";

const AnimationLogo: React.FC<LogoProps> = ({
    className = '',
}) => {
    return (
        <div className={cn('flex items-center', className)}>
            <Image src="/images/rouleur_logo.png" alt="rouleur_logo" className="rounded-full shadow-[0_10px_10px_rgba(184, 224, 210)]" width={64} height={64} />
        </div>
    )
}

export default AnimationLogo;
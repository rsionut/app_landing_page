import React from "react";
// import Lottie from 'lottie-react';
import { cn } from "@/utils/cn";
import { AnimationLogoProps } from "./types";
import { CustomImage } from "../custom/CustomImage";
// import animationData from '@/assets/json/rouleur.json';

const AnimationLogo: React.FC<AnimationLogoProps> = ({
    className = '',
    height = 64,
    width = 64,
    loop = true,
    autoplay = true
}) => {
    return (
        <div className={cn('flex items-center', className)}>
            {/* <Lottie 
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                style={{ height, width }}
            /> */}
            <CustomImage src="/images/rouleur_logo.png" alt="rouleur_logo" className="w-[60px] h-auto" />
        </div>
    )
}

export default AnimationLogo;
import React from "react";
import Lottie from 'lottie-react';
import { cn } from "@/utils/cn";
import { AnimationLogoProps } from "./types";
import animationData from '@/assets/json/rouleur.json';

const AnimationLogo: React.FC<AnimationLogoProps> = ({
    className = '',
    height = 64,
    width = 64,
    loop = true,
    autoplay = true
}) => {
    return (
        <div className={cn('flex items-center', className)}>
            <Lottie 
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                style={{ height, width }}
            />
            <p className="text-[64px]"><i>Rouleur</i></p>
        </div>
    )
}

export default AnimationLogo;
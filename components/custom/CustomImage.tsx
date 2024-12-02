import React from "react";
import Image from 'next/image';
import { cn } from "@/utils/cn";
import { CustomImageProps } from "./types";

export function CustomImage ({ src, alt, className = '' }: CustomImageProps) {
    return (
        <div className={cn('h-auto', className)}>
            <Image src={src} alt={alt} className="w-full h-auto" width={200} height={200} loading="lazy" />
        </div>
    )
}
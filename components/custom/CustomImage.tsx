import React from "react";
import Image from 'next/image';
import { cn } from "@/utils/cn";
import { CustomImageProps } from "./types";

export function CustomImage ({ src, alt, className = '', priority = false }: CustomImageProps) {
    return (
        <div className={cn('h-auto', className)}>
            <Image 
                src={src} 
                alt={alt} 
                width={800} 
                height={800} 
                loading={priority ? "eager" : "lazy"}
                priority={priority} 
            />
        </div>
    )
}
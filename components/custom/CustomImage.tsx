import React from "react";
import Image from 'next/image';
import { CustomImageProps } from "./types";

export function CustomImage ({ src, alt, width = '100%', height = 'auto', className = '', style }: CustomImageProps) {
    return (
        <div style={{ width: typeof width === 'number' ? `${width}px` : width, height, ...style }} className={className}>
            <Image src={src} alt={alt} className="w-full h-auto" loading="lazy" />
        </div>
    )
}
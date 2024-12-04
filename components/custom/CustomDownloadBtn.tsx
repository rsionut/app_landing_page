'use client'
import React from "react";
import Link from "next/link";
import { CustomImage } from "./CustomImage";

export function AppStoreDownloadBtn () {
    return (
        <Link className="shadow-download-btn rounded-xl" href={'https://apps.apple.com/us/app/rouleur-app/id6474559420'} target="_blank">
            <div 
                className='flex items-center px-8 py-2 rounded-xl bg-white hover:bg-gray-200'
                aria-label="Download from App Store"
            >
                <CustomImage src={'/images/apple_logo.png'} alt='apple_logo' className='w-[28px] md:w-[36px] h-auto' />
                <div className='ml-1 md:ml-2 flex flex-col text-[#333333]'>
                    <p className='text-start text-xs tracking-tight'>Download on the</p>
                    <p className='font-bold text-[16px] sm:text-[20px] md:text-[24px] tracking-wide'>App Store</p>
                </div>
            </div>
        </Link>
    )
}

export function GooglePlayDownloadBtn () {
    return (
        <Link className="shadow-download-btn rounded-xl" href={'https://play.google.com/store/apps/details?id=be.thinkmobile.rouleur'} target="_blank">
            <div 
                className='flex items-center px-8 py-2 rounded-xl bg-white hover:bg-gray-200'
                aria-label="Download from Google Play"
            >
                <CustomImage src={'/images/google_play.png'} alt='apple_logo' className='w-[28px] md:w-[36px] h-auto' />
                <div className='ml-1 md:ml-2 flex flex-col text-[#333333]'>
                    <p className='text-start text-xs tracking-tight'>GET IT ON</p>
                    <p className='font-bold text-[16px] sm:text-[20px] md:text-[24px] tracking-[-0.06em]'>Google Play</p>
                </div>
            </div>
        </Link>
    )
}
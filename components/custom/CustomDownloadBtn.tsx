'use client'
import React from "react";
import Link from "next/link";
import { CustomImage } from "./CustomImage";
import { Button } from "../ui/button";

export function AppStoreDownloadBtn () {
    return (
        <Link className="pr-1 pb-2 pl-1 border border-[#ACACAC] bg-[#ACACAC] rounded-xl cursor-pointer" href={'https://apps.apple.com/us/app/rouleur-app/id6474559420'} target="_blank">
            <Button className='p-8 rounded-xl bg-white hover:bg-gray-200'>
                <CustomImage src={'/images/apple_logo.png'} alt='apple_logo' className='w-[28px] md:w-[36px]' />
                <div className='ml-1 md:ml-2 flex flex-col text-[#333333]'>
                    <p className='text-start text-xs tracking-tight pb-1'>Download on the</p>
                    <p className='font-bold text-[16px] sm:text-[20px] md:text-[24px] tracking-wide'>App Store</p>
                </div>
            </Button>
        </Link>
    )
}

export function GooglePlayDownloadBtn () {
    return (
        <Link className="pr-1 pb-2 pl-1 border border-[#ACACAC] bg-[#ACACAC] rounded-xl cursor-pointer" href={'https://play.google.com/store/apps/details?id=be.thinkmobile.rouleur'} target="_blank">
            <Button className='p-8 rounded-xl bg-white hover:bg-gray-200'>
                <CustomImage src={'/images/google_play.png'} alt='apple_logo' className='w-[28px] md:w-[36px]' />
                <div className='ml-1 md:ml-2 flex flex-col text-[#333333]'>
                    <p className='text-start text-xs tracking-tight pb-1'>GET IT ON</p>
                    <p className='font-bold text-[16px] sm:text-[20px] md:text-[24px] tracking-[-0.06em]'>Google Play</p>
                </div>
            </Button>
        </Link>
    )
}
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export function AppStoreDownloadBtn () {
    return (
        <div className="pr-1 pb-2 pl-1 bg-[#ACACAC] rounded-xl cursor-pointer">
            <Button className='p-8 rounded-xl bg-white'>
                <Image src={'/images/apple_logo.png'} alt='apple_logo' width={36} height={36} />
                <div className='ml-2 flex flex-col text-[#333333]'>
                    <p className='text-start text-xs tracking-tight pb-1'>Download on the</p>
                    <p className='font-bold text-[24px] tracking-wide'>App Store</p>
                </div>
            </Button>
        </div>
    )
}

export function GooglePlayDownloadBtn () {
    return (
        <div className="pr-1 pb-2 pl-1 bg-[#ACACAC] rounded-xl cursor-pointer">
            <Button className='p-8 rounded-xl bg-white'>
                <Image src={'/images/google_play.png'} alt='apple_logo' width={36} height={36} />
                <div className='ml-2 flex flex-col text-[#333333]'>
                    <p className='text-start text-xs tracking-tight pb-1'>GET IT ON</p>
                    <p className='font-bold text-[24px] tracking-[-0.06em]'>Google Play</p>
                </div>
            </Button>
        </div>
    )
}
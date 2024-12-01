'use client'
import React from 'react';
import AnimationLogo from '../header/AnimationLogo';
import { TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn } from '../custom/CustomDownloadBtn';

export default function Footer () {
    return (
        <div className='bg-[#000000]'>
            <div className="flex bg-[url('/images/bg_footer_section.png')] bg-cover p-16">
                <div className='w-1/5 flex flex-col items-center'>
                    <AnimationLogo />
                    <p className='text-[20px] text-white text-center mt-6'>Simply the best cycling manage app! The powerups are a superb idea and give some dynamics in the competition.</p>
                    <div className='flex justify-center gap-x-4 mt-6'>
                        <div className='rounded p-1 bg-[#1DA1F2] cursor-pointer'><TwitterIcon color='white' fill='white' size={24} /></div>
                        <div className='rounded-full p-1 bg-[#0D89EF] cursor-pointer'><FacebookIcon color='white' fill='white' size={24} /></div>
                        <div className='rounded p-1 cursor-pointer bg-gradient-to-tr from-[#FA8F35] to-[#7A41B7]'><InstagramIcon color='white' size={24} /></div>
                    </div>
                </div>
                <div className='w-2/5 flex justify-center'>
                    <div>
                        <p className='text-[24px] font-semibold'>Quick Link</p>
                        <p className='mt-8 text-[24px]'>About Us</p>
                        <p className='text-[24px]'>Contact Us</p>
                        <p className='text-[24px]'>FAQs</p>
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-center gap-4'>
                    <AppStoreDownloadBtn />
                    <GooglePlayDownloadBtn />
                    <p className='text-[20px]'>Privacy Policy/Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}
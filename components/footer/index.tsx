'use client'
import React from 'react';
import AnimationLogo from '../header/AnimationLogo';
import { useTranslations } from 'next-intl';
import { TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn } from '../custom/CustomDownloadBtn';
import Link from 'next/link';

export default function Footer () {
    const t = useTranslations();
    return (
        <div className='bg-[#000000]'>
            <div className="flex flex-wrap justify-between items-center gap-8 md:gap-0 bg-[url('/images/bg_footer_section.png')] bg-cover p-8 md:p-16">
                <div className='w-full md:w-1/3 flex flex-col items-center'>
                    <AnimationLogo />
                    <p className='text-[20px] text-white text-center mt-6'>{t('footer_content')}</p>
                    <div className='flex justify-center gap-x-4 mt-6'>
                        <div 
                            className='rounded p-1 bg-[#1DA1F2] cursor-pointer'
                            role="button"
                            aria-label="Visit our Twitter"
                        >
                            <TwitterIcon color='white' fill='white' size={24} />
                        </div>
                        <div 
                            className='rounded-full p-1 bg-[#0D89EF] cursor-pointer'
                            role="button"
                            aria-label="Visit our Facebook"
                        >
                            <FacebookIcon color='white' fill='white' size={24} />
                        </div>
                        <div 
                            className='rounded p-1 cursor-pointer bg-gradient-to-tr from-[#FA8F35] to-[#7A41B7]'
                            role="button"
                            aria-label="Visit our Instagram"
                        >
                            <InstagramIcon color='white' size={24} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 flex flex-col items-center gap-4'>
                    <AppStoreDownloadBtn />
                    <GooglePlayDownloadBtn />
                    <Link
                        href="https://thinkmobile-public.s3.eu-central-1.amazonaws.com/Privacy-Policy-Termify.html"
                        target="_blank"
                        className='text-[12px] md:text-[20px] text-white hover:underline cursor-pointer'
                        aria-label="View privacy policy"
                    >
                        {t('privacy_policy')}
                    </Link>
                </div>
            </div>
        </div>
    )
}
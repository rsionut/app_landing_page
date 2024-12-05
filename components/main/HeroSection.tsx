import React from 'react';
import { CustomImage } from '../custom/CustomImage';
import { useTranslations } from 'next-intl';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn } from '../custom/CustomDownloadBtn';

const HeroSection = () => {
    const t = useTranslations();
    return (
        <div id='home' className="h-screen w-full flex flex-col md:flex-row md:justify-between items-center bg-hero-background bg-cover bg-center pt-24 px-8 md:px-16">
            <div className='w-full md:w-1/2 order-2 md:order-1 md:pt-16 text-white'>
                <p className='text-[20px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] text-center md:text-left font-extrabold'>{t('hero_title')}</p>
                <p className='text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-center md:text-left font-normal'>{t('hero_content')}</p>
                <div className='flex flex-wrap justify-center sm:justify-around mt-8 gap-4'>
                    <AppStoreDownloadBtn />
                    <GooglePlayDownloadBtn />
                </div>
            </div>
            <div className='w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center'>
                <CustomImage src={'/images/hero_phone.png'} alt='hero' className='w-[150px] sm:w-[200px] md:w-[300px]' priority />
            </div>
        </div>
    )
}

export default HeroSection;
import React from 'react';
import { CustomImage } from '../custom/CustomImage';
import { useTranslations } from 'next-intl';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn } from '../custom/CustomDownloadBtn';

const HeroSection = () => {
    const t = useTranslations();

    return (
        <div className="h-screen w-full flex justify-between items-center bg-hero-background bg-cover bg-center pt-24 px-16">
            <div className='w-1/2 text-white font-[Manrope]'>
                <p className='text-[56px] font-extrabold'>{t('hero_title')}</p>
                <p className='text-[36px] font-normal'>{t('hero_content')}</p>
                <div className='flex justify-around mt-4'>
                    <AppStoreDownloadBtn />
                    <GooglePlayDownloadBtn />
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <CustomImage src={'/images/hero_phone.png'} alt='hero' width={300} />
            </div>
        </div>
    )
}

export default HeroSection;
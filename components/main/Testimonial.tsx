import React from 'react';
import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn} from '../custom/CustomDownloadBtn';

export default function Testimonial () {
    const t = useTranslations();

    return (
        <div className='bg-background p-16'>
            <p className='text-center text-[40px] font-extrabold'>
                Why Cyclists Love Rouleur
            </p>
            <p className='text-center text-[32px]'>Compete with friends in Mini Leagues and connect with other cycling enthusiasts</p>
            <div className='pt-12'>
                <p className='text-center text-[40px] font-extrabold'>Testimonials</p>
                <div className='w-full flex flex-wrap justify-around pt-12'>
                    {
                        [1, 2, 3].map(index => (
                            <div className='w-[30%] drop-shadow-[0_24px_24px_rgba(89, 89, 89, 0.25)] flex flex-col justify-center text-center border border-[#bababa] rounded-xl p-8'>
                                <p className='font-extrabold text-[40px]'>{t(`testimonial_name_${index}`)}</p>
                                <p className='py-6 text-[32px]'>{t(`testimonial_content_${index}`)}</p>
                                <div className='flex justify-center gap-x-4'>
                                    {
                                        [1, 2, 3, 4, 5].map(() => (
                                            <Star fill='fllled' color='yellow' />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-center pt-12 gap-x-3'>
                <AppStoreDownloadBtn />
                <GooglePlayDownloadBtn />
            </div>
        </div>
    )
}
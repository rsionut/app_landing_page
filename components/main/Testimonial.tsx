import React from 'react';
import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn} from '../custom/CustomDownloadBtn';

export default function Testimonial () {
    const t = useTranslations();

    return (
        <div className='bg-background p-8 md:p-16'>
            <p className='text-center text-[32px] md:text-[36px] 2xl:text-[40px] font-extrabold'>
                {t('reason_title')}
            </p>
            <p className='text-center text-[24px] md:text-[28px] 2xl:text-[32px]'>{t('reason_content')}</p>
            <div className='pt-12'>
                <p className='text-center text-[32px] md:text-[36px] 2xl:text-[40px] font-extrabold'>{t('testimonial')}</p>
                <div className='w-full flex flex-wrap justify-around pt-12 gap-8'>
                    {
                        [1, 2, 3].map(index => (
                            <div key={`testimonial_${index}`} className='w-full lg:w-[400px] 2xl:w-[30%] drop-shadow-[0_24px_24px_rgba(89, 89, 89, 0.25)] flex flex-col justify-center text-center border border-[#bababa] rounded-xl p-8'>
                                <p className='font-extrabold text-[24px] md:text-[32px] 2xl:text-[40px]'>{t(`testimonial_name_${index}`)}</p>
                                <p className='py-6 text-[16px] md:text-[24px] 2xl:text-[32px]'>{t(`testimonial_content_${index}`)}</p>
                                <div className='flex justify-center gap-x-4'>
                                    {
                                        [1, 2, 3, 4, 5].map((starIndex) => (
                                            <Star key={`star_index_${starIndex}`} fill='fllled' color='yellow' />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-center flex-wrap pt-12 gap-3'>
                <AppStoreDownloadBtn />
                <GooglePlayDownloadBtn />
            </div>
        </div>
    )
}
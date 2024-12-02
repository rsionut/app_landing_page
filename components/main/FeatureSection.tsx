import React from 'react';
import { CustomImage } from '../custom/CustomImage';
import { Button } from '../ui/button';

export default function FeatureSection () {
    return (
        <div id='#feature' className='bg-background'>
            <div className="bg-[url('/images/bg_feature_section.png')] bg-cover bg-center">
                <div className='flex flex-wrap items-center py-16 px-8 md:px-16'>
                    <div className='w-full md:w-1/2 order-2 md:order-1'>
                        <p className='underline font-extrabold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] leading-7'>Core Features:</p>
                        <div>
                            <p className='pt-2 md:pt-5 font-extrabold text-[24px] sm:text[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-10'>Team Overview</p>
                            <p className='pt-4 md:pt-8 text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-6 md:leading-10'>Rouleur lets you create your team, make strategic transfers, and use Powerups to outsmart the competiton!</p>
                        </div>
                        <div className='pt-[70px]'>
                            <p className='font-extrabold text-[24px] sm:text[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-7'>User Benefits</p>
                            <div className='pt-4 md:pt-8 flex flex-col gap-1'>
                                <div className='flex gap-x-2'>
                                    <CustomImage src={'/images/order_icon.png'} alt='order_icon' className='w-[16px] pt-1 sm:pt-3' />
                                    <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>Customize your team with your favorite riders.</p>
                                </div>
                                <div className='flex gap-x-2'>
                                    <CustomImage src={'/images/order_icon.png'} alt='order_icon' className='w-[16px] pt-1 sm:pt-3' />
                                    <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>Gain an edge with smart transfers.</p>
                                </div>
                                <div className='flex gap-x-2'>
                                    <CustomImage src={'/images/order_icon.png'} alt='order_icon' className='w-[16px] pt-1 sm:pt-3' />
                                    <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>Use Powerups to amplify your strategy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 order-1 md:order-2 flex justify-center'>
                        <CustomImage src={'/images/feature_phone.png'} alt='feature_phone' className='w-[500px] h-auto' />
                    </div>
                </div>
                <div className='flex flex-wrap items-center'>
                    <div className='w-full md:w-1/2'>
                        <CustomImage src={'/images/season_game_image.png'} alt='season_game_image' className='w-full md:w-[400px] lg:w-[700px] h-auto' />
                    </div>
                    <div className='w-full md:w-1/2 p-8 md:pr-16'>
                        <p className='underline font-extrabold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] leading-7 text-end'>Seasonal Games:</p>
                        <p className='pt-5 font-extrabold text-[24px] sm:text[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-10 text-end'>Four Epic Games Every Year</p>
                        <div className='w-full flex justify-end'>
                            <div className='w-2/3'>
                                <p className='pt-8 text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-6 md:leading-10 text-end'>Complete in the biggest cycling events and test your skills year round.</p>
                            </div>
                        </div>
                        <div className='pt-8 flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Spring Classics</strong> - March 1st until April 27th</p>
                            <CustomImage src={'/images/order_icon.png'} alt='order_icon' className='w-[16px]' />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Giro d&apos;Italia</strong> - May 9th until June 1st</p>
                            <CustomImage src={'/images/order_icon.png'} alt='order_icon' className='w-[16px]' />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Tour de France</strong> - July 5th until 27th July</p>
                            <CustomImage src={'/images/order_icon.png'} alt='order_icon' className='w-[16px]' />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Vuelta à España - Start in August (TBC)</strong></p>
                            <CustomImage src={'/images/order_icon.png'} alt='order_icon' className='w-[16px]' />
                        </div>
                        <p className='pt-10 text-[24px] md:text-[28px] 2xl:text-[32px] text-end'>Stay in the game all year</p>
                        <div className='pt-6 flex justify-end'>
                            <Button className='text-[24px] md:text-[28px] 2xl:text-[32px] text-[#B7B7B7] font-extrabold bg-[#FFFFFF] border-8 border-[#DDDDDD] rounded-full px-6 md:px-12 py-4 md:py-8'>Download Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
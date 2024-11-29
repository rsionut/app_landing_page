import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function FeatureSection () {
    return (
        <div id='#feature' className='bg-background'>
            <div className="bg-[url('/images/bg_feature_section.png')] bg-cover bg-center">
                <div className='flex items-center py-16 px-16'>
                    <div className='w-1/2'>
                        <p className='underline font-extrabold text-[36px] leading-7'>Core Features:</p>
                        <div>
                            <p className='pt-5 font-extrabold text-[48px] leading-10'>Team Overview</p>
                            <p className='pt-8 text-[32px] leading-10'>Rouleur lets you create your team, make strategic transfers, and use Powerups to outsmart the competiton!</p>
                        </div>
                        <div className='pt-[70px]'>
                            <p className='font-extrabold text-[48px] leading-7'>User Benefits</p>
                            <div className='pt-8 flex flex-col gap-1'>
                                <div className='flex items-center gap-x-2'>
                                    <Image src={'/images/order_icon.png'} alt='order_icon' width={16} height={16} />
                                    <p className='text-[32px]'>Customize your team with your favorite riders.</p>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <Image src={'/images/order_icon.png'} alt='order_icon' width={16} height={16} />
                                    <p className='text-[32px]'>Gain an edge with smart transfers.</p>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <Image src={'/images/order_icon.png'} alt='order_icon' width={16} height={16} />
                                    <p className='text-[32px]'>Use Powerups to amplify your strategy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <Image src={'/images/feature_phone.png'} alt='feature_phone' width={574} height={376} />
                    </div>
                </div>
                <div className='flex items-center pr-16'>
                    <div className='w-1/2'>
                        <Image src={'/images/season_game_image.png'} alt='season_game_image' width={700} height={800} />
                    </div>
                    <div className='w-1/2'>
                        <p className='underline font-extrabold text-[36px] leading-7 text-end'>Seasonal Games:</p>
                        <p className='pt-5 font-extrabold text-[48px] leading-10 text-end'>Four Epic Games</p>
                        <p className='pt-3 font-extrabold text-[48px] leading-10 text-end'>Every Year</p>
                        <p className='pt-8 text-[32px] leading-10 text-end'>Complete in the biggest cycling</p>
                        <p className='text-[32px] leading-10 text-end'>events and test your skills</p>
                        <p className='text-[32px] leading-10 text-end'>year round.</p>
                        <div className='pt-8 flex items-center gap-x-2 justify-end'>
                            <p className='text-[32px]'><strong>Spring Classics</strong> - March 1st until April 27th</p>
                            <Image src={'/images/order_icon.png'} alt='order_icon' width={16} height={16} />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[32px]'><strong>Giro d'Italia</strong> - May 9th until June 1st</p>
                            <Image src={'/images/order_icon.png'} alt='order_icon' width={16} height={16} />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[32px]'><strong>Tour de France</strong> - July 5th until 27th July</p>
                            <Image src={'/images/order_icon.png'} alt='order_icon' width={16} height={16} />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[32px]'><strong>Vuelta à España - Start in August (TBC)</strong></p>
                            <Image src={'/images/order_icon.png'} alt='order_icon' width={16} height={16} />
                        </div>
                        <p className='pt-10 text-[32px] text-end'>Stay in the game all year</p>
                        <div className='pt-6 flex justify-end'>
                            <Button className='text-[32px] text-[#B7B7B7] rounded-full px-12 py-8'>Download Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
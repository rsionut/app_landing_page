import React from "react";
import { CustomImage } from "../custom/CustomImage";
import { Button } from "../ui/button";

export default function CommunitySection () {
    return (
        <div className="bg-convert_bg">
            <div className="flex flex-wrap bg-[url('/images/bg_community_section.png')] bg-contain bg-right bg-no-repeat p-8 md:p-16">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <p className="font-extrabold text-[40px] md:text-[64px] lg:text-[72px] xl:text-[84px] 2xl:text-[96px] leading-[4rem] 2xl:leading-[6rem]">Join the Rouleur Community</p>
                    <p className="pt-4 md:pt-10 text-[24px] md:text-[28px] 2xl:text-[32px]">Compete with friends in Mini Leagues and connect with other cycling enthusiasts</p>
                    <div className="flex justify-center md:justify-start">
                        <Button className="bg-[#191919] text-[#696969] text-[24px] md:text-[28px] 2xl:text-[32px] font-extrabold border-8 border-[#0E1011] rounded-full px-6 md:px-12 py-4 md:py-8 mt-8">JOIN NOW</Button>
                    </div>
                    <p className="pt-8 text-[24px] md:text-[28px] 2xl:text-[32px]">Mini League - it&apos;s more fun with friends</p>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                    <CustomImage src={'/images/community_phone.png'} alt="community_phone" className='w-[300px] md:w-[500px]' />
                </div>
            </div>
        </div>
    )
}
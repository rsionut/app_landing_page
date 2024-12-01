import React from "react";
import Image from 'next/image';
import { Button } from "../ui/button";
// import useScreenWidth from "@/utils/useScreenWidth";

export default function CommunitySection () {
    return (
        <div className="bg-convert_bg">
            <div className="flex bg-[url('/images/bg_community_section.png')] bg-contain bg-right bg-no-repeat p-16">
                <div className="w-1/2">
                    <p className="font-extrabold text-[96px] leading-[6rem]">Join the Rouleur Community</p>
                    <p className="pt-10 text-[32px]">Compete with friends in Mini Leagues and connect with other cycling enthusiasts</p>
                    <Button className="bg-[#191919] text-[#696969] text-[32px] font-extrabold border-8 border-[#0E1011] rounded-full px-12 py-8 mt-8">JOIN NOW</Button>
                    <p className="pt-8 text-[32px]">Mini League - it's more fun with friends</p>
                </div>
                <div className="w-1/2 flex justify-center">
                    <Image src={'/images/community_phone.png'} alt="community_phone" width={500} height={600} />
                </div>
            </div>
        </div>
    )
}
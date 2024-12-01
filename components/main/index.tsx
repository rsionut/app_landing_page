import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CommunitySection from "./CommunitySection";
import Testimonial from "./Testimonial";

export default function Main () {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <CommunitySection />
            <Testimonial />
        </div>
    )
}
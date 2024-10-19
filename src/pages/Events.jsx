import React from "react";
import EventBgCard from "../components/EventBgCard";
import Home from "../components/eventTimeline";
import BackgroundParticles from "../components/BackgroundParticles";
import FooterWithLogo from "../components/Footer";
import "../components/mouseScroll.css";

const OurTeam = () => {
    return (
        <>
            <div className="relative bg-primary">
                <div className="absolute z-[-1] inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm" />
                <div className="absolute z-[-2]">

                </div> <span className="text-black">.</span>
                <EventBgCard />
                <Home />
                <FooterWithLogo />
            </div>
        </>
    );
};

export default OurTeam;

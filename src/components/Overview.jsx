import React from "react";
import { Typography } from "@material-tailwind/react";
import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import config from "../App.config";
import images from "../assets/images/images";

const Overview = () => {
    return (
        <>
            <div className="Overview mt-8 mx-4" id="overview">
                <div className="overview_Heading ">
                    <Typography className="custom-font1 text-[2.5rem] lg:text-[4rem]  py-8 justify-center flex">
                        Overview
                    </Typography>
                    <Typography className=" text-[1.2rem] custom-font3 p-[35px] lg:p-[80px] text-center">
                        Resurgence Gaming is a website that aims to provide
                        gamers with a platform to connect, compete, and improve
                        their skills. The website is designed to be
                        user-friendly and intuitive, with a clean and modern
                        interface. One of the main features of Resurgence Gaming
                        is its matchmaking system, which allows players to find
                        opponents of a similar skill level. This ensures that
                        matches are competitive and fun for all involved. The
                        website also has a chat system, which allows players to
                        communicate with each other before, during, and after
                        matches
                    </Typography>
                    {/* <div className="flex ">
                    {config.whatDoWeDo.map((service, index) => {
                        return (
                            
                        );
                    })}
                </div> */}
                </div>
            </div>
        </>
    );
};

export default Overview;

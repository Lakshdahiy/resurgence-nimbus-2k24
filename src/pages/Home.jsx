import HorizontalLine from "../components/HorizontalLine";
import Overview from "../components/Overview";
import GameOn from "../components/GameOn";
import FooterWithLogo from "../components/Footer";
import "../components/WhatDoWeDo.css";
import "./Home.scss";
import React from "react";
import logo from "../assets/images/logo.png";
import Sponsors from "../components/sponsors";
import IMAGES from "../assets/images/images.jsx";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex absolute z-[30]">
        <img
          src={logo}
          alt="Resurgence"
          className="hidden lg:block h-[5rem] mt-1"
        />
        <Typography className="font-black lg:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] lg:leading-[98px]">
          Resurgence
        </Typography>
      </div>
      <div className="relative bg-primary">
        <div className="flex justify-between w-screen h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center items-center">
          <div className="flex flex-col items-center">
            <div className="ml-8 mt-8">
              <Typography className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Bring
              </Typography>
              <Typography className="glitch text-[#915eff] font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Gaming
              </Typography>
              <Typography className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                In your
              </Typography>
              <Typography className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Life!
              </Typography>

              <Button
                className="bg-[#915eff] no_underline rounded-xl text-[20px] font-black mt-6"
                onClick={(e) => {
                  window.location.href = "mailto:resurgencenith@gmail.com";
                  e.preventDefault();
                }}
              >
                Contact Us
              </Button>
              {/* <MailTo className="bg-[#915eff] mt-8" mailto="mail"/> */}
            </div>
          </div>
          <div className="">
            <img src={IMAGES[6]} alt="Resurgence" className="h-screen" />
          </div>
          <div className="flex flex-col grow ">
                <div className="font-black lg:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] lg:leading-[98px]">Gaming</div>
                <div className="font-black lg:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] lg:leading-[98px]">Learning</div>
                <div className="font-black lg:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] lg:leading-[98px]">Development</div>
          </div>
        </div>

        {/* <div>
          <div className=" w-screen h-screen ">
            <div
              className="flex w-screen h-screen justify-evenly items-center 
                flex-col lg:flex-row"
            >
              <div>
                <div className="home_main_text custom-font flex flex-col mt-[5rem] gap-[6rem] md:flex-row md:gap-0 ">
                  <div className="flicker text-[10rem] lg:text-[11rem]">
                    Res
                  </div>
                  <div className="text-[11rem] lg:text-[11rem]">urg </div>
                  <div className="fast-flicker text-[11rem] lg:text-[11rem]">
                    ence
                  </div>
                </div>
                <div
                  className="home_main_info glitch custom-font text-[2.4rem] lg:text-[4.5rem] mt-14"
                  data-text="For vibe, for games."
                >
                  For vibe, for games.
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <HorizontalLine />

        <Overview />

        <HorizontalLine />
        <Sponsors />
        <HorizontalLine />
        <GameOn />
        <FooterWithLogo />
      </div>
    </>
  );
};

export default Home;

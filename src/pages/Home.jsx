import HorizontalLine from "../components/HorizontalLine";
import Overview from "../components/Overview";
import GameOn from "../components/GameOn";
import FooterWithLogo from "../components/Footer";
import "../components/WhatDoWeDo.css";
import "./Home.scss";
import React from "react";
import logo from "../assets/images/logo.png";
import Sponsors from "../components/sponsors";
const Home = () => {
  return (
    <>
      <img
        src={logo}
        alt="sad"
        className="absolute z-[30] hidden lg:block w-[10rem]   "
      />
      <div className="relative">
        <div className="absolute z-[-1] inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm" />
        <div>
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
        </div>

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

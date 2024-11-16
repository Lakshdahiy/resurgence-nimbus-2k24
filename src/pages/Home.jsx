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
import Lottie from "lottie-react";
import controller from "../controller.json"

const Home = () => {
  return (
    <>
      <div className="flex absolute z-[30]">
        <img
          src={logo}
          alt="Resurgence"
          className="hidden lg:block h-[5rem] mt-1"
        />
        <Typography className="font-customFont my-8 mx-8 lg:my-0 lg:mx-0 font-black lg:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] lg:leading-[98px]">
          Resurgence
        </Typography>
      </div>
      <div className="relative bg-primary">
        <div className="flex flex-col lg:flex-row justify-between lg:w-screen lg:h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center lg:items-center">
          <div className="flex items-center">
            <div className="ml-8 lg:mt-32 h-screen lg:h-auto my-36 lg:my-8">
              <Typography className="font-customFont lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 my-8 lg:my-0">
                Bring
              </Typography>
              <Typography className="glitch text-[#915eff] font-customFont lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 my-8 lg:my-0">
                Gaming
              </Typography>
              <Typography className="font-customFont lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 my-8 lg:my-0">
                In your
              </Typography>
              <Typography className="font-customFont lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 my-8 lg:my-0">
                Life!
              </Typography>

              <Button
                className="bg-[#915eff] no_underline rounded-xl text-[20px] font-customFont mt-6 my-8 lg:my-0"
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
          <div className="flex justify-center items-center w-full h-full ">
        {/* controller image */}
        <Lottie 
        animationData={controller}
          className="min-[w-200px] min-[h-200px] max-[w-3000px] max-[h-3000px]  ml-24 "  // Tailwind dynamic sizing with specific px values
        />
      </div>
    



          <div className="flex flex-col basis-0 flex-1 grow w-screen  ml-8 mt-8 p-24 justify-evenly items-center ">
                <div className="font-customFont lg:text-[55px] sm:text-[45px] xs:text-[35px] text-[25px] lg:leading-[98px] mb-6 lg:mb-0">Gaming</div>
                <div className="font-customFont text:[20px] mb-12 lg:mb-0">Probably most important</div>
                <div className="font-customFont lg:text-[55px] sm:text-[45px] xs:text-[35px] text-[25px] lg:leading-[98px] mb-6 lg:mb-0">Learning</div>
                <div className="font-customFont text:[20px] mb-12 lg:mb-0">Next most important 😊</div>
                <div className="font-customFont lg:text-[55px] sm:text-[45px] xs:text-[35px] text-[25px] lg:leading-[98px] mb-6 lg:mb-0">Fun</div>
                <div className="font-customFont text:[20px] mb-12 lg:mb-0">Goes side by side</div>

          </div>

        </div>

        {/* previous hero section */}
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
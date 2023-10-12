import { Typography } from "@material-tailwind/react";
import logo from "../assets/images/logo.png";
import SocialLinks from "./SocialMedia";
import { Avatar } from "@material-tailwind/react";
import HorizontalLine from "./HorizontalLine";

const FooterWithLogo = () => {
    return (
        <>
            <HorizontalLine />
            <footer className="w-full px-8 py-2">
                {/* <hr className="my-8 border-dashed border-white-50" /> */}
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
                    <div className="flex gap-8">
                        
                        <img
                            src={logo}
                            alt="sad"
                            className=" hidden  lg:block w-[10rem]   "
                        />
                        <SocialLinks />
                    </div>
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Home
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#overview"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Overview
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#gameon"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Game-On
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#contactus"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </Typography>
                        </li>
                    </ul>
                </div>

                <Typography
                    color="white"
                    className="text-center font-normal pt-[20px]"
                >
                    Made With ❤️ by
                    <a href="#"> Team Resurgence </a>
                    &copy;
                </Typography>
            </footer>
        </>
    );
};

export default FooterWithLogo;

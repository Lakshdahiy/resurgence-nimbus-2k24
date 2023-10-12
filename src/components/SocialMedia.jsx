import React from "react";
import {
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaDiscord,
    FaYoutube,
} from "react-icons/fa";
export default function SocialLinks() {
    return (
        <div className="flex  justify-center items-center ">
            <a
                aria-label="Youtube"
                className=" flex items-center justify-center r-0  p-1.5 rounded-full bg-white text-black mt-4 hover:[#db5050] hover:text-[#db5050] ease-in-out duration-200 hover:scale-125"
                href="https://www.youtube.com/channel/UCZLHLmyqO8lNxgOp9XR57eQ"
                target={"_blank"}
            >
                <FaYoutube className="  w-7 h-7 md:w-7 md:h-7" />
            </a>

            <a
                className="flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-gradient-to-tr hover:from-[#fa7e1e] hover:to-[#962fbf] ease-in-out duration-200 hover:scale-125"
                aria-label="Instagram"
                href="https://www.instagram.com/resurgence_nith/"
                target={"_blank"}
            >
                <FaInstagram className="w-7 h-7 md:w-7 md:h-7" />
            </a>

            <a
                className=" flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-blue-600 transition-color  delay-250 ease-in-out duration-200 hover:scale-125"
                aria-label="Facebook"
                href=""
                target={"_blank"}
            >
                <FaFacebook className="w-7 h-7 md:w-7 md:h-7" />
            </a>

            <a
                aria-label="Discord"
                className="flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-[#576fbf] ease-in-out duration-200 hover:scale-125"
                href="https://discord.com/invite/5CKFMsBtjV"
                target={"_blank"}
            >
                <FaDiscord className="w-7 h-7 md:w-7 md:h-7" />
            </a>

            <a
                className="flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-[#0072b1] ease-in-out duration-200 hover:scale-125 "
                aria-label="LinkedIn"
                href=""
                target={"_blank"}
            >
                <FaLinkedin className="w-7 h-7 md:w-7 md:h-7" />
            </a>
        </div>
    );
}

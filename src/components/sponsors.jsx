import { Typography } from "@material-tailwind/react";
import image from "../assets/images/hill ffair logo.png";
import nimbus from '../assets/images/Nimbus.png'
import logo from "../assets/images/logo.png";



const Sponsors = () => {


    return (
        <>
            <div>
                <Typography className="custom-font1 text-[1.5rem] lg:text-[4rem] px-3  py-8 justify-center flex text-center">
                    In Corporation With
                </Typography>
                <div className="hillfaiir flex justify-center items-center gap-[4rem]">
                    <div> <img
                        className="w-48 lg:h-96 lg:w-96  object-cover "
                        src={image}
                        alt="nature image"
                    /></div>
                    <div> <img
                        className="w-48 lg:h-96 lg:w-96  object-cover "
                        src={nimbus}
                        alt="nature image"
                    /></div>

                </div>
                {/* <div className="sponsors flex grow justify-evenly my-[2rem]">
                    <div><img
                        src={logo}
                        alt="sad"
                        className="  w-[10rem]   "
                    /></div>
                    <div><img
                        src={logo}
                        alt="sad"
                        className="  w-[10rem]   "
                    /></div>
                    <div><img
                        src={logo}
                        alt="sad"
                        className="    w-[10rem]   "
                    /></div>
                    <div><img
                        src={logo}
                        alt="sad"
                        className="    w-[10rem]   "
                    /></div>
                </div> */}
            </div>
        </>
    )
}

export default Sponsors;
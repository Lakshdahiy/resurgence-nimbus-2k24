import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import image from "../assets/images/logo.png";
import SocialLinks from "./SocialMedia";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="sticky z-20">
            <Button
                onClick={handleOpen}
                className="bg-transparent text-[1.2rem] "
            >
                ☰
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                size="xxl"
                className="bg-[rgba(0,0,0,0.9)]"
            >
                <DialogHeader>
                    <Button
                        variant="text"
                        color="white"
                        onClick={handleOpen}
                        className="mx-1 text-[1.2rem] bg-[rgba(0,0,0,0.9)]  "
                    >
                        X
                    </Button>
                </DialogHeader>
                <div className="flex flex-col lg:flex-row justify-evenly gap-4 ">
                    <div className="img flex justify-center">
                        <img
                            className="w-48 lg:h-96 lg:w-96  object-cover "
                            src={image}
                            alt="nature image"
                        />
                        {/* <img
                            src={image}
                            alt="sad"
                            className="absolute z-[30] hidden lg:block w-[10rem]   "
                        /> */}
                    </div>
                    <div className="flex flex-col  justify-center items-center gap-4">
                        <Typography
                            as="li"
                            variant="xl"
                            color="white"
                            className="p-1 font-normal"
                        >
                            <a
                                href="/home"
                                className=" flex items-center custom-font1 text-[2rem]"
                            >
                                HOME
                            </a>
                        </Typography>{" "}
                        <Typography
                            as="li"
                            variant="xl"
                            color="white"
                            className="p-1 font-normal"
                        >
                            <a
                                href="/events"
                                className="flex items-center custom-font1 text-[2rem]"
                            >
                                Events
                            </a>
                        </Typography>{" "}
                        <Typography
                            as="li"
                            variant="xl"
                            color="white"
                            className="p-1 font-normal"
                        >
                            <a
                                href="/team"
                                className="flex items-center custom-font1 text-[2rem]"
                            >
                                Team Members
                            </a>
                        </Typography>
                    </div>
                </div>
                <div className="mt-16">
                    <SocialLinks />
                </div>
            </Dialog>
        </div>
    );
};

export default NavBar;

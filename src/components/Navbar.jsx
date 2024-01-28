import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import image from "../assets/images/logo.png";
import SocialLinks from "./SocialMedia";
import SnackBar from "../utils/Snackbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="sticky z-20">
      <Button onClick={handleOpen} className="bg-transparent text-[1.2rem] ">
        ☰
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xxl"
        className="bg-[rgba(0,0,0,0.9)]"
      >
        <div className="flex flex-col justify-end">
          <div className="flex justify-end my-px">
            <DialogHeader>
              <Button
                variant="text"
                color="white"
                onClick={handleOpen}
                className="mx-4 lg:mx-12 my-0 lg:my-1 text-[1.2rem] bg-[rgba(0,0,0,0.9)]"
              >
                X
              </Button>
            </DialogHeader>
          </div>
          <div className="flex flex-col lg:flex-row justify-around">
            <div className="img flex justify-center">
              <img
                className="w-48 lg:h-96 lg:w-96  object-cover "
                src={image}
                alt="logo"
              />
            </div>
            <div className="flex flex-row lg:flex-row justify-evenly gap-4 ">
              <div className="flex flex-col  justify-center items-center gap-4">
                <Typography
                  as="li"
                  variant="xl"
                  color="white"
                  className="p-1 font-normal"
                >
                  <Link
                    to="/home"
                    className=" flex items-center custom-font1 text-[2rem]"
                    onClick={handleOpen}
                  >
                    HOME
                  </Link>
                </Typography>{" "}
                <Typography
                  as="li"
                  variant="xl"
                  color="white"
                  className="p-1 font-normal"
                >
                  <Link
                    to="/events"
                    className="flex items-center custom-font1 text-[2rem]"
                    onClick={handleOpen}
                  >
                    Events
                  </Link>
                </Typography>{" "}
                <Typography
                  as="li"
                  variant="xl"
                  color="white"
                  className="p-1 font-normal"
                >
                  <Link
                    to="/team"
                    className="flex items-center custom-font1 text-[2rem]"
                    onClick={handleOpen}
                  >
                    Team Members
                  </Link>
                </Typography>
                <Typography
                  as="li"
                  variant="xl"
                  color="white"
                  className="p-1 font-normal"
                >
                  <Link
                    className="flex items-center custom-font1 text-[2rem]"
                    onClick={() => {
                      SnackBar("Coming Soon");
                    }}
                  >
                    Sponsers
                  </Link>
                </Typography>
                <Typography
                  as="li"
                  variant="xl"
                  color="white"
                  className="p-1 font-normal"
                >
                  <Link
                    className="flex items-center custom-font1 text-[2rem]"
                    onClick={() => {
                      SnackBar("Coming Soon");
                    }}
                  >
                    Projects
                  </Link>
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <SocialLinks />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default NavBar;

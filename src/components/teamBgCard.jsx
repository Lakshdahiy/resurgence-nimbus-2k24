import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import ProfileCard from "./profileCard";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const EventBgCard = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);
    return (
        <motion.div
            initial={{ y: "-150px", opacity: 0 }}
            transition={{
                type: "spring",
                delay: 0.3,
                duration: 0.85,
                ease: "easeOut",
            }}
            ref={ref}
            animate={controls}
            variants={{ show: { x: 0, y: 0, opacity: 1 } }}
        >
            <Typography
                color="white"
                className="mb-6 flex justify-center mt-2 text-center font-medium leading-[1] custom-font1 tracking-widest text-[1.5rem] lg:text-[5.5rem] py-[4.4rem] px-6 md:px-12"
            >
                Team Members
            </Typography>
        </motion.div>
    );
};

export default EventBgCard;

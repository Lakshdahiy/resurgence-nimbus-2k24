import { Typography } from "@material-tailwind/react";
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
                className="mb-6 flex justify-center font-medium leading-[1] custom-font1 tracking-widest text-[2.5rem] lg:text-[5.5rem] lg:pt-[2.2rem] lg:pb-[1.2rem] px-6 md:px-12"
            >
                Events
            </Typography>
        </motion.div>
    );
};

export default EventBgCard;

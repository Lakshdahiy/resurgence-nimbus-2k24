import React,{useEffect} from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import images from "../assets/images/images";

const Service =({ index, title }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                className="'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card m-5"
                initial={{ x: "-150px", opacity: 0 }}
                transition={{
                    type: "spring",
                    delay: 0.1 + (index+1)*0.2,
                    duration: 0.40,
                    ease: "easeOut",
                }}
                ref={ref}
                animate={controls}
                variants={{ show: { x: 0, y: 0, opacity: 1 } }}
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={images[index]}
                        alt="web-development"
                        className="w-16 h-16 object-contain"
                    />

                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
}



export default Service;
import React,{useEffect} from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import config from "../App.config";
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
        <Tilt className="card_outer">
            <motion.div
                className="card"
                initial={{ x: "-150px", opacity: 0 }}
                transition={{
                    type: "spring",
                    delay: 0.3 + index * 0.2,
                    duration: 0.25,
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
                    className="card-inner"
                >
                    <img
                        src={images[index]}
                        alt="web-development"
                        className="card_image"
                    />

                    <h3 className="card_title">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
}



export default Service;
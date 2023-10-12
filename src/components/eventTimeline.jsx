import { Chrono } from "react-chrono";
import { events } from "../config";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
    const items = events;
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);
    return (
        <div className="w-screen">
            <motion.div
                initial={{ y: "150px", opacity: 0 }}
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
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    hideControls="false"
                    cardHeight="400"
                    cardWidth="400"
                    fontSizes={{
                        cardSubtitle: '1rem',
                        cardText: '0.8rem',
                        cardTitle: '1.4rem',
                        title: '1.5rem',
                    }}
                    mediaHeight="400"
                    theme={{
                        primary: "#DB1F48",
                        secondary: "white",
                        cardBgColor: "rgba(0, 0, 0, 0.51)",
                        titleColor: "white",
                        cardDetailsColor: "white",
                        cardTitleColor:"white",
                        
                    }}
                />
                
            </motion.div>
        </div>
    );
};

export default Home;

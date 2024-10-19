import { Chrono } from "react-chrono";
import Slider from "react-slick";
import { events } from "../config";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CustomPrevArrow = (props) => {
    return (
        <div
            className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full cursor-pointer"
            onClick={props.onClick}
            style={{ top: "30%", transform: "translateY(-50%)" }} 
        >
            
        </div>
    );
};

const CustomNextArrow = (props) => {
    return (
        <div
            className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full cursor-pointer"
            onClick={props.onClick}
            style={{ top: "30%", transform: "translateY(-50%)",  } } 
        >
            &gt; {/* You can also use an icon here */}
        </div>
    );
};

const Home = () => {
    const items = events;
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    const setting = {
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: true,
        pauseOnHover: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="w-screen relative">
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
                <Slider {...setting}>
                    {events.map((event, index) => (
                        <div key={index} className="p-4 flex justify-center items-center">
                            <div className="text-center">
                                <img
                                    src={event.media.source.url}
                                    alt={event.cardTitle}
                                    className="w-full max-w-2xl h-auto object-contain mx-auto"
                                />
                                <h2 className="text-2xl text-white mt-4">{event.cardTitle}</h2>
                                <p className="text-white mt-2">{event.cardDetailedText}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
};

export default Home;

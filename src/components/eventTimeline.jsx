import Slider from "react-slick";
import { events } from "../config";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 6000, // Time between slides
        fade: true,
        pauseOnHover: true,
        afterChange: (current) => setCurrentEventIndex(current),
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
                {/* Main Event Display */}
                <div className="p-4 flex justify-center items-center">
                    <div className="text-center">
                        <img
                            src={events[currentEventIndex].media.source.url}
                            alt={events[currentEventIndex].cardTitle}
                            className="w-full max-w-xl h-auto object-contain mx-auto" // Reduced size
                        />
                        <h2 className="text-3xl text-white mt-4 font-bold max-w-xl mx-auto">
                            {events[currentEventIndex].cardTitle}
                        </h2>
                        <p className="text-white mt-2 max-w-xl mx-auto">
                            {events[currentEventIndex].cardDetailedText}
                        </p>
                    </div>
                </div>

                {/* Upcoming Events Thumbnails */}
                <div className="flex justify-center mt-8 gap-4">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer p-2 border-2 ${
                                index === currentEventIndex ? "border-yellow-500" : "border-transparent"
                            } rounded-md`}
                            onClick={() => setCurrentEventIndex(index)}
                        >
                            <img
                                src={event.media.source.url}
                                alt={event.cardTitle}
                                className="w-24 h-24 object-cover rounded-md"
                            />
                        </div>
                    ))}
                </div>

                {/* Event Details Carousel */}
                <div className="mt-12">
                    <Slider {...settings}>
                        {events.map((event, index) => (
                            <div key={index} className="p-4 flex justify-center items-center">
                                <div className="text-center">
                                    {/* Removed the text below the sub-main photo */}
                                    {/* Removed the arrows */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;



import React from "react";
import image from "../assets/images/WhatsApp Image 2023-10-05 at 10.07.31 PM.jpeg"
const BlurCard = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div
                className="bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg"></div>
                <div className="relative z-10 p-6">
                    <h1 className="text-4xl text-white font-bold">
                        Blurred Background
                    </h1>
                    <p className="text-white">
                        This div has a blur effect on the background.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlurCard;

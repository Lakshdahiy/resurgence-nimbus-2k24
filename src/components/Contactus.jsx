import React from "react";
import EarthCanvas from "../components/models/EarthCanvas";

const Contactus = () => {
    return (
        <>
            <div className=" max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-1 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg shadow-lg"
            id="contactus">
                <div className="flex items-center justify-center">
                    <h2 className="custom-font1 text-white text-[2rem] lg:text-[4rem] font-bold leading-tight">
                        Contact Us
                    </h2>
                </div>
                <div className="lg:px-[150px]">
                    <div>
                        <span className=" custom-font3 uppercase text-sm text-white font-bold">
                            Full Name
                        </span>
                        <input
                            className="w-full bg-[#272829] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder=""
                        />
                    </div>
                    <div className="mt-8">
                        <span className="custom-font3 uppercase text-sm text-white font-bold">
                            Email
                        </span>
                        <input
                            className="w-full bg-[#272829] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                        />
                    </div>
                    <div className="mt-8">
                        <span className="custom-font3 uppercase text-sm text-white font-bold">
                            Message
                        </span>
                        <textarea
                            className="w-full h-32 bg-[#272829] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            defaultValue={""}
                        />
                    </div>
                    <div className="mt-8">
                        <button className="custom-font3 uppercase text-sm font-bold tracking-wide bg-[#61677A] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
                <div className="w-[50%] flex justify-center h-[100%]">
                    <EarthCanvas />
                </div>
            </div>
        </>
    );
};

export default Contactus;

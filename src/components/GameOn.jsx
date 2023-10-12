import { React, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import FlappyBird from "../assets/flappy_bird/game";

const GameOn = () => {
    useEffect(() => {
        FlappyBird();
    });
    return (
        <>
            <div className="grid lg:grid-cols-2" id="gameon">
                <div className="GameOn_text ">
                    <Typography className="custom-font1 text-[2.5rem] lg:text-[4rem]  py-8 justify-center flex">
                        GameOn
                    </Typography>
                    <Typography className="text-[1.2rem] custom-font3 p-[35px] lg:p-[80px] text-center">
                        With the classic flappy bird! Resurgence is gaming club
                        of NIT Hamirpur. We are a gaming first, but not limited
                        to gaming club. We are a community of gamers,
                        developers, designers, and artists.
                    </Typography>
                </div>
                <div className="">
                    <canvas
                        className="mx-auto mb-10 border-solid border-2 border-white rounded"
                        id="canvas"
                        width="276"
                        height="414"
                    ></canvas>
                </div>
            </div>
        </>
    );
};

export default GameOn;

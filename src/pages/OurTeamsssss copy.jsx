import React from "react";
import BackgroundBlogCard from "../components/teamBgCard";
import ProfileCard from "../components/profileCard";
import TeamCarousel from "../components/teamCarousel";
import { Typography } from "@material-tailwind/react";
import Team from "../team_list - Copy.json";

const Events = () => {
    return (
        <>
            <BackgroundBlogCard />
            {/* <ProfileCard /> */}
            <TeamCarousel>
                <div className="border-b border-dashed py-7">
                    <Typography className="custom-font2 " variant="h2">
                        {Team["final_year"].map((elem) => {
                            const { name, post, photo, linkedin, instagram } =
                                elem;
                            return (
                                <ProfileCard
                                    key={name}
                                    data={{
                                        post,
                                        name,
                                        photo,
                                        linkedin,
                                        instagram,
                                    }}
                                />
                            );
                        })}
                    </Typography>
                </div>
            </TeamCarousel>
            {/* <div className="border-b border-dashed py-7">
                <Typography className="custom-font2 " variant="h2">
                    {Team["third_year"].map((elem) => {
                        const { name, post, photo, linkedin, instagram } = elem;

                        return (
                            <ProfileCard
                                key={name}
                                data={{
                                    post,
                                    name,
                                    photo,
                                    linkedin,
                                    instagram,
                                }}
                            />
                        );
                    })}
                </Typography>
                <TeamCarousel />
            </div>{" "}
            <div className="border-b border-dashed py-7">
                <Typography className="custom-font2 " variant="h2">
                    {Team["second_year"].map((elem) => {
                        const { name, post, photo, linkedin, instagram } = elem;

                        return (
                            <ProfileCard
                                key={name}
                                data={{
                                    post,
                                    name,
                                    photo,
                                    linkedin,
                                    instagram,
                                }}
                            />
                        );
                    })}
                </Typography>
                <TeamCarousel />
            </div>{" "}
            <div className="border-b border-dashed py-7">
                <Typography className="custom-font2 " variant="h2">
                    {Team["first_year"].map((elem) => {
                        const { name, post, photo, linkedin, instagram } = elem;

                        return (
                            <ProfileCard
                                key={name}
                                data={{
                                    post,
                                    name,
                                    photo,
                                    linkedin,
                                    instagram,
                                }}
                            />
                        );
                    })}
                </Typography>
                <TeamCarousel />
            </div> */}
        </>
    );
};

export default Events;

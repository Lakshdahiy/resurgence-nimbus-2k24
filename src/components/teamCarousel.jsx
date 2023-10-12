import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-tailwind/react";
import ProfileCard from "./profileCard";
import ProfileCard2 from "./profileCard2";
import Team from "../team_list - Copy.json";



const TeamCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px my-4"
                partialVisbile
                className="px-14 lg:p-12"
            >
                {/* <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 />
                <ProfileCard2 /> */}
                {/* <Typography className="custom-font2 " variant="h2">
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
                </Typography> */}

            </Carousel>
        </>
    );
};

export default TeamCarousel;

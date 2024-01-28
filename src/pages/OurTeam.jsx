import React from "react";
import BackgroundBlogCard from "../components/teamBgCard";
import ProfileCard from "../components/profileCard";
import TeamCarousel from "../components/teamCarousel";
import { Typography } from "@material-tailwind/react";
import Team from "../team_list - Copy.json";
import Carousel from "react-multi-carousel";
import BackgroundParticles from "../components/BackgroundParticles";
import FooterWithLogo from "../components/Footer";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
  },
};

const Events = () => {
  return (
    <>
      <div className="relative bg-primary">
        <div className="absolute z-[-1] inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm" />
        <BackgroundBlogCard />
        <h1 className="text-white text-[2.5rem] text-center mt-12 lg:ml-14 custom-font2 flex justify-center">
          FINAL YEAR
        </h1>
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
          itemClass="carousel-item-padding-40-px my-4"
          partialVisbile
          className="px-8 lg:p-12"
        >
          {Team["final_year"].map((elem) => {
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
        </Carousel>
        <h1 className="text-white text-[2.5rem] mt-12 lg:ml-14 custom-font2 flex justify-center">
          THIRD YEAR
        </h1>
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
          className="px-8lg:p-12"
        >
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
        </Carousel>
        <h1 className="text-white text-[2.5rem] mt-12 lg:ml-14 custom-font2 flex justify-center">
          SECOND YEAR
        </h1>{" "}
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
          className="px-8lg:p-12"
        >
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
        </Carousel>
        <h1 className="text-white text-[2.5rem] mt-12 lg:ml-14 custom-font2 flex justify-center">
          FIRST YEAR
        </h1>
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
          className="px-8 lg:p-12"
        >
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
        </Carousel>
        <FooterWithLogo />
      </div>
    </>
  );
};

export default Events;

// import Poster from "./poster.webp";
import video from "../../assets/video1.mp4";

const BackgroundVideo = () => (
    <>
        <div className="absolute top-0 left-0 object-cover w-full h-[95vh] lg:h-[95vh] z-0">
            <video
                // poster={Poster}
                autoPlay
                muted
                playsInline
                loop
                className="w-full lg:h-full object-cover"
            >
                <source src={video} type="video/mp4" />
            </video>
        </div>
        <div className="bg-black opacity-70 absolute top-0 left-0 object-cover w-full h-[95vh] lg:h-[95vh] z-2"></div>
    </>
);

export default BackgroundVideo;

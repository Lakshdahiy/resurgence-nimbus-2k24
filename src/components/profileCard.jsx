import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
    const { data } = props;
    // console.log(data)
    return (
        // data && (
        //     <div className="col-sm-6 col-lg-3 my-auto">
        //         <div className="box shadow-sm p-4 ">
        //             <div className="image-wrapper mb-3">
        //                 <img
        //                     className="img-fluid"
        //                     src={data.photo}
        //                     // alt={data.name}
        //                 />
        //             </div>
        //             <div className="box-desc">
        //                 <h5>{data.name}</h5>
        //                 <p>{data.post}</p>
        //             </div>
        //             <ul className="social">
        //                 <li>
        //                     <a href={data.linkedin}>
        //                         <i className="fab fa-linkedin-f align-center" />
        //                         <FiLinkedin />
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href= {data.instagram}>
        //                         <i className="fab fa-instagram fa-solid fa-align-center" />
        //                         <FiInstagram/>

        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // )

        data && (
            <>
                <Card className="w-96 bg-[#3B0918] mr-[25rem]">
                    <CardHeader floated={false} className="h-80">
                        <img
                            alt={data.name}
                            src={data.photo}
                            // height={50}
                            // width={50}
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography
                            variant="h4"
                            color=""
                            className="mb-2 text-[#B464A3]"
                        >
                            {data.name}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="font-medium custom-font3 text-[#DB1F48]"
                            // textGradient
                        >
                            {data.post}
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <Tooltip content="Linkedin">
                            <Typography
                                as="a"
                                href={data.linkedin}
                                variant="lead"
                                color="light-blue"
                                // textGradient
                            >
                                <i className="fab fa-twitter" />
                                <a href={data.linkedin} target={'_blank'}>
                                    <FiLinkedin className="w-6 h-6 " />
                                </a>
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Instagram">
                            <Typography
                                as="a"
                                href={data.instagram}
                                variant="lead"
                                color="purple"
                                // textGradient
                            >
                                <i className="fab fa-instagram" />
                                <a href={data.instagram} target={"_blank"}>
                                    <FiInstagram className="w-6 h-6 " />
                                </a>
                            </Typography>
                        </Tooltip>
                    </CardFooter>
                </Card>
                {/* <div className="flex items-center justify-center sm:p-4">
    <div className="flex items-center text-[#ffffffd6] justify-start w-full px-2 sm:px-4 ">
<img
  alt={data.name}
  src={data.photo}
  className={"rounded-full object-cover h-[50px] w-[50px]"}
  height={50}
  width={50}
/> */}
                {/* <p className="text-2xl font-semibold ml-4 text-[#ffffffd6]">
      {data.NickName}{" "}
    </p> */}
                {/* </div>
  <div className="p-3 text-[#ffffffd6] sm:p-4">
    <img
      alt={data.name}
      src={data.photo}
      className={
        " h-[300px] w-[280px] sm:h-[300px] sm:w-[330px] object-cover rounded-2xl shadow-2xl "
      }
      height={550}
      width={550}
    />
  </div>
  <div className="flex flex-col p-4">
    <div className=" flex flex-col text-[#ffffffae]">
      <p className="text-xl font-semibold">{data.Name}</p>
      <p>{data.post}</p>
    </div>
    <div className="flex flex-row justify-end ">
      {(
        <Link href={data.instagram} target={"_blank"}  >
          <div className="rounded-full cursor-pointer p-21 mr-2 bg-[#eae4d8] bg-opacity-50 hover:bg-[#ffffff] hover:scale-105">
            <FiInstagram className="w-6 h-6 " />
          </div>
        </Link>
      )}
      <Link href={data.linkedin} target={"_blank"}  >
         <div className="rounded-full cursor-pointer p-2 mr-2 bg-[#eae4d8] bg-opacity-50 hover:bg-[#ffffff] hover:scale-105">
          <FiLinkedin className="w-6 h-6 " />
       </div>
     </Link>
    </div>
  </div>
</div> */}
            </>
        )
    );
};

export default ProfileCard;

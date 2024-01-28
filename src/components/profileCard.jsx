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

const ProfileCard = (props) => {
    const { data } = props;
    return (
        data && (
            <>
                <Card className="w-96 bg-[#915eff] mr-[25rem]">
                    <CardHeader floated={false} className="h-80">
                        <img
                            alt={data.name}
                            src={data.photo}
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography
                            variant="h4"
                            color=""
                            className="mb-2 font-black text-white"
                        >
                            {data.name}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="font-medium font-black"
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
                            >
                                <i className="fab fa-instagram" />
                                <a href={data.instagram} target={"_blank"}>
                                    <FiInstagram className="w-6 h-6 " />
                                </a>
                            </Typography>
                        </Tooltip>
                    </CardFooter>
                </Card>
            </>
        )
    );
};

export default ProfileCard;

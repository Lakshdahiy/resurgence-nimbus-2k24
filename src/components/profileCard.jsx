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
            <Card className="w-96 bg-[#915eff] mx-auto mb-8">
                <CardHeader floated={false} className="h-80">
                    <img
                        alt={data.name}
                        src={data.photo}
                        className="w-full h-full object-cover" // Ensures image covers CardHeader
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography
                        variant="h4"
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
                    <Tooltip content="LinkedIn">
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                            <FiLinkedin className="w-6 h-6 text-light-blue-500" />
                        </a>
                    </Tooltip>
                    <Tooltip content="Instagram">
                        <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                            <FiInstagram className="w-6 h-6 text-purple-500" />
                        </a>
                    </Tooltip>
                </CardFooter>
            </Card>
        )
    );
};

export default ProfileCard;


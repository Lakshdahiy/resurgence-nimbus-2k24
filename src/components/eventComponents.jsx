import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const HorizontalCard = () => {
    return (
        <Card className="m-3 bg-[#1d1d1d] border lg:max-w-[68rem] flex lg:flex-row">
            <div className="">
            <Typography
                    variant="h2"
                    color="white"
                    className="m-4 uppercase font-bold custom-font3 "
                >
                    Event Name
                </Typography>
            <CardHeader
                shadow={false}
                floated={false}
                className="shrink-0 rounded-r-none mb-4"
            >
                
                <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            </div>
            <CardBody className="flex flex-col justify-center">
                
                <Typography variant="h4" color="white" className="mb-2">
                    TagLine
                </Typography>
                <Typography color="gray" className="mb-8 font-normal items-center">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
                </Typography>
            </CardBody>
        </Card>
    );
};

export default HorizontalCard;

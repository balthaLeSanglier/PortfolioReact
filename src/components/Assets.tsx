import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { DiScrum } from "react-icons/di";
import { FaChartGantt, FaCloud, FaCode } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/Assets.css";
import Asset from "./Asset";
import ScrollReveal from "./ScrollReaveal";


interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function SampleNextArrow(props: SampleArrowProps) {
    const { style, onClick } = props;
    return (
        <div className={"ArrowNextButton"}
            style={{ ...style, display: "block" }} onClick={onClick}>
            <IconButton  >
                <ArrowDownward />
            </IconButton>
        </div>
    );
}

function SamplePrevArrow(props: SampleArrowProps) {
    const { style, onClick, className } = props;
    return (
        <div
            className={"ArrowPreviousButton"}
            style={{ ...style, display: "block" }} onClick={onClick}>
            <IconButton  >
                <ArrowDownward />
            </IconButton>
        </div>);
}

const Assets: React.FC = () => {

    const matches = useMediaQuery('(min-width:600px)');


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: matches ? 3 : 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };
    return (
        <section>
            <ScrollReveal>
                <span>
                    <Typography variant="h2">APTITUDES</Typography>
                </span>

                <div className="slider-container">
                    <Slider {...settings}>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                            <Asset title={"Travail d'équipe"} asset={<RiTeamFill size={100} />}></Asset>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                            <Asset title={"Gestion de Projet Informatique"} asset={<FaChartGantt size={100} />}></Asset>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                            <Asset title={"Méthode agile"} asset={<DiScrum size={100} />}></Asset>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                            <Asset title={"Cloud computing"} asset={<FaCloud size={100} />}></Asset>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                            <Asset title={"Qualité du code"} asset={<FaCode size={100} />}></Asset>
                        </Stack>
                    </Slider>
                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2}>

                    </Stack>
                </div>

            </ScrollReveal>
        </section>
    )
}

export default Assets;
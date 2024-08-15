import { ArrowDownward } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import ScrollReveal from "./ScrollReaveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CompetencyRealiserTable from "./CompetencyRealiserTable";
import CompetencyOptimiserTable from "./CompetencyOptimiserTable";
import CompetencyAdministrerTable from "./CompetencyAdministrerTable";
import CompetencyGererTable from "./CompetencyGererTable";
import CompetencyConduireTable from "./CompetencyConduireTable";
import CompetencyCollaborerTable from "./CompetencyCollaborerTable";

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

const CompetencyTables = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };
    return(
        <section id="ComptencyTable">
            <ScrollReveal>
                <span>
                    <Typography variant="h2">TABLEAUX DE COMPETENCES</Typography>
                </span>
                <div className="slider-container">
                    <Slider {...settings}>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2} paddingInline={"2%"}>
                            <CompetencyRealiserTable></CompetencyRealiserTable>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2} paddingInline={"2%"}>
                            <CompetencyOptimiserTable></CompetencyOptimiserTable>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2} paddingInline={"2%"}>
                            <CompetencyAdministrerTable></CompetencyAdministrerTable>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2} paddingInline={"2%"}>
                            <CompetencyGererTable></CompetencyGererTable>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2} paddingInline={"2%"}>
                            <CompetencyConduireTable></CompetencyConduireTable>
                        </Stack>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2} paddingInline={"2%"}>
                            <CompetencyCollaborerTable></CompetencyCollaborerTable>
                        </Stack>
                    </Slider>
                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2}>

                    </Stack>
                </div>
                </ScrollReveal>
        </section>
    )
}

export default CompetencyTables;
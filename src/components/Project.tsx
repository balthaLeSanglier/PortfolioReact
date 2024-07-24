import { ArrowDownward } from "@mui/icons-material";
import { Grid, IconButton, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { ReactNode, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Project.css";
import DescriptionProjet from "./DescriptionProjet";
import SkillLearned from "./SkillLearned";
import TechUsed from "./TechUsed";

type Props = {
    image: string
    title: string
    techs: string[]
    skills: string[]
    description: string
    icon: ReactNode
    gitLink?: string
};

const Project: React.FC<Props> = ({ image, title, techs, skills, description, icon, gitLink }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const [displayDescription, setDisplayDescription] = useState(false)
    const [roundCorner, setRoundCorner] = useState(16)
    const [descriptionHeight, setDescriptionHeight] = useState(0)

    const descriptionProjet = useRef<HTMLDivElement>(document.createElement("div"));


    const onClick = () => {
        if (displayDescription) {
            setDescriptionHeight(0)
            setRoundCorner(16)
            setDisplayDescription(false)
        }
        else {
            setDescriptionHeight(descriptionProjet.current.clientHeight)
            setRoundCorner(0)
            setDisplayDescription(true)
        }
    }
    return (
        <section id="projects" className="Project" style={{ position: "relative" }}>
            <div className={matches ? "displayDescriptionButton" : "displayDescriptionButtonPortable"}>
                    <IconButton onClick={onClick} >
                        <ArrowDownward style={{ transform: displayDescription ? "rotate(-180deg)" : "rotate(0deg)", transition: "0.5s" }} />
                    </IconButton>
                </div>
            <Grid container justifyContent={"center"} zIndex={1} bgcolor="white" borderRadius={4} overflow="hidden" position={"relative"} style={{ transition: "0.5s", borderBottomLeftRadius: roundCorner, borderBottomRightRadius: roundCorner, marginBottom: descriptionHeight }}>
                <Grid item xs={12} sm={4}  >
                    <img src={image} width="100%" height={"100%"} />
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Stack height="100%" p={2} spacing={2}>
                        <Stack justifyContent={"space-between"} direction={"row"} alignItems={"center"}>
                            <span></span>
                            <Stack direction={"row"} spacing={3}>
                                <Typography variant="h5" alignItems={"center"} display={"flex"}>{icon}</Typography>
                                <Typography variant="h5">{title}</Typography>
                            </Stack>
                            <Tooltip title={gitLink ? "Accès aux projet GIT" : "Projet Confidentiel, Accès aux traces impossible"} placement="right-start" arrow slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 18],
                                            },
                                        },
                                    ],
                                },
                            }}>
                                <Typography color={gitLink ? "primary" : "text.secondary"}>
                                    <a href={gitLink} color={gitLink ? "text.primary" : "text.secondary"}><FaExternalLinkAlt color={gitLink ? "black" : "text.secondary"} /></a>
                                </Typography>
                            </Tooltip>

                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
                            {techs.map((tech, index) => (
                                <TechUsed techName={tech}></TechUsed>
                            ))}
                        </Stack>

                        <Stack spacing={2} direction={"column"} alignItems={"stretch"} flexWrap={"wrap"}>
                            {skills.map((skill, index) => (
                                <SkillLearned progress={100} skill={skill}></SkillLearned>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <div ref={descriptionProjet} className={displayDescription ? "DescriptionDisplay" : "DescriptionHide"} style={{ maxHeight: "200px", overflow: "scroll" }}>
                <DescriptionProjet description={description} />
            </div>
        </section>
    );
};
export default Project;
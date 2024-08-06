import { ArrowDownward } from "@mui/icons-material";
import { Grid, IconButton, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { ReactNode, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Project.css";
import DescriptionProjet from "./DescriptionProjet";
import SkillLearned from "./SkillLearned";
import TechUsed from "./TechUsed";
import { ProjectType } from "./ProjectList";


const Project: React.FC<ProjectType> = ({ image, title, techs, skills, description, icon, gitLink }) => {
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
        <section className="Project" style={{ position: "relative", width:"100%"}}>
            <div className={matches ? "displayDescriptionButton" : "displayDescriptionButtonPortable"}>
                    <IconButton onClick={onClick} >
                        <ArrowDownward style={{ transform: displayDescription ? "rotate(-180deg)" : "rotate(0deg)", transition: "0.5s" }} />
                    </IconButton>
                </div>
            <Grid container width={"100%"} justifyContent={"center"} zIndex={1} bgcolor="white" borderRadius={4} overflow="hidden" position={"relative"} style={{ transition: "0.5s", borderBottomLeftRadius: roundCorner, borderBottomRightRadius: roundCorner, marginBottom: descriptionHeight }}>
                <Grid item xs={12} sm={4}  sx={{ backgroundImage: `url(${image})`, backgroundSize:"cover", backgroundPosition:"center top"}}>
                    
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Stack height="100%" p={2} spacing={2}>
                        <Stack justifyContent={"space-between"} direction={"row"} alignItems={"center"}>
                            <span></span>
                            <Stack direction={"row"} spacing={3}>
                                <Typography variant="h5" alignItems={"center"} display={"flex"}>{icon}</Typography>
                                <Typography variant="h5">{title}</Typography>
                            </Stack>
                            <Tooltip title={gitLink ? "Accès aux traces" : "Projet Confidentiel, Accès aux traces impossible"} placement="right-start" arrow slotProps={{
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
                                    <a target="_blank" href={gitLink} color={gitLink ? "text.primary" : "text.secondary"}><FaExternalLinkAlt color={gitLink ? "black" : "text.secondary"} /></a>
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
            <div ref={descriptionProjet} className={displayDescription ? "DescriptionDisplay" : "DescriptionHide"} style={{ maxHeight: "200px", overflow: "hidden" }}>
                <DescriptionProjet description={description} />
            </div>
        </section>
    );
};
export default Project;
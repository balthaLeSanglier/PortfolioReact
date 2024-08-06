import { Grid, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import Project from "./Project";

import listProjet, { CompetencesProjetType, ProjectType } from "./ProjectList";
import ScrollReveal from "./ScrollReaveal";
import { FaCross, FaDotCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

const Projects: React.FC = () => {
  const matches = useMediaQuery('(min-width:1600px)');
  const [showAll, setShowAll] = useState(false);
  const reversedProjects = listProjet.reverse();
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if(showAll) {
      setShowAll(false)
      elementRef.current?.scrollIntoView()

    }
    else {
      setShowAll(true)

    }
  }

  const displayedProjetcts = showAll ? reversedProjects : reversedProjects.slice(0, 10);
  return (
    <section id="Projects" ref={elementRef}>
      <ScrollReveal>
        <span>
          <Typography variant="h2">PROJETS</Typography>
        </span>
        <Grid container direction={"row"} justifyContent={'center'} spacing={8}>
          <Grid item spacing={8} direction="row" container justifyContent={"center"} >
            {displayedProjetcts.map((projet, index) => (
              <Grid item xxl={6} lg={12} width={"100%"}>
                <Project
                  description={projet.description}
                  icon={projet.icon}
                  image={projet.image}
                  skills={projet.skills}
                  techs={projet.techs}
                  title={projet.title}
                  key={index}
                  gitLink={projet.gitLink}
                  competencesProjet={projet.competencesProjet}
                />
              </Grid>


            ))}

          </Grid>
          <Grid item>
            <IconButton onClick={handleClick} sx={{ backgroundColor: "white" }}>
              {showAll ? <FaXmark size={50}></FaXmark> : <BsThreeDots size={50}></BsThreeDots>}
            </IconButton>
          </Grid>
        </Grid>
      </ScrollReveal>

    </section>
  );
};

export default Projects;
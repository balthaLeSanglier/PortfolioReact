import { Grid, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";

import listProjet, { CompetencesProjetType, ProjectType } from "./ProjectList";
import ScrollReveal from "./ScrollReaveal";
import { BsThreeDots } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

const Projects: React.FC = () => {
  const [numberOfProjects, setNumberOfProjects] = useState(5);
  const reversedProjects = listProjet.toReversed();
  console.log(listProjet)
  console.log(reversedProjects)
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleShowMore = () => {
    if (numberOfProjects < reversedProjects.length) {
      setNumberOfProjects(prev => prev + 5);
    }
  };

  const handleShowLess = () => {
    setNumberOfProjects(5);
    elementRef.current?.scrollIntoView();
  };

  const displayedProjects = reversedProjects.slice(0, numberOfProjects);
  
  return (
    <section id="Projects" ref={elementRef}>
      <ScrollReveal>
        <span>
          <Typography variant="h2">PROJETS</Typography>
        </span>
        <Grid container direction={"row"} justifyContent={'center'} spacing={8}>
          <Grid item spacing={8} direction="row" container justifyContent={"center"}>
            {displayedProjects.map((projet, index) => (
              <Grid item xxl={6} lg={12} width={"100%"} key={index}>
                <Project
                  description={projet.description}
                  icon={projet.icon}
                  image={projet.image}
                  skills={projet.skills}
                  techs={projet.techs}
                  title={projet.title}
                  gitLink={projet.gitLink}
                  competencesProjet={projet.competencesProjet}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item>
            {numberOfProjects < reversedProjects.length ? (
              <IconButton onClick={handleShowMore} sx={{ backgroundColor: "white" }}>
                <BsThreeDots size={50} />
              </IconButton>
            ) : (
              <IconButton onClick={handleShowLess} sx={{ backgroundColor: "white" }}>
                <FaXmark size={50} />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
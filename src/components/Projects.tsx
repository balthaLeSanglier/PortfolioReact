import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import actToHtmlImage from "../assets/actToHtmlImage.png";
import logo from "../assets/logo.jpg";
import rgxImage1 from "../assets/rgx-Image1.png";
import rgxImage2 from "../assets/rgx-Image2.png";
import timeOffImage from "../assets/timeOffImage.png";
import Project from "./Project";

import { LocalGroceryStore, WebOutlined } from "@mui/icons-material";
import { FaToolbox } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import ScrollReveal from "./ScrollReaveal";


const Projects: React.FC = () => {

  const matches = useMediaQuery('(min-width:1600px)');

  return (
    <section id="Projects">
      <ScrollReveal>
        <span>
          <Typography variant="h2">PROJETS</Typography>
        </span>
        <Grid spacing={8} direction="row" container>
          <Grid item xxl={6} lg={12}>
            <Project description="Refonte d'une application de remonté de chiffre d'affaire du Groupe Casino en vue d'une migration de Framework"
              image={rgxImage1}
              icon={<LocalGroceryStore />}
              title="RGX - FWK4"
              techs={["Java", "Spring MVC", "Oracle", "JSP", "JavaScript", "GIT", "Maven", "Maven"]}
              skills={["Faire évoluer une application existante", "Profiler, analyser et justifier le comportement d'un code existant", "Choisir et implémenter les architectures adaptées"]}
            />
          </Grid>

          <Grid item xxl={6} lg={12}>
            <Project description="Application de suivi de projet. Développé 'From Scratch' en se basant sur Java Spring MVC."
              image={actToHtmlImage}
              icon={<WebOutlined />}
              title="ActToHtml"
              techs={["Java", "Spring MVC", "Thymeleaf", "JavaScript", "GIT", "Maven", "REST API"]}
              skills={["Accompagner le management d'un projet informatique", "Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information", "Adopter de bonnes pratiques de conception et de programmation"]}
            />
          </Grid>
          <Grid item xxl={6} lg={12}>
            <Project description="Application de visualisation des emplois du temps inter-équipes. Lecture des données dans le système SAP de l'entreprise"
              image={timeOffImage}
              icon={<FaCalendar />}
              title="TimeOff"
              techs={["Java", "SAPJCO3", "SAP", "HTML", "CSS", "GIT", "Maven", "Maven Assembly"]}
              skills={["Intégrer des solutions dans un environnement de production", "Organiser et partager une veille technologique et informationnelle", "Choisir et implémenter les architectures adaptées"]}
            />
          </Grid>
          <Grid item xxl={6} lg={12}>
            <Project description="Déploiement de correctif sur une application de remonté du chiffre d'affaires. Affranchissement d'un ancien système d'habilitation"
              image={rgxImage2}
              icon={<LocalGroceryStore />}
              title="RGX - FWK2"
              techs={["Java", "Struts", "JSP", "JavaScript", "GIT"]}
              skills={["Faire évoluer une application existante", "Profiler, analyser et justifier le comportement d'un code existant", "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique"]}
            />
          </Grid>
          <Grid item xxl={6} lg={12}>
            <Project description="truc"
              gitLink="wikipedia.com"
              image={logo}
              icon={<FaToolbox />}
              title="Outils HRA"
              techs={["Java", "Apache POI", "JavaFX", "MultiThreading", "Maven", "GIT"]}
              skills={["Anticiper les résultats de diverses métriques ", "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application", "Intégrer des solutions dans un environnement de production"]}
            />
          </Grid>
        </Grid>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
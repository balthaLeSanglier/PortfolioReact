import rgxImage1 from "../assets/rgx-Image1.png";
import rgxImage2 from "../assets/rgx-Image2.png";
import timeOffImage from "../assets/timeOffImage.png";
import hraImage from "../assets/hraImage.png";
import actToHtmlImage from "../assets/actToHtmlImage.png"
import annuaireCImage from "../assets/annuaireCImage.png"
import graphMapImage from "../assets/graphMap.png"
import rapportImage from "../assets/rapportImage.png"
import noticeImage from "../assets/noticeImage.png"
import sqlImage from "../assets/sqlImage.png"
import htmlImage from "../assets/htmlImage.png"
import rseImage from "../assets/rseImage.png"
import reseauImage from "../assets/reseauImage.png"
import powerBiImage from "../assets/powerBiImage.jpeg"
import s3Image from "../assets/s3Image.png"
import weatherClearImage from "../assets/weatherClearImage.png"
import { ReactNode } from "react";
import { FaBook, FaCalendar, FaCookieBite, FaDatabase, FaDollarSign, FaEuroSign, FaGift, FaHtml5, FaInfo, FaKey, FaList, FaMap, FaMapPin, FaServer, FaToolbox } from "react-icons/fa";
import { FaBandage, FaC } from "react-icons/fa6";
import { LocalGroceryStore, WebOutlined } from "@mui/icons-material";

export type CompetencesProjetType = {
    code: string,
    level: number
}

export type ProjectType = {
    image: string
    title: string
    techs: string[]
    skills: string[]
    description: string
    icon: ReactNode
    gitLink?: string
    competencesProjet: CompetencesProjetType[]
}

const listProjet: ProjectType[] = []

const saeC: ProjectType = {
    title: "Annuaire C",
    gitLink: 'https://forge.univ-lyon1.fr/p2102681/annuaire-c',
    techs: [
        "C",
        "CSV",
        "GIT"
    ],
    skills: [
        "Implémenter des conceptions simples",
        "Faire des essais et évaluer leurs résultats en regard des spécifications",
        "Élaborer des conceptions simples"
    ],
    description: "Outil réalisé en C, permettant d'effectuer diverse opération sur un annuaire CSV.",
    icon: <FaC></FaC>,
    image: annuaireCImage,
    competencesProjet: [
        { code: "AC11.01", level: 3 },
        { code: "AC11.02", level: 3 },
        { code: "AC11.03", level: 3 },
        { code: "AC11.04", level: 2 }
    ]
};
listProjet.push(saeC);



const saeAlgo: ProjectType = {
    title: "Rapport Algorithmique",
    gitLink: "https://drive.google.com/file/d/1DE1vmTCpe4M6h_RfHvgNkmikDQQR7tqb/view?usp=sharing",
    competencesProjet: [
        { code: "AC12.01", level: 3 },
        { code: "AC12.02", level: 3 },
        { code: "AC12.03", level: 3 },
    ],
    description: "Rédaction d'un rapport comparant les différents algorithmes utilisé dans le cadre du projet 'Annuaire C'",
    icon: <FaBook></FaBook>,
    image: rapportImage,
    skills: [
        "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)",
        "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)",
        "Formaliser et mettre en œuvre des outils mathématiques pour l’informatique"
    ],
    techs: [
        "Word"
    ]
};
listProjet.push(saeAlgo)

const saeGuideInstallation: ProjectType = {
    title: "Guide d'installation d'un poste Windows",
    gitLink: "https://drive.google.com/file/d/1NqS6cP1yYiDDyzXds-b9kntSlvm0WXpw/view?usp=sharing",
    competencesProjet: [
        { code: "AC13.01", level: 3 },
        { code: "AC13.02", level: 3 },
        { code: "AC13.03", level: 2 },
        { code: "AC13.04", level: 2 },
    ],
    description: "Notice d'installation d'un poste sur Windows en fonction du type d'utilisateur",
    icon: <FaBook></FaBook>,
    image: noticeImage,
    skills: [
        "nstaller et configurer un système d’exploitation et des outils de développement",
        "Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs",
        "Identifier les différents composants (matériels et logiciels) d’un système numérique"
    ],
    techs: [
        "Words"
    ]
};
listProjet.push(saeGuideInstallation)

const saeSql: ProjectType = {
    title: "Projet BD : Gestion de stage",
    gitLink: "https://drive.google.com/file/d/1IoQBmUkR3gykbUZzymg5wBM4BdND4saC/view?usp=sharing",
    competencesProjet: [
        { code: "AC14.01", level: 3 },
        { code: "AC14.02", level: 1 },
        { code: "AC14.03", level: 2 },
    ],
    description: "Création d'une base de donnée dans le cadre de la gestion de stages par une école",
    icon: <FaDatabase></FaDatabase>,
    image: sqlImage,
    skills: [
        "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
        "Visualiser des données",
        "Concevoir une base de données relationnelle à partir d’un cahier des charges"
    ],
    techs: [
        "SQL",
        "Oracle",
        "SQLdeveloper",
        "UML",
        "PowerAMC"
    ]
};
listProjet.push(saeSql)

const saeWeb: ProjectType = {
    title: "Site de présentation du B.U.T.",
    gitLink: "http://p2102297.pages.univ-lyon1.fr/sae_web-muhlstein-balthazar/index.html",
    competencesProjet: [
        { code: "AC15.01", level: 2 },
        { code: "AC15.02", level: 1 },
        { code: "AC15.03", level: 3 },
    ],
    description: "Site WEB statique présentant le B.U.T.",
    icon: <FaHtml5></FaHtml5>,
    image: htmlImage,
    skills: [
        "Appréhender les besoins du client et de l'utilisateur",
        "Mettre en place les outils de gestion de projet",
        "Identifier les acteurs et les différentes phases d’un cycle de développement"
    ],
    techs: [
        "HTML",
        "CSS",
        "GIT"
    ]
};
listProjet.push(saeWeb)

const saeEco: ProjectType = {
    title: "Rapport R.S.E. d'une entreprise",
    gitLink: "https://drive.google.com/file/d/1crlkE79LIhaTSfSDCQS_jvQNVdSLiW50/view?usp=sharing",
    competencesProjet: [
        { code: "AC16.01", level: 2 },
        { code: "AC16.02", level: 2 },
        { code: "AC16.03", level: 3 },
        { code: "AC16.04", level: 1 },
    ],
    description: "Rédaction d'un rapport sur la Responsabilité Sociétale de l'Entreprise 'CdProjekt'",
    icon: <FaBook></FaBook>,
    image: rseImage,
    skills: [
        "Appréhender l’écosystème numérique",
        "Acquérir les compétences interpersonnelles pour travailler en équipe",
        "Acquérir les compétences interpersonnelles pour travailler en équipe",
    ],
    techs: [
        "Word"
    ]
};
listProjet.push(saeEco)

const saeReseau: ProjectType = {
    title: "Installation d'un service réseau",
    gitLink: "https://drive.google.com/file/d/1EH-oikwVluSL2MPnSjZ7r0kN6VFYOlWs/view?usp=sharing",
    competencesProjet: [
        { code: "AC13.01", level: 3 },
        { code: "AC13.02", level: 3 },
        { code: "AC13.03", level: 2 },
        { code: "AC13.04", level: 3 },
    ],
    description: "Manuel d'installation de service Réseau : installation d'un serveur Apache",
    icon: <FaServer></FaServer>,
    image: reseauImage,
    skills: [
        "Configurer un poste de travail dans un réseau d’entreprise",
        "Identifier les différents composants (matériels et logiciels) d’un système numérique",
        "Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs"
    ],
    techs: [
        "Linux",
        "Apache",
    ]
};
listProjet.push(saeReseau)

const saeBI: ProjectType = {
    title: "Exploitation d'une base de donnée (B.I.)",
    gitLink: "https://drive.google.com/drive/folders/1BlzTU3O4pRuyXdzlqoUjonT7B33xC7lA?usp=sharing",
    competencesProjet: [
        { code: "AC14.01", level: 3 },
        { code: "AC14.02", level: 4 },
        { code: "AC14.03", level: 3 },
    ],
    description: "Création d'un rapport de Buisness Inteligence sur les ventes d'une entreprise",
    icon: <FaDollarSign></FaDollarSign>,
    image: powerBiImage,
    skills: [
        "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
        "Visualiser des données",
        "Concevoir une base de données relationnelle à partir d’un cahier des charges"
    ],
    techs: [
        "SQL",
        "PowerBi"
    ]
};
listProjet.push(saeBI)

const saePoster: ProjectType = {
    title: "Création d'un poster informatif",
    competencesProjet: [
        { code: "AC15.01", level: 1 },
        { code: "AC15.02", level: 2 },
        { code: "AC15.03", level: 3 },
    ],
    description: "Création d'un poster informatif sur l'automatisation des processus informatique",
    icon: <FaInfo></FaInfo>,
    image: "truc",
    skills: [
        "Appréhender les besoins du client et de l'utilisateur",
        "Mettre en place les outils de gestion de projet",
        "Identifier les acteurs et les différentes phases d’un cycle de développement"
    ],
    techs: [
        "Figma"
    ]
};
listProjet.push(saePoster)

const saeGraphMap: ProjectType = {
    title: "Graph Map",
    gitLink: "https://forge.univ-lyon1.fr/p2102522/graphmap",
    competencesProjet: [
        { code: "AC11.01", level: 3 },
        { code: "AC11.02", level: 4 },
        { code: "AC11.03", level: 3 },
        { code: "AC11.04", level: 2 },
        { code: "AC12.01", level: 3 },
        { code: "AC12.02", level: 3 },
        { code: "AC12.03", level: 3 },
    ],
    description: "Projet Java, permettant de visuliser une carte sous la forme d'un graphe. Développement d'un outil de recherche du plus court chemin",
    icon: <FaMap></FaMap>,
    image: graphMapImage,
    skills: [
        "Développer des interfaces utilisateurs",
        "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)",
        "Mettre en place les outils de gestion de projet",
    ],
    techs: [
        "Java",
        "JavaFX",
        "Algorithmique",
        "GIT"
    ]
};
listProjet.push(saeGraphMap)

const saeS3: ProjectType = {
    title: "SAE S3",
    gitLink: "https://forge.univ-lyon1.fr/p2102297/projet-patisserie",
    competencesProjet: [
        { code: "AC21.01", level: 2 },
        { code: "AC21.02", level: 3 },
        { code: "AC21.03", level: 2 },
        { code: "AC21.04", level: 1 },

        { code: "AC22.01", level: 2 },
        { code: "AC22.02", level: 2 },
        { code: "AC22.03", level: 3 },
        { code: "AC22.04", level: 1 },

        { code: "AC23.01", level: 2 },
        { code: "AC23.02", level: 2 },
        { code: "AC23.03", level: 2 },

        { code: "AC24.01", level: 1 },
        { code: "AC24.02", level: 2 },
        { code: "AC24.03", level: 3 },
        { code: "AC24.04", level: 3 },

        { code: "AC25.01", level: 1 },
        { code: "AC25.02", level: 2 },
        { code: "AC25.03", level: 2 },
        { code: "AC25.04", level: 2 },


        { code: "AC26.01", level: 2 },
        { code: "AC26.02", level: 2 },
        { code: "AC26.03", level: 3 },
        { code: "AC26.04", level: 2 },
    ],
    description: "Création d'un site web et d'une application Java permettant la gestion d'une patisserie. Réalisation d'un système de commande et de click & collect pour les clients",
    icon: <FaCookieBite></FaCookieBite>,
    image: s3Image,
    skills: [
        "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
        "Définir et mettre en œuvre une démarche de suivi de projet",
        "Formaliser les besoins du client et de l'utilisateur"
    ],
    techs: [
        "Java",
        "JavaFX",
        "PHP",
        "MySQL",
        "GIT"
    ]
}
listProjet.push(saeS3)

const saeProjetMobile: ProjectType = {
    title: "Projet App Mobile",
    gitLink: "https://forge.univ-lyon1.fr/p2103173/weather-clear",
    competencesProjet: [
        { code: "AC21.01", level: 3 },
        { code: "AC21.02", level: 3 },
        { code: "AC21.03", level: 3 },
        { code: "AC21.04", level: 1 },

        { code: "AC22.01", level: 3 },
        { code: "AC22.02", level: 3 },
        { code: "AC22.03", level: 3 },
        { code: "AC22.04", level: 1 },

        { code: "AC23.01", level: 3 },
        { code: "AC23.02", level: 2 },
        { code: "AC23.03", level: 2 },

        { code: "AC25.01", level: 2 },
        { code: "AC25.02", level: 2 },
        { code: "AC25.03", level: 2 },
        { code: "AC25.04", level: 2 },

        { code: "AC26.01", level: 3 },
        { code: "AC26.02", level: 2 },
        { code: "AC26.03", level: 4 },
        { code: "AC26.04", level: 3 },
    ],
    description: "Application mobile, faisant appel à une API permettant de connaitre les données météo de n'importe quelle ville du monde, d'un simple clic sur une carte",
    icon: <FaMapPin></FaMapPin>,
    image: weatherClearImage,
    skills: [
        "Organiser la restitution de données à travers la programmation et la visualisation",
        "Adopter de bonnes pratiques de conception et de programmation",
        "Concevoir et développer des applications communicantes"
    ],
    techs: [
        "kotlin",
        "SOLID Principles",
        "GIT",
    ]
}
listProjet.push(saeProjetMobile)

const saeSymfony: ProjectType = {
    title: "Projet Symfony",
    gitLink: "https://forge.univ-lyon1.fr/p2100104/symphony",
    competencesProjet: [
        { code: "AC21.01", level: 2 },
        { code: "AC21.02", level: 3 },
        { code: "AC21.03", level: 3 },
        { code: "AC21.04", level: 1 },

        { code: "AC22.01", level: 3 },
        { code: "AC22.02", level: 3 },
        { code: "AC22.03", level: 3 },
        { code: "AC22.04", level: 1 },

        { code: "AC23.01", level: 3 },
        { code: "AC23.02", level: 3 },
        { code: "AC23.03", level: 2 },

        { code: "AC26.01", level: 3 },
        { code: "AC26.02", level: 2 },
        { code: "AC26.03", level: 4 },
        { code: "AC26.04", level: 3 },
    ],
    description: "Projet Symfony de gestion de liste de course",
    icon: <FaList></FaList>,
    image: s3Image,
    skills: [
        "Adopter de bonnes pratiques de conception et de programmation",
        "Appliquer des principes d’accessibilité et d’ergonomie",
        "Organiser la restitution de données à travers la programmation et la visualisation",
    ],
    techs: [
        "PHP",
        "Syymfony",
        "CSS",
        "Bootstrap",
        "MySQL",
        "GIT",
        "SOLID Principles"
    ]
}
listProjet.push(saeSymfony)

const saeProjetStage: ProjectType = {
    title: "Projet de Stage",
    gitLink: "https://drive.google.com/file/d/1W6RWR0iMs2j1GJ8Qv9wfS4vq-hAxSpSH/view?usp=sharing",
    competencesProjet: [
        { code: "AC21.01", level: 3 },
        { code: "AC21.02", level: 3 },
        { code: "AC21.03", level: 4 },
        { code: "AC21.04", level: 2 },

        { code: "AC22.01", level: 3 },
        { code: "AC22.02", level: 4 },
        { code: "AC22.03", level: 4 },
        { code: "AC22.04", level: 2 },

        { code: "AC23.01", level: 3 },
        { code: "AC23.02", level: 3 },
        { code: "AC23.03", level: 3 },

        { code: "AC25.01", level: 4 },
        { code: "AC25.02", level: 3 },
        { code: "AC25.03", level: 3 },
        { code: "AC25.04", level: 3 },


        { code: "AC26.01", level: 3 },
        { code: "AC26.02", level: 3 },
        { code: "AC26.03", level: 4 },
        { code: "AC26.04", level: 4 },
    ],
    description: "Affranchissement du système d'habilitation d'une application de remontée de chiffre d'affaire. Analyse de l'existant, puis modernisation du système.",
    icon: <FaKey></FaKey>,
    image: rgxImage2,
    skills: [
        "Comprendre les enjeux et moyens de sécurisation des données et du code",
        "Rendre compte de son activité professionnelle",
        "Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation"
    ],
    techs: [
        "Java",
        "Struts",
        "LDAP",
        "Oracle",
        "MVS",
        "UML",
        "GIT"
    ]
}
listProjet.push(saeProjetStage)

const saeCorrectifRGX: ProjectType = {
    title: "Correctif RGX",
    gitLink: "https://drive.google.com/file/d/1LShF32F4XFelj15gc2DZc_EO-_ESWlD6/view?usp=sharing",
    competencesProjet: [
        { code: "AC31.01", level: 4 },
        { code: "AC31.02", level: 4 },
        { code: "AC31.03", level: 4 },

        { code: "AC32.01", level: 3 },
        { code: "AC32.02", level: 4 },
        { code: "AC32.03", level: 3 },

        { code: "AC36.01", level: 2 },
        { code: "AC36.02", level: 2 },
        { code: "AC36.03", level: 2 },
        { code: "AC36.04", level: 3 },
    ],
    description: "Ensemble de correctif divers sur une application de remontée du chiffre d'affaire",
    icon: <FaBandage></FaBandage>,
    image: rgxImage2,
    skills: [
        "Faire évoluer une application existante",
        "Intégrer des solutions dans un environnement de production",
        "Profiler, analyser et justifier le comportement d’un code existant"
    ],
    techs: [
        "Java",
        "Struts",
        "Oracle",
        "UML",
        "GIT"
    ]
}
listProjet.push(saeCorrectifRGX)

const saeProjetTuteure: ProjectType = {
    title: "Projet Tuteuré",
    gitLink: "https://drive.google.com/file/d/1LShF32F4XFelj15gc2DZc_EO-_ESWlD6/view?usp=sharing",
    competencesProjet: [
        { code: "AC31.01", level: 4 },
        { code: "AC31.02", level: 4 },
        { code: "AC31.03", level: 3 },

        { code: "AC32.01", level: 3 },
        { code: "AC32.02", level: 4 },
        { code: "AC32.03", level: 4 },

        { code: "AC36.01", level: 2 },
        { code: "AC36.02", level: 2 },
        { code: "AC36.03", level: 2 },
        { code: "AC36.04", level: 4 },
    ],
    description: "Refonte d'une application de remonté de chiffre d'affaire du Groupe Casino en vue d'une migration de Framework",
    image: rgxImage1,
    icon: <LocalGroceryStore />,
    techs: ["Java", "Spring MVC", "Oracle", "JSP", "JavaScript", "GIT", "Maven", "Maven"],
    skills: ["Faire évoluer une application existante", "Profiler, analyser et justifier le comportement d'un code existant", "Choisir et implémenter les architectures adaptées"]
}
listProjet.push(saeProjetTuteure)

const saeOutilsHRA: ProjectType = {
    title: "Outils HRA",
    gitLink: "https://drive.google.com/file/d/1LShF32F4XFelj15gc2DZc_EO-_ESWlD6/view?usp=sharing",
    competencesProjet: [
        { code: "AC31.01", level: 4 },
        { code: "AC31.02", level: 3 },
        { code: "AC31.03", level: 4 },
        { code: "AC32.01", level: 4 },
        { code: "AC32.02", level: 2 },
        { code: "AC32.03", level: 4 },
        { code: "AC36.01", level: 3 },
        { code: "AC36.02", level: 2 },
        { code: "AC36.03", level: 3 },
        { code: "AC36.04", level: 4 },
    ],
    description: "Outils de gestion de fichier. Transformation de fichier CSV, manipulation de fichier Excel, le tout de manière optimisé afin d'accélérer au maximum les processus",
    image: hraImage,
    icon: <FaToolbox />,
    techs: ["Java", "Apache POI", "JavaFX", "MultiThreading", "Maven", "GIT"],
    skills: [
        "Anticiper les résultats de diverses métriques",
        "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application",
        "Intégrer des solutions dans un environnement de production"
    ]
};
listProjet.push(saeOutilsHRA);

const saeActToHtml: ProjectType = {
    title: "Projet ActToHtml",
    competencesProjet: [
        { code: "AC31.01", level: 4 },
        { code: "AC31.02", level: 2 },
        { code: "AC31.03", level: 4 },
        { code: "AC32.01", level: 4 },
        { code: "AC32.02", level: 2 },
        { code: "AC32.03", level: 4 },
        { code: "AC36.01", level: 4 },
        { code: "AC36.02", level: 3 },
        { code: "AC36.03", level: 4 },
        { code: "AC36.04", level: 4 },
    ],
    description: "Application de suivi de projet. Développé 'From Scratch' en se basant sur Java Spring MVC.",
    image: actToHtmlImage,
    icon: <WebOutlined />,
    techs: ["Java", "Spring MVC", "Thymeleaf", "JavaScript", "GIT", "Maven", "REST API"],
    skills: [
        "Accompagner le management d'un projet informatique",
        "Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information",
        "Adopter de bonnes pratiques de conception et de programmation"
    ]
};
listProjet.push(saeActToHtml);

const saeTimeOff: ProjectType = {
    title: "Projet TimeOff",
    competencesProjet: [
        { code: "AC31.01", level: 4 },
        { code: "AC31.02", level: 4 },
        { code: "AC31.03", level: 4 },
        { code: "AC32.01", level: 4 },
        { code: "AC32.02", level: 3 },
        { code: "AC32.03", level: 4 },
        { code: "AC36.01", level: 4 },
        { code: "AC36.02", level: 2 },
        { code: "AC36.03", level: 4 },
        { code: "AC36.04", level: 4 },
    ],
    description: "Application de visualisation des emplois du temps inter-équipes. Lecture des données dans le système SAP de l'entreprise.",
    image: timeOffImage,
    icon: <FaCalendar />,
    techs: ["Java", "SAPJCO3", "SAP", "HTML", "CSS", "GIT", "Maven", "Maven Assembly"],
    skills: [
        "Intégrer des solutions dans un environnement de production",
        "Organiser et partager une veille technologique et informationnelle",
        "Choisir et implémenter les architectures adaptées"
    ]
};
listProjet.push(saeTimeOff);

// const saeOutilsHRA: Project = {
//     title:"Outils HRA",
//     gitLink:"https://drive.google.com/file/d/1LShF32F4XFelj15gc2DZc_EO-_ESWlD6/view?usp=sharing",
//     competencesProjet: [
//         {code:"AC31.01", level:4},
//         {code:"AC31.02", level:3},
//         {code:"AC31.03", level:4},

//         {code:"AC32.01", level:4},
//         {code:"AC32.02", level:2},
//         {code:"AC32.03", level:4},

//         {code:"AC36.01", level:3},
//         {code:"AC36.02", level:2},
//         {code:"AC36.03", level:3},
//         {code:"AC36.04", level:4},
//     ]
// }
// listProjet.push(saeOutilsHRA)

// const saeFacturesInter: Project = {
//     title:"Factures Intermarché",
//     gitLink:"https://drive.google.com/file/d/1LShF32F4XFelj15gc2DZc_EO-_ESWlD6/view?usp=sharing",
//     competencesProjet: [
//         {code:"AC31.01", level:4},
//         {code:"AC31.02", level:2},
//         {code:"AC31.03", level:4},

//         {code:"AC32.01", level:4},
//         {code:"AC32.02", level:2},
//         {code:"AC32.03", level:4},

//         {code:"AC36.01", level:3},
//         {code:"AC36.02", level:2},
//         {code:"AC36.03", level:4},
//         {code:"AC36.04", level:3},
//     ]
// }
// listProjet.push(saeFacturesInter)

// const saeActToHtml: Project = {
//     title:"Projet ActToHtml",
//     competencesProjet: [
//         {code:"AC31.01", level:4},
//         {code:"AC31.02", level:2},
//         {code:"AC31.03", level:4},

//         {code:"AC32.01", level:4},
//         {code:"AC32.02", level:2},
//         {code:"AC32.03", level:4},

//         {code:"AC36.01", level:4},
//         {code:"AC36.02", level:3},
//         {code:"AC36.03", level:4},
//         {code:"AC36.04", level:4},
//     ]
// }
// listProjet.push(saeActToHtml)

// const saeTimeOff: Project = {
//     title:"Projet TimeOff",
//     competencesProjet: [
//         {code:"AC31.01", level:4},
//         {code:"AC31.02", level:4},
//         {code:"AC31.03", level:4},

//         {code:"AC32.01", level:4},
//         {code:"AC32.02", level:3},
//         {code:"AC32.03", level:4},

//         {code:"AC36.01", level:4},
//         {code:"AC36.02", level:2},
//         {code:"AC36.03", level:4},
//         {code:"AC36.04", level:4},
//     ]
// }
// listProjet.push(saeTimeOff)



export default listProjet.reverse();
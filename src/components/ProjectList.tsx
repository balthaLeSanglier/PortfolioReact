export type CompetencesProjet = {
    code: string,
    level: number
}

export type Project = {
    name: string,
    gitLink?: string
    competencesProjet: CompetencesProjet[]
}

const listProjet: Project[] = []

const saeC: Project = {
    name: "Annuaire C",
    gitLink:'https://forge.univ-lyon1.fr/p2102681/annuaire-c',
    competencesProjet: [
        { code: "AC11.01", level: 3 },
        { code: "AC11.02", level: 3 },
        { code: "AC11.03", level: 3 },
        { code: "AC11.04", level: 2 }
    ]
};
listProjet.push(saeC);

const saeGraphMap: Project = {
    name: "Graph Map",
    gitLink:"https://forge.univ-lyon1.fr/p2102522/graphmap",
    competencesProjet: [
        { code: "AC11.01", level: 3 },
        { code: "AC11.02", level: 4 },
        { code: "AC11.03", level: 3 },
        { code: "AC11.04", level: 2 },
        { code: "AC12.01", level: 3 },
        { code: "AC12.02", level: 3 },
        { code: "AC12.03", level: 3 },
    ]
};
listProjet.push(saeGraphMap)

const saeAlgo: Project = {
    name: "Rapport Algorithmique",
    gitLink:"https://drive.google.com/file/d/1DE1vmTCpe4M6h_RfHvgNkmikDQQR7tqb/view?usp=sharing",
    competencesProjet: [
        { code: "AC12.01", level: 3 },
        { code: "AC12.02", level: 3 },
        { code: "AC12.03", level: 3 },
    ]
};
listProjet.push(saeAlgo)

const saeGuideInstallation: Project = {
    name: "Guide d'installation d'un poste Windows",
    gitLink:"https://drive.google.com/file/d/1NqS6cP1yYiDDyzXds-b9kntSlvm0WXpw/view?usp=sharing",
    competencesProjet: [
        { code: "AC13.01", level: 3 },
        { code: "AC13.02", level: 3 },
        { code: "AC13.03", level: 2 },
        { code: "AC13.04", level: 2 },
    ]
};
listProjet.push(saeGuideInstallation)

const saeSql: Project = {
    name: "Projet BD : Gestion de stage",
    gitLink:"https://drive.google.com/file/d/1IoQBmUkR3gykbUZzymg5wBM4BdND4saC/view?usp=sharing",
    competencesProjet: [
        { code: "AC14.01", level: 3 },
        { code: "AC14.02", level: 1 },
        { code: "AC14.03", level: 2 },
    ]
};
listProjet.push(saeSql)

const saeWeb: Project = {
    name: "Site de présentation du B.U.T.",
    gitLink:"http://p2102297.pages.univ-lyon1.fr/sae_web-muhlstein-balthazar/index.html",
    competencesProjet: [
        { code: "AC15.01", level: 2 },
        { code: "AC15.02", level: 1 },
        { code: "AC15.03", level: 3 },
    ]
};
listProjet.push(saeWeb)

const saeEco: Project = {
    name: "Rapport R.S.E. d'une entreprise",
    gitLink: "https://drive.google.com/file/d/1crlkE79LIhaTSfSDCQS_jvQNVdSLiW50/view?usp=sharing",
    competencesProjet: [
        { code: "AC16.01", level: 2 },
        { code: "AC16.02", level: 2 },
        { code: "AC16.03", level: 3 },
        { code: "AC16.04", level: 1 },
    ]
};
listProjet.push(saeEco)

const saeReseau: Project = {
    name: "Installation d'un service réseau",
    gitLink:"https://drive.google.com/file/d/1EH-oikwVluSL2MPnSjZ7r0kN6VFYOlWs/view?usp=sharing",
    competencesProjet: [
        { code: "AC13.01", level: 3 },
        { code: "AC13.02", level: 3 },
        { code: "AC13.03", level: 2 },
        { code: "AC13.04", level: 3 },
    ]
};
listProjet.push(saeReseau)

const saeBI: Project = {
    name: "Exploitation d'une base de donnée (B.I.)",
    gitLink: "https://drive.google.com/drive/folders/1BlzTU3O4pRuyXdzlqoUjonT7B33xC7lA?usp=sharing",
    competencesProjet: [
        { code: "AC14.01", level: 3 },
        { code: "AC14.02", level: 4 },
        { code: "AC14.03", level: 3 },
    ]
};
listProjet.push(saeBI)

const saePoster: Project = {
    name: "Création d'un poster informatif",
    competencesProjet: [
        { code: "AC15.01", level: 1 },
        { code: "AC15.02", level: 2 },
        { code: "AC15.03", level: 3 },
    ]
};
listProjet.push(saePoster)

const saeS3: Project = {
    name:"SAE S3",
    gitLink:"https://forge.univ-lyon1.fr/p2102297/projet-patisserie",
    competencesProjet: [
        {code:"AC21.01", level:2},
        {code:"AC21.02", level:3},
        {code:"AC21.03", level:2},
        {code:"AC21.04", level:1},

        {code:"AC22.01", level:2},
        {code:"AC22.02", level:2},
        {code:"AC22.03", level:3},
        {code:"AC22.04", level:1},

        {code:"AC23.01", level:2},
        {code:"AC23.02", level:2},
        {code:"AC23.03", level:2},
        
        {code:"AC24.01", level:1},
        {code:"AC24.02", level:2},
        {code:"AC24.03", level:3},
        {code:"AC24.04", level:3},

        {code:"AC25.01", level:1},
        {code:"AC25.02", level:2},
        {code:"AC25.03", level:2},

        {code:"AC26.01", level:2},
        {code:"AC26.02", level:2},
        {code:"AC26.03", level:3},
        {code:"AC26.04", level:2},
    ]
}
listProjet.push(saeS3)

const saeProjetMobile: Project = {
    name:"Projet App Mobile",
    gitLink:"https://forge.univ-lyon1.fr/p2103173/weather-clear",
    competencesProjet: [
        {code:"AC21.01", level:3},
        {code:"AC21.02", level:3},
        {code:"AC21.03", level:3},
        {code:"AC21.04", level:1},

        {code:"AC22.01", level:3},
        {code:"AC22.02", level:3},
        {code:"AC22.03", level:3},
        {code:"AC22.04", level:1},

        {code:"AC23.01", level:3},
        {code:"AC23.02", level:2},
        {code:"AC23.03", level:2},

        {code:"AC25.01", level:2},
        {code:"AC25.02", level:2},
        {code:"AC25.03", level:2},

        {code:"AC26.01", level:3},
        {code:"AC26.02", level:2},
        {code:"AC26.03", level:4},
        {code:"AC26.04", level:3},
    ]
}
listProjet.push(saeProjetMobile)

const saeSymfony: Project = {
    name:"Projet Symfony",
    gitLink:"https://forge.univ-lyon1.fr/p2100104/symphony",
    competencesProjet: [
        {code:"AC21.01", level:2},
        {code:"AC21.02", level:3},
        {code:"AC21.03", level:3},
        {code:"AC21.04", level:1},

        {code:"AC22.01", level:3},
        {code:"AC22.02", level:3},
        {code:"AC22.03", level:3},
        {code:"AC22.04", level:1},

        {code:"AC23.01", level:3},
        {code:"AC23.02", level:3},
        {code:"AC23.03", level:2},

        {code:"AC26.01", level:3},
        {code:"AC26.02", level:2},
        {code:"AC26.03", level:4},
        {code:"AC26.04", level:3},
    ]
}
listProjet.push(saeSymfony)

const saeProjetStage: Project = {
    name:"Projet de Stage",
    competencesProjet: [
        {code:"AC21.01", level:3},
        {code:"AC21.02", level:3},
        {code:"AC21.03", level:4},
        {code:"AC21.04", level:2},

        {code:"AC22.01", level:3},
        {code:"AC22.02", level:4},
        {code:"AC22.03", level:4},
        {code:"AC22.04", level:2},

        {code:"AC23.01", level:3},
        {code:"AC23.02", level:3},
        {code:"AC23.03", level:3},

        {code:"AC25.01", level:4},
        {code:"AC25.02", level:3},
        {code:"AC25.03", level:3},

        {code:"AC26.01", level:3},
        {code:"AC26.02", level:3},
        {code:"AC26.03", level:4},
        {code:"AC26.04", level:4},
    ]
}
listProjet.push(saeProjetStage)

const saeCorrectifRGX: Project = {
    name:"Correctif RGX",
    competencesProjet: [
        {code:"AC31.01", level:4},
        {code:"AC31.02", level:4},
        {code:"AC31.03", level:4},

        {code:"AC32.01", level:3},
        {code:"AC32.02", level:4},
        {code:"AC32.03", level:3},

        {code:"AC36.01", level:2},
        {code:"AC36.02", level:2},
        {code:"AC36.03", level:2},
        {code:"AC36.04", level:3},
    ]
}
listProjet.push(saeCorrectifRGX)

const saeProjetTuteure: Project = {
    name:"Projet Tuteuré",
    competencesProjet: [
        {code:"AC31.01", level:4},
        {code:"AC31.02", level:4},
        {code:"AC31.03", level:3},

        {code:"AC32.01", level:3},
        {code:"AC32.02", level:4},
        {code:"AC32.03", level:4},

        {code:"AC36.01", level:2},
        {code:"AC36.02", level:2},
        {code:"AC36.03", level:2},
        {code:"AC36.04", level:4},
    ]
}
listProjet.push(saeProjetTuteure)

const saeOutilsHRA: Project = {
    name:"Outils HRA",
    competencesProjet: [
        {code:"AC31.01", level:4},
        {code:"AC31.02", level:3},
        {code:"AC31.03", level:4},

        {code:"AC32.01", level:4},
        {code:"AC32.02", level:2},
        {code:"AC32.03", level:4},

        {code:"AC36.01", level:3},
        {code:"AC36.02", level:2},
        {code:"AC36.03", level:3},
        {code:"AC36.04", level:4},
    ]
}
listProjet.push(saeOutilsHRA)

const saeFacturesInter: Project = {
    name:"Factures Intermarché",
    competencesProjet: [
        {code:"AC31.01", level:4},
        {code:"AC31.02", level:2},
        {code:"AC31.03", level:4},

        {code:"AC32.01", level:4},
        {code:"AC32.02", level:2},
        {code:"AC32.03", level:4},

        {code:"AC36.01", level:3},
        {code:"AC36.02", level:2},
        {code:"AC36.03", level:4},
        {code:"AC36.04", level:3},
    ]
}
listProjet.push(saeFacturesInter)

const saeActToHtml: Project = {
    name:"Projet ActToHtml",
    competencesProjet: [
        {code:"AC31.01", level:4},
        {code:"AC31.02", level:2},
        {code:"AC31.03", level:4},

        {code:"AC32.01", level:4},
        {code:"AC32.02", level:2},
        {code:"AC32.03", level:4},

        {code:"AC36.01", level:4},
        {code:"AC36.02", level:3},
        {code:"AC36.03", level:4},
        {code:"AC36.04", level:4},
    ]
}
listProjet.push(saeActToHtml)

const saeTimeOff: Project = {
    name:"Projet TimeOff",
    competencesProjet: [
        {code:"AC31.01", level:4},
        {code:"AC31.02", level:4},
        {code:"AC31.03", level:4},

        {code:"AC32.01", level:4},
        {code:"AC32.02", level:3},
        {code:"AC32.03", level:4},

        {code:"AC36.01", level:4},
        {code:"AC36.02", level:2},
        {code:"AC36.03", level:4},
        {code:"AC36.04", level:4},
    ]
}
listProjet.push(saeTimeOff)



export default listProjet;
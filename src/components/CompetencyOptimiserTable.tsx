import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { green, orange, red } from "@mui/material/colors";
import React, { ReactNode } from "react";
import { FaCheck, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { FaCodeCompare, FaEarthAfrica, FaMagnifyingGlass } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { PiMathOperationsFill } from "react-icons/pi";
import listProjet, { CompetencesProjet, Project } from "./ProjectList";
import "../styles/CompetencyTable.css"
import { match } from "assert";

function findCompetenceByCode(project: Project, code: string): CompetencesProjet | undefined {
    return project.competencesProjet.find(competence => competence.code === code);
}


const rows = [
    createData('AC12.01', "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)", 1, listProjet, <FaMagnifyingGlass size={"2rem"}/>),
    createData('AC12.02', "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)", 1, listProjet, <FaCodeCompare size={"2rem"}/>),
    createData('AC12.03', " Formaliser et mettre en œuvre des outils mathématiques pour l’informatique", 1, listProjet, <PiMathOperationsFill size={"2rem"}/>),
    
    createData('AC22.01', "Choisir des structures de données complexes adaptées au problème", 2, listProjet,<FaMagnifyingGlass size={"2rem"}/>),
    createData('AC22.02', "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...)", 2, listProjet, <FaMagnifyingGlass size={"2rem"}/>),
    createData('AC22.03', "Comprendre les enjeux et moyens de sécurisation des données et du code", 2, listProjet, <FaLock size={"2rem"}/>),
    createData('AC22.04', "Évaluer l’impact environnemental et sociétal des solutions proposées", 2, listProjet, <FaEarthAfrica size={"2rem"}/>),

    createData('AC32.01', "Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire, montée en charge...)", 3, listProjet,<PiMathOperationsFill size={"2rem"}/>),
    createData('AC32.02', "Profiler, analyser et justifier le comportement d’un code existant", 3, listProjet, <FaMagnifyingGlass size={"2rem"}/>),
    createData('AC32.03', "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)", 3, listProjet, <IoLibrary  size={"2rem"}/>),
];

function createData(
    code: string,
    name: string,
    level: number,
    projects: Project[],
    pictogram:ReactNode
) {
    return {
        code,
        name,
        level,
        projects,
        pictogram
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const matches = useMediaQuery('(min-width:600px)');

    const handleClickOnRow = () => {
        console.log("salut")
        setOpen(!open)
    }

    const getColorForLevel = (level: number) => {
        
        if (level === 1) return orange[200];
        if (level === 2) return orange[400];
        if (level === 3) return orange[900];
        return red;
    };

    const getColorForCompetencyMastery = (level: number) => {
        if (level === 1) return red[400];
        if (level === 2) return orange[400];
        if (level === 3) return green[400];
        if (level === 4) return green[800];
        return red;
    }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}  onClick={() => handleClickOnRow()} className="CompetencyTableRow">
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    >
                        {open ? <ArrowUpward /> : <ArrowDownward />}
                    </IconButton>
                </TableCell>
                {matches ? <TableCell component="th" scope="row">
                    {row.code}
                </TableCell> : ""}
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">
                    <Typography color={getColorForLevel(row.level)}>
                        {row.pictogram} 
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Projets
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nom</TableCell>
                                        <TableCell align="center">Niveau</TableCell>
                                        <TableCell align="right">Lien</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.projects.map((projectRow) => {
                                        const competence = findCompetenceByCode(projectRow, row.code);
                                        if (competence) {
                                            return (
                                                <TableRow key={projectRow.name}>
                                                    <TableCell component="th" scope="row">
                                                        {projectRow.name}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Typography color={getColorForCompetencyMastery(competence.level)}>
                                                            <FaCheck size={"2rem"} />
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right"><Tooltip title={projectRow.gitLink ? "Accès aux traces" : "Projet Confidentiel, Accès aux traces impossible"} placement="right-start" arrow slotProps={{
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
                                                        <Typography color={projectRow.gitLink ? "primary" : "text.secondary"}>
                                                            <a href={projectRow.gitLink} target="_blank" color={projectRow.gitLink ? "text.primary" : "text.secondary"}><FaExternalLinkAlt color={projectRow.gitLink ? "black" : "text.secondary"} /></a>
                                                        </Typography>
                                                    </Tooltip></TableCell>
                                                </TableRow>
                                            );
                                        }
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const CompetencyOptimiserTable = () => {

    const matches = useMediaQuery('(min-width:600px)');


    return (
        <section>
            <span>
                <Typography variant="h5" textAlign={"center"}>OPTIMISER</Typography>
            </span>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {matches ? <TableCell>Code</TableCell> : ""}
                            <TableCell align="left">Nom</TableCell>
                            <TableCell align="center">Niveau</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    )
}

export default CompetencyOptimiserTable;
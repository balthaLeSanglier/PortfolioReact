import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import React, { ReactNode } from "react";
import { FaCheck, FaExternalLinkAlt, FaLock, FaNetworkWired, FaServer, FaWindows } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import listProjet, { CompetencesProjet, Project } from "./ProjectList";
import "../styles/CompetencyTable.css"


function findCompetenceByCode(project: Project, code: string): CompetencesProjet | undefined {
    return project.competencesProjet.find(competence => competence.code === code);
}



const rows = [
    createData('AC13.01', "Identifier les différents composants (matériels et logiciels) d’un système numérique", 1, listProjet, <FaComputer size={"2rem"}/>),
    createData('AC13.02', "Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs", 1, listProjet, <FaWindows  size={"2rem"}/>),
    createData('AC13.03', "Installer et configurer un système d’exploitation et des outils de développement", 1, listProjet, <FaWindows size={"2rem"}/>),
    createData('AC13.04', "Configurer un poste de travail dans un réseau d’entreprise", 1, listProjet, <FaNetworkWired size={"2rem"}/>),
    
    createData('AC23.01', "Concevoir et développer des applications communicantes", 2, listProjet,<FaNetworkWired  size={"2rem"}/>),
    createData('AC23.02', "Utiliser des serveurs et des services réseaux virtualisés", 2, listProjet, <FaServer size={"2rem"}/>),
    createData('AC23.03', "Sécuriser les services et données d’un système", 2, listProjet, <FaLock size={"2rem"}/>),
]

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

    const handleClickOnRow = () => {
        console.log("salut")
        setOpen(!open)
    }

    const getColorForLevel = (level: number) => {
        if (level === 1) return yellow[200];
        if (level === 2) return yellow[400];
        if (level === 3) return yellow[900];
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
                <TableCell component="th" scope="row">
                    {row.code}
                </TableCell>
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

const CompetencyAdministrerTable = () => {
    return (
        <section >
            <span>
                <Typography variant="h5" textAlign={"center"}>ADMINISTRER</Typography>
            </span>
            <TableContainer component={Paper} sx={{margin: '0 1%' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Code</TableCell>
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

export default CompetencyAdministrerTable;
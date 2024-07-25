import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";
import React, { ReactNode } from "react";
import { FaCheck, FaExternalLinkAlt, FaPencilRuler } from "react-icons/fa";
import { FaChartGantt, FaPeopleArrows } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import listProjet, { CompetencesProjet, Project } from "./ProjectList";
import "../styles/CompetencyTable.css"

function findCompetenceByCode(project: Project, code: string): CompetencesProjet | undefined {
    return project.competencesProjet.find(competence => competence.code === code);
}



const rows = [
    createData('AC15.01', "Appréhender les besoins du client et de l'utilisateur", 1, listProjet, <IoMdChatboxes  size={"2rem"}/>),
    createData('AC15.02', "Mettre en place les outils de gestion de projet", 1, listProjet, <FaChartGantt  size={"2rem"}/>),
    createData('AC15.03', "Identifier les acteurs et les différentes phases d’un cycle de développement", 1, listProjet, <FaPeopleArrows size={"2rem"}/>),
    
    createData('AC25.01', "Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information", 2, listProjet,<FaPeopleArrows size={"2rem"}/>),
    createData('AC25.02', "Formaliser les besoins du client et de l'utilisateur", 2, listProjet, <IoMdChatboxes size={"2rem"}/>),
    createData('AC25.03', "Identifier les critères de faisabilité d’un projet informatique", 2, listProjet, <FaChartGantt size={"2rem"}/>),
    createData('AC25.04', "Définir et mettre en œuvre une démarche de suivi de projet", 2, listProjet, <FaChartGantt  size={"2rem"}/>),
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
        
        if (level === 1) return blue[200];
        if (level === 2) return blue[400];
        if (level === 3) return blue[900];
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

const CompetencyConduireTable = () => {
    return (
        <section >
            <span>
                <Typography variant="h5" textAlign={"center"}>CONDUIRE</Typography>
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

export default CompetencyConduireTable;
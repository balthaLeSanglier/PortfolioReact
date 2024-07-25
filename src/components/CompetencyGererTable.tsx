import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import { green, orange, red } from "@mui/material/colors";
import React, { ReactNode } from "react";
import { CiSquareQuestion } from "react-icons/ci";
import { FaCheck, FaExternalLinkAlt, FaFastForward, FaLock, FaPencilRuler, FaQuestion, FaTable } from "react-icons/fa";
import { MdSchema } from "react-icons/md";
import listProjet, { CompetencesProjet, Project } from "./ProjectList";

function findCompetenceByCode(project: Project, code: string): CompetencesProjet | undefined {
    return project.competencesProjet.find(competence => competence.code === code);
}



const rows = [
    createData('AC14.01', "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)", 1, listProjet, <FaQuestion  size={"2rem"}/>),
    createData('AC14.02', "Visualiser des données", 1, listProjet, <FaTable size={"2rem"}/>),
    createData('AC14.03', "Concevoir une base de données relationnelle à partir d’un cahier des charges", 1, listProjet, <FaPencilRuler size={"2rem"}/>),
    
    createData('AC24.01', "Optimiser les modèles de données de l’entreprise", 2, listProjet,<FaPencilRuler size={"2rem"}/>),
    createData('AC24.02', "Assurer la sécurité des données (intégrité et confidentialité)", 2, listProjet, <FaLock size={"2rem"}/>),
    createData('AC24.03', "Organiser la restitution de données à travers la programmation et la visualisation", 2, listProjet, <FaTable size={"2rem"}/>),
    createData('AC24.04', "Manipuler des données hétérogènes", 2, listProjet, <MdSchema  size={"2rem"}/>),

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

    const getColorForLevel = (level: number) => {
        console.log(level)
        if (level === 1) return green[200];
        if (level === 2) return green[400];
        if (level === 3) return green[900];
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
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
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
                                                    <TableCell align="right"><Tooltip title={projectRow.gitLink ? "Accès aux projet GIT" : "Projet Confidentiel, Accès aux traces impossible"} placement="right-start" arrow slotProps={{
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
                                                            <a href={projectRow.gitLink} color={projectRow.gitLink ? "text.primary" : "text.secondary"}><FaExternalLinkAlt color={projectRow.gitLink ? "black" : "text.secondary"} /></a>
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

const CompetencyGererTable = () => {
    return (
        <section >
            <span>
                <Typography variant="h5" textAlign={"center"}>GERER</Typography>
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

export default CompetencyGererTable;
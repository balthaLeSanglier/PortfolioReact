import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { green, orange, red } from "@mui/material/colors";
import React, { ReactNode } from "react";
import { FaBrush, FaCheck, FaExternalLinkAlt, FaPencilRuler } from "react-icons/fa";
import { FaArrowTrendUp, FaGear } from "react-icons/fa6";
import { RiTestTubeFill } from "react-icons/ri";
import listProjet, { CompetencesProjet, Project } from "./ProjectList";
import "../styles/CompetencyTable.css"



function findCompetenceByCode(project: Project, code: string): CompetencesProjet | undefined {
    return project.competencesProjet.find(competence => competence.code === code);
}



const rows = [
    createData('AC11.01', "Implémenter des conceptions simples", 1, listProjet, <FaPencilRuler size={"2rem"}/>),
    createData('AC11.02', "Élaborer des conceptions simples", 1, listProjet, <FaPencilRuler size={"2rem"}/>),
    createData('AC11.03', "Faire des essais et évaluer leurs résultats en regard des spécifications", 1, listProjet, <RiTestTubeFill size={"2rem"}/>),
    createData('AC11.04', "Développer des interfaces utilisateurs", 1, listProjet, <FaBrush size={"2rem"}/>),
    
    createData('AC21.01', "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences", 2, listProjet,<FaPencilRuler size={"2rem"}/>),
    createData('AC21.02', "Appliquer des principes d’accessibilité et d’ergonomie", 2, listProjet, <FaBrush size={"2rem"}/>),
    createData('AC21.03', "Adopter de bonnes pratiques de conception et de programmation", 2, listProjet, <FaPencilRuler size={"2rem"}/>),
    createData('AC21.04', "Vérifier et valider la qualité de l’application par les tests", 2, listProjet, <RiTestTubeFill size={"2rem"}/>),

    createData('AC31.01', "Choisir et implémenter les architectures adaptées", 3, listProjet,<FaPencilRuler size={"2rem"}/>),
    createData('AC31.02', "Faire évoluer une application existante", 3, listProjet, <FaArrowTrendUp size={"2rem"}/>),
    createData('AC31.03', "Intégrer des solutions dans un environnement de production", 3, listProjet, <FaGear size={"2rem"}/>),
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
        
        if (level === 1) return red[200];
        if (level === 2) return red[400];
        if (level === 3) return red[900];
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

const CompetencyRealiserTable = () => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <section>
            <span>
                <Typography variant="h5" textAlign={"center"}>REALISER</Typography>
            </span>
            <TableContainer component={Paper} sx={{margin: '0 1%' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {matches ? <TableCell> code</TableCell> : ""}
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

export default CompetencyRealiserTable;
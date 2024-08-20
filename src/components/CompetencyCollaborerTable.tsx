import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { blue, green, grey, orange, red } from "@mui/material/colors";
import React, { ReactNode } from "react";
import { FaCheck, FaCompass, FaExternalLinkAlt, FaHandshake, FaLightbulb, FaNetworkWired, FaPenAlt, FaPuzzlePiece } from "react-icons/fa";
import { FaChartGantt, FaUsersGear } from "react-icons/fa6";
import listProjet, { CompetencesProjetType, ProjectType } from "./ProjectList";
import "../styles/CompetencyTable.css"

function findCompetenceByCode(project: ProjectType, code: string): CompetencesProjetType | undefined {
    return project.competencesProjet.find(competence => competence.code === code);
}



const rows = [
    createData('AC16.01', "Appréhender l’écosystème numérique", 1, listProjet, <FaNetworkWired  size={"2rem"}/>),
    createData('AC16.02', "Découvrir les aptitudes requises selon les différents secteurs informatiques", 1, listProjet, <FaUsersGear  size={"2rem"}/>),
    createData('AC16.03', "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire", 1, listProjet, <FaPuzzlePiece  size={"2rem"}/>),
    createData('AC16.04', "Acquérir les compétences interpersonnelles pour travailler en équipe", 1, listProjet, <FaHandshake  size={"2rem"}/>),
    
    createData('AC26.01', "Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation", 2, listProjet,<FaUsersGear  size={"2rem"}/>),
    createData('AC26.02', "Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation", 2, listProjet, <FaPuzzlePiece  size={"2rem"}/>),
    createData('AC26.03', "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique", 2, listProjet, <FaHandshake  size={"2rem"}/>),
    createData('AC26.04', "Rendre compte de son activité professionnelle", 2, listProjet, <FaPenAlt size={"2rem"}/>),

    createData('AC36.01', "Organiser et partager une veille technologique et informationnelle", 3, listProjet,<FaLightbulb size={"2rem"}/>),
    createData('AC36.02', "Identifier les enjeux de l’économie de l’innovation numérique", 3, listProjet, <FaLightbulb  size={"2rem"}/>),
    createData('AC36.03', "Guider la conduite du changement informatique au sein d’une organisation", 3, listProjet, <FaCompass  size={"2rem"}/>),
    createData('AC36.04', "Accompagner le management de projet informatique", 3, listProjet, <FaChartGantt size={"2rem"}/>),
];

function createData(
    code: string,
    name: string,
    level: number,
    projects: ProjectType[],
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
        if (level === 1) return grey[400];
        if (level === 2) return grey[600];
        if (level === 3) return grey[900];
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
                                                <TableRow key={projectRow.title}>
                                                    <TableCell component="th" scope="row">
                                                        {projectRow.title}
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

const CompetencyCollaborerTable = () => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <section >
            <span>
                <Typography variant="h5" textAlign={"center"}>COLLABORER</Typography>
            </span>
            <TableContainer component={Paper} sx={{margin: '0 1%' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {matches ? <TableCell> Code</TableCell> : ""}
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

export default CompetencyCollaborerTable;
import React from "react"

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SchoolIcon from '@mui/icons-material/School';
import { CircularProgress, Typography } from "@mui/material";
import ScrollReveal from "./ScrollReaveal";

const CustomTimeline: React.FC = () => {
    return (
        <section>
            <ScrollReveal>
                <span>
                    <Typography variant="h2">Experiences</Typography>
                </span>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2023 - 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LocalGroceryStoreIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Groupe Casino
                            </Typography>
                            <Typography color="text.secondary">Alternance au sein de la D.S.I. du Groupe Casino</Typography>
                            <Typography color="text.secondary">Poste de développeur Java</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LocalGroceryStoreIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Groupe Casino
                            </Typography>
                            <Typography color="text.secondary">Stage au sein de la D.S.I. du Groupe Casino</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2021-2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="iutOrange">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                I.U.T. Lyon 1 : Département Informatique
                            </Typography>
                            <Typography color="text.secondary">B.U.T. Informatique, parcours Réalisation d'Application</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </ScrollReveal>
        </section>
    )
}

export default CustomTimeline;
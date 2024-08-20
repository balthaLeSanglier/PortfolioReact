import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography, useMediaQuery, } from '@mui/material';
import React from 'react';
import { LiaLinkedin } from 'react-icons/lia';
import logo from '../assets/logo.jpg';
import '../styles/Portrait.css';
import ScrollColorText from './Name';
import ScrollReveal from './ScrollReaveal';

const Portrait: React.FC = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <section className='portrait' id="Portrait">
            <ScrollReveal>
                <Stack
                    direction={matches ? "row" : "column"}
                    justifyContent={matches ? "space-between" : "center"}
                    alignItems={matches ? "center" : "center"}
                    spacing={matches ? 10 : 0}
                    flexWrap="nowrap"
                >
                    <Stack
                        direction="column"
                        justifyContent='flex-start'
                        alignItems='flex-start'
                        spacing={2}
                    >
                        <Typography display='inline' variant="h2" textAlign={'left'}>
                            <ScrollColorText></ScrollColorText>
                        </Typography>
                        <Typography variant='subtitle1' color={"text.secondary"} textAlign={'justify'}>
                            Alternant au sein du groupe Casino, futur étudiant INSA. 
                            Je vous invite à découvrir mon profil à travers mon parcours, mes compétences et mes projets.

                        </Typography>
                        
                    </Stack>
                    <Card sx={{ minWidth:"40%", margin: '20px auto' }}>
                        <CardMedia
                            component="img" 
                            height="250"
                            image={logo}
                            alt="Profile Photo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Balthazar Muhlstein
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Connectons nous sur Linkedin !
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button variant="contained" size="large" color="primary" href="https://www.linkedin.com/in/balthazar-muhlstein-5a083a222/" target="_blank">
                                <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} width={"100%"} gap={1}>
                                    <Typography variant='body1'>LinkedIn</Typography>
                                    
                                    <LiaLinkedin size={30}/>
                                    </Stack>

                                </Button>
                        </CardActions>
                    </Card>
                </Stack>

            </ScrollReveal>

        </section>

    );
}

export default Portrait;
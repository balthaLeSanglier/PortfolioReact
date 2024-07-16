import React, { useEffect, useState } from 'react';
import logo from '../assests/logo.jpg';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Stack, } from '@mui/material';
import '../styles/Portrait.css'
import RandomColorText from './Name';
import ScrollColorText from './Name';
import ScrollReveal from './ScrollReaveal';

const Portrait: React.FC = () => {


    return (
        <section className='portrait'>
            <ScrollReveal>
                <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Stack
                        direction="column"
                        justifyContent='flex-start'
                        alignItems='flex-start'
                        spacing={2}
                    >
                        <Typography variant="h2">
                            Bonjour, Bienvenu dans mon portfolio
                        </Typography>
                        <Typography display='inline' variant="h2">
                            Je suis  <ScrollColorText></ScrollColorText>
                        </Typography>
                    </Stack>
                    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={logo}
                            alt="Profile Photo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Balthazar Muhlstein
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Actuellement étudiant, je vous invite à découvrir mon profil Linkedin via le bouton ci-dessous
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="large" color="primary" href="https://www.linkedin.com/in/balthazar-muhlstein-5a083a222/" target="_blank">
                                LinkedIn
                            </Button>
                        </CardActions>
                    </Card>
                </Stack>

            </ScrollReveal>

        </section>

    );
}

export default Portrait;
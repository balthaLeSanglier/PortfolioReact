import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Portrait from '../components/Portrait';
import CustomTimeline from '../components/CustomTimeline';
import Skills from '../components/Techs';
import "../styles/Home.css"
import { Grid, Stack } from '@mui/material';
import Assets from '../components/Assets';
import CompetencyRealiserTable from '../components/CompetencyRealiserTable';
import CompetencyOptimiserTable from '../components/CompetencyOptimiserTable';
import CompetencyTables from '../components/CompetencyTables';

const Home: React.FC = () => {
  return (
    <div id="outer-container">
      <Header />
      <div className='homeBody' id="page-wrap">
        <Grid direction="row" container justifyContent={'center'} spacing={8} marginY={2}>
          <Grid item xs={11} md={8}>
            <Portrait />
          </Grid>
          <Grid item xs={11} md={8}>
            <CustomTimeline />
          </Grid>
          <Grid item xs={11} md={8}>
            <Assets />
          </Grid>
          <Grid item xs={11} md={8}>
            <Skills />
          </Grid>
          <Grid item xs={11} md={8}>
            <Projects />
          </Grid>
          <Grid item xs={11} md={8}>
            <CompetencyTables />
          </Grid>
        </Grid>
      </div>
      <section id="contact">
        <h2>Contact</h2>
        <p>Comment me contacter...</p>
      </section>
    </div>
  );
};

export default Home;
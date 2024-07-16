import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Portrait from '../components/Portrait';
import CustomTimeline from '../components/CustomTimeline';
import Skills from '../components/Skills';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Portrait/>
      <CustomTimeline/>
      <Skills/>
      <Projects />
      
      <section id="contact">
        <h2>Contact</h2>
        <p>Comment me contacter...</p>
      </section>
    </div>
  );
};

export default Home;
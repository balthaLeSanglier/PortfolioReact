import React from "react";

interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const projects: Project[] = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1.',
      link: 'http://lienduprojet1.com'
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2.',
      link: 'http://lienduprojet2.com'
    }
  ];
  
  const Projects: React.FC = () => {
    return (
      <section id="projects">
        <h2>Mes projets</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
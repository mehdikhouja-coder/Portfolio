import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolio';

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects" className="bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

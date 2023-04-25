import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    // Add my project details here
  ];

  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;

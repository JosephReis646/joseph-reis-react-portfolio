import React from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.deployedUrl}>Deployed Application</a>
      <a href={project.githubUrl}>GitHub Repository</a>
    </div>
  );
};

export default Project;

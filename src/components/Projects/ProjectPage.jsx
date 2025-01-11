import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();

  // Sample project data (you can replace this with your actual data source)
  const projects = [
    {
      id: '1',
      title: 'Project 1',
      description: 'Detailed description of Project 1.',
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Detailed description of Project 2.',
    },
    // Add more projects as needed
  ];

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage; 
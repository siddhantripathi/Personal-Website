import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: '1',
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com"
    },
    {
      id: '2',
      title: "Project 2",
      description: "A mobile application built with React Native",
      image: "/project2.jpg",
      tags: ["React Native", "Firebase"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 
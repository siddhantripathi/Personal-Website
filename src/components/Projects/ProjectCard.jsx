import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard; 
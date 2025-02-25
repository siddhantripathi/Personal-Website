import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, isExpanded, onExpand }) => {
  const handleClick = (e) => {
    // Prevent the card click when clicking on links
    if (e.target.tagName.toLowerCase() === 'a') {
      e.stopPropagation();
      return;
    }
    onExpand();
  };

  return (
    <motion.div 
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <h3 className="project-title">{project.title}</h3>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      
      {isExpanded && (
        <div className="project-content">
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
          <div className="project-links">
            {project.projectUrl && (
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard; 
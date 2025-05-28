import React from 'react';
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
      transition={{ delay: index * 0.1 }}
      layout
    >
      <h3 className="project-title">{project.title}</h3>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      
      <div className="project-content" style={{
        opacity: isExpanded ? 1 : 0,
        maxHeight: isExpanded ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'all 0.5s ease'
      }}>
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
      
      {!isExpanded && (
        <button className="learn-more-btn">
          Learn More
        </button>
      )}
      
      {isExpanded && (
        <button className="show-less-btn">
          Show Less
        </button>
      )}
    </motion.div>
  );
};

export default ProjectCard; 
import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'React', level: 80 },
    
    { name: 'Java', level: 80 },
    { name: 'Web Development', level: 80 },
    { name: 'Cloud Technologies', level: 75 },
    { name: 'Machine Learning', level: 70 }
    
    
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className={`skill-bar ${isVisible ? 'animate' : ''}`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  maxWidth: `${skill.level}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 
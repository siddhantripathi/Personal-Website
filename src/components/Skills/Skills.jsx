import React, { useEffect, useRef, useState } from 'react';
import ScrambleText from '../TextAnimations/ScrambleText';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Mobile Development (Flutter | Swift | Kotlin | React Native)", level: 85 },
    { name: "Web Development (React | Node.js | TypeScript | HTML/CSS)", level: 85 },
    { name: "Database Technologies (MySQL | PostgreSQL | NoSQL | MongoDB | Firebase)", level: 85 },
    { name: "Cloud & DevOps (AWS | Azure | GCP | Docker | Kubernetes)", level: 80 },
    { name: "ML Frameworks (PyTorch | TensorFlow | Keras | scikit-learn | XGBoost)", level: 80 },
    { name: "NLP & LLMs (NLTK | Hugging Face | Transformers | LLMs)", level: 75 },
    { name: "Computer Vision (OpenCV | YOLOv3 | SLAM-based pipelines)", level: 75 },
    { name: 'Python', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'Java', level: 70 },
    { name: 'C/C++', level: 75 },
    { name: 'Linux/Bash', level: 80 },
    { name: 'GitHub', level: 90 },
    { name: 'Angular', level: 65 },
  ];

  const toggleSkills = () => setShowAllSkills(!showAllSkills);
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 6);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <ScrambleText text="Skills" tag="h2" className="section-title" />
      <div className="skills-container">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item ${isVisible ? 'in-view' : ''}`}
            style={{ '--stagger-delay': `${index * 0.09}s` }}
          >
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div
                className={`skill-bar ${isVisible ? 'animate' : ''}`}
                style={{ '--target-width': `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {skills.length > 6 && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={toggleSkills}>
            {showAllSkills ? 'Show Less' : 'Show More'}
            <span className="arrow-icon">{showAllSkills ? '▲' : '▼'}</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Skills;

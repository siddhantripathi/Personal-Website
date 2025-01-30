import React, { useState } from 'react';
import './Experience.css';
import lifestages from '../../images/lifestages.jpg';
import drdo from '../../images/DRDO.jpg';
import delhiUni from '../../images/delhi_uni.jpg';
import vigyanshala from '../../images/vigyanshaala.jpg';
import thales from '../../images/thales.jpg';

const Experience = () => {
  const experiences = [
    {
      title: "Life Stages",
      company: "Tech Corp",
      location: "San Francisco, CA",
      date: "March 2024 - June 2024",
      description:[ "Joined early in the development phase, transitioning a wellness app from initial concept to full execution. " +
                   "Developed a recommendation model using collaborative filtering with the data analysis team. " +
                   "Utilized Git for version control and adhered to SDLC principles, ensuring a smooth development process. " +
                   "Used CSS, JavaScript, and React for front-end and migrating from Firebase to AWS for scalability."],
      image: lifestages
    },
    {
      title: "Research Intern",
      company: "Center of Artificial Intelligence and Research DRDO",
      location: "Bangalore, India",
      date: "September 2021 - March 2022 ",
      description: ["Collaborated with a team on the Autonomous Ground Navigation System, achieving 98.5% precision localization in dynamic environments. " +
                   "Integrated and processed data from GPS, LIDAR, and camera, resulting in a robust 10km^2 terrain mapping. " +
                   "Maintained rigorous project documentation, facilitating smooth project handovers and future developments. "],
      image: drdo
    },
    {
      title: "Guest Lecturer",
      company: "Daulat Ram College, Delhi University",
      location: "Delhi, India",
      date: "October 2021 - November 2021 ",
      description:["Invited to lead a 2-week Python data analysis course for 45 students, covering machine learning libraries and receiving a 95% positive feedback rating. " +
                   "Assessed students to complete data analysis projects, improving their practical skills and knowledge. " ],
      image: delhiUni
    },
    {
      title: "Education Mentor",
      company: "VigyanShala, a non-profit organization",
      location: "Delhi, India",
      date: "August 2021 - October 2021 ",
      description: ["Led a team of 3 to deliver a Python curriculum to 30 students, emphasizing data analysis and visualization. "],
      image: vigyanshala
    },
    {
      title: "Data Analyst Intern",
      company: "Thales Group",
      location: "Delhi, India",
      date: "March 2021 - September 2021",
      description: ["Forecasted aircraft degradation with predictive modeling, raising maintenance scheduling accuracy by 15%. " +
                   "Enhanced data hygiene by organizing 50k+ client records, ensuring high accuracy for model-building. " +
                    "Conducted over 20 code reviews, reducing code defects by 10%." +
                    "Generated over 30 bi-weekly reports, translating data into actionable insights."],
      image: thales
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`experience-card ${expandedId === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="experience-preview">
              <img src={exp.image} alt={exp.company} className="company-logo" />
              <h3>{exp.title}</h3>
              <p className="company-name">{exp.company}</p>
            </div>
            
            {expandedId === index && (
              <div className="experience-details">
                <p className="date">{exp.date}</p>
                <p className="location">{exp.location}</p>
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
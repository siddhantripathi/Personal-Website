import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrambleText from '../TextAnimations/ScrambleText';
import './Experience.css';
import lifestages from '../../images/lifestages.jpg';
import drdo from '../../images/DRDO.jpg';
import delhiUni from '../../images/delhi_uni.jpg';
import vigyanshala from '../../images/vigyanshaala.jpg';
import thales from '../../images/thales.jpg';
import disc from '../../images/DISC.png';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Data Institute for Societal Challenges (DISC), University of Oklahoma",
      location: "Norman, OK",
      date: "December 2025 - Present",
      description: [
        "Project Lead for a South Dakota state initiative; developed an ensemble ML system using multi-variant environmental data to predict mosquito-borne illness outbreaks with 95% county-level precision",
        "Collaborated on a real-time Data Acquisition (DAQ) system using MQTT protocols; engineered validation suites using Pytest and Pydantic to monitor telemetry data integrity and resolve data-processing bottlenecks",
        "Developed a Research & IP Consortium for the State of Oklahoma; implemented secure data sharing and privacy protocols and a RAG based chatbot that facilitated multiple industry client conversions during beta phase",
        "Leading internal technical workshops on Agentic AI workflows, focusing on Prompt Engineering, RAG and automation tools to upskill cross-functional teams on AI driven automation",
      ],
      image: disc,
      isPromotion: false,
    },
    {
      title: "Software Engineer",
      company: "LifeStages",
      location: "San Francisco, CA",
      date: "March 2024 - December 2025",
      description: [
        "Leading the development of the Android app from ground up, implementing cross-platform architecture and evaluating frameworks like React Native and Flutter.",
        "Enhancing the iOS app through feature development and deployment using CI/CD pipelines, directly impacting users' mental health and wellness journeys.",
        "Collaborating with cross-functional teams (product, design, engineering) to ensure seamless integration and cohesive user experience across platforms.",
        "Contributing to the full development lifecycle from ideation to deployment, with creative freedom to implement innovative features.",
      ],
      image: lifestages,
      isPromotion: true,
    },
    {
      title: "Software Engineer intern",
      company: "LifeStages",
      location: "San Francisco, CA",
      date: "March 2024 - June 2024",
      description: [
        "Joined early in the development phase, transitioning a wellness app from initial concept to full execution. " +
        "Developed a recommendation model using collaborative filtering with the data analysis team. " +
        "Utilized Git for version control and adhered to SDLC principles, ensuring a smooth development process. " +
        "Used CSS, JavaScript, and React for front-end and migrating from Firebase to AWS for scalability.",
      ],
      image: lifestages,
      isPromotionPrevious: true,
    },
    {
      title: "Research Intern",
      company: "Center of Artificial Intelligence and Research DRDO",
      location: "Bangalore, India",
      date: "September 2021 - March 2022",
      description: [
        "Collaborated with a team on the Autonomous Ground Navigation System, achieving 98.5% precision localization in dynamic environments. " +
        "Integrated and processed data from GPS, LIDAR, and camera, resulting in a robust 10km² terrain mapping. " +
        "Maintained rigorous project documentation, facilitating smooth project handovers and future developments.",
      ],
      image: drdo,
      isPromotionPrevious: false,
    },
    {
      title: "Guest Lecturer",
      company: "Daulat Ram College, Delhi University",
      location: "Delhi, India",
      date: "October 2021 - November 2021",
      description: [
        "Invited to lead a 2-week Python data analysis course for 45 students, covering machine learning libraries and receiving a 95% positive feedback rating. " +
        "Assessed students to complete data analysis projects, improving their practical skills and knowledge.",
      ],
      image: delhiUni,
      isPromotionPrevious: false,
    },
    {
      title: "Education Mentor",
      company: "VigyanShala, a non-profit organization",
      location: "Delhi, India",
      date: "August 2021 - October 2021",
      description: ["Led a team of 3 to deliver a Python curriculum to 30 students, emphasizing data analysis and visualization."],
      image: vigyanshala,
      isPromotionPrevious: false,
    },
    {
      title: "Data Analyst Intern",
      company: "Thales Group",
      location: "Delhi, India",
      date: "March 2021 - September 2021",
      description: [
        "Forecasted aircraft degradation with predictive modeling, raising maintenance scheduling accuracy by 15%. " +
        "Enhanced data hygiene by organizing 50k+ client records, ensuring high accuracy for model-building. " +
        "Conducted over 20 code reviews, reducing code defects by 10%. " +
        "Generated over 30 bi-weekly reports, translating data into actionable insights.",
      ],
      image: thales,
      isPromotionPrevious: false,
    },
  ];

  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <section id="experience" className="experience">
      <ScrambleText text="Experience" tag="h2" className="section-title" />

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`experience-card ${expandedId === index ? 'expanded' : ''} ${exp.isPromotion ? 'promotion' : ''} ${exp.isPromotionPrevious ? 'promotion-previous' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => toggleExpand(index)}
          >
            <div className="experience-preview">
              <img src={exp.image} alt={exp.company} className="company-logo" />
              <h3>{exp.title}</h3>
              <p className="company-name">{exp.company}</p>
            </div>

            {expandedId === index && (
              <motion.div
                className="experience-details"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="date">{exp.date}</p>
                <p className="location">{exp.location}</p>
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

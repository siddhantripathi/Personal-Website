import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';
import project1Image from './1.jpg.png';
import project2Image from './2.jpg';
import project3Image from './3.jpeg';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    console.log('Expanding:', id, 'Current:', expandedId);
    setExpandedId(expandedId === id ? null : id);
  };

  const projects = [
    {
      id: '1',
      title: "The Block",
      description: "A full-stack web application built with Flutter, Node.js, HTML and AWS." +
        "Built for hosting community events this platform offers users the ability to create, schedule, and monetize classes on various topics." +
        "Whether you're offering a free lesson or charging a fee, the platform makes it easy for anyone to turn their skills into a business opportunity." +
        "This project not only combines my passion for full-stack development but also aligns with my vision of creating a space where learning is democratized and accessible to everyone.",
      image: project1Image,
      tags: ["Web Development", "Flutter", "Node.js", "AWS"],
      projectUrl: "https://theblock.xyz",
      github: "https://theblock.xyz"
    },
    {
      id: '2',
      title: "Pet Adoption website with integrated chatbot",
      description: "A pet adoption website made as part of a project during my master's degree. The website is built with Javasctipt, HTML, CSS and MongoDB."+
      "The chatbot is built using Claude 3.5 Sonnet and is fine tuned to answer questions specific to the pet adoption website and process and is designed to be a helpful assisntant to users."+
      "The web application is currently in staging and is soon to be deployed, hosted on AWS.",
      image: project2Image,
      tags: ["JavaScript", "Web development", "MongoDB", "AWS" ,"Chatbot", "LLM"],
      projectUrl: "https://github.com/jinishshah00/PAPapp/tree/development",
      github: "https://github.com/jinishshah00/PAPapp/tree/development"
    },
    {
      id: '3',
      title: "Texting helper",
      description: "A chatbot designed to help with texting especially regarding dating apps."+
      "The chatbot is built using a fine tuned Deepseek model and hosted on vercel."+
      "The chatbot is able to answer questions, provide information and help with texting strategies.The chatbot is able to handle complex queries and provide helpful responses. The chatbot is able to handle small talk and keep the conversation engaging."+
      "The chatbot is able to handle different languages and dialects."+
      "The chatbot is able to handle different cultures and customs.",
      image: project3Image,
      tags: ["JavaScript", "Web development", "Python", "Firebase" ,"Chatbot", "LLM"],
      projectUrl: "https://datebot-project.vercel.app/",
      github: "https://github.com/siddhantripathi/Datebot_project"
    }
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
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            isExpanded={expandedId === project.id}
            onExpand={() => handleExpand(project.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 
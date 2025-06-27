import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2024",
      credentialLink: "https://drive.google.com/file/d/1mwWfQOFCjJnZmEd6gGOGGgugQz9VMxnD/view?usp=sharing",
      description: "Comprehensive understanding of AWS Cloud concepts, services, security, architecture, pricing, and support."
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "January 2025",
      credentialLink: "https://learn.microsoft.com/api/credentials/share/en-us/SiddhantTripathi-6599/977EDDB48383343C?sharingId=3C058C435F8E52E0",
      description: "Foundation level knowledge of cloud services and how those services are provided with Microsoft Azure."
    },
    {
      id: 3,
      title: "Docker Mastery: with Kubernetes + Swarm",
      issuer: "Udemy",
      date: "June 2025",
      credentialLink: "https://www.udemy.com/certificate/UC-a1b01888-d300-4b90-bf5f-b623fa36a426/",
      description: "Successfully completed 'Docker Mastery: with Kubernetes +Swarm from a Docker Captain,' gaining comprehensive skills in containerization, orchestration with Docker Swarm and Kubernetes, CI/CD with GitHub Actions, and production-grade deployment strategies"
    },
    // Add more certificates as needed
  ];

  return (
    <section id="certificates" className="certificates">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certificates
      </motion.h2>
      <div className="timeline">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="timeline-date">{cert.date}</div>
              <h3 className="timeline-title">{cert.title}</h3>
              <p className="timeline-issuer">{cert.issuer}</p>
              <p className="timeline-description">{cert.description}</p>
              {cert.credentialLink && (
                <a 
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  View Credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates; 
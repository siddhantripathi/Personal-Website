import React from 'react';
import './About.css';
import profilePhoto from '../../images/self.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          Hi, I’m Siddhant Tripathi, a passionate and detail-oriented software engineer with a strong foundation in full-stack development, cloud technologies, data analytics, and machine learning. I thrive at the intersection of technology and innovation, bringing fresh perspectives and a commitment to excellence to every project I undertake.

With a Master’s degree in Computer Science from Santa Clara University (expected December 2024) and a Bachelor’s in Computer Science from PES University, I have honed my expertise in machine learning, natural language processing, and cloud-based solutions. My global experiences across academia, research, and industry have shaped me into an adaptable and collaborative professional eager to tackle complex challenges.

Throughout my career, I’ve contributed to impactful projects, including developing a recommendation model for a wellness app, designing autonomous navigation systems, and leading Python and data analytics workshops to empower future engineers. I’m particularly passionate about driving innovation in cloud-based, data-driven services while fostering inclusive and collaborative environments.

</p>
          <p>
          In addition to my technical expertise, I hold certifications such as the AWS Certified Cloud Practitioner and Microsoft Certified: Azure Fundamentals, showcasing my proficiency in cloud infrastructure and services.

When I’m not coding or analyzing data, I love playing football, hitting the gym, and diving into video games. My gamer tag is usually trippy_boi—so if you want to team up and play your favorite game together, let’s connect!
          
          </p>
        </div>
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="Siddhant Tripathi" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default About; 
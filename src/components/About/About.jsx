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
          Hi, I’m Siddhant Tripathi—a passionate and detail-oriented software engineer with a robust background in full-stack development, mobile app innovation, cloud technologies, data analytics, and machine learning. Currently, I’m leveraging my expertise as a Software Engineer at Life Stages in the San Francisco Bay Area, where I lead the development of both iOS and Android mobile applications dedicated to enhancing mental well-being. 
          
          My work spans the entire development lifecycle—from ideation and cross-platform implementation (using frameworks like React Native and Flutter) to seamless deployment—ensuring that every feature directly contributes to a better user experience.

          I earned my Master’s degree in Computer Science from Santa Clara University, December 2024, and hold a Bachelor’s in Computer Science from PES University, June 2022. 
          
          Over the years, I’ve built a diverse portfolio: from creating AI-driven recommendation systems for wellness apps and contributing to autonomous navigation projects at DRDO, to driving predictive analytics during my data analyst internship at Guavus and empowering future engineers as a guest lecturer at Daulat Ram College. 
          
          These experiences have shaped me into an adaptable, collaborative professional who thrives on tackling complex challenges with innovative, data-driven solutions.

          In addition to my technical skills, I’m certified as an AWS Cloud Practitioner and Microsoft Azure Fundamentals professional, underscoring my proficiency in cloud infrastructure. 

          When I’m not coding or architecting scalable systems, you can find me on the football field, in the gym, or immersed in video games under the gamer tag trippy_boi. Let’s connect and explore how we can push the boundaries of technology together!
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
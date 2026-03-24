import { motion } from 'framer-motion';
import './About.css';
import profilePhoto from '../../images/self.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="about-content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            I am a software engineer focused on machine learning and full-stack development. Currently, I work at the Data Institute for Societal Challenges (DISC) at the University of Oklahoma. My work involves building scalable systems and using data-driven solutions to address complex societal issues.

            I earned my Master's in Computer Science from Santa Clara University in December 2024. Before moving to Norman, I was a Software Engineer at Life Stages in the San Francisco Bay Area. In that role, I led the development of mobile applications for mental well-being using React Native and Flutter, overseeing the entire process from ideation to deployment.

            Technical Background and Projects
            Research and Analytics: I contributed to autonomous navigation projects at DRDO and drove predictive analytics during my time at Guavus.

            Cloud Infrastructure: I am a certified AWS Cloud Practitioner and Microsoft Azure Fundamentals professional. Recently, I have been building and hosting LLM projects on Render.

            Mentorship: I have shared my technical expertise as a guest lecturer at Daulat Ram College and hold a Bachelor's degree from PES University.

            Personal Interests
            When I am not at my desk, I stay active at the gym and on the football field. I am a long-time gamer on PC and Nintendo Switch, usually found under the tag trippy_boi1. I also enjoy staying current with system design and generative AI through audiobooks and technical newsletters.
          </motion.p>
        </div>

        <motion.div
          className="profile-photo-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          <img src={profilePhoto} alt="Siddhant Tripathi" className="profile-photo" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

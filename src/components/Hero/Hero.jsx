import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import WaveText from '../TextAnimations/WaveText';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I'm <WaveText text="Siddhant Tripathi" />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <ReactTyped
            strings={[
              'Software Engineer',
              'Full Stack Developer',
              'ML Engineer',
              'Mobile App Developer',
            ]}
            typeSpeed={55}
            backSpeed={35}
            backDelay={1800}
            loop
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          I create beautiful and functional web experiences
        </motion.p>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

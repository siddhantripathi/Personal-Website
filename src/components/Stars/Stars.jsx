import React, { useEffect, useState } from 'react';
import './Stars.css';
import Moon from './Moon';
import Sun from './Sun';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Stars = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [numStars, setNumStars] = useState(100);

  const toggleTheme = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Start animation
    const moon = document.querySelector('.moon');
    const sun = document.querySelector('.sun');
    const sky = document.querySelector('.stars');
    
    if (isDark) {
      // Hide moon first
      if (moon) moon.style.display = 'none';
      
      // Then show sun
      if (sun) {
        sun.style.display = 'block';
        sun.classList.add('visible');
      }
      
      if (sky) sky.style.background = 'linear-gradient(to bottom, #87CEEB, #1E90FF)';
      document.body.classList.add('light-mode');
    } else {
      // Hide sun first
      if (sun) {
        sun.classList.remove('visible');
        sun.style.display = 'none';
      }
      
      // Then show moon
      if (moon) moon.style.display = 'block';
      
      if (sky) sky.style.background = 'none';
      document.body.classList.remove('light-mode');
    }

    // Complete animation
    setTimeout(() => {
      setIsDark(!isDark);
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      // Reduce stars on mobile for better performance
      setNumStars(window.innerWidth < 768 ? 50 : 100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    const createStars = (count) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = star.style.height = `${Math.random() * 3 + 1}px`; // Random size
        starsContainer.appendChild(star);
      }
    };

    if (isDark) {
      createStars(200);
    }
    
    // Removed the scroll event listener and transform property

  }, [isDark]);

  return (
    <>
      <div className={`stars ${isDark ? 'dark' : 'light'}`}>
        {isDark && <Moon />}
        {!isDark && <Sun />}
      </div>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </>
  );
};

export default Stars;

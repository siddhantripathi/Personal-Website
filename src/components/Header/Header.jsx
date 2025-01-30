import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">Siddhant Tripathi</div>
      <button 
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ fontSize: '28px' }}>☰</span>
      </button>
      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a onClick={() => scrollToSection('hero')}>Home</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('experience')}>Experience</a>
        <a href="https://drive.google.com/file/d/1t7OZfRzBVEx0dsy0c3AesOJhUjXvPGFB/view?usp=sharing" target=" blank">Resume</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header; 
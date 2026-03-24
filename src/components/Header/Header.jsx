import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Siddhant Tripathi</div>

      <button
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ fontSize: '28px' }}>☰</span>
      </button>

      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#hero"       onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
        <a href="#about"      onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#skills"     onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
        <a href="#projects"   onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
        <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
        <a href="https://drive.google.com/file/d/1sfdIUwGNVmNAjKXDPn6B_T3ljVGWsSlA/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="#contact"    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ProjectPage from './components/Projects/ProjectPage';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Stars from './components/Stars/Stars';
import './styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Certificates from './components/Certificates/Certificates';

// Initialize AOS
AOS.init({
  duration: 10,
  once: true
});

function App() {
  return (
    <Router>
      <div className="App">
        <Stars />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Routes>
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
          <Experience />
          <Certificates />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;

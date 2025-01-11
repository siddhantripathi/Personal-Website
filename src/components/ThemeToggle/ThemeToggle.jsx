import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle; 
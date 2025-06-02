import React from 'react';
import './SkyMapButton.css';

const SkyMapButton = ({ onClick }) => {
  return (
    <button className="sky-map-button" onClick={onClick}>
      <span className="sky-map-icon">✨</span>
      <span className="sky-map-text">Have a look at the night sky where you are!</span>
    </button>
  );
};

export default SkyMapButton; 
import React, { useState, useEffect, useRef } from 'react';
import './StellariumViewer.css';

const StellariumViewer = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const iframeRef = useRef(null);
  const timerRef = useRef(null);
  
  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setLoadError(false);
      
      // Reset iframe to trigger reload when reopened
      if (iframeRef.current) {
        const src = "https://stellarium-web.org/p/observations?embed=1&location=auto";
        iframeRef.current.src = src;
      }
      
      // Handle load errors with timeout
      timerRef.current = setTimeout(() => {
        setLoadError(true);
        setIsLoading(false);
      }, 15000); // 15 second timeout
    }
    
    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen]); // Only depend on isOpen, not isLoading
  
  // Handle iframe load event
  const handleIframeLoad = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="stellarium-overlay" onClick={(e) => {
      // Close when clicking outside the container
      if (e.target.className === 'stellarium-overlay') {
        onClose();
      }
    }}>
      <div className="stellarium-container">
        <div className="stellarium-header">
          <h2>Night Sky Map</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        
        {isLoading && (
          <div className="loading-indicator">
            <div className="loader"></div>
            <p>Loading night sky map...</p>
          </div>
        )}
        
        {loadError && (
          <div className="error-message">
            <p>Unable to load the night sky map. Please try again later.</p>
            <p>You may need to allow location access in your browser settings.</p>
          </div>
        )}
        
        <iframe 
          ref={iframeRef}
          src="https://stellarium-web.org/p/observations?embed=1&location=auto"
          title="Stellarium Web"
          className="stellarium-iframe"
          allow="geolocation"
          frameBorder="0"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default StellariumViewer; 
import React, { useEffect, useRef, useState } from 'react';
import './LightBulb.css';

const LightBulb = ({ toggleTheme }) => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef(null);
  const containerRef = useRef(null);
  const dpr = window.devicePixelRatio || 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    // Match CSS dimensions with canvas buffer dimensions
    const cssSize = 200;
    const bufferSize = cssSize * dpr;
    
    canvas.width = bufferSize;
    canvas.height = bufferSize;
    canvas.style.width = `${cssSize}px`;
    canvas.style.height = `${cssSize}px`;
    ctx.scale(dpr, dpr);

    const draw = (timestamp) => {
      ctx.clearRect(0, 0, cssSize, cssSize);
      
      // Rest of your draw code remains the same...
      // [Keep existing drawing logic here]

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHovered, dpr]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000, 
        pointerEvents: 'auto'
      }}
    >
      <canvas
        ref={canvasRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleTheme}
        style={{
          cursor: 'pointer',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      />
    </div>
  );
};

export default LightBulb;
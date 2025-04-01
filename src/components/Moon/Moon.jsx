import React, { useEffect, useRef, useState } from 'react';
import './Moon.css';

const Moon = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  let animationFrame = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    const draw = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 35;

      // Save the context state before clipping
      ctx.save();
      
      // Create circular clipping path for the entire effect area
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 3, 0, Math.PI * 2);
      ctx.clip();

      // Glow effect
      const gradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.8,
        centerX, centerY, radius * 3
      );
      gradient.addColorStop(0, 'rgba(255, 255, 224, 0.4)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 224, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 255, 224, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Moon base
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 224, 0.95)';
      ctx.fill();

      // Restore context for hover effects
      ctx.restore();

      if (isHovered) {
        ctx.save();
        // Rocket trail
        for (let i = 0; i < 8; i++) {
          const trailY = i * 8;
          const opacity = (8 - i) / 8;
          const width = 4 - (i * 0.3);
          
          ctx.fillStyle = `rgba(255, 200, 100, ${opacity})`;
          ctx.beginPath();
          ctx.arc(
            centerX, 
            centerY - radius * 2 - trailY + Math.sin(timestamp * 0.002) * 10,
            width, 0, Math.PI * 2
          );
          ctx.fill();
        }
        
        // Rocket
        const rocketY = centerY - radius * 2 + Math.sin(timestamp * 0.002) * 10;
        ctx.translate(centerX, rocketY);
        ctx.rotate(-Math.PI / 4);
        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('🚀', 0, 0);
        ctx.restore();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    canvas.width = 150;
    canvas.height = 150;
    draw(0);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <div className="moon-wrapper">
      <canvas
        ref={canvasRef}
        className="moon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default Moon; 
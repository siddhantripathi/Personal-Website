import React, { useEffect, useRef } from 'react';
import { CONSTELLATIONS } from '../../constants/constellations';

import LightBulb from '../LightBulb/LightBulb';
import './Canvas.css';

class WebSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.mousePos = { x: 0, y: 0 };
    this.connectedStars = [];
    this.maxConnections = 5;
    this.connectionDistance = 250;
    this.mouseHistory = [];
    this.maxHistoryLength = 12;
    this.dpr = window.devicePixelRatio || 1;
    this.hoveredConstellation = null;
    this.constellationOpacity = 0;
    this.parallaxFactor = 0.00;
    this.originalStarPositions = [];
  }

  initializeStars(count = 250) {
    this.stars = [];
    this.originalStarPositions = [];
    
    // Place constellation stars with fixed values
    Object.entries(CONSTELLATIONS).forEach(([key, constellation]) => {
      constellation.points.forEach((point, index) => {
        const x = point.x * this.canvas.width;
        const y = point.y * this.canvas.height;
        this.stars.push({
          x: x,
          y: y,
          radius: 2.5,
          brightness: 1.0,
          constellationId: key,
          pointIndex: index
        });
        this.originalStarPositions.push({ x, y });
      });
    });
  
    // Then add random stars for the background
    const remainingStars = count - this.stars.length;
    for (let i = 0; i < remainingStars; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      this.stars.push({
        x: x,
        y: y,
        radius: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.5 + 0.5,
        constellationId: null
      });
      this.originalStarPositions.push({ x, y });
    }
  }
  

  updateMousePosition(x, y) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = (x - rect.left) * this.dpr;
    const mouseY = (y - rect.top) * this.dpr;
    
    this.mousePos = { x: mouseX, y: mouseY };

    // Apply parallax effect to stars
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const offsetX = (mouseX - centerX) * this.parallaxFactor;
    const offsetY = (mouseY - centerY) * this.parallaxFactor;

    this.stars.forEach((star, index) => {
      const original = this.originalStarPositions[index];
      star.x = original.x + offsetX;
      star.y = original.y + offsetY;
    });

    // Check for constellation hover with parallax-adjusted positions
    let foundConstellation = null;
    Object.entries(CONSTELLATIONS).forEach(([key, constellation]) => {
      const stars = this.stars.filter(star => star.constellationId === key);
      const isNearConstellation = stars.some(star => {
        const distance = Math.hypot(star.x - mouseX, star.y - mouseY);
        return distance < 50;
      });
      
      if (isNearConstellation) {
        foundConstellation = key;
      }
    });
    
    if (foundConstellation !== this.hoveredConstellation) {
      this.hoveredConstellation = foundConstellation;
      this.constellationOpacity = 0;
    }

    // Update mouse history for web effect
    this.mouseHistory.unshift({ ...this.mousePos });
    if (this.mouseHistory.length > this.maxHistoryLength) {
      this.mouseHistory.pop();
    }

    this.connectedStars = this.stars
      .map(star => ({
        star,
        distance: Math.hypot(star.x - mouseX, star.y - mouseY)
      }))
      .filter(({ distance }) => distance < this.connectionDistance)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, this.maxConnections);
  }

  draw(timestamp) {
    const deltaTime = timestamp - (this.lastTimestamp || timestamp);
    this.lastTimestamp = timestamp;
    
    // Clear and fill background black
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw web connections (background layer)
    this.drawWebConnections(timestamp);

    // Draw stars
    this.drawStars(timestamp);

    // Draw constellation if hovered
    if (this.constellationOpacity > 0) {
      this.drawConstellation(this.hoveredConstellation, timestamp);
    }

    // Update constellation opacity for fade effect
    if (this.hoveredConstellation && this.constellationOpacity < 1) {
      this.constellationOpacity = Math.min(1, this.constellationOpacity + deltaTime / 500);
    } else if (!this.hoveredConstellation && this.constellationOpacity > 0) {
      this.constellationOpacity = Math.max(0, this.constellationOpacity - deltaTime / 500);
    }
  }

  drawWebConnections(timestamp) {
    this.stars.forEach((star, i) => {
      if (this.mousePos) {
        const distance = Math.hypot(star.x - this.mousePos.x, star.y - this.mousePos.y);
        if (distance < this.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 * (1 - distance / this.connectionDistance)})`;
          this.ctx.lineWidth = 0.6;
          this.ctx.moveTo(star.x, star.y);
          this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
          this.ctx.stroke();
        }
      }

      // Draw connections between stars
      this.stars.slice(i + 1).forEach(otherStar => {
        const distance = Math.hypot(star.x - otherStar.x, star.y - otherStar.y);
        if (distance < this.connectionDistance * 0.5) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.25 * (1 - distance / (this.connectionDistance * 0.5))})`;
          this.ctx.lineWidth = 0.6;
          this.ctx.moveTo(star.x, star.y);
          this.ctx.lineTo(otherStar.x, otherStar.y);
          this.ctx.stroke();
        }
      });
    });
  }

  drawConstellation(constellationId, timestamp) {
    if (!constellationId) return;
    
    const constellation = CONSTELLATIONS[constellationId];
    const stars = this.stars.filter(star => star.constellationId === constellationId);

    // Calculate center for constellation name
    let centerX = 0;
    let centerY = 0;
    stars.forEach(star => {
      centerX += star.x;
      centerY += star.y;
    });
    centerX /= stars.length;
    centerY /= stars.length;

    // Draw constellation lines
    this.ctx.beginPath();
    this.ctx.strokeStyle = `rgba(255, 255, 255, ${this.constellationOpacity * 0.9})`;
    this.ctx.lineWidth = 1.5;

    constellation.connections.forEach(([fromIndex, toIndex]) => {
      const fromStar = stars[fromIndex];
      const toStar = stars[toIndex];
      if (fromStar && toStar) {
        this.ctx.moveTo(fromStar.x, fromStar.y);
        this.ctx.lineTo(toStar.x, toStar.y);
      }
    });

    this.ctx.stroke();

    // Draw constellation name
    if (this.constellationOpacity > 0) {
      this.ctx.fillStyle = `rgba(255, 255, 255, ${this.constellationOpacity})`;
      this.ctx.font = '20px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(constellation.name, centerX, centerY - 30);
    }
  }

  drawStars(timestamp) {
    this.stars.forEach(star => {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      
      // Brighter stars for active constellation
      if (star.constellationId === this.hoveredConstellation) {
        this.ctx.fillStyle = `rgba(255, 255, 255, ${0.7 + this.constellationOpacity * 0.3})`;
      } else {
        this.ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
      }
      
      this.ctx.fill();
    });
  }
}

const Canvas = () => {
  const canvasRef = useRef(null);
  const webSystemRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Account for header height on different screen sizes
      const headerHeight = width <= 480 ? 60 : width <= 768 ? 70 : 50;
      const adjustedHeight = height - headerHeight;
      
      canvas.width = width * dpr;
      canvas.height = adjustedHeight * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${adjustedHeight}px`;
      // Reset the scale each time size updates
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateCanvasSize();
    webSystemRef.current = new WebSystem(canvas);
    webSystemRef.current.initializeStars(250);

    const handleMouseMove = (e) => {
      webSystemRef.current.updateMousePosition(e.clientX, e.clientY);
    };

    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = (timestamp) => {
      webSystemRef.current.draw(timestamp);
      requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: window.innerWidth <= 480 ? '60px' : window.innerWidth <= 768 ? '70px' : '50px',
          left: 0,
          pointerEvents: 'none',
          zIndex: 0,
          width: '100%',
          maxWidth: '100vw',
          overflow: 'hidden'
        }}
      />
      <LightBulb />
    </>
  );
};

export default Canvas;

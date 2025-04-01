import React, { useEffect, useRef, useState } from 'react';
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
    this.maxConnections = 8; // Increased connections
    this.connectionDistance = 250; // Increased distance
    this.mouseHistory = [];
    this.maxHistoryLength = 12;
    this.dpr = window.devicePixelRatio || 1;
  }

  initializeStars(count = 200) {
    this.stars = Array.from({ length: count }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      brightness: Math.random() * 0.5 + 0.5
    }));
  }

  updateMousePosition(x, y) {
    // Convert to canvas coordinates
    const rect = this.canvas.getBoundingClientRect();
    this.mousePos = {
      x: (x - rect.left) * this.dpr,
      y: (y - rect.top) * this.dpr
    };

    this.mouseHistory.unshift({ ...this.mousePos });
    if (this.mouseHistory.length > this.maxHistoryLength) {
      this.mouseHistory.pop();
    }

    this.connectedStars = this.stars
      .map(star => ({
        star,
        distance: Math.hypot(star.x - this.mousePos.x, star.y - this.mousePos.y)
      }))
      .filter(({ distance }) => distance < this.connectionDistance)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, this.maxConnections);
  }

  draw(timestamp) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw stars with pulsing effect
    this.stars.forEach(star => {
      this.ctx.beginPath();
      const pulse = Math.sin(timestamp * 0.002 + star.x) * 0.3;
      this.ctx.arc(star.x, star.y, star.radius + pulse, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness + pulse})`;
      this.ctx.fill();
    });

    // Draw web trail with fading effect
    this.mouseHistory.forEach((pos, index) => {
      const alpha = 1 - (index / this.mouseHistory.length);
      this.ctx.beginPath();
      this.ctx.arc(pos.x, pos.y, 2 * alpha, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${0.3 * alpha})`;
      this.ctx.fill();
    });

    // Draw dynamic connections
    this.connectedStars.forEach(({ star }, index) => {
      const distance = Math.hypot(star.x - this.mousePos.x, star.y - this.mousePos.y);
      const opacity = 1 - (distance / this.connectionDistance);

      // Main connection line
      this.ctx.beginPath();
      this.ctx.moveTo(this.mousePos.x, this.mousePos.y);
      this.ctx.lineTo(star.x, star.y);
      this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.7})`;
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();

      // Animated branches
      for (let i = 0; i < 3; i++) {
        const midX = (this.mousePos.x + star.x) / 2;
        const midY = (this.mousePos.y + star.y) / 2;
        const offset = 15 * Math.sin(timestamp * 0.001 + index + i);
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.mousePos.x, this.mousePos.y);
        this.ctx.quadraticCurveTo(
          midX + offset,
          midY + offset,
          star.x + Math.random() * 2 - 1,
          star.y + Math.random() * 2 - 1
        );
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
        this.ctx.lineWidth = 0.8;
        this.ctx.stroke();
      }
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
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
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
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
     
      <LightBulb />
    </>
  );
};

export default Canvas;
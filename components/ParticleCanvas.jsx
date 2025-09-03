'use client';

import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId; // For requestAnimationFrame

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5; // -0.5 to 0.5
        this.speedY = Math.random() * 1 - 0.5; // -0.5 to 0.5
        // Get primary color from CSS variable for dynamic particles
        this.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#39ff14';
      }

      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.current = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000; // Density
      for (let i = 0; i < numberOfParticles; i++) {
        particles.current.push(new Particle());
      }
    };

    const connectParticles = () => {
      let opacityValue;
      for (let a = 0; a < particles.current.length; a++) {
        for (let b = a; b < particles.current.length; b++) {
          const dx = particles.current[a].x - particles.current[b].x;
          const dy = particles.current[a].y - particles.current[b].y;
          const distance = dx * dx + dy * dy; // Distance squared for performance

          // Connect particles if they are close enough
          if (distance < (canvas.width / 7) * (canvas.height / 7)) { // Connection threshold
            opacityValue = 1 - (distance / 20000); // Fade connections based on distance
            // Use the glow color for connections
            ctx.strokeStyle = `rgba(57, 255, 20, ${opacityValue})`; 
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles.current[a].x, particles.current[a].y);
            ctx.lineTo(particles.current[b].x, particles.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      for (const particle of particles.current) {
        particle.update();
        particle.draw();
      }
      connectParticles();
      animationId = requestAnimationFrame(animate); // Loop animation
    };

    // Initial setup
    setupCanvas();
    initParticles();
    animate();

    // Handle window resize
    const handleResize = () => {
      setupCanvas();
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    // Observe changes to the --primary-color CSS variable on the documentElement
    // to update particle colors dynamically when theme changes.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style' || (mutation.type === 'attributes' && mutation.attributeName.startsWith('--primary-color'))) {
          const newColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
          if (newColor) {
            particles.current.forEach(p => p.color = newColor);
          }
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return <canvas id="particle-canvas" ref={canvasRef}></canvas>;
}
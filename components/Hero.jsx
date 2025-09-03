'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm JV Ransika";
  const speed = 70; // Typing speed in milliseconds

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval); // Cleanup interval
  }, []); // Run once on mount

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-profile-pic">
          {/* Next.js Image component for optimization */}
          <Image
            src="/images/profile.jpg" 
            alt="Alex Doe Profile Picture"
            width={250}
            height={250}
            className="profile-pic"
            priority // Load this image with high priority
          />
        </div>
        <div className="hero-content">
          {/* h1 with data-text for glitch effect and dynamic typing content */}
          <h1 data-text={fullText}>
            <span>{typedText}</span>
            <span className="cursor"></span> {/* Blinking cursor */}
          </h1>
          <p className="subtitle">
            2nd Year AI Undergraduate @UOM
          </p>
          <Link href="/#projects" className="cta-button" onClick={(e) => {
            e.preventDefault();
            const targetElement = document.getElementById('projects');
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth',
                });
            }
          }}>
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
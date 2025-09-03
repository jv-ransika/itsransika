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

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Apply .profile-pic (for size, border, radius, overflow) and .hero-profile-pic (for shadow) to the div wrapper */}
        <div className="profile-pic hero-profile-pic"> 
          <Image
            src="/images/profile.jpg"
            alt="Alex Doe Profile Picture"
            fill // Make the image fill its parent div
            priority
            sizes="250px" // Important for responsive image optimization
          />
        </div>
        <div className="hero-content">
          <h1 data-text={fullText}>
            <span>{typedText}</span>
            <span className="cursor"></span>
          </h1>
          <p className="subtitle">
            2nd Year AI Undergraduate @UOM
          </p>
          <Link href="/#projects" className="cta-button" onClick={(e) => {
            e.preventDefault();
            const targetElement = document.getElementById('projects');
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
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
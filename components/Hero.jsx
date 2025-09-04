'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  // Changed the name as requested
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

  // Function to handle scrolling to the 'about' section
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('about');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Profile picture moved to the beginning of hero-container */}
        <div className="profile-pic hero-profile-pic">
          <Image
            src="/images/profile.jpg"
            alt="JV Ransika Profile Picture" // Updated alt text
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
            2nd Year AI Undergraduate @UOM {/* Updated subtitle */}
          </p>
          {/* Removed the "View My Work" button */}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <Link href="/#about" className="scroll-down-indicator" onClick={handleScrollToAbout}>
        {/* SVG for a down arrow icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/> 
        </svg>
        <span>Scroll Down</span> {/* Text label */}
      </Link>
    </section>
  );
}
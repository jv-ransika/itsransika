'use client';

import { useEffect, useRef, useState } from 'react';

export default function SectionObserver({ id, children, threshold = 0.1, delay = 0 }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply a delay before making visible, if specified
            setTimeout(() => {
                setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold } // Trigger when at least this much of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, delay]); // Re-run effect if threshold or delay changes

  return (
    <section id={id} className={`content-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      {children}
    </section>
  );
}
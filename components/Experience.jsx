'use client';

import SectionObserver from './SectionObserver';
import { experienceData } from '@/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Experience() {
  const timelineRef = useRef(null);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  // Use IntersectionObserver to trigger timeline animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
            observer.unobserve(entry.target); // Stop observing once triggered
          }
        });
      },
      { threshold: 0.1 } // When 10% of the timeline is visible
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []); // Run once on mount

  return (
    <SectionObserver id="experience">
      <h2>Experience</h2>
      {/* Apply 'visible' class to trigger the timeline line animation */}
      <div className={`timeline ${isTimelineVisible ? 'visible' : ''}`} ref={timelineRef}>
        {experienceData.map((item, index) => (
          <div 
            key={item.id} 
            // Apply 'visible' class and staggered delay for each item
            className={`timeline-item ${isTimelineVisible ? 'visible' : ''}`} 
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="timeline-company">{item.company} | {item.date}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionObserver>
  );
}
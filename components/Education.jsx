'use client';

import SectionObserver from './SectionObserver';
import { educationData } from '@/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Education() {
  const timelineRef = useRef(null); // Reusing timeline animation for education
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <SectionObserver id="education">
      <h2>Education</h2>
      <div className={`timeline ${isTimelineVisible ? 'visible' : ''}`} ref={timelineRef}>
        {educationData.map((item, index) => (
          <div 
            key={item.id} 
            className={`timeline-item ${isTimelineVisible ? 'visible' : ''}`} 
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-content education-card"> 
              <h3>{item.degree}</h3>
              <p>{item.institution} | {item.year}</p>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionObserver>
  );
}
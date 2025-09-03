'use client';

import Image from 'next/image';
import SectionObserver from './SectionObserver';
import { galleryImages } from '@/data/portfolio';
import { useEffect } from 'react';

export default function Gallery() {

  // Gallery scroll effect to apply transform to images
  useEffect(() => {
    const handleGalleryScroll = () => {
        const galleryItems = document.querySelectorAll('.gallery-item img');
        const triggerBottom = window.innerHeight * 0.9; // Trigger point for effect

        galleryItems.forEach(img => {
            const imgParent = img.parentElement;
            if (imgParent) {
                const imgTop = imgParent.getBoundingClientRect().top;
                // You can add a 'data-scroll-speed' attribute to individual images in portfolio.js
                // For now, a default speed is used.
                const scrollSpeed = parseFloat(img.getAttribute('data-scroll-speed')) || 1.1; // Default slightly faster scroll
                
                if (imgTop < triggerBottom) {
                    const distance = (triggerBottom - imgTop);
                    const translateAmount = distance * (scrollSpeed - 1) * 0.1; // Adjust multiplier for intensity
                    img.style.transform = `translateY(${translateAmount}px) scale(${scrollSpeed})`; // Apply transform
                } else {
                     img.style.transform = `translateY(0) scale(1)`; // Reset if above trigger
                }
            }
        });
    };

    window.addEventListener('scroll', handleGalleryScroll);
    handleGalleryScroll(); // Initial check on mount

    return () => {
        window.removeEventListener('scroll', handleGalleryScroll); // Cleanup
    };
  }, []); // Run once on mount

  return (
    <SectionObserver id="gallery">
      <h2>Visual Showcase</h2>
      <div className="gallery-grid">
        {galleryImages.map((item) => (
          <div key={item.id} className={`gallery-item ${item.className}`}>
            {/* Next.js Image component with fill and responsive sizes */}
            <Image
              src={item.src}
              alt={item.alt}
              fill // Stretches image to fill parent
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define image sizes for different viewports
              style={{ objectFit: 'cover' }} // Equivalent to CSS object-fit
              // You can add data-scroll-speed here, e.g., data-scroll-speed="1.2"
              // The `img` in the effect will be the actual DOM img element rendered by Next.js Image
            />
          </div>
        ))}
      </div>
    </SectionObserver>
  );
}

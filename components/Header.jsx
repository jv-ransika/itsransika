'use client'; // This component needs client-side interactivity

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  // Effect to determine active navigation link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main section');
      let currentActive = '';
      const offset = 100; // Offset for fixed header height

      sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on component mount

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  // Handler for smooth scrolling to section when a nav link is clicked
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <nav>
        {/* Logo links to home */}
        <Link href="/" className="logo">
          itsRansika &gt;
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              href="/#about"
              // Add 'active' class if current section or path matches
              className={activeSection === 'about' || pathname === '/#about' ? 'active' : ''}
              onClick={(e) => handleNavLinkClick(e, 'about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className={activeSection === 'projects' || pathname === '/#projects' ? 'active' : ''}
              onClick={(e) => handleNavLinkClick(e, 'projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className={activeSection === 'contact' || pathname === '/#contact' ? 'active' : ''}
              onClick={(e) => handleNavLinkClick(e, 'contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
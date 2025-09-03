'use client';

import React, { useState, useEffect } from 'react';

// Helper function to convert hex color to RGB array
const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) { // #RGB
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) { // #RRGGBB
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }
    return [r, g, b];
};

export default function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);

    // Define available primary colors
    const colors = ['#39ff14', '#00b3ff', '#ff007f', '#ffea00'];

    // Apply saved theme on component mount
    useEffect(() => {
        const savedColor = localStorage.getItem('primary-color');
        if (savedColor) {
            applyTheme(savedColor);
        }
    }, []);

    // Function to apply chosen theme colors to CSS variables
    const applyTheme = (color) => {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', color);
        
        const [r, g, b] = hexToRgb(color);
        root.style.setProperty('--glow-color', `rgba(${r}, ${g}, ${b}, 0.2)`);
        root.style.setProperty('--cyber-glow-color', `rgba(${r}, ${g}, ${b}, 0.4)`);

        localStorage.setItem('primary-color', color); // Persist user's choice
    };

    // Handle color option click
    const handleColorClick = (color) => {
        applyTheme(color);
        setIsOpen(false); // Close palette after selection
    };

    // Close palette if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && event.target.closest('.theme-switcher') === null) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);


    return (
        <div className={`theme-switcher ${isOpen ? 'open' : ''}`}>
            {/* Theme icon toggles palette visibility */}
            <div className="theme-icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle theme palette">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z"/>
                </svg>
            </div>
            {/* Color palette options */}
            <div className="color-palette">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="color-option"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                        aria-label={`Set theme to ${color}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
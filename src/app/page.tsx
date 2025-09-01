// pages/index.js
"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Note: This is a complete, working Next.js page using the Pages Router (pages/index.js).
// To set up Tailswind CSS in your Next.js project:
// 1. Install dependencies: npm install -D tailwindcss postcss autoprefixer
// 2. Initialize Tailwind: npx tailwindcss init -p
// 3. In tailwind.config.js, add: content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
// 4. In globals.css (or styles/globals.css), add: @tailwind base; @tailwind components; @tailwind utilities;
// 5. Import globals.css in _app.js if not already.

// Placeholder image URL for avatar (replace with your own)
const avatarUrl = '/main.jpeg';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (in production, integrate with email service like EmailJS)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Ransika J. V. G. | Portfolio</title>
        <meta name="description" content="Portfolio of Ransika J. V. G., Backend Developer and AI Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ransika J. V.</h1>
            <p className="text-xl md:text-2xl mb-8">Backend Developer | AI Enthusiast</p>
            <Link href="#contact">
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105">
                Contact Me
              </button>
            </Link>
          </div>
        </header>

        {/* About Me Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg">
                <Image src={avatarUrl} alt="Ransika J. V. G." width={160} height={160} className="object-cover" />
              </div>
              <div className="max-w-2xl text-center md:text-left">
                <p className="text-lg mb-6">
                  I'm a passionate Backend developer with a keen interest in AI and machine learning. With expertise in building modern web applications, I blend creativity and technology to deliver seamless user experiences.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['JavaScript', 'React', 'Next.js', 'Python', 'AI', 'Machine Learning'].map((skill) => (
                    <span key={skill} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Personal Portfolio',
                  desc: 'A responsive portfolio site built with Next.js and Tailwind CSS.',
                  link: 'https://github.com/yourusername/portfolio',
                },
                {
                  name: 'AI Chatbot',
                  desc: 'An intelligent chatbot using Python and machine learning libraries.',
                  link: 'https://github.com/yourusername/ai-chatbot',
                },
                {
                  name: 'E-commerce App',
                  desc: 'A full-stack React application with user authentication and payment integration.',
                  link: 'https://github.com/yourusername/ecommerce-app',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.desc}</p>
                    <Link href={project.link}>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience / Achievements Section */}
        <section id="experience" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Experience & Achievements</h2>
            <ul className="max-w-2xl mx-auto space-y-6 text-lg">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Certified React Developer from freeCodeCamp (2023)
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Backend Engineer at Tech Startup (2022-2024)
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Won AI Hackathon for Best ML Integration (2024)
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Contributor to open-source Python AI libraries
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
                <div className="space-y-4">
                  <p>Email: <a href="mailto:your.email@example.com" className="text-indigo-600 hover:underline">your.email@example.com</a></p>
                  <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" className="text-indigo-600 hover:underline">linkedin.com/in/yourusername</a></p>
                  <p>GitHub: <a href="https://github.com/yourusername" className="text-indigo-600 hover:underline">github.com/yourusername</a></p>
                </div>
              </div>
              <div className="max-w-md w-full">
                <h3 className="text-2xl font-semibold mb-4 text-center">Contact Form</h3>
                {submitted ? (
                  <p className="text-green-600 text-center">Thank you! Your message has been sent.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-indigo-800 text-white py-6 text-center">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Ransika J. V. G. All rights reserved.</p>
            <p className="text-sm mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </>
  );
}

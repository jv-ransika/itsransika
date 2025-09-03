import './globals.css';
import { Fira_Code } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fira-code', // Define a CSS variable for the font
});

export const metadata = {
  title: 'Alex Doe - Machine Learning Engineer Portfolio',
  description: 'Alex Doe\'s personal portfolio showcasing expertise in Machine Learning, Deep Learning, and Data Science. Explore projects, experience, and skills.',
};

export default function RootLayout({ children }) {
  return (
    // Apply the font variable to the html tag
    <html lang="en" className={firaCode.variable}>
      <body>
        {/* Background particle canvas */}
        <ParticleCanvas /> 
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Theme switching functionality */}
        <ThemeSwitcher /> 
      </body>
    </html>
  );
}
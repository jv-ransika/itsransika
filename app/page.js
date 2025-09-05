import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Awards from '@/components/Awards';
import Gallery from '@/components/Gallery';
import Projects from '@/components/Projects';   
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Awards />
      <Projects />
      <Gallery />
      <Contact />
    </>
  );
}
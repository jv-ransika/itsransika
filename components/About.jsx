import Image from 'next/image';
import SectionObserver from './SectionObserver';
import { skillsData } from '@/data/portfolio';

export default function About() {
  return (
    <SectionObserver id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I’m J.V. Ransika, an undergraduate at the University of Moratuwa, pursuing a degree in Artificial Intelligence. I’m deeply passionate about Artificial Intelligence, Robotics, and the Internet of Things (IoT), and I enjoy exploring how these technologies can come together to create smart, autonomous, and efficient systems.</p>
          <p>
            My interests lie in building intelligent solutions that bridge the gap between software and hardware — from AI-powered decision-making systems to IoT-driven automation and robotic platforms. I’m also keen on research and hands-on projects that push the boundaries of what’s possible in these fields.</p>
          <p>
            Beyond academics, I enjoy experimenting with new technologies, developing innovative projects, and collaborating with like-minded individuals to bring impactful ideas to life.</p>
<br />
          <h3>Skills</h3>

          <div className="skills-list">
            {skillsData.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
        {/* <div>
          <Image
            src="/images/profile.jpg" 
            alt="Alex Doe"
            width={250}
            height={250}
            className="profile-pic"
          />
        </div> */}
      </div>
    </SectionObserver>
  );
}
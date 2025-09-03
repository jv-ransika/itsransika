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
            Hello! I'm Alex Doe, a passionate Machine Learning Engineer with a knack for turning complex data into actionable insights and robust AI solutions. My journey in tech started with a fascination for how computers can learn and adapt, leading me to specialize in machine learning, deep learning, and natural language processing.
          </p>
          <p>
            With a solid foundation in Python, TensorFlow, and various data science libraries, I thrive on building scalable and efficient models that solve real-world problems. Whether it's predicting customer behavior, classifying images, or understanding text sentiment, I enjoy every step from data preprocessing to model deployment.
          </p>
          <p>
            Beyond the code, I'm a firm believer in continuous learning and collaboration. I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community. Let's connect and build something amazing!
          </p>
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
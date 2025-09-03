import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/projects'; // Import your project data
import SectionObserver from './SectionObserver'; // Reusable component for section animations

export default function Projects() {
  return (
    // Wrap with SectionObserver for fade-in effect
    <SectionObserver id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionObserver>
  );
}
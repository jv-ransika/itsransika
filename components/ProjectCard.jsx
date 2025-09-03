import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Link to the dynamic project detail page */}
      <Link href={`/projects/${project.id}`}>
        <h3>{project.title}</h3>
      </Link>
      <p>{project.subtitle}</p>
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <Link href={`/projects/${project.id}`} className="project-links cta-button">
        View Project
      </Link>
    </div>
  );
}
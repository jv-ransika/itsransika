import Link from 'next/link';
import { notFound } from 'next/navigation'; // For handling project not found
import { projectsData } from '@/data/projects'; // Import your project data

// Generate static paths for SSG (Static Site Generation)
// This tells Next.js which project IDs to pre-render at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata (title, description) for each project page
export async function generateMetadata({ params }) {
    const project = projectsData.find((p) => p.id === params.id);
    if (!project) {
        return {
            title: 'Project Not Found - Alex Doe',
        };
    }
    return {
        title: `Project: ${project.title} - Alex Doe`,
        description: project.subtitle,
    };
}

export default function ProjectDetailPage({ params }) {
  const { id } = params;
  // Find the project data matching the ID from the URL
  const project = projectsData.find((p) => p.id === id);

  // If project is not found, render Next.js's 404 page
  if (!project) {
    notFound(); 
  }

  return (
    <main>
      <section className="project-detail-header">
        <h1>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>
      </section>

      <section className="project-detail-content">
        <h3>Project Overview</h3>
        <p>{project.overview}</p>

        <h3>Technologies Used</h3>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <h3>Key Features</h3>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="project-detail-links">
          {project.githubLink && (
            <a href={project.githubLink} className="cta-button" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
          {project.liveDemoLink && (
            <a href={project.liveDemoLink} className="cta-button" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>

        {/* Link back to the main projects section */}
        <Link href="/#projects" className="back-to-projects">
          -- Back to all projects --
        </Link>
      </section>
    </main>
  );
}
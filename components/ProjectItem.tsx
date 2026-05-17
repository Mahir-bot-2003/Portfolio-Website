import type { Project } from "@/data/projects";

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="project-showcase-card">
      <div className="project-card-inner">
        <div className="project-card-number">/ {num}</div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        <div className="project-card-footer">
          <div className="project-tags">
            {project.techStack.map((tech) => (
              <span key={tech} className="project-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.highlight && (
              <span className="project-highlight">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                {project.highlight}
              </span>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

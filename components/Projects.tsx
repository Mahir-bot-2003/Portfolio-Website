import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection animation="up">
          <div className="projects-header">
            <span className="projects-header-word">Featured</span>
            <span className="projects-header-sub">
              Each project is a system engineered,
              stress-tested, and built to last
            </span>
            <span className="projects-header-word">Work</span>
            <span className="projects-count">({projects.length})</span>
          </div>
        </AnimatedSection>

        {/* Project cards */}
        <div>
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} animation="up" delay={i * 2}>
              <ProjectItem project={project} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

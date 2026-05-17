import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { archives } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Archive — Mahir Makar",
  description: "A collection of other repositories, experiments, and earlier work.",
};

export default function ArchivePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="container-wide">
          <AnimatedSection animation="up">
            <Link href="/" className="footer-link" style={{ display: "inline-flex", marginBottom: "3rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Home
            </Link>
            
            <h1 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1rem" }}>
              Project <span className="accent-word">Archive</span>.
            </h1>
            <p className="project-card-desc" style={{ marginBottom: "4rem" }}>
              A collection of other repositories, experiments, and earlier work that doesn't fit on the main showcase but is still worth exploring.
            </p>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {archives.map((project, i) => (
              <AnimatedSection key={project.title} animation="up" delay={i}>
                <article className="project-showcase-card" style={{ padding: "0" }}>
                  <div className="project-card-inner" style={{ padding: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                      <div>
                        <h3 className="project-card-title" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{project.title}</h3>
                        <p className="project-card-desc" style={{ fontSize: "0.9rem", maxWidth: "800px" }}>{project.description}</p>
                      </div>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                    <div className="project-tags" style={{ marginTop: "1.5rem" }}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className="project-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}

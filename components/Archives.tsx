import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

export default function Archives() {
  return (
    <section className="projects-section" style={{ paddingTop: "0rem" }}>
      <div className="container-wide">
        <AnimatedSection animation="up">
          <div className="project-showcase-card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 2.5rem" }}>
            <div>
              <h3 className="project-card-title" style={{ marginBottom: "0.5rem" }}>Other Projects & Archives</h3>
              <p className="project-card-desc">More repositories, experiments, and earlier work.</p>
            </div>
            <Link href="/archive" className="footer-link" style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
              View Archive
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

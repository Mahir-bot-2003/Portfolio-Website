import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <section id="education">
      <div className="container-wide" style={{ padding: "0 2rem" }}>
        <AnimatedSection animation="up">
          <div className="section-label-new">Education</div>
        </AnimatedSection>
        <AnimatedSection animation="up" delay={1}>
          <div className="edu-card">
            <h3 className="edu-degree">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="edu-college">
              Government Engineering College, Jaipur
            </p>
            <p className="edu-meta">
              2023 – 2027 · CGPA:{" "}
              <span className="edu-cgpa">8.99</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

"use client";

import AnimatedSection from "./AnimatedSection";

const categories = [
  { name: "ML Engineering", count: 3 },
  { name: "Mobile Development", count: 2 },
  { name: "Backend Systems", count: 4 },
  { name: "Applied AI", count: 3 },
];

const bullets = [
  "Pipeline Architecture",
  "Fraud Pattern Detection",
  "Real-Time Systems",
  "Cross-Platform Apps",
  "Data at Scale",
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container-wide flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left sidebar */}
        <AnimatedSection animation="left" className="flex-shrink-0 md:w-64">
          <p className="section-label-new">Things I Build With Purpose</p>
          <div className="skills-bullets">
            {bullets.map((b) => (
              <span key={b} style={{ display: "block" }}>{b}</span>
            ))}
          </div>
          <div className="section-number" style={{ marginTop: "2rem" }}>
            03
          </div>
        </AnimatedSection>

        {/* Right: large category labels */}
        <AnimatedSection animation="up" delay={2} className="flex-1">
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <div key={cat.name} className="skill-category">
                {cat.name}
                <sup className="skill-count">{cat.count}</sup>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container-wide flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left: section number */}
        <AnimatedSection animation="left" className="flex-shrink-0">
          <div className="section-number">02</div>
          <p className="about-label" style={{ marginTop: "1rem" }}>
            Not just a portfolio.
            <br />
            It&apos;s a bold vision.
          </p>
        </AnimatedSection>

        {/* Right: main text */}
        <AnimatedSection animation="up" delay={2}>
          <p className="about-text">
            I&apos;m an engineer
            who&apos;s{" "}
            <span className="accent-word">obsessed</span> with
            building systems that detect fraud,
            understand conversations,
            and solve real problems
            — not toy projects.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

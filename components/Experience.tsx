import { experiences } from "@/data/experience";
import ExperienceItem from "./ExperienceItem";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container-wide">
        <AnimatedSection animation="up">
          <div className="flex items-baseline gap-6 mb-8">
            <div className="section-number">05</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Experience
            </h2>
          </div>
        </AnimatedSection>

        <div>
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.role} animation="up" delay={i * 2}>
              <ExperienceItem experience={exp} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

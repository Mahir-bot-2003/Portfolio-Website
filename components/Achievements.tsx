import { achievements } from "@/data/achievements";
import AnimatedSection from "./AnimatedSection";

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "4rem 2rem" }}>
      <div className="container-wide">
        <AnimatedSection animation="up">
          <div className="section-label-new">Achievements</div>
        </AnimatedSection>
        <AnimatedSection animation="up" delay={1}>
          <div>
            {achievements.map((a) => (
              <div key={a.title} className="achievement-item">
                <div className="achievement-icon">▸</div>
                <div>
                  <div className="achievement-title">{a.title}</div>
                  <div className="achievement-desc">{a.description}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

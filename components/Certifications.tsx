import { certifications } from "@/data/certifications";
import AnimatedSection from "./AnimatedSection";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "4rem 2rem" }}>
      <div className="container-wide">
        <AnimatedSection animation="up">
          <div className="section-label-new">Certifications</div>
        </AnimatedSection>
        <AnimatedSection animation="up" delay={1}>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

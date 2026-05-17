import type { Experience } from "@/data/experience";

export default function ExperienceItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="exp-item">
      <h3 className="exp-role">{experience.role}</h3>
      <p className="exp-org">{experience.organization}</p>
      <p className="exp-period">{experience.period}</p>
      <p className="exp-desc">{experience.description}</p>
    </article>
  );
}

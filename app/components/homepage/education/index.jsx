import { educations } from "@/utils/data/educations";
import Reveal from "../../motion/reveal";
import SectionHeader from "../section-header";

function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <SectionHeader index="06" label="Education" title="Foundations." />

      <Reveal className="grid gap-4 md:grid-cols-2">
        {educations.map((e) => (
          <div data-reveal key={e.id} className="card flex flex-col gap-6 p-6 md:p-8">
            <div className="flex items-center justify-between font-mono text-xs text-muted">
              <span>{e.duration}</span>
              <span className="chip text-fg">{e.score}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-fg">{e.title}</h3>
              <p className="mt-1 text-sm text-muted">{e.institution}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted">{e.description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Education;

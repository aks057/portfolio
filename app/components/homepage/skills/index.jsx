import { skillGroups, skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Reveal from "../../motion/reveal";
import SectionHeader from "../section-header";

function SkillChip({ skill }) {
  const icon = skillsImage(skill);
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-3 py-2 text-sm text-fg">
      {icon ? (
        <Image src={icon.src} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
      ) : (
        <span className="grid h-[18px] w-[18px] place-items-center rounded bg-white/10 font-mono text-[10px] text-muted">
          {skill[0]}
        </span>
      )}
      {skill}
    </span>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <SectionHeader index="04" label="Skills" title="The toolkit." />

      <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div data-reveal key={group.label} className="card p-6">
            <p className="section-label mb-5">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <SkillChip key={s} skill={s} />
              ))}
            </div>
          </div>
        ))}
        <div data-reveal className="card flex flex-col justify-between gap-4 p-6">
          <p className="section-label">Fundamentals</p>
          <p className="text-sm leading-relaxed text-muted">
            Data structures & algorithms, OOP, operating systems, DBMS, and the habit of measuring before optimizing.
          </p>
        </div>
      </Reveal>

      <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <Marquee speed={35} gradient={false} autoFill>
          {skillsData.map((s, i) => (
            <span key={i} className="mx-6 font-mono text-sm uppercase tracking-widest text-muted/60">
              {s} <span className="ml-6 text-accent">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;

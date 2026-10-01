"use client";

import { experiences } from "@/utils/data/experience";
import { useRef } from "react";
import { FiArrowUp, FiMapPin } from "react-icons/fi";
import { gsap, MOTION_OK, useGSAP } from "../../motion/gsap";
import Reveal from "../../motion/reveal";
import SectionHeader from "../section-header";

function Experience() {
  const ref = useRef(null);

  // The timeline rail fills in as you scroll through the roles.
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.utils.toArray("[data-rail]", ref.current).forEach((rail) => {
        gsap.fromTo(
          rail,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: rail.parentElement, start: "top 70%", end: "bottom 60%", scrub: true },
          }
        );
      });
    });
  }, { scope: ref });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32">
      <SectionHeader index="02" label="Experience" title="Where I've been shipping." />

      {experiences.map((exp) => (
        <div key={exp.id} className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal self className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-2xl font-semibold tracking-tight text-fg">{exp.company}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
              <FiMapPin /> {exp.location}
            </p>
          </Reveal>

          <div className="relative pl-8">
            <span className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-line" />
            <span data-rail className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-accent to-accent-2" />

            {exp.roles.map((role, i) => (
              <div key={role.title}>
                {i > 0 && (
                  <div className="my-10 flex items-center gap-3">
                    <span className="chip !border-emerald-400/30 !text-emerald-300">
                      <FiArrowUp /> Promoted
                    </span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                )}
                <Reveal className="relative">
                  <span className="absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-accent bg-ink" />
                  <div data-reveal className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-medium text-fg">{role.title}</h3>
                    <span className="font-mono text-xs text-muted">{role.duration}</span>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {role.points.map((p) => (
                      <li data-reveal key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div data-reveal className="mt-5 flex flex-wrap gap-2">
                    {role.techStack.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;

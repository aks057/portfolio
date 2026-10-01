"use client";

import { useRef } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { gsap, MOTION_OK, MOTION_REDUCED, useGSAP } from "../../motion/gsap";

const GRADIENTS = [
  "from-indigo-500/30 via-violet-500/10 to-transparent",
  "from-cyan-400/25 via-sky-500/10 to-transparent",
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  useGSAP(() => {
    const q = gsap.utils.selector(ref);
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: index * 0.12,
          scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        }
      );
      // Big index numeral drifts against scroll for a subtle parallax.
      gsap.fromTo(
        q("[data-parallax]"),
        { yPercent: 25 },
        {
          yPercent: -25,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    });
    mm.add(MOTION_REDUCED, () => gsap.set(ref.current, { autoAlpha: 1 }));
  }, { scope: ref });

  const primaryLink = project.demo || project.code;

  return (
    <article ref={ref} data-reveal className="card group flex flex-col">
      <div className={`relative h-56 overflow-hidden border-b border-line bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} sm:h-64`}>
        <div className="bg-grid absolute inset-0 opacity-60" />
        <span
          data-parallax
          aria-hidden="true"
          className="absolute -bottom-6 right-4 select-none font-mono text-[9rem] font-bold leading-none text-white/[0.06] sm:text-[11rem]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute left-6 top-6 flex flex-wrap gap-2">
          <span className="chip bg-ink/60 backdrop-blur">{project.role}</span>
        </div>
        <h3 className="absolute bottom-6 left-6 text-4xl font-semibold tracking-tight text-fg transition-transform duration-500 group-hover:-translate-y-1 sm:text-5xl">
          {project.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-lg text-fg">{project.summary}</p>
        <ul className="mt-4 space-y-2.5">
          {project.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-8">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-solid !py-2">
              Live <FiArrowUpRight />
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">
              <FiGithub /> Code
            </a>
          )}
          {primaryLink && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-white/30 group-hover:text-fg"
            >
              <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

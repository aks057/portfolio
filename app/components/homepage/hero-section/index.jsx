"use client";

import { personalData } from "@/utils/data/personal-data";
import { socials } from "@/utils/data/socials";
import { useRef } from "react";
import { FiArrowDown, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { gsap, MOTION_OK, MOTION_REDUCED, useGSAP } from "../../motion/gsap";
import Magnetic from "../../motion/magnetic";
import { scrollToHash } from "../../motion/smooth-scroll";

const HEADLINE = ["Software engineer", "building reliable systems", "for regulated industries."];

function HeroSection() {
  const ref = useRef(null);

  useGSAP(() => {
    const q = gsap.utils.selector(ref);
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.1 } });
      tl.fromTo(q("[data-hero='badge']"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 })
        .fromTo(q("[data-hero='line']"), { autoAlpha: 0, yPercent: 105 }, { autoAlpha: 1, yPercent: 0, stagger: 0.1, duration: 1.3 }, "-=0.8")
        .fromTo(q("[data-hero='fade']"), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, stagger: 0.08 }, "-=0.9");

      // Content drifts up and fades as the hero scrolls away; the orbs move slower for depth.
      gsap.to(q("[data-hero='content']"), {
        yPercent: -12,
        autoAlpha: 0.2,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(q("[data-hero='orbs']"), {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
    });
    mm.add(MOTION_REDUCED, () => gsap.set(q("[data-reveal]"), { autoAlpha: 1 }));
  }, { scope: ref });

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center pb-16 pt-32">
      <div data-hero="orbs" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute left-1/2 top-0 h-[80vh] w-screen -translate-x-1/2" />
        <div className="orb absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/25 blur-[120px] sm:h-[520px] sm:w-[520px]" />
        <div className="orb absolute bottom-0 left-[-15%] h-[360px] w-[360px] rounded-full bg-accent-2/15 blur-[120px] [animation-delay:-7s]" />
      </div>

      <div data-hero="content" className="w-full">
        <div data-hero="badge" data-reveal className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          SDE @ Leucine · open to new Learnings
        </div>

        <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="sr-only">{personalData.name}, </span>
          {HEADLINE.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <span data-hero="line" data-reveal className={`block ${i === 2 ? "text-gradient" : ""}`}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p data-hero="fade" data-reveal className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I&apos;m <span className="text-fg">{personalData.name}</span>. {personalData.tagline}
        </p>

        <div data-hero="fade" data-reveal className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToHash("#projects"); }}
              className="btn-solid"
            >
              View my work <FiArrowUpRight />
            </a>
          </Magnetic>
          <Magnetic>
            <a href={personalData.resume} target="_blank" rel="noopener" className="btn-ghost">
              Download resume
            </a>
          </Magnetic>
        </div>

        <div data-hero="fade" data-reveal className="mt-14 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label} strength={0.5}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-white/30 hover:text-fg"
                >
                  <Icon size={16} />
                </a>
              </Magnetic>
            ))}
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-muted">
            <span className="inline-flex items-center gap-1.5"><FiMapPin /> {personalData.address}</span>
            <button
              onClick={() => scrollToHash("#about")}
              className="hidden items-center gap-1.5 transition-colors hover:text-fg sm:inline-flex"
            >
              Scroll <FiArrowDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

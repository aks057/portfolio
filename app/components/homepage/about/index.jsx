import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Counter from "../../motion/counter";
import Reveal from "../../motion/reveal";
import SectionHeader from "../section-header";

const CORE = ["React", "TypeScript", "Next.js", "Java", "PostgreSQL", "Node.js", "LLM APIs", "Stripe"];

function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <SectionHeader index="01" label="About" title="Product-minded engineer with a competitive programmer's instincts." />

      <Reveal className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 md:grid-cols-6">
        <div data-reveal className="card p-6 md:col-span-4 md:row-span-2 md:p-8">
          <p className="section-label mb-6">Hello</p>
          <p className="text-lg leading-relaxed text-fg/90 md:text-xl">{personalData.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {personalData.exploring.map((t) => (
              <span key={t} className="chip">exploring · {t}</span>
            ))}
          </div>
        </div>

        <div data-reveal className="card group relative min-h-[320px] md:col-span-2 md:row-span-2">
          <Image
            src={personalData.profile}
            alt={personalData.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
            <p className="font-medium text-fg">{personalData.name}</p>
            <p className="font-mono text-xs text-muted">{personalData.designation} · {personalData.address}</p>
          </div>
        </div>

        <div data-reveal className="card flex flex-col justify-between gap-6 p-6 md:col-span-2">
          <p className="section-label">Now</p>
          <div>
            <p className="text-xl font-semibold tracking-tight text-fg">SDE at Leucine</p>
            <p className="mt-1 text-sm text-muted">AI for pharma compliance · promoted from intern in May 2025</p>
          </div>
        </div>

        <div data-reveal className="card grid grid-cols-2 gap-4 p-6 md:col-span-2">
          <p className="section-label col-span-2">Max ratings</p>
          <div>
            <Counter value={1495} className="text-3xl font-semibold tracking-tight text-fg" />
            <p className="mt-1 font-mono text-xs text-muted">Codeforces</p>
          </div>
          <div>
            <Counter value={1644} className="text-3xl font-semibold tracking-tight text-fg" />
            <p className="mt-1 font-mono text-xs text-muted">CodeChef</p>
          </div>
        </div>

        <div data-reveal className="card p-6 md:col-span-2">
          <p className="section-label mb-4">Core stack</p>
          <div className="flex flex-wrap gap-2">
            {CORE.map((s) => (
              <span key={s} className="chip text-fg">{s}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default AboutSection;

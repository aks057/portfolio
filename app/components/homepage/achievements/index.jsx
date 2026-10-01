import { contests, ratings } from "@/utils/data/achievements";
import { FiArrowUpRight } from "react-icons/fi";
import Counter from "../../motion/counter";
import Reveal from "../../motion/reveal";
import SectionHeader from "../section-header";

function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <SectionHeader index="05" label="Competitive programming" title="Speed, correctness, and edge cases.">
        Years of contest practice taught me to reason about complexity up front and to break my own code before anyone else does.
      </SectionHeader>

      <Reveal className="grid gap-4 md:grid-cols-3">
        {ratings.map((r) => (
          <a
            data-reveal
            key={r.platform}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card group block p-6 md:p-8"
          >
            <div className="flex items-center justify-between">
              <p className="section-label">{r.platform}</p>
              <FiArrowUpRight className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
            </div>
            <Counter value={r.value} suffix={r.suffix} className="mt-6 block text-5xl font-semibold tracking-tight text-fg md:text-6xl" />
            <p className="mt-2 text-sm text-muted">{r.label}</p>
          </a>
        ))}
      </Reveal>

      <Reveal className="card mt-4 divide-y divide-white/[0.06]">
        {contests.map((c) => (
          <div data-reveal key={c.name} className="flex items-center justify-between gap-4 px-6 py-4 md:px-8">
            <p className="text-sm text-fg sm:text-base">{c.name}</p>
            <p className="shrink-0 text-right">
              <span className="font-mono text-sm text-fg">{/^\d/.test(c.rank) ? `#${c.rank}` : c.rank}</span>
              <span className="ml-2 hidden font-mono text-xs text-muted sm:inline">{c.note}</span>
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Achievements;

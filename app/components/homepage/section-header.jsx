import Reveal from "../motion/reveal";
import SplitText from "../motion/split-text";

export default function SectionHeader({ index, label, title, children }) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal self className="mb-4 flex items-center gap-3">
        <span className="section-label">
          {index} / {label}
        </span>
        <span className="h-px w-12 bg-line" />
      </Reveal>
      <SplitText text={title} className="max-w-3xl text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl" />
      {children && (
        <Reveal self as="p" className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {children}
        </Reveal>
      )}
    </div>
  );
}

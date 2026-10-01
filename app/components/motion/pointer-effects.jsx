"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "./gsap";

// A soft glow that trails the pointer, and the --mx/--my variables that drive the .card spotlight.
export default function PointerEffects() {
  const glow = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(pointer: fine)", () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const xTo = gsap.quickTo(glow.current, "x", { duration: reduced ? 0 : 0.8, ease: "power3.out" });
      const yTo = gsap.quickTo(glow.current, "y", { duration: reduced ? 0 : 0.8, ease: "power3.out" });
      gsap.set(glow.current, { autoAlpha: 1, xPercent: -50, yPercent: -50 });

      const move = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
        const card = e.target.closest?.(".card");
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
      };
      window.addEventListener("pointermove", move, { passive: true });
      return () => window.removeEventListener("pointermove", move);
    });
  });

  return (
    <div
      ref={glow}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[560px] w-[560px] rounded-full opacity-0"
      style={{
        background: "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 65%)",
        visibility: "hidden",
      }}
    />
  );
}

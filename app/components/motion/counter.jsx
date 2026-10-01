"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

// Server-renders the final value, then counts up from 0 when scrolled into view.
export default function Counter({ value, suffix = "", className }) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const state = { n: 0 };
      el.textContent = `0${suffix}`;
      gsap.to(state, {
        n: value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(state.n)}${suffix}`;
        },
      });
      return () => {
        el.textContent = `${value}${suffix}`;
      };
    });
  }, { scope: ref });

  return (
    <span ref={ref} className={`tabular-nums ${className || ""}`}>
      {value}
      {suffix}
    </span>
  );
}

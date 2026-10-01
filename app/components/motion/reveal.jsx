"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, MOTION_REDUCED, useGSAP } from "./gsap";

// Fades and lifts every [data-reveal] element inside it when it scrolls into view.
// Pass `self` to reveal the wrapper itself instead.
export default function Reveal({
  as: Tag = "div",
  self = false,
  stagger = 0.08,
  y = 28,
  start = "top 85%",
  className,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    const targets = self ? [el] : gsap.utils.toArray("[data-reveal]", el);
    if (!targets.length) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start, once: true },
        }
      );
    });
    mm.add(MOTION_REDUCED, () => gsap.set(targets, { autoAlpha: 1 }));
  }, { scope: ref });

  return (
    <Tag ref={ref} className={className} {...(self ? { "data-reveal": "" } : {})} {...rest}>
      {children}
    </Tag>
  );
}

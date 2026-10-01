"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, MOTION_REDUCED, useGSAP } from "./gsap";

// Word-by-word masked reveal. `onScroll` waits for the viewport; otherwise it plays on load after `delay`.
export default function SplitText({ text, as: Tag = "h2", className, delay = 0, onScroll = true, wordClassName }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useGSAP(() => {
    const inner = gsap.utils.toArray("[data-reveal]", ref.current);
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        inner,
        { autoAlpha: 0, yPercent: 110 },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.06,
          delay,
          scrollTrigger: onScroll ? { trigger: ref.current, start: "top 85%", once: true } : undefined,
        }
      );
    });
    mm.add(MOTION_REDUCED, () => gsap.set(inner, { autoAlpha: 1 }));
  }, { scope: ref });

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <span data-reveal className={`inline-block ${wordClassName || ""}`}>
            {word}
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

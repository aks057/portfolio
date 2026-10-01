"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, MOTION_REDUCED, ScrollTrigger } from "./gsap";

const NAV_OFFSET = -88;
let lenis = null;

// Scrolls to "#id" through Lenis when it is running, natively otherwise.
export function scrollToHash(hash) {
  const target = hash === "#top" ? 0 : document.querySelector(hash);
  if (target === null) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.2 });
  } else if (target === 0) {
    window.scrollTo({ top: 0 });
  } else {
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET });
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    window.__motionReady = true;
    if (window.matchMedia(MOTION_REDUCED).matches) return;

    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    if (window.location.hash) scrollToHash(window.location.hash);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenis = null;
    };
  }, []);

  return null;
}

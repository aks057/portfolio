"use client";

import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { ScrollTrigger, useGSAP } from "../motion/gsap";
import { scrollToHash } from "../motion/smooth-scroll";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => setVisible(self.scroll() > 600),
    });
    return () => st.kill();
  });

  return (
    <button
      onClick={() => scrollToHash("#top")}
      aria-label="Back to top"
      className={`fixed bottom-6 right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-2/90 text-fg backdrop-blur transition-all duration-300 hover:border-white/30 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FiArrowUp size={16} />
    </button>
  );
};

export default ScrollToTop;

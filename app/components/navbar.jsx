"use client";

import { personalData } from "@/utils/data/personal-data";
import { navSections } from "@/utils/data/socials";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiCommand, FiMenu, FiX } from "react-icons/fi";
import { OPEN_PALETTE_EVENT } from "./command-palette";
import { ScrollTrigger, useGSAP } from "./motion/gsap";
import { scrollToHash } from "./motion/smooth-scroll";

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(() => {
    if (!isHome) return;
    const triggers = navSections.map(({ id }) =>
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 45%",
        end: "bottom 45%",
        onToggle: (self) => setActive((current) => (self.isActive ? id : current === id ? "" : current)),
      })
    );
    const top = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => setScrolled(self.scroll() > 24),
    });
    return () => {
      triggers.forEach((t) => t.kill());
      top.kill();
    };
  }, { dependencies: [isHome] });

  useEffect(() => setMenuOpen(false), [pathname]);

  const onNav = (e, id) => {
    setMenuOpen(false);
    if (!isHome) return;
    e.preventDefault();
    scrollToHash(`#${id}`);
    history.replaceState(null, "", `#${id}`);
  };

  const openPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled || !isHome || menuOpen
            ? "border-line bg-ink/75 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          onClick={(e) => onNav(e, "top")}
          className="flex items-center gap-2 rounded-full px-2 py-1 font-mono text-sm font-medium tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-fg text-[11px] font-bold text-ink">AK</span>
          <span className="hidden sm:inline">Abhinash Kumar</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={(e) => onNav(e, id)}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === id ? "bg-white/[0.07] text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-fg sm:inline-flex"
            aria-label="Open command menu"
          >
            <FiCommand size={12} /> K
          </button>
          <a href={personalData.resume} target="_blank" rel="noopener" className="btn-solid !px-4 !py-1.5">
            Resume
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-fg md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-ink/95 p-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  onClick={(e) => onNav(e, id)}
                  className="block rounded-2xl px-4 py-3 text-base text-fg hover:bg-white/5"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={() => { setMenuOpen(false); openPalette(); }} className="w-full rounded-2xl px-4 py-3 text-left text-base text-muted hover:bg-white/5">
                Command menu
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;

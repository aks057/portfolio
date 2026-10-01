"use client";

import { personalData } from "@/utils/data/personal-data";
import { navSections, socials } from "@/utils/data/socials";
import { Command } from "cmdk";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiCopy, FiDownload, FiHash } from "react-icons/fi";
import { toast } from "react-toastify";
import { scrollToHash } from "./motion/smooth-scroll";

export const OPEN_PALETTE_EVENT = "open-command-palette";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  const run = (fn) => () => {
    setOpen(false);
    fn();
  };

  const goTo = (id) => {
    if (pathname === "/") scrollToHash(`#${id}`);
    else router.push(`/#${id}`);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      overlayClassName="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-[18vh] z-[100] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/60"
    >
      <Command.Input
        placeholder="Jump to a section, open a profile…"
        className="w-full border-b border-line bg-transparent px-4 py-4 text-sm text-fg outline-none placeholder:text-muted"
      />
      <Command.List data-lenis-prevent className="p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-muted">No results.</Command.Empty>

        <Command.Group heading="Navigate">
          {navSections.map((s) => (
            <Command.Item key={s.id} value={`go ${s.label} ${s.id}`} onSelect={run(() => goTo(s.id))}>
              <FiHash className="text-muted" /> {s.label}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Actions">
          <Command.Item
            value="copy email"
            onSelect={run(() => {
              navigator.clipboard?.writeText(personalData.email);
              toast.success("Email copied");
            })}
          >
            <FiCopy className="text-muted" /> Copy email
            <span className="ml-auto font-mono text-xs text-muted">{personalData.email}</span>
          </Command.Item>
          <Command.Item value="download resume cv" onSelect={run(() => window.open(personalData.resume, "_blank"))}>
            <FiDownload className="text-muted" /> Download resume
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Profiles">
          {socials.map(({ label, href, icon: Icon }) => (
            <Command.Item key={label} value={`open ${label}`} onSelect={run(() => window.open(href, "_blank", "noopener"))}>
              <Icon className="text-muted" /> {label}
              <FiArrowUpRight className="ml-auto text-muted" />
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
      <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        <span>↑↓ navigate · ↵ select</span>
        <span>esc to close</span>
      </div>
    </Command.Dialog>
  );
}

import { personalData } from "@/utils/data/personal-data";
import { socials } from "@/utils/data/socials";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personalData.name} · Built with Next.js, GSAP & Tailwind
        </p>
        <div className="flex items-center gap-1">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

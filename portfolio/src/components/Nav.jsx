import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(15,16,19,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
      }}
    >
      <div className="container-xl flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className="font-display text-lg tracking-tight"
          style={{ color: "var(--color-paper)" }}
        >
          {profile.shortName}
          <span style={{ color: "var(--color-brass)" }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors"
              style={{
                color: active === item.href ? "var(--color-brass)" : "var(--color-mist)",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 border transition-colors"
            style={{ borderColor: "var(--color-brass)", color: "var(--color-brass)" }}
          >
            Work with me
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X size={22} color="var(--color-paper)" />
          ) : (
            <Menu size={22} color="var(--color-paper)" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation" className="md:hidden border-t"
          style={{ background: "var(--color-ink)", borderColor: "var(--color-line)" }}
        >
          <div className="container-xl py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl"
                style={{ color: "var(--color-paper)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

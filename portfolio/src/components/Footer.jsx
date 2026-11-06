import { nav, profile, socials } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--color-ink-2)", borderTop: "1px solid var(--color-line)" }}>
      <div className="container-xl py-14 grid grid-cols-12 gap-y-10">
        <div className="col-span-12 md:col-span-5">
          <p className="font-display text-2xl mb-3" style={{ color: "var(--color-paper)" }}>
            {profile.name}
            <span style={{ color: "var(--color-brass)" }}>.</span>
          </p>
          <p className="text-sm leading-relaxed max-w-xs mb-4" style={{ color: "var(--color-mist)" }}>
            {profile.subheadline}
          </p>
          <p className="text-xs" style={{ color: "var(--color-mist-dim)" }}>
            Founder &amp; CEO, Argus Platforms Limited
          </p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <h4 className="text-xs uppercase tracking-wide mb-4" style={{ color: "var(--color-mist-dim)" }}>
            Navigate
          </h4>
          <div className="flex flex-col gap-2.5">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm w-fit" style={{ color: "var(--color-mist)" }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h4 className="text-xs uppercase tracking-wide mb-4" style={{ color: "var(--color-mist-dim)" }}>
            Connect
          </h4>
          <div className="flex flex-col gap-2.5">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm w-fit"
                style={{ color: "var(--color-mist)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        style={{ borderTop: "1px solid var(--color-line)", color: "var(--color-mist-dim)" }}
      >
        <span>© {year} {profile.name}. All rights reserved.</span>
        <span>Designed and developed by Theophilus Mensah.</span>
      </div>
    </footer>
  );
}

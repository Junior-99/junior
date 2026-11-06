import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--color-ink)" }}>
      <div className="container-xl">
        <SectionHeading
          label="Who I am"
          title="Engineering, product and a little storytelling."
        />

        <div className="grid grid-cols-12 gap-y-10 md:gap-x-6">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <p
                className="text-xl md:text-2xl font-display leading-snug mb-8 text-balance"
                style={{ color: "var(--color-paper)" }}
              >
                {about.intro}
              </p>
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className="text-base leading-relaxed mb-5 max-w-xl"
                  style={{ color: "var(--color-mist)" }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="flex flex-col divide-y" style={{ borderColor: "var(--color-line)" }}>
              {about.pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.06}>
                  <div
                    className="py-5 first:pt-0"
                    style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-line)" }}
                  >
                    <h3
                      className="font-display text-lg mb-1.5"
                      style={{ color: "var(--color-brass)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

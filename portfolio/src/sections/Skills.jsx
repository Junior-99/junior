import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32" style={{ background: "var(--color-ink-2)" }}>
      <div className="container-xl">
        <SectionHeading
          label="What I work with"
          title="Skills & technologies"
          description="The tools I reach for to take a product from idea to something running in production."
        />

        <div className="grid grid-cols-12 gap-y-10 md:gap-x-6">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 0.06}>
                <div>
                  <h3
                    className="font-display text-xl mb-4"
                    style={{ color: "var(--color-paper)" }}
                  >
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-2 text-sm border transition-colors hover:border-[var(--color-brass)] hover:text-[var(--color-brass)]"
                        style={{ borderColor: "var(--color-line)", color: "var(--color-mist)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

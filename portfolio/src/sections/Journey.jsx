import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { journey } from "../data/content";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32" style={{ background: "var(--color-ink-2)" }}>
      <div className="container-xl">
        <SectionHeading label="The path so far" title="Journey" />

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-8">
            <div className="relative pl-8" style={{ borderLeft: "1px solid var(--color-line)" }}>
              {journey.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="relative pb-12 last:pb-0">
                    <span
                      className="absolute -left-[calc(2rem+4.5px)] top-1.5 w-2.5 h-2.5"
                      style={{ background: "var(--color-brass)" }}
                    />
                    <p
                      className="font-display italic text-sm mb-1.5"
                      style={{ color: "var(--color-brass)" }}
                    >
                      {item.period}
                    </p>
                    <h3
                      className="font-display text-2xl mb-2"
                      style={{ color: "var(--color-paper)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-lg"
                      style={{ color: "var(--color-mist)" }}
                    >
                      {item.description}
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

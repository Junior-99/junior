import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { ideas } from "../data/content";

export default function Ideas() {
  return (
    <section id="ideas" className="py-24 md:py-32" style={{ background: "var(--color-ink)" }}>
      <div className="container-xl">
        <SectionHeading
          label="Ideas lab"
          title="Notes from the work"
          description="A few practical observations from building products and websites."
        />

        <div className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10 grid md:grid-cols-3 gap-px" style={{ background: "var(--color-line)" }}>
            {ideas.map((idea, i) => (
              <Reveal key={idea.title} delay={i * 0.06}>
                <details className="h-full p-7" style={{ background: "var(--color-ink)" }}>
                  <p
                    className="font-display italic text-sm mb-4"
                    style={{ color: "var(--color-brass)" }}
                  >
                    {idea.kind}
                  </p>
                  <summary className="cursor-pointer">
                  <h3
                    className="font-display text-xl leading-snug mb-3 text-balance"
                    style={{ color: "var(--color-paper)" }}
                  >
                    {idea.title}
                  </h3>
                  </summary>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                    {idea.description}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

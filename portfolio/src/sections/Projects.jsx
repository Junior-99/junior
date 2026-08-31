import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProjectPlaceholder from "../components/ProjectPlaceholder";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/content";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="py-24 md:py-32" style={{ background: "var(--color-ink)" }}>
      <div className="container-xl">
        <SectionHeading
          label="Selected work"
          title="Products I've built"
          description="Two things I'm building right now a product and the company behind it."
        />

        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10 flex flex-col gap-16">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <button
                  onClick={() => setActive(project)}
                  className="group w-full text-left grid md:grid-cols-12 gap-6 md:gap-10 items-center"
                >
                  <div className="md:col-span-5 corner-marks p-2">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
                        <ProjectPlaceholder name={project.name} />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <p
                      className="font-display italic text-sm mb-2"
                      style={{ color: "var(--color-brass)" }}
                    >
                      {project.tag}
                    </p>
                    <h3
                      className="font-display text-3xl md:text-4xl mb-3 flex items-center gap-3"
                      style={{ color: "var(--color-paper)" }}
                    >
                      {project.name}
                      <ArrowUpRight
                        size={24}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: "var(--color-mist-dim)" }}
                      />
                    </h3>
                    <p
                      className="text-base leading-relaxed max-w-lg mb-5"
                      style={{ color: "var(--color-mist)" }}
                    >
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs border"
                          style={{ borderColor: "var(--color-line)", color: "var(--color-mist-dim)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

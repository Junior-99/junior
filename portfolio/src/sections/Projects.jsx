import { websiteConcepts } from "../data/otherWork";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

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
          description="FlipMall and NerdSpace, followed by experiments and independent website concepts."
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
                        <img src={project.images[0]} alt={project.imageNote || project.name} loading="lazy" className="h-full w-full object-contain" style={{ background: "#eee8dc" }} />
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

      <div className="container-xl pt-20">
        <figure className="mb-10"><img src="/projects/connected-worlds.png" alt="Original architectural illustration of a marketplace and community observatory" loading="lazy" width="1536" height="1024" className="w-full max-h-[420px] object-cover" /><figcaption className="mt-2 text-xs" style={{color:'var(--color-mist-dim)'}}>An original illustration of the places my products connect.</figcaption></figure>
<h3 className="font-display text-3xl mb-5">Other work</h3><article className="border-y py-7 mb-10" style={{borderColor:'var(--color-line)'}}><h4 className="font-display text-xl">Argus Platforms Limited / Company website</h4><p className="mt-3 mb-4" style={{color:'var(--color-mist)'}}>The studio behind my product work, with services, visual concepts and a project enquiry workflow.</p><a className="underline" href="https://argus-ruddy-eta.vercel.app/" target="_blank" rel="noreferrer">Explore Argus ↗</a></article>
<article className="border-y py-7 mb-10" style={{borderColor:'var(--color-line)'}}><h4 className="font-display text-xl">Campus Buddy / Mobile prototype</h4><p className="mt-3 max-w-2xl" style={{color:'var(--color-mist)'}}>A University of Ghana campus discovery and opt-in walking companion app with profiles, buddy requests and participant chat. Route previews are illustrated and device validation is ongoing.</p><a className="inline-block mt-4 underline" href="mailto:mtheophilus565@gmail.com?subject=Campus%20Buddy%20walkthrough">Request a walkthrough</a></article>
        <div className="border-y py-7 mb-10" style={{ borderColor: "var(--color-line)" }}>
          <h4 className="font-display text-xl">EasyPay / Sandbox MVP</h4>
          <p className="mt-3 max-w-2xl" style={{ color: "var(--color-mist)" }}>A merchant API and developer console for testing payment states, account isolation and idempotent requests. The current implementation simulates payments and does not move money.</p>
          <a className="inline-block mt-4 underline" href="mailto:mtheophilus565@gmail.com?subject=EasyPay%20walkthrough">Request a walkthrough</a>
        </div>
        <h4 className="text-lg mb-3">Independent website concepts</h4>
        <p className="max-w-2xl mb-8" style={{ color: "var(--color-mist)" }}>Self-initiated demonstrations across furniture, food, beauty, art and wholesale. These are concepts, not commissioned client work or business endorsements.</p>
        <div className="grid md:grid-cols-2 gap-x-12">
          {websiteConcepts.map((item, i) => <article key={item.href} className="border-t py-6" style={{ borderColor: "var(--color-line)" }}>
            <span className="text-xs" style={{ color: "var(--color-brass)" }}>{String(i + 1).padStart(2, '0')} / CONCEPT</span>
            <h5 className="font-display text-xl mt-2">{item.name}</h5>
            <p className="text-sm mt-2 mb-4" style={{ color: "var(--color-mist)" }}>{item.description}</p>
            <a href={item.href} target="_blank" rel="noreferrer" className="underline mr-5">Explore website</a>
            <a href={item.source} target="_blank" rel="noreferrer" className="underline">Source</a>
          </article>)}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

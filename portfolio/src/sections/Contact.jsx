import { useState } from "react";
import { Mail, ArrowUpRight, FileDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, services, socials } from "../data/content";

const inputStyle = {
  background: "var(--color-ink)",
  borderColor: "var(--color-line)",
  color: "var(--color-paper)",
};

export default function Contact() {
  const [copyStatus,setCopyStatus]=useState('')
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectType: services.types[0],
    budget: services.budgetRanges[0],
    description: "",
  });


  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry: ${form.projectType}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany/Organization: ${form.company}\nEmail: ${form.email}\nProject type: ${form.projectType}\nBudget range: ${form.budget}\n\nProject description:\n${form.description}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "var(--color-ink)" }}>
      <div className="container-xl">
        <SectionHeading
          label="Let's build"
          title="Have a project in mind?"
          description="Websites, applications, e-commerce, dashboards, AI solutions or something custom. Tell me what you're building."
        />

        <div className="grid grid-cols-12 gap-y-12 md:gap-x-6">
          <div className="col-span-12 md:col-span-2" />

          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5"><p className="text-sm" style={{opacity:0.8}}>This prepares a draft in your email app. Review it and press Send there. You can also copy the details and email them directly.</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs" style={{ color: "var(--color-mist-dim)" }}>Name</label>
                    <input
                      required
                      aria-label="Name" value={form.name}
                      onChange={update("name")}
                      className="border px-3.5 py-2.5 text-sm outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs" style={{ color: "var(--color-mist-dim)" }}>
                      Company / Organization
                    </label>
                    <input
                      aria-label="Company / Organization" value={form.company}
                      onChange={update("company")}
                      className="border px-3.5 py-2.5 text-sm outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs" style={{ color: "var(--color-mist-dim)" }}>Email</label>
                  <input
                    required
                    type="email"
                    aria-label="Email" value={form.email}
                    onChange={update("email")}
                    className="border px-3.5 py-2.5 text-sm outline-none"
                    style={inputStyle}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs" style={{ color: "var(--color-mist-dim)" }}>
                      Project type
                    </label>
                    <select
                      aria-label="Project type" value={form.projectType}
                      onChange={update("projectType")}
                      className="border px-3.5 py-2.5 text-sm outline-none"
                      style={inputStyle}
                    >
                      {services.types.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs" style={{ color: "var(--color-mist-dim)" }}>
                      Budget range
                    </label>
                    <select
                      aria-label="Budget range" value={form.budget}
                      onChange={update("budget")}
                      className="border px-3.5 py-2.5 text-sm outline-none"
                      style={inputStyle}
                    >
                      {services.budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs" style={{ color: "var(--color-mist-dim)" }}>
                    Project description
                  </label>
                  <textarea
                    required
                    rows={5}
                    aria-label="Project description" value={form.description}
                    onChange={update("description")}
                    className="border px-3.5 py-2.5 text-sm outline-none resize-none"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start px-6 py-3 text-sm font-medium mt-2"
                  style={{ background: "var(--color-oxblood)", color: "var(--color-paper)" }}
                >
                  Prepare email inquiry
                </button>
              <button type="button" className="block underline text-sm mt-4" onClick={async()=>{const text=Object.entries(form).map(([key,value])=>`${key}: ${value}`).join('\n');try{await navigator.clipboard.writeText(text);setCopyStatus('Inquiry copied. Paste it into your email or WhatsApp.');}catch{setCopyStatus('Select and copy the details below.');}}}>Copy inquiry details</button><p role="status" className="text-sm mt-3">{copyStatus}</p>{copyStatus&&<textarea aria-label="Inquiry details to copy" readOnly rows={7} value={Object.entries(form).map(([key,value])=>`${key}: ${value}`).join('\n')} className="w-full border p-3 mt-2" />}</form>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xs uppercase tracking-wide mb-3" style={{ color: "var(--color-mist-dim)" }}>
                    Direct
                  </h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-2 text-lg font-display mb-2"
                    style={{ color: "var(--color-paper)" }}
                  >
                    <Mail size={18} style={{ color: "var(--color-brass)" }} />
                    {CONTACT_EMAIL}
                  </a>
                  {WHATSAPP_NUMBER && (
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                      style={{ color: "var(--color-mist)" }}
                    >
                      WhatsApp
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wide mb-3" style={{ color: "var(--color-mist-dim)" }}>
                    Elsewhere
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {socials.map((s) => (
                      <a
                        key={s.key}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 text-sm w-fit"
                        style={{ color: "var(--color-mist)" }}
                      >
                        {s.label}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ color: "var(--color-mist-dim)" }}
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wide mb-3" style={{ color: "var(--color-mist-dim)" }}>
                    Resume
                  </h3>
                  <a
                    href="/theophilus-mensah-cv.pdf" download
                    className="inline-flex items-center gap-2 text-sm px-5 py-2.5 border w-fit"
                    style={{ borderColor: "var(--color-line)", color: "var(--color-paper)" }}
                  >
                    <FileDown size={16} /> Download CV (PDF)
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { pricingGroups, pricingNote, services } from "../data/content";

export default function Services() {
  const [activeId, setActiveId] = useState(pricingGroups[0].id);
  const active = pricingGroups.find((g) => g.id === activeId);

  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "var(--color-ink-2)" }}>
      <div className="container-xl">
        <SectionHeading
          label="Work with me"
          title="Services & pricing"
          description={services.intro}
        />

        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-2" />

          <div className="col-span-12 md:col-span-10">
            {/* Launch pricing callout */}
            <Reveal>
              <div
                className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 mb-10 border"
                style={{ borderColor: "var(--color-brass)" }}
              >
                <p className="text-sm" style={{ color: "var(--color-paper)" }}>
                  <span className="font-display italic" style={{ color: "var(--color-brass)" }}>
                    Launch pricing
                  </span>
                  &nbsp; reduced rates, available for a limited 6-month window.
                </p>
              </div>
            </Reveal>

            {/* category tabs */}
            <Reveal>
              <div className="flex flex-wrap gap-2 mb-10">
                {pricingGroups.map((group) => (
                  <button
                    key={group.id}
                    aria-pressed={activeId === group.id}
                    onClick={() => setActiveId(group.id)}
                    className="px-4 py-2 text-sm border transition-colors"
                    style={{
                      borderColor:
                        activeId === group.id ? "var(--color-brass)" : "var(--color-line)",
                      color: activeId === group.id ? "var(--color-brass)" : "var(--color-mist)",
                    }}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* pricing table */}
            <Reveal key={active.id}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[520px]">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
                      <th
                        className="text-left font-normal text-xs uppercase tracking-wide py-3 pr-4"
                        style={{ color: "var(--color-mist-dim)" }}
                      >
                        {active.title}
                      </th>
                      <th
                        className="text-left font-normal text-xs uppercase tracking-wide py-3 pr-4"
                        style={{ color: "var(--color-mist-dim)" }}
                      >
                        Standard
                      </th>
                      <th
                        className="text-left font-normal text-xs uppercase tracking-wide py-3"
                        style={{ color: "var(--color-brass)" }}
                      >
                        Launch price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {active.tiers.map((tier) => (
                      <tr key={tier.name} style={{ borderBottom: "1px solid var(--color-line)" }}>
                        <td
                          className="py-4 pr-4 text-sm md:text-base"
                          style={{ color: "var(--color-paper)" }}
                        >
                          {tier.name}
                        </td>
                        <td
                          className="py-4 pr-4 text-sm"
                          style={{ color: "var(--color-mist)" }}
                        >
                          {tier.standard}
                        </td>
                        <td className="py-4 text-sm font-medium" style={{ color: "var(--color-brass-bright)" }}>
                          {tier.launch}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <p className="text-xs leading-relaxed mt-8 max-w-2xl" style={{ color: "var(--color-mist-dim)" }}>
              {pricingNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

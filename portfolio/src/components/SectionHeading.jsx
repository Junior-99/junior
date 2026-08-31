export default function SectionHeading({ label, title, description, light = false }) {
  return (
    <div className="grid grid-cols-12 gap-x-4 items-end mb-12 md:mb-16">
      <div className="col-span-12 md:col-span-2 flex md:flex-col md:justify-between items-baseline md:items-start gap-2 mb-4 md:mb-0">
        <span
          className="font-display italic text-sm"
          style={{ color: "var(--color-brass)" }}
        >
          {label}
        </span>
        <div
          className="hidden md:block h-16 w-px mt-2"
          style={{ background: "var(--color-line)" }}
        />
      </div>
      <div className="col-span-12 md:col-span-7">
        <h2
          className="font-display text-4xl md:text-5xl leading-[1.05] text-balance"
          style={{ color: light ? "var(--color-ink)" : "var(--color-paper)" }}
        >
          {title}
        </h2>
      </div>
      {description && (
        <div className="col-span-12 md:col-span-3 md:justify-self-end">
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: light ? "var(--color-ink-2)" : "var(--color-mist)" }}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

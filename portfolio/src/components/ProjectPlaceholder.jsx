export default function ProjectPlaceholder({ name }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 relative"
      style={{
        background:
          "linear-gradient(135deg, var(--color-ink-3) 0%, var(--color-ink-2) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-mist) 1px, transparent 1px), linear-gradient(90deg, var(--color-mist) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span
        className="font-display italic text-2xl relative"
        style={{ color: "var(--color-brass)" }}
      >
        {name}
      </span>
      <span className="text-xs relative" style={{ color: "var(--color-mist-dim)" }}>
        Screenshots coming soon
      </span>
    </div>
  );
}

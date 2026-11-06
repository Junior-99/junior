import { motion } from "framer-motion";
import { profile } from "../data/content";
import founderImg from "../assets/founder/founder.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      style={{ background: "var(--color-ink)" }}
    >
      {/* faint drafting grid, signature but quiet */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-mist) 1px, transparent 1px), linear-gradient(90deg, var(--color-mist) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-xl relative grid grid-cols-12 gap-y-12 md:gap-x-6 items-center">
        <div className="col-span-12 md:col-span-7 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display italic text-lg mb-6"
            style={{ color: "var(--color-brass)" }}
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance leading-[1.04] text-4xl sm:text-5xl lg:text-6xl mb-8"
            style={{ color: "var(--color-paper)" }}
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg leading-relaxed max-w-lg mb-10"
            style={{ color: "var(--color-mist)" }}
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-oxblood)", color: "var(--color-paper)" }}
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium border transition-colors hover:border-[var(--color-brass)]"
              style={{ borderColor: "var(--color-line)", color: "var(--color-paper)" }}
            >
              Work with me
            </a>
            <a href="/theophilus-mensah-cv.pdf" download className="text-sm underline underline-offset-4" style={{color: "var(--color-mist)"}}>Download CV (PDF)</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-x-8 gap-y-2 mt-14 text-sm"
            style={{ color: "var(--color-mist-dim)" }}
          >
            {profile.identities.map((id) => (
              <span key={id}>{id}</span>
            ))}
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="corner-marks p-3 w-full max-w-sm"
          >
            <div
              className="aspect-[4/5] w-full overflow-hidden"
              style={{ background: "var(--color-ink-2)" }}
            >
              <img
                src={founderImg}
                alt={`Portrait of ${profile.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

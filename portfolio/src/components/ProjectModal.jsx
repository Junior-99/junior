import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import ProjectPlaceholder from "./ProjectPlaceholder";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(10,10,12,0.82)" }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full md:max-w-3xl my-0 md:my-auto"
            style={{ background: "var(--color-ink-2)", border: "1px solid var(--color-line)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-5 right-5 z-10 p-2"
              style={{ background: "var(--color-ink)" }}
            >
              <X size={18} color="var(--color-paper)" />
            </button>

            <div className="aspect-[16/9] w-full">
              <ProjectPlaceholder name={project.name} />
            </div>

            <div className="p-6 md:p-10">
              <p
                className="font-display italic text-sm mb-2"
                style={{ color: "var(--color-brass)" }}
              >
                {project.tag}
              </p>
              <h3
                className="font-display text-3xl md:text-4xl mb-6"
                style={{ color: "var(--color-paper)" }}
              >
                {project.name}
              </h3>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4
                    className="text-xs uppercase tracking-wide mb-2"
                    style={{ color: "var(--color-mist-dim)" }}
                  >
                    The problem
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4
                    className="text-xs uppercase tracking-wide mb-2"
                    style={{ color: "var(--color-mist-dim)" }}
                  >
                    The product
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                    {project.story}
                  </p>
                </div>
              </div>

              <h4
                className="text-xs uppercase tracking-wide mb-3"
                style={{ color: "var(--color-mist-dim)" }}
              >
                Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm leading-relaxed pl-4 relative"
                    style={{ color: "var(--color-mist)" }}
                  >
                    <span
                      className="absolute left-0 top-[0.6em] w-1.5 h-1.5"
                      style={{ background: "var(--color-oxblood-bright)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs border"
                    style={{ borderColor: "var(--color-line)", color: "var(--color-mist)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-5 py-2.5"
                    style={{ background: "var(--color-oxblood)", color: "var(--color-paper)" }}
                  >
                    <ExternalLink size={15} /> Visit
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 text-sm px-5 py-2.5 border opacity-60 cursor-default"
                    style={{ borderColor: "var(--color-line)", color: "var(--color-mist-dim)" }}
                  >
                    <ExternalLink size={15} /> Link coming soon
                  </span>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-5 py-2.5 border"
                    style={{ borderColor: "var(--color-line)", color: "var(--color-paper)" }}
                  >
                    <Code2 size={15} /> Repository
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

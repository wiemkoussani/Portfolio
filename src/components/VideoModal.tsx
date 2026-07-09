import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data";

type Props = {
  project: Project;
  onClose: () => void;
};

export function VideoModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-media">
          {project.comingSoon || !project.video ? (
            <div className="coming-soon">
              <strong>Coming soon</strong>
              <p>Demo video will be available shortly.</p>
              <a
                href="#coming-soon"
                onClick={(e) => e.preventDefault()}
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  opacity: 0.7,
                  fontSize: "0.9rem",
                  textDecoration: "underline",
                }}
              >
                Watch demo (link placeholder)
              </a>
            </div>
          ) : (
            <video
              key={project.video}
              src={project.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          )}
        </div>

        <div className="modal-body">
          <h3 id="modal-title">{project.title}</h3>
          <p className="tagline">{project.tagline}</p>
          <p>{project.description}</p>
          <ul className="modal-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="modal-stack">
            {project.stack.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

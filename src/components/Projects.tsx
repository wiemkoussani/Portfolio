import { motion } from "framer-motion";
import { projects, type Project } from "../data";

type Props = {
  onOpen: (project: Project) => void;
};

export function Projects({ onOpen }: Props) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-head">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">Selected work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-lead">
              Click a project to watch the demo and read the details — videos open here,
              not on an external drive.
            </p>
          </motion.div>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              className={`project-row${project.featured ? " featured" : ""}`}
              onClick={() => onOpen(project)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="project-title-wrap">
                {project.featured && <span className="project-badge">Featured</span>}
                {project.comingSoon && <span className="project-badge">Coming soon</span>}
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div>
                <p className="project-tagline">{project.tagline}</p>
                <div className="project-stack" style={{ marginTop: "0.75rem" }}>
                  {project.stack.slice(0, 4).map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="project-action">
                {project.comingSoon ? "Preview" : "Watch demo"}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

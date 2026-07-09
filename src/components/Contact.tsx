import { motion } from "framer-motion";
import { profile } from "../data";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="contact-band"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let’s build something intelligent</h2>
            <p>
              Open to roles and collaborations in AI engineering, full-stack product work,
              and applied machine learning.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <span>Email</span>
              <span>→</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <span>→</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

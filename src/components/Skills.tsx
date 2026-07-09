import { motion } from "framer-motion";
import { skills } from "../data";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Skills & stack</h2>
          <p className="section-lead">
            AI at the center, with the engineering depth to ship it in production.
          </p>
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], index) => (
            <motion.div
              className="skill-group"
              key={group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

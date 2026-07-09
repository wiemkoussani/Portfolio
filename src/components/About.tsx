import { motion } from "framer-motion";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">Building intelligent products end to end</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p>
              I am a software engineer specializing in artificial intelligence, with three
              years of experience designing systems that connect models to real products —
              copilots, industrial platforms, computer vision, and content pipelines.
            </p>
            <p>
              I work across the stack: Spring Boot and Node on the backend, Angular and
              Next.js on the web, Flutter on mobile, and MySQL or MongoDB for data. On the
              AI side I ship machine learning, NLP, and multimodal systems that teams can
              actually use.
            </p>
            <p>
              What I care about most is clarity — turning complex workflows into interfaces
              and agents that feel simple, reliable, and useful.
            </p>
          </motion.div>

          <motion.aside
            className="about-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <h3>How I work</h3>
            <ul className="about-list">
              <li>Own features from problem framing to production</li>
              <li>Blend AI capabilities with solid product engineering</li>
              <li>Prefer measurable outcomes over demos that stay in notebooks</li>
              <li>Ship for web and mobile with maintainable architecture</li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

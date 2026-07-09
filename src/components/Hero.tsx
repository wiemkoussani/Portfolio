import { motion } from "framer-motion";
import { profile } from "../data";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-copy">
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.role}
        </motion.p>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.summary}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact me
          </a>
        </motion.div>
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.42 }}
        >
          <div>
            <strong>{profile.experience}</strong>
            <span>Experience</span>
          </div>
          <div>
            <strong>AI</strong>
            <span>Core focus</span>
          </div>
          <div>
            <strong>Full-stack</strong>
            <span>Web & mobile</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-orb one" aria-hidden />
        <div className="hero-orb two" aria-hidden />
        <img
          className="hero-photo"
          src={profile.photo}
          alt="Portrait of Wiem Koussani"
        />
      </motion.div>
    </section>
  );
}

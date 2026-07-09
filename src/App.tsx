import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { VideoModal } from "./components/VideoModal";
import type { Project } from "./data";
import { profile } from "./data";

export default function App() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects onOpen={setActive} />
        <Skills />
        <Contact />
      </main>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Software Engineer · AI</span>
      </footer>
      <AnimatePresence>
        {active && <VideoModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

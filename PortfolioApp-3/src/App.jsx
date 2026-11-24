import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function App() {
  const [lang, setLang] = useState('mk');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [pointer, setPointer] = useState({ x: 50, y: 20 });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onPointerMove = (e) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setPointer({ x, y });
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return undefined;
    }
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) navObserver.observe(node);
    });

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="bg-grid" />
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />
      <div
        className="cursor-spotlight"
        style={{
          background: `radial-gradient(650px circle at ${pointer.x}% ${pointer.y}%, rgba(34, 211, 238, 0.08), transparent 65%)`,
        }}
      />

      <Navbar
        lang={lang}
        activeSection={activeSection}
        onToggleLang={() => setLang((prev) => (prev === 'mk' ? 'en' : 'mk'))}
      />

      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} onSelectProject={setSelectedProject} />
        <Experience lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />

      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ lang }) {
  const { profile, hero } = portfolioData;
  const copy = hero[lang];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % copy.roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [copy.roles.length]);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill"><span className="pulse-dot" />{copy.status}</div>
          <h1 className="hero-title">{copy.greeting}<br /><span className="gradient-text">{lang === 'mk' ? profile.name : profile.nameEn}</span></h1>
          <p className="hero-role" aria-live="polite">{copy.roles[roleIndex]}</p>
          <p className="hero-desc">{copy.description}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">{copy.ctaProjects}<ArrowRight size={17} /></a>
            <a className="btn btn-secondary" href="#contact">{copy.ctaContact}<Mail size={16} /></a>
          </div>
          <div className="hero-socials">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="terminal-card" aria-label="Developer profile preview">
          <div className="terminal-top"><div className="window-dots"><span className="dot-red"/><span className="dot-yellow"/><span className="dot-green"/></div><span className="terminal-file">developer.json</span></div>
          <div className="terminal-body">
            <div className="code-line"><span className="line-num">1</span><span><span className="tok-punct">{'{'}</span></span></div>
            <div className="code-line"><span className="line-num">2</span><span><span className="tok-key">"name"</span><span className="tok-punct">: </span><span className="tok-str">"{profile.nameEn}"</span><span className="tok-punct">,</span></span></div>
            <div className="code-line"><span className="line-num">3</span><span><span className="tok-key">"role"</span><span className="tok-punct">: </span><span className="tok-str">"{copy.roles[0]}"</span><span className="tok-punct">,</span></span></div>
            <div className="code-line"><span className="line-num">4</span><span><span className="tok-key">"location"</span><span className="tok-punct">: </span><span className="tok-str">"{profile.location[lang]}"</span><span className="tok-punct">,</span></span></div>
            <div className="code-line"><span className="line-num">5</span><span><span className="tok-key">"focus"</span><span className="tok-punct">: [</span><span className="tok-str">"React"</span><span className="tok-punct">, </span><span className="tok-str">"UI/UX"</span><span className="tok-punct">, </span><span className="tok-str">"Web"</span><span className="tok-punct">],</span></span></div>
            <div className="code-line"><span className="line-num">6</span><span><span className="tok-key">"available"</span><span className="tok-punct">: </span><span className="tok-num">true</span></span></div>
            <div className="code-line"><span className="line-num">7</span><span><span className="tok-punct">{' }'}</span></span></div>
          </div>
          <div className="terminal-stats">{profile.stats.map((stat) => <div className="stat-cell" key={stat.label.en}><div className="stat-val">{stat.value}</div><div className="stat-lbl">{stat.label[lang]}</div></div>)}</div>
        </div>
      </div>
      <a className="hero-scroll" href="#about" aria-label={lang === 'mk' ? 'Продолжи надолу' : 'Scroll to about'}><ArrowDown size={16} /></a>
    </section>
  );
}

import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ lang, onSelectProject }) {
  const [filter, setFilter] = useState('all');
  const { projects } = portfolioData;
  const filters = projects.filters[lang];

  const visibleProjects =
    filter === 'all'
      ? projects.items
      : projects.items.filter((item) => item.category === filter);

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{projects.eyebrow[lang]}</span>
          <h2 className="section-title">{projects.title[lang]}</h2>
          <p className="section-subtitle">{projects.subtitle[lang]}</p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Project filters">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`filter-tab ${filter === item.id ? 'active' : ''}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="glass-card project-card">
              <div className="project-preview" style={{ background: project.gradient }}>
                <div className="preview-mockup">
                  <div className="mockup-bar">
                    <span>{project.id}.app</span>
                    <span style={{ color: project.accent }}>● LIVE</span>
                  </div>
                  <div className="mockup-lines">
                    <div className="mockup-line" style={{ width: '78%', background: project.accent, opacity: 0.45 }} />
                    <div className="mockup-line" style={{ width: '54%' }} />
                    <div className="mockup-line" style={{ width: '90%' }} />
                  </div>
                  <div className="mockup-bar">
                    <span>{project.stack[0]}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span className="project-tag">{project.tag[lang]}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description[lang]}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <div className="project-links">
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-link" aria-label={`GitHub: ${project.title}`}>
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-link" aria-label={`Demo: ${project.title}`}>
                      <ExternalLink size={15} />
                      <span>Demo</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    className="detail-btn"
                    onClick={() => onSelectProject(project)}
                  >
                    <span>{lang === 'mk' ? 'Детали' : 'Details'}</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

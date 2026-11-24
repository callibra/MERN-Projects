import { useEffect } from 'react';
import { CheckCircle2, ExternalLink, Github, X } from 'lucide-react';

export default function ProjectModal({ project, lang, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const details = project.details[lang];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="project-tag">
              {project.tag[lang]} · {project.year}
            </span>
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginTop: 6, marginBottom: 0 }}>
              {project.title}
            </h3>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <p style={{ color: 'var(--text-secondary)' }}>{project.description[lang]}</p>

        <div className="modal-section">
          <h4>{lang === 'mk' ? 'Предизвик' : 'Challenge'}</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>{details.challenge}</p>
        </div>

        <div className="modal-section">
          <h4>{lang === 'mk' ? 'Решение' : 'Solution'}</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>{details.solution}</p>
        </div>

        <div className="modal-section">
          <h4>{lang === 'mk' ? 'Клучни резултати' : 'Key Highlights'}</h4>
          <ul className="modal-list">
            {details.highlights.map((item) => (
              <li key={item}>
                <CheckCircle2 size={17} color="#10b981" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pill-list" style={{ marginTop: 22 }}>
          {project.stack.map((tech) => (
            <span key={tech} className="stack-chip">
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            <ExternalLink size={16} />
            <span>{lang === 'mk' ? 'Отвори Live Demo' : 'Open Live Demo'}</span>
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Github size={16} />
            <span>GitHub Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

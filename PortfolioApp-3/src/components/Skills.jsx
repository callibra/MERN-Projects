import { useState } from 'react';
import { Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills({ lang }) {
  const [activeCat, setActiveCat] = useState('all');
  const { skills } = portfolioData;
  const categories = skills.categories[lang];

  const filtered =
    activeCat === 'all'
      ? skills.items
      : skills.items.filter((item) => item.category === activeCat);

  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{skills.eyebrow[lang]}</span>
          <h2 className="section-title">{skills.title[lang]}</h2>
          <p className="section-subtitle">{skills.subtitle[lang]}</p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCat === cat.id}
              className={`filter-tab ${activeCat === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill) => (
            <div key={skill.name} className="glass-card skill-card">
              <div className="skill-top">
                <div className="skill-name-wrap">
                  <span className="skill-badge">
                    <Layers size={16} />
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-pct">{skill.level}%</span>
              </div>

              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${skill.level}%` }} />
              </div>

              <span className="skill-cat">{skill.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

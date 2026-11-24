import { portfolioData } from '../data/portfolioData';

export default function Experience({ lang }) {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{experience.eyebrow[lang]}</span>
          <h2 className="section-title">{experience.title[lang]}</h2>
          <p className="section-subtitle">{experience.subtitle[lang]}</p>
        </div>

        <div className="timeline">
          {experience.items.map((item) => (
            <article key={item.period + item.company} className="glass-card timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-head">
                <h3 className="timeline-role">{item.role[lang]}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <div className="timeline-company">{item.company}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                {item.summary[lang]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

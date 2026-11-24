import { Code2, Cpu, Globe2, MoonStar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const icons = [Code2, Cpu, Globe2, MoonStar];
const spans = ['span-7', 'span-5', 'span-5', 'span-7'];

export default function About({ lang }) {
  const about = portfolioData.about[lang];

  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          <p className="section-subtitle">{about.subtitle}</p>
        </div>

        <div className="bento-grid">
          {about.cards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={card.title} className={`glass-card bento-card ${spans[index]}`}>
                <div className="bento-icon">
                  <Icon size={22} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.pills && (
                  <div className="pill-list">
                    {card.pills.map((pill) => (
                      <span key={pill} className="pill">
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

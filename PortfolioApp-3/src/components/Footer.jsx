import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ lang }) {
  const year = new Date().getFullYear();
  const displayName = lang === 'mk' ? portfolioData.profile.name : portfolioData.profile.nameEn;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {year} <strong style={{ color: 'var(--text-primary)' }}>{displayName}</strong> ·{' '}
          {portfolioData.footer[lang]}
        </div>

        <a href="#home" className="text-link">
          <span>{portfolioData.footer.top[lang]}</span>
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

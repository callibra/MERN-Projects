import { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ lang, onToggleLang, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = portfolioData.nav[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar" aria-label="Primary Navigation">
          <a href="#home" className="brand">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>{portfolioData.profile.brand}</span>
          </a>

          <div className="nav-links">
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              onClick={onToggleLang}
              className="lang-toggle"
              aria-label="Toggle Language"
            >
              <Globe size={14} />
              <span>{lang === 'mk' ? 'MK' : 'EN'}</span>
            </button>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mobile-drawer">
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

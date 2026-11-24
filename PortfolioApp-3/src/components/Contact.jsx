import { useState } from 'react';
import { AlertCircle, Check, Copy, Mail, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ lang }) {
  const { contact, profile } = portfolioData;
  const labels = contact.labels[lang];

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

    if (!form.name.trim() || !emailValid || !form.message.trim()) {
      setStatus({ type: 'error', text: labels.error });
      return;
    }

    const subject = form.subject.trim() || (lang === 'mk' ? 'Порака од портфолио' : 'Portfolio message');
    const body = `${lang === 'mk' ? 'Име' : 'Name'}: ${form.name.trim()}\n${lang === 'mk' ? 'Е-пошта' : 'Email'}: ${form.email.trim()}\n\n${form.message.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{contact.eyebrow[lang]}</span>
          <h2 className="section-title">{contact.title[lang]}</h2>
          <p className="section-subtitle">{contact.subtitle[lang]}</p>
        </div>

        <div className="contact-grid">
          <div className="glass-card" style={{ padding: 28 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 10 }}>
              {lang === 'mk' ? 'Директен контакт' : 'Direct Channels'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
              {lang === 'mk'
                ? 'Отворен сум за freelance проекти, долгорочна соработка и инженерски консултации.'
                : 'Open to freelance builds, full-time product engineering, and technical consulting.'}
            </p>

            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-item-left">
                  <span className="skill-badge">
                    <Mail size={16} />
                  </span>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email</div>
                    <div style={{ fontSize: '0.93rem' }}>{profile.email}</div>
                  </div>
                </div>
                <button type="button" className="lang-toggle" onClick={handleCopy}>
                  {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                  <span>{copied ? labels.copied : labels.copy}</span>
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-item-left">
                  <span className="skill-badge">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {lang === 'mk' ? 'Локација' : 'Location'}
                    </div>
                    <div style={{ fontSize: '0.93rem' }}>{profile.location[lang]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="contact-name">{labels.name}</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={labels.namePh}
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                />
              </div>
              <div className="field">
                <label htmlFor="contact-email">{labels.email}</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder={labels.emailPh}
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="contact-subject">{labels.subject}</label>
              <input
                id="contact-subject"
                type="text"
                placeholder={labels.subjectPh}
                value={form.subject}
                onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
              />
            </div>

            <div className="field">
              <label htmlFor="contact-message">{labels.message}</label>
              <textarea
                id="contact-message"
                required
                placeholder={labels.messagePh}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              />
            </div>

            {status.text && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? <Check size={17} /> : <AlertCircle size={17} />}
                <span>{status.text}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary">
              <Send size={16} />
              <span>{labels.send}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

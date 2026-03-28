import { LanguageSwitcher } from '@/components/language-switcher';
import { isLocale } from '@/lib/locales';
import { messages } from '@/lib/messages';
import { notFound } from 'next/navigation';

const CONTACT_EMAIL = 'you@example.com';

const SKILLS = [
  'Node.js',
  'NestJS',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Microservices',
  'API design',
  'Event-driven architecture',
  'Domain-driven design',
  'TDD',
  'CI/CD',
] as const;

type HomePageProps = {
  params: { locale: string };
};

export default function HomePage({ params }: HomePageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const t = messages[locale];
  const year = new Date().getFullYear();

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            Tomasz Paczka
          </a>

          <nav className="nav" aria-label="Primary">
            <a className="nav-link" href="#skills">
              {t.nav.stack}
            </a>
            <a className="nav-link" href="#contact">
              {t.nav.contact}
            </a>
          </nav>

          <div className="header-actions">
            <LanguageSwitcher locale={locale} ariaLabel={t.langSwitcher} />
            <a className="button button-ghost" href={`mailto:${CONTACT_EMAIL}`}>
              {t.nav.email}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="hero-copy">
              <div className="eyebrow">{t.hero.eyebrow}</div>
              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="lead">{t.hero.lead}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#skills">
                  {t.hero.ctaStack}
                </a>
                <a className="button button-secondary" href={`mailto:${CONTACT_EMAIL}`}>
                  {t.hero.ctaContact}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">{t.skills.eyebrow}</div>
              <h2>{t.skills.title}</h2>
            </div>
            <div className="chips" role="list">
              {SKILLS.map((skill) => (
                <span key={skill} className="chip" role="listitem">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-block">
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2>{t.contact.title}</h2>
            <p className="lead contact-lead">{t.contact.lead}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-left">© {year} Tomasz Paczka</div>
          <div className="footer-right">
            <a className="footer-link" href="#skills">
              {t.footer.stack}
            </a>
            <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
              {t.footer.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

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

export default function HomePage() {
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
              Stack
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>

          <a className="button button-ghost" href={`mailto:${CONTACT_EMAIL}`}>
            Email
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="hero-copy">
              <div className="eyebrow">Software engineer</div>
              <h1 className="hero-title">I build software for the web</h1>
              <p className="lead">
                Backend systems, APIs, and the infrastructure that keeps products running.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#skills">
                  View stack
                </a>
                <a className="button button-secondary" href={`mailto:${CONTACT_EMAIL}`}>
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">Stack</div>
              <h2>Tools and practices</h2>
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
            <div className="eyebrow">Contact</div>
            <h2>Let&apos;s talk</h2>
            <p className="lead contact-lead">
              Reach out by email — I&apos;ll get back to you as soon as I can.
            </p>
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
              Stack
            </a>
            <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

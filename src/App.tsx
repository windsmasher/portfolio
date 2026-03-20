import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#">
            Tomasz Paczka
          </a>

          <nav className="nav" aria-label="Navigation">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>

          <a className="button button-ghost" href="mailto:you@example.com">
            Send email
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Portfolio • Software Developer</div>
              <h1 className="hero-title">Software Engineer</h1>
              <p className="lead">I build software for web applications.</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#skills">
                  View stack
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orb orb-1" />
              <div className="orb orb-2" />
              <div className="profile-card">
                <div className="profile-avatar">TP</div>
                <div className="profile-content">
                  <div className="profile-role">Software Engineer</div>
                  <div className="profile-summary">This mock will become the finished portfolio.</div>
                </div>
              </div>
              <div className="visual-dots" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-grid">
            <div className="section-title">
              <div className="eyebrow">About</div>
              <h2>Simple description, clean design.</h2>
            </div>
            <div className="section-body">
              <p className="muted">A short space for your intro.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">Skills</div>
              <h2>Stack</h2>
            </div>
            <div className="chips" role="list" aria-label="List of skills">
              <span className="chip" role="listitem">
                NodeJS
              </span>
              <span className="chip" role="listitem">
                NestJS
              </span>
              <span className="chip" role="listitem">
                MongoDB
              </span>
              <span className="chip" role="listitem">
                PostgreSQL
              </span>
              <span className="chip" role="listitem">
                Redis
              </span>
              <span className="chip" role="listitem">
                Docker
              </span>
              <span className="chip" role="listitem">
                Microservices
              </span>
              <span className="chip" role="listitem">
                API Gateway
              </span>
              <span className="chip" role="listitem">
                Event-Driven Architecture
              </span>
              <span className="chip" role="listitem">
                Domain-Driven Design
              </span>
              <span className="chip" role="listitem">
                Test-Driven Development
              </span>
              <span className="chip" role="listitem">
                Continuous Integration/Continuous Deployment
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-muted">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">Contact</div>
              <h2>Message me.</h2>
              <p className="muted">Click the button below.</p>
            </div>

            <div className="contact-panel">
              <div className="contact-panel-title">Quick contact</div>
              <div className="contact-panel-copy">This is a place for your email/link.</div>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:you@example.com">
                  Send email
                </a>
                <a className="button button-secondary" href="#skills">
                  Back to stack
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-left">© {new Date().getFullYear()} Tomasz Paczka</div>
          <div className="footer-right">
            <a className="footer-link" href="#about">
              About
            </a>
            <a className="footer-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
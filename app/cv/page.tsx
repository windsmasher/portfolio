import type { Metadata } from 'next';

import { INTEGRATIONS } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'CV - Tomasz Paczka',
  description:
    'Senior Software Engineer — CV of Tomasz Paczka: Node.js, TypeScript, microservices, e-commerce.',
};

export default function CvPage() {
  return (
    <div className="cv-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .cv-page, .cv-page *, .cv-page *::before, .cv-page *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cv-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          line-height: 1.5;
          color: #333;
          background: #f5f5f5;
          min-height: 100vh;
        }

        .cv-container {
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          display: grid;
          grid-template-columns: 280px 1fr;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .cv-sidebar {
          background: #f8f9fa;
          padding: 40px 30px;
          border-right: 1px solid #e9ecef;
        }

        .cv-profile-photo {
          width: 180px;
          height: 180px;
          border-radius: 12px;
          margin-bottom: 20px;
          object-fit: cover;
          display: block;
        }

        .cv-sidebar h1 {
          font-size: 18px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .cv-sidebar .cv-title {
          font-size: 13px;
          color: #a89968;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .cv-contact-info {
          margin-bottom: 28px;
        }

        .cv-contact-section-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #666;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .cv-contact-item {
          font-size: 12px;
          color: #555;
          margin-bottom: 8px;
          word-break: break-word;
        }

        .cv-contact-item a {
          color: #2980b9;
          text-decoration: none;
        }

        .cv-contact-item a:hover {
          text-decoration: underline;
        }

        .cv-skills-sidebar {
          margin-bottom: 28px;
        }

        .cv-skill-item {
          font-size: 12px;
          color: #555;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .cv-skill-item strong {
          display: block;
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .cv-main {
          padding: 40px 35px;
        }

        .cv-header {
          margin-bottom: 30px;
        }

        .cv-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 4px;
        }

        .cv-header .cv-title {
          font-size: 15px;
          color: #a89968;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .cv-about {
          font-size: 13px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 24px;
        }

        .cv-section {
          margin-bottom: 26px;
        }

        .cv-section-title {
          font-size: 14px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #a89968;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cv-entry {
          margin-bottom: 16px;
        }

        .cv-entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 3px;
          gap: 10px;
        }

        .cv-entry-title {
          font-weight: 700;
          font-size: 13px;
          color: #2c3e50;
        }

        .cv-entry-date {
          font-size: 11px;
          color: #999;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cv-entry-company {
          font-size: 12px;
          color: #a89968;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .cv-entry-description {
          font-size: 12px;
          color: #666;
          line-height: 1.5;
          margin-top: 4px;
        }

        .cv-entry-description ul {
          margin-left: 16px;
          margin-top: 4px;
        }

        .cv-entry-description li {
          margin-bottom: 3px;
        }

        .cv-education-entry {
          margin-bottom: 14px;
        }

        .cv-education-title {
          font-weight: 700;
          font-size: 13px;
          color: #2c3e50;
          margin-bottom: 2px;
        }

        .cv-education-school {
          font-size: 12px;
          color: #a89968;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .cv-education-year {
          font-size: 11px;
          color: #999;
        }

        .cv-languages-text {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
        }

        @media print {
          .cv-page {
            background: white;
          }

          .cv-container {
            max-width: 100%;
            margin: 0;
            box-shadow: none;
          }

          .cv-sidebar {
            border-right: 1px solid #e9ecef;
          }

          .cv-section {
            page-break-inside: avoid;
          }

          .cv-entry {
            page-break-inside: avoid;
          }

          .cv-page * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }

        @media (max-width: 800px) {
          .cv-container {
            grid-template-columns: 1fr;
          }

          .cv-sidebar {
            border-right: none;
            border-bottom: 1px solid #e9ecef;
            padding: 30px 25px;
            display: flex;
            align-items: flex-start;
            gap: 30px;
          }

          .cv-sidebar-content {
            flex: 1;
          }

          .cv-profile-photo {
            width: 120px;
            height: 120px;
            margin-bottom: 0;
            flex-shrink: 0;
          }

          .cv-main {
            padding: 30px 25px;
          }
        }
      `,
        }}
      />

      <div className="cv-container">
        {/* Sidebar */}
        <div className="cv-sidebar">
          <img src="/images/cv-profile.png" alt="Tomasz Paczka" className="cv-profile-photo" />
          <div className="cv-sidebar-content">
            <h1>Tomasz Paczka</h1>
            <div className="cv-title">Senior Software Engineer</div>

            {/* Contact Info */}
            <div className="cv-contact-info">
              <div className="cv-contact-section-title">Contact</div>
              <div className="cv-contact-item">
                📱 <a href="tel:+48604332503">+48 604 332 503</a>
              </div>
              <div className="cv-contact-item">
                ✉️ <a href="mailto:paczka94@gmail.com">paczka94@gmail.com</a>
              </div>
              <div className="cv-contact-item">
                📍 Daszyńskiego 226B
                <br />
                44-100 Gliwice, Poland
              </div>
              <div className="cv-contact-item">🎂 12/08/1994</div>
              <div className="cv-contact-item">
                🔗{' '}
                <a href="https://linkedin.com/in/tomasz-paczka-2a962b141/">
                  linkedin.com/in/tomasz-paczka
                </a>
              </div>
              <div className="cv-contact-item">
                🌐 <a href="https://www.tomaszpaczka.pl/en">tomaszpaczka.pl</a>
              </div>
            </div>

            {/* Skills */}
            <div className="cv-skills-sidebar">
              <div className="cv-contact-section-title">Skills</div>
              <div className="cv-skill-item">
                <strong>Backend</strong>
                Node.js, NestJS, Express, GraphQL
              </div>
              <div className="cv-skill-item">
                <strong>Languages</strong>
                JavaScript, TypeScript
              </div>
              <div className="cv-skill-item">
                <strong>Architecture</strong>
                Microservices, System Design, Docker
              </div>
              <div className="cv-skill-item">
                <strong>Databases</strong>
                MongoDB, PostgreSQL, Redis, ScyllaDB, TimescaleDB
              </div>
              <div className="cv-skill-item">
                <strong>Message Queue</strong>
                RabbitMQ, Kafka
              </div>
              <div className="cv-skill-item">
                <strong>Monitoring</strong>
                Kibana, Docker
              </div>
              <div className="cv-skill-item">
                <strong>Testing</strong>
                Unit &amp; Integration Tests
              </div>
              <div className="cv-skill-item">
                <strong>AI Usage</strong>
                Claude Code, ChatGPT, Cursor
              </div>
              <div className="cv-skill-item">
                <strong>Integrations</strong>
                {INTEGRATIONS.join(', ')}
              </div>
            </div>

            {/* Languages */}
            <div className="cv-skills-sidebar">
              <div className="cv-contact-section-title">Languages</div>
              <div className="cv-skill-item">
                <strong>Polish</strong>
                Native
              </div>
              <div className="cv-skill-item">
                <strong>English</strong>
                Advanced (C1)
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="cv-main">
          <div className="cv-header">
            <h1>Tomasz Paczka</h1>
            <div className="cv-title">Senior Software Engineer</div>
          </div>

          {/* About */}
          <div className="cv-about">
            Results-driven Senior Software Engineer with extensive experience in designing and
            implementing scalable solutions, particularly in e-commerce platforms. Proficient in
            Node.js and modern web technologies, I have successfully developed high-traffic
            backend services and managed complex microservices architectures. My strong
            collaboration with cross-functional teams ensures delivery of robust and innovative
            products that meet business needs. Holding a Master&apos;s degree in Computer Science,
            I blend technical acumen with a commitment to code quality and system optimization.
          </div>

          {/* Work Experience */}
          <div className="cv-section">
            <div className="cv-section-title">Work Experience</div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Senior Software Engineer</span>
                <span className="cv-entry-date">Sep 2025 - Present</span>
              </div>
              <div className="cv-entry-company">Future Processing, Gliwice</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Designed and developed scalable backend services using Node.js and GraphQL</li>
                  <li>Built and maintained high-traffic e-commerce systems for airport retail platforms</li>
                  <li>Collaborated with cross-functional teams to deliver business-critical features</li>
                  <li>Ensured code quality through reviews, testing, and best engineering practices</li>
                </ul>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Senior Software Engineer (Part-time)</span>
                <span className="cv-entry-date">Nov 2025 - Jun 2026</span>
              </div>
              <div className="cv-entry-company">Zan, Saudi Arabia</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Built a full-featured e-commerce platform from scratch in a small, high-impact engineering team</li>
                  <li>Designed and implemented backend and frontend architecture based on Medusa v2 boilerplate</li>
                  <li>Developed scalable APIs and business logic using Node.js and modern web technologies</li>
                  <li>Owned end-to-end product development, from system design to production deployment</li>
                  <li>Collaborated closely with product and business stakeholders to deliver core platform features</li>
                </ul>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Senior Software Engineer</span>
                <span className="cv-entry-date">Aug 2022 - Aug 2025</span>
              </div>
              <div className="cv-entry-company">Flip, Los Angeles</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Contributed to the development and maintenance of a large-scale backend system consisting of ~300 microservices, primarily built with Node.js and NestJS</li>
                  <li>Enabled seamless inter-service communication using RabbitMQ and Kafka, ensuring high reliability and scalability</li>
                  <li>Worked with a diverse tech stack, including MongoDB, PostgreSQL, ScyllaDB, TimescaleDB, and Redis, optimizing performance across various use cases</li>
                  <li>Supported a mobile-first application with a strong presence on iOS and Android, consistently ranking high in U.S. app charts</li>
                  <li>Scaled the system to handle nearly 5 million orders, with over 2 million placed in 2024 alone, serving users in the USA and Canada</li>
                </ul>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Software Engineer</span>
                <span className="cv-entry-date">Sep 2021 - Aug 2022</span>
              </div>
              <div className="cv-entry-company">Future Processing, Gliwice</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Built backend services in Node.js with Express and NestJS for a UK airport-related company</li>
                  <li>Introduced to microservices architecture, focusing on modular design and RESTful APIs</li>
                </ul>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Software Engineer (Part-time)</span>
                <span className="cv-entry-date">Jan 2022 - May 2022</span>
              </div>
              <div className="cv-entry-company">ActivNet</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Part-time backend development in a small-scale application using Node.js</li>
                  <li>Assisted in implementing core features and improving code structure</li>
                </ul>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Software Engineer</span>
                <span className="cv-entry-date">Jun 2021 - Sep 2021</span>
              </div>
              <div className="cv-entry-company">SolidStudio, Kraków</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Worked briefly on a project using Node.js with AWS Lambda, focusing on serverless backend functions and cloud integration</li>
                </ul>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Software Engineer</span>
                <span className="cv-entry-date">Nov 2019 - Jun 2021</span>
              </div>
              <div className="cv-entry-company">IT.Focus, Katowice</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Developed backend for over five PWA projects, working mostly independently with Node.js, NestJS, and SQL databases</li>
                </ul>
              </div>
            </div>

            <div className="cv-entry">
              <div className="cv-entry-header">
                <span className="cv-entry-title">Software Engineer</span>
                <span className="cv-entry-date">Mar 2019 - Nov 2019</span>
              </div>
              <div className="cv-entry-company">AbiSerwkom, Mysłowice</div>
              <div className="cv-entry-description">
                <ul>
                  <li>Frontend development focused on rewriting the application from AngularJS to modern Angular</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="cv-section">
            <div className="cv-section-title">Education</div>

            <div className="cv-education-entry">
              <div className="cv-education-title">Master&apos;s degree in Computer Science</div>
              <div className="cv-education-school">The Silesian University of Technology, Gliwice</div>
              <div className="cv-education-year">2019</div>
            </div>

            <div className="cv-education-entry">
              <div className="cv-education-title">Automation and robotics Engineer&apos;s degree</div>
              <div className="cv-education-school">The Silesian University of Technology, Gliwice</div>
              <div className="cv-education-year">2017</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

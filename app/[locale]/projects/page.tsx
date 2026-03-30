import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { SiteChrome } from '@/components/site-chrome';
import { isLocale } from '@/lib/locales';
import { messages } from '@/lib/messages';
import { projectsContent } from '@/lib/projects-content';

type ProjectsPageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const base = messages[params.locale].meta.title;
  const p = projectsContent[params.locale];
  return {
    title: p.meta.title,
    description: p.meta.description,
    openGraph: {
      title: `${p.meta.title} · ${base}`,
      description: p.meta.description,
      type: 'website',
    },
  };
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const p = projectsContent[locale];

  return (
    <SiteChrome locale={locale}>
      <main className="page-main">
        <section className="section section-muted page-section-centered">
          <div className="container page-inner-centered projects-page">
            <div className="section-heading">
              <div className="eyebrow">{p.eyebrow}</div>
              <h1>{p.title}</h1>
            </div>
            <p className="projects-intro">{p.intro}</p>
            <p className="projects-preview-hint">{p.previewHint}</p>

            <div className="projects-grid">
              {p.projects.map((project) => (
                <article key={project.linkUrl} className="project-card">
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-desc">{project.description}</p>
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-preview-link"
                  >
                    <div className="project-preview-shell">
                      <Image
                        src={project.previewSrc}
                        alt={project.previewAlt}
                        fill
                        className="project-preview-img"
                        sizes="(max-width: 768px) 100vw, 40rem"
                        unoptimized
                      />
                    </div>
                  </a>
                  <a
                    className="button button-secondary project-card-link"
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

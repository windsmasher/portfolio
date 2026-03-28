import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SiteChrome } from '@/components/site-chrome';
import { careerContent } from '@/lib/career-content';
import { isLocale } from '@/lib/locales';
import { messages } from '@/lib/messages';

type CareerPageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: CareerPageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const base = messages[params.locale].meta.title;
  const c = careerContent[params.locale];
  return {
    title: c.meta.title,
    description: c.meta.description,
    openGraph: {
      title: `${c.meta.title} · ${base}`,
      description: c.meta.description,
      type: 'website',
    },
  };
}

export default function CareerPage({ params }: CareerPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const c = careerContent[locale];

  return (
    <SiteChrome locale={locale}>
      <main className="page-main">
        <section className="section section-muted page-section-centered">
          <div className="container page-inner-centered career-page">
            <div className="section-heading">
              <div className="eyebrow">{c.eyebrow}</div>
              <h1>{c.title}</h1>
            </div>

            <ol className="career-list">
              {c.jobs.map((job) => (
                <li key={`${job.company}-${job.period}`} className="career-item">
                  <div className="career-item-header">
                    <span className="career-role">{job.role}</span>
                    <span className="career-company">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ''}
                    </span>
                    <span className="career-period">{job.period}</span>
                  </div>
                  <ul className="career-bullets">
                    {job.bullets.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

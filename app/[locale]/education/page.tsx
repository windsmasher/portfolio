import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SiteChrome } from '@/components/site-chrome';
import { educationContent } from '@/lib/education-content';
import { isLocale } from '@/lib/locales';
import { messages } from '@/lib/messages';

type EducationPageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: EducationPageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const base = messages[params.locale].meta.title;
  const e = educationContent[params.locale];
  return {
    title: e.meta.title,
    description: e.meta.description,
    openGraph: {
      title: `${e.meta.title} · ${base}`,
      description: e.meta.description,
      type: 'website',
    },
  };
}

export default function EducationPage({ params }: EducationPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const e = educationContent[locale];

  return (
    <SiteChrome locale={locale}>
      <main className="page-main">
        <section className="section section-muted page-section-centered">
          <div className="container page-inner-centered education-page">
            <div className="section-heading">
              <div className="eyebrow">{e.eyebrow}</div>
              <h1>{e.title}</h1>
            </div>

            <ul className="education-degrees">
              {e.degrees.map((d) => (
                <li key={d.title} className="education-degree">
                  <span className="education-degree-title">{d.title}</span>
                  <span className="education-degree-meta">
                    {d.school} · {d.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

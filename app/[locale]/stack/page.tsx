import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SiteChrome } from '@/components/site-chrome';
import { isLocale } from '@/lib/locales';
import { messages } from '@/lib/messages';
import { SKILLS } from '@/lib/site-content';

type StackPageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: StackPageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const base = messages[params.locale].meta.title;
  const p = messages[params.locale].stackPage;
  return {
    title: p.title,
    description: p.description,
    openGraph: {
      title: `${p.title} · ${base}`,
      description: p.description,
      type: 'website',
    },
  };
}

export default function StackPage({ params }: StackPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const t = messages[locale];

  return (
    <SiteChrome locale={locale}>
      <main className="page-main">
        <section className="section section-muted page-section-centered">
          <div className="container page-inner-centered">
            <div className="section-heading">
              <div className="eyebrow">{t.skills.eyebrow}</div>
              <h1>{t.skills.title}</h1>
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
      </main>
    </SiteChrome>
  );
}

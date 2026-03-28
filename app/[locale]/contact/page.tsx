import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CopyEmailButton } from '@/components/copy-email-button';
import { SiteChrome } from '@/components/site-chrome';
import { isLocale } from '@/lib/locales';
import { messages } from '@/lib/messages';
import { CONTACT_EMAIL } from '@/lib/site-content';

type ContactPageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const base = messages[params.locale].meta.title;
  const p = messages[params.locale].contactPage;
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

export default function ContactPage({ params }: ContactPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const t = messages[locale];

  return (
    <SiteChrome locale={locale}>
      <main className="page-main">
        <section className="section section-muted page-section-centered">
          <div className="container page-inner-centered contact-block">
            <div className="section-heading">
              <div className="eyebrow">{t.contact.eyebrow}</div>
              <h1>{t.contact.title}</h1>
            </div>
            <p className="lead contact-lead">{t.contact.lead}</p>
            <div className="hero-actions">
              <CopyEmailButton
                email={CONTACT_EMAIL}
                className="button button-primary"
                titleHint={t.contact.copyEmailHint}
                copiedLabel={t.contact.emailCopied}
              />
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

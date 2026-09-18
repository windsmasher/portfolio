import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SiteChrome } from '@/components/site-chrome';
import { isLocale, type Locale } from '@/lib/locales';
import { messages } from '@/lib/messages';

type HomePageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }
  const locale = params.locale as Locale;
  const m = messages[locale].meta;
  return {
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'website',
    },
    twitter: {
      description: m.description,
    },
  };
}

export default function HomePage({ params }: HomePageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const t = messages[locale];

  return (
    <SiteChrome locale={locale}>
      <main className="home-main">
        <div className="container home-inner">
          <p className="eyebrow home-eyebrow">{t.home.eyebrow}</p>
          <div className="home-portrait-wrap">
            <Image
              src="/images/headshot.png"
              alt={t.home.imageAlt}
              width={560}
              height={700}
              priority
              className="home-portrait"
              sizes="(max-width: 480px) 85vw, 280px"
            />
          </div>
          <h1 className="home-headline">{t.home.headline}</h1>
          <p className="home-subline">{t.home.subline}</p>
          <p className="home-name">{t.home.name}</p>
        </div>
      </main>
    </SiteChrome>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { HtmlLang } from '@/components/html-lang';
import { isLocale } from '@/lib/locales';
import { messages } from '@/lib/messages';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pl' }];
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return {};
  }

  const m = messages[params.locale].meta;

  return {
    title: {
      default: m.title,
      template: `%s · ${m.title}`,
    },
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'website',
    },
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return (
    <>
      <HtmlLang locale={params.locale} />
      {children}
    </>
  );
}

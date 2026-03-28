import Link from 'next/link';

import { LanguageSwitcher } from '@/components/language-switcher';
import type { Locale } from '@/lib/locales';
import { messages } from '@/lib/messages';

type SiteChromeProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteChrome({ locale, children }: SiteChromeProps) {
  const t = messages[locale];
  const year = new Date().getFullYear();
  const prefix = `/${locale}`;

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={prefix}>
            Tomasz Paczka
          </Link>

          <nav className="nav" aria-label="Primary">
            <Link className="nav-link" href={prefix}>
              {t.nav.home}
            </Link>
            <Link className="nav-link" href={`${prefix}/stack`}>
              {t.nav.stack}
            </Link>
            <Link className="nav-link" href={`${prefix}/contact`}>
              {t.nav.contact}
            </Link>
          </nav>

          <div className="header-actions">
            <LanguageSwitcher locale={locale} ariaLabel={t.langSwitcher} />
          </div>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-left">© {year} Tomasz Paczka</div>
          <div className="footer-right">
            <Link className="footer-link" href={`${prefix}/stack`}>
              {t.footer.stack}
            </Link>
            <Link className="footer-link" href={`${prefix}/contact`}>
              {t.footer.contact}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { LOCALE_STORAGE_KEY, LOCALES, type Locale } from '@/lib/locales';

type LanguageSwitcherProps = {
  locale: Locale;
  ariaLabel: string;
};

function persistLocale(next: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  } catch {
    /* ignore quota / private mode */
  }
}

function pathWithoutLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|pl)(?=\/|$)/, '');
  if (!stripped || stripped === '/') {
    return '';
  }
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

export function LanguageSwitcher({ locale, ariaLabel }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const rest = pathWithoutLocale(pathname);

  return (
    <div className="lang-switcher" role="group" aria-label={ariaLabel}>
      {LOCALES.map((code) => {
        const href = `/${code}${rest}`;
        const isActive = code === locale;

        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            className={`lang-switcher-link${isActive ? ' is-active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
            prefetch
            onClick={(e) => {
              persistLocale(code);
              const hash = typeof window !== 'undefined' ? window.location.hash : '';
              if (hash) {
                e.preventDefault();
                router.push(`${href}${hash}`);
              }
            }}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

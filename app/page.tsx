'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { DEFAULT_LOCALE, isLocale, LOCALE_STORAGE_KEY, type Locale } from '@/lib/locales';

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (raw && isLocale(raw)) {
      return raw;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LOCALE;
  }
  const primary = navigator.language?.split('-')[0]?.toLowerCase();
  return primary === 'pl' ? 'pl' : DEFAULT_LOCALE;
}

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const target = readStoredLocale() ?? detectBrowserLocale();
    router.replace(`/${target}`);
  }, [router]);

  return (
    <div
      className="app-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--muted)',
        fontSize: '0.95rem',
      }}
    >
      …
    </div>
  );
}

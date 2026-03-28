export const LOCALES = ['en', 'pl'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pl';

export const LOCALE_STORAGE_KEY = 'portfolio-locale';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

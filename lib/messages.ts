import type { Locale } from './locales';

export const messages: Record<
  Locale,
  {
    meta: { title: string; description: string };
    nav: { stack: string; contact: string };
    langSwitcher: string;
    hero: {
      eyebrow: string;
      title: string;
      lead: string;
      ctaStack: string;
      ctaContact: string;
    };
    skills: { eyebrow: string; title: string };
    contact: {
      eyebrow: string;
      title: string;
      lead: string;
      copyEmailHint: string;
      emailCopied: string;
    };
    footer: { stack: string; email: string };
  }
> = {
  en: {
    meta: {
      title: 'Tomasz Paczka',
      description:
        'Software engineer focused on web applications, APIs, and reliable backend systems.',
    },
    nav: {
      stack: 'Stack',
      contact: 'Contact',
    },
    langSwitcher: 'Language',
    hero: {
      eyebrow: 'Software engineer',
      title: 'I build software for the web',
      lead: 'Backend systems, APIs, and the infrastructure that keeps products running.',
      ctaStack: 'View stack',
      ctaContact: 'Get in touch',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Tools and practices',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      lead: "Reach out by email — I'll get back to you as soon as I can.",
      copyEmailHint: 'Click to copy email address',
      emailCopied: 'Copied!',
    },
    footer: {
      stack: 'Stack',
      email: 'Email',
    },
  },
  pl: {
    meta: {
      title: 'Tomasz Paczka',
      description:
        'Inżynier oprogramowania: aplikacje webowe, API i niezawodne systemy backendowe.',
    },
    nav: {
      stack: 'Stack',
      contact: 'Kontakt',
    },
    langSwitcher: 'Język',
    hero: {
      eyebrow: 'Inżynier oprogramowania',
      title: 'Tworzę oprogramowanie dla sieci',
      lead: 'Systemy backendowe, API i infrastruktura, na której opierają się produkty.',
      ctaStack: 'Zobacz stack',
      ctaContact: 'Napisz do mnie',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Narzędzia i praktyki',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Porozmawiajmy',
      lead: 'Napisz na e-mail — odpowiem, gdy tylko będzie to możliwe.',
      copyEmailHint: 'Kliknij, aby skopiować adres e-mail',
      emailCopied: 'Skopiowano!',
    },
    footer: {
      stack: 'Stack',
      email: 'E-mail',
    },
  },
};

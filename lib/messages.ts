import type { Locale } from './locales';

export const messages: Record<
  Locale,
  {
    meta: { title: string; description: string };
    nav: {
      home: string;
      stack: string;
      career: string;
      projects: string;
      education: string;
      contact: string;
    };
    langSwitcher: string;
    home: {
      eyebrow: string;
      headline: string;
      subline: string;
      name: string;
      imageAlt: string;
    };
    stackPage: { title: string; description: string };
    skills: { eyebrow: string; title: string };
    contactPage: { title: string; description: string };
    contact: {
      eyebrow: string;
      title: string;
      lead: string;
      copyEmailHint: string;
      emailCopied: string;
    };
    footer: { stack: string; career: string; projects: string; education: string; contact: string };
  }
> = {
  en: {
    meta: {
      title: 'Tomasz Paczka',
      description:
        'Websites and web software. I am currently looking primarily for straightforward company sites and smaller deployments.',
    },
    nav: {
      home: 'HOME',
      stack: 'STACK',
      career: 'CAREER',
      projects: 'PROJECTS',
      education: 'EDUCATION',
      contact: 'CONTACT',
    },
    langSwitcher: 'Language',
    home: {
      eyebrow: 'Software engineer',
      headline: 'Company websites and web applications',
      subline:
        'I deliver company websites and web-based software. I am currently prioritising clear sites and smaller projects — please get in touch by email.',
      name: 'Tomasz Paczka',
      imageAlt: 'Portrait of Tomasz Paczka',
    },
    stackPage: {
      title: 'Stack',
      description: 'Tools, technologies, and practices I work with.',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Tools and practices',
    },
    contactPage: {
      title: 'Contact',
      description: 'Get in touch by email.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      lead: "Reach out by email — I'll get back to you as soon as I can.",
      copyEmailHint: 'Click to copy email address',
      emailCopied: 'Copied!',
    },
    footer: {
      stack: 'STACK',
      career: 'CAREER',
      projects: 'PROJECTS',
      education: 'EDUCATION',
      contact: 'CONTACT',
    },
  },
  pl: {
    meta: {
      title: 'Tomasz Paczka',
      description:
        'Strony www i oprogramowanie webowe. Szukam teraz przede wszystkim prostych stron firmowych i małych wdrożeń.',
    },
    nav: {
      home: 'HOME',
      stack: 'STACK',
      career: 'KARIERA',
      projects: 'PROJEKTY',
      education: 'WYKSZTAŁCENIE',
      contact: 'KONTAKT',
    },
    langSwitcher: 'Język',
    home: {
      eyebrow: 'Inżynier oprogramowania',
      headline: 'Strony www i aplikacje webowe',
      subline:
        'Wdrażam witryny firmowe oraz oprogramowanie webowe. Obecnie priorytetowo przyjmuję czytelne strony i mniejsze projekty — zapraszam do kontaktu mailowego.',
      name: 'Tomasz Paczka',
      imageAlt: 'Portret Tomasza Paczki',
    },
    stackPage: {
      title: 'Stack',
      description: 'Narzędzia, technologie i praktyki, z którymi pracuję.',
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Narzędzia i praktyki',
    },
    contactPage: {
      title: 'Kontakt',
      description: 'Napisz na e-mail.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Porozmawiajmy',
      lead: 'Napisz na e-mail — odpowiem, gdy tylko będzie to możliwe.',
      copyEmailHint: 'Kliknij, aby skopiować adres e-mail',
      emailCopied: 'Skopiowano!',
    },
    footer: {
      stack: 'STACK',
      career: 'KARIERA',
      projects: 'PROJEKTY',
      education: 'WYKSZTAŁCENIE',
      contact: 'KONTAKT',
    },
  },
};

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
    footer: { stack: string; career: string; projects: string; education: string; contact: string; cv: string };
    cv: string;
  }
> = {
  en: {
    meta: {
      title: 'Tomasz Paczka',
      description:
        'Senior Software Engineer specialising in Node.js, TypeScript, and scalable backend systems for high-traffic e-commerce platforms.',
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
      eyebrow: 'Senior Software Engineer',
      headline: 'Backend systems that scale',
      subline:
        '6+ years designing and building high-traffic backend systems — from a ~300-microservice platform handling millions of orders to e-commerce platforms built from the ground up. I work mainly with Node.js, TypeScript, and distributed architectures, and I care about code quality as much as shipping fast.',
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
      cv: 'CV',
    },
    cv: 'CV',
  },
  pl: {
    meta: {
      title: 'Tomasz Paczka',
      description:
        'Senior Software Engineer specjalizujący się w Node.js, TypeScript i skalowalnych systemach backendowych dla platform e-commerce o dużym ruchu.',
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
      eyebrow: 'Senior Software Engineer',
      headline: 'Systemy backendowe, które się skalują',
      subline:
        'Ponad 6 lat projektowania i budowania systemów backendowych o dużym natężeniu ruchu — od platformy złożonej z ok. 300 mikroserwisów obsługującej miliony zamówień, po platformy e-commerce budowane od zera. Pracuję głównie w Node.js, TypeScript i architekturach rozproszonych, dbając zarówno o jakość kodu, jak i tempo dostarczania.',
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
      cv: 'CV',
    },
    cv: 'CV',
  },
};

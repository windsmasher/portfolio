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
      headline: string;
      subline: string[];
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
      headline: 'Senior Software Engineer',
      subline: [
        'Experience in designing and developing scalable backend systems for e-commerce, particularly high-traffic services that require reliability and strong performance. Strong expertise in Node.js, microservice architecture, and designing systems that scale effectively while remaining maintainable.',
        'Hands-on experience solving performance, reliability, and production challenges, as well as simplifying complex existing architectures. Experienced in working across technical and business teams and making technical decisions that balance engineering quality with business needs.',
      ],
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
      headline: 'Senior Software Engineer',
      subline: [
        'Doświadczenie w projektowaniu i rozwijaniu skalowalnych systemów backendowych dla e-commerce, w szczególności usług obsługujących duży ruch i wymagających wysokiej niezawodności. Mocne doświadczenie w Node.js, architekturze mikroserwisowej oraz projektowaniu systemów, które dobrze radzą sobie ze skalowaniem i złożonością.',
        'Praktyczna znajomość rozwiązywania problemów związanych z wydajnością, niezawodnością i utrzymaniem systemów produkcyjnych, a także upraszczaniem istniejących architektur. Doświadczenie we współpracy z zespołami technicznymi i biznesowymi oraz podejmowaniu decyzji technicznych z uwzględnieniem zarówno jakości rozwiązania, jak i potrzeb biznesowych.',
      ],
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

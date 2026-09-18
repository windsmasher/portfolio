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
        'Results-driven Senior Software Engineer with extensive experience in designing and implementing scalable solutions, particularly in e-commerce platforms. Proficient in Node.js and modern web technologies, I have successfully developed high-traffic backend services and managed complex microservices architectures. My strong collaboration with cross-functional teams ensures delivery of robust and innovative products that meet business needs. Holding a Master\'s degree in Computer Science, I blend technical acumen with a commitment to code quality and system optimization.',
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
        'Zorientowany na wyniki Senior Software Engineer z bogatym doświadczeniem w projektowaniu i wdrażaniu skalowalnych rozwiązań, szczególnie w platformach e-commerce. Biegły w Node.js i nowoczesnych technologiach webowych, z sukcesem tworzyłem backendowe usługi o dużym ruchu i zarządzałem złożonymi architekturami mikroserwisowymi. Silna współpraca z zespołami międzyfunkcyjnymi zapewnia dostarczanie solidnych i innowacyjnych produktów odpowiadających potrzebom biznesowym. Mając tytuł magistra informatyki, łączę wiedzę techniczną z dbałością o jakość kodu i optymalizację systemów.',
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

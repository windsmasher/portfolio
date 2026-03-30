import type { Locale } from './locales';

export type ProjectItem = {
  title: string;
  description: string;
  /** Static preview in /public (e.g. /images/projects/foo.png). */
  previewSrc: string;
  previewAlt: string;
  linkUrl: string;
  linkLabel: string;
};

type ProjectsBundle = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  previewHint: string;
  projects: ProjectItem[];
};

const PREVIEW_PSYCH = '/images/projects/psychoterapia.png';
const PREVIEW_POLKA = '/images/projects/polka.png';

export const projectsContent: Record<Locale, ProjectsBundle> = {
  en: {
    meta: {
      title: 'Projects',
      description:
        'Selected freelance websites: psychotherapy practice and Polka hair salon.',
    },
    eyebrow: 'Projects',
    title: 'Selected client work',
    intro: 'Websites delivered as freelance projects — screenshot previews; open the live site via the image or the button.',
    previewHint: 'Click the preview or the button to open the website in a new tab.',
    projects: [
      {
        title: 'Psychotherapy practice',
        description: 'Website for a psychotherapy practice in Gliwice.',
        previewSrc: PREVIEW_PSYCH,
        previewAlt: 'Screenshot of psychoterapiagliwice.pl homepage',
        linkUrl: 'https://www.psychoterapiagliwice.pl/#/dane-firmy',
        linkLabel: 'Open psychoterapiagliwice.pl',
      },
      {
        title: 'Polka hair salon',
        description: 'Website for the Polka hairdressing salon.',
        previewSrc: PREVIEW_POLKA,
        previewAlt: 'Screenshot of salonpolka.pl homepage',
        linkUrl: 'https://www.salonpolka.pl/',
        linkLabel: 'Open salonpolka.pl',
      },
    ],
  },
  pl: {
    meta: {
      title: 'Projekty',
      description:
        'Wybrane realizacje freelancingowe: gabinet psychoterapii i salon fryzjerski Polka.',
    },
    eyebrow: 'Projekty',
    title: 'Wybrane realizacje',
    intro:
      'Strony www wykonane w ramach zleceń — poniżej zrzuty ekranu; żywą witrynę otworzysz z obrazka lub przycisku.',
    previewHint: 'Kliknij podgląd albo przycisk, aby otworzyć stronę w nowej karcie.',
    projects: [
      {
        title: 'Gabinet psychoterapii',
        description: 'Strona gabinetu psychoterapii w Gliwicach.',
        previewSrc: PREVIEW_PSYCH,
        previewAlt: 'Zrzut strony psychoterapiagliwice.pl',
        linkUrl: 'https://www.psychoterapiagliwice.pl/#/dane-firmy',
        linkLabel: 'Otwórz psychoterapiagliwice.pl',
      },
      {
        title: 'Salon fryzjerski Polka',
        description: 'Strona salonu fryzjerskiego Polka.',
        previewSrc: PREVIEW_POLKA,
        previewAlt: 'Zrzut strony salonpolka.pl',
        linkUrl: 'https://www.salonpolka.pl/',
        linkLabel: 'Otwórz salonpolka.pl',
      },
    ],
  },
};

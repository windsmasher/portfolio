import type { Locale } from './locales';

export type ProjectItem = {
  title: string;
  description: string;
  /** Shown in a tooltip on hover/focus (e.g. longer context for non-experts). */
  descriptionDetail?: string;
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
  /** aria-label for the “more info” icon when a project has descriptionDetail. */
  moreInfoLabel: string;
  projects: ProjectItem[];
};

const PREVIEW_PSYCH = '/images/projects/psychoterapia.png';
const PREVIEW_POLKA = '/images/projects/polka.png';
const PREVIEW_PLANNING_POKER = '/images/projects/planning-poker.png';

export const projectsContent: Record<Locale, ProjectsBundle> = {
  en: {
    meta: {
      title: 'Projects',
      description:
        'Client websites (psychotherapy, hair salon) and Planning Poker — a simple real-time estimation web app.',
    },
    eyebrow: 'Projects',
    title: 'Selected work',
    intro:
      'Freelance websites plus a small side project — screenshot previews; open the live site via the image or the button.',
    previewHint: 'Click the preview or the button to open the website in a new tab.',
    moreInfoLabel: 'What planning poker is — full explanation',
    projects: [
      {
        title: 'Planning Poker',
        description:
          'Simple web app for planning poker in the browser: create a room, share the link, estimate together in real time.',
        descriptionDetail:
          'The team agrees what to estimate, then everyone picks a value privately and all choices are revealed at once—so you avoid anchoring on whoever speaks first and see how opinions actually spread. Teams in Scrum use this a lot, but it works for any group that needs a quick, fair way to gauge how big or tricky a task feels before you commit to a plan.',
        previewSrc: PREVIEW_PLANNING_POKER,
        previewAlt: 'Screenshot of Planning Poker app landing page',
        linkUrl: 'https://windsmasher.github.io/planning-poker',
        linkLabel: 'Open Planning Poker',
      },
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
        'Strony dla klientów (psychoterapia, salon Polka) oraz Planning Poker — prosta aplikacja do wspólnego szacowania w czasie rzeczywistym.',
    },
    eyebrow: 'Projekty',
    title: 'Wybrane prace',
    intro:
      'Strony zleceń oraz mała aplikacja własna — poniżej zrzuty ekranu; żywą witrynę otworzysz z obrazka lub przycisku.',
    previewHint: 'Kliknij podgląd albo przycisk, aby otworzyć stronę w nowej karcie.',
    moreInfoLabel: 'Wyjaśnienie, na czym polega planning poker',
    projects: [
      {
        title: 'Planning Poker',
        description: 'Aplikacja webowa do planning poker.',
        descriptionDetail:
          'Zespół ustala, co ma być oszacowane, potem każdy osobno wybiera swoją „kartę” (np. jak duże lub skomplikowane wydaje mu się zadanie), a dopiero na końcu wszystkie wybory pokazują się naraz. Dzięki temu nikt nie podkręca wyniku pod pierwszą zaproponowaną liczbą i od razu widać, czy wszyscy myślą podobnie. W Scrumie to popularna technika, ale sprawdza się w każdej grupie, która chce szybko i uczciwie zebrać opinie, zanim zaplanuje pracę.',
        previewSrc: PREVIEW_PLANNING_POKER,
        previewAlt: 'Zrzut strony aplikacji Planning Poker',
        linkUrl: 'https://windsmasher.github.io/planning-poker',
        linkLabel: 'Otwórz Planning Poker',
      },
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

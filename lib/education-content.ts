import type { Locale } from './locales';

export type EducationDegree = {
  title: string;
  school: string;
  year: string;
};

type EducationBundle = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  degrees: EducationDegree[];
};

export const educationContent: Record<Locale, EducationBundle> = {
  en: {
    meta: {
      title: 'Education',
      description:
        "Master's in Computer Science and engineer's degree in Automation and robotics — Silesian University of Technology, Gliwice.",
    },
    eyebrow: 'Education',
    title: 'Formal education',
    degrees: [
      {
        title: "Master's degree in Computer Science",
        school: 'Silesian University of Technology, Gliwice',
        year: '2019',
      },
      {
        title: "Engineer's degree in Automation and robotics",
        school: 'Silesian University of Technology, Gliwice',
        year: '2017',
      },
    ],
  },
  pl: {
    meta: {
      title: 'Wykształcenie',
      description:
        'Magister informatyki oraz tytuł inżyniera automatyki i robotyki — Politechnika Śląska, Gliwice.',
    },
    eyebrow: 'Wykształcenie',
    title: 'Wykształcenie',
    degrees: [
      {
        title: 'Magister informatyki',
        school: 'Politechnika Śląska, Gliwice',
        year: '2019',
      },
      {
        title: 'Inżynier automatyki i robotyki',
        school: 'Politechnika Śląska, Gliwice',
        year: '2017',
      },
    ],
  },
};

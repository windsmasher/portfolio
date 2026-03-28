import type { Locale } from './locales';

export type CareerJob = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
};

type CareerBundle = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  jobs: CareerJob[];
};

export const careerContent: Record<Locale, CareerBundle> = {
  en: {
    meta: {
      title: 'Career',
      description:
        'Work experience in backend, e-commerce, and microservices — from Medusa and GraphQL to large-scale Node.js systems.',
    },
    eyebrow: 'Career',
    title: 'Work experience',
    jobs: [
      {
        role: 'Senior Software Engineer',
        company: 'Zan',
        period: 'Nov 2025 — present',
        bullets: [
          'Built a full e-commerce platform from scratch in a small, high-impact team',
          'Backend and frontend architecture on Medusa v2',
          'Scalable APIs and business logic with Node.js and modern web stack',
          'End-to-end ownership from system design to production',
          'Close collaboration with product and business stakeholders',
        ],
      },
      {
        role: 'Senior Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'Sep 2025 — present',
        bullets: [
          'Scalable backend services with Node.js and GraphQL',
          'High-traffic e-commerce for airport retail platforms',
          'Cross-functional delivery of business-critical features',
          'Code quality through reviews, testing, and solid engineering practices',
        ],
      },
      {
        role: 'Senior Software Engineer',
        company: 'Flip',
        location: 'Los Angeles',
        period: 'Aug 2022 — Aug 2025',
        bullets: [
          'Large-scale backend of ~300 microservices, mainly Node.js and NestJS',
          'Inter-service messaging with RabbitMQ and Kafka',
          'MongoDB, PostgreSQL, ScyllaDB, TimescaleDB, and Redis',
          'Supported a mobile-first product (iOS / Android), strong U.S. app-store presence',
          'Scaled to nearly 5 million orders (over 2M in 2024), USA and Canada',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'Sep 2021 — Aug 2022',
        bullets: [
          'Backend in Node.js with Express and NestJS for a UK airport-related client',
          'Microservices-oriented design and RESTful APIs',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'ActivNet',
        period: 'Jan 2022 — May 2022',
        bullets: [
          'Part-time backend work on a small Node.js application',
          'Core features and clearer code structure',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'SolidStudio',
        location: 'Kraków',
        period: 'Jun 2021 — Sep 2021',
        bullets: [
          'Node.js on AWS Lambda — serverless backends and cloud integration',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'IT.Focus',
        location: 'Katowice',
        period: 'Nov 2019 — Jun 2021',
        bullets: [
          'Backend for 5+ PWA projects, mostly solo — Node.js, NestJS, SQL databases',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'AbiSerwkom',
        location: 'Mysłowice',
        period: 'Mar 2019 — Nov 2019',
        bullets: [
          'Frontend: migrating the app from AngularJS to modern Angular',
        ],
      },
    ],
  },
  pl: {
    meta: {
      title: 'Kariera',
      description:
        'Doświadczenie zawodowe: backend, e-commerce i mikroserwisy — od Medusa i GraphQL po duże systemy Node.js.',
    },
    eyebrow: 'Kariera',
    title: 'Doświadczenie zawodowe',
    jobs: [
      {
        role: 'Senior Software Engineer',
        company: 'Zan',
        period: 'lis 2025 — obecnie',
        bullets: [
          'Budowa platformy e-commerce od zera w małym, efektywnym zespole',
          'Architektura backendu i frontendu oparta o Medusa v2',
          'Skalowalne API i logika biznesowa w Node.js i nowoczesnym stacku webowym',
          'Odpowiedzialność end-to-end: od projektu systemu do produkcji',
          'Ścisła współpraca z productem i stroną biznesową',
        ],
      },
      {
        role: 'Senior Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'wrz 2025 — obecnie',
        bullets: [
          'Skalowalne usługi backendowe w Node.js i GraphQL',
          'Systemy e-commerce o dużym ruchu dla retailu lotniskowego',
          'Realizacja krytycznych funkcji w zespole międzyfunkcyjnym',
          'Jakość kodu: przeglądy, testy, dobre praktyki inżynierskie',
        ],
      },
      {
        role: 'Senior Software Engineer',
        company: 'Flip',
        location: 'Los Angeles',
        period: 'sie 2022 — sie 2025',
        bullets: [
          'Rozbudowany backend: ~300 mikroserwisów, głównie Node.js i NestJS',
          'Komunikacja między usługami: RabbitMQ i Kafka',
          'MongoDB, PostgreSQL, ScyllaDB, TimescaleDB i Redis',
          'Wsparcie aplikacji mobile-first (iOS / Android), silna pozycja w rankingach w USA',
          'Skala: blisko 5 mln zamówień (ponad 2 mln w 2024), USA i Kanada',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'wrz 2021 — sie 2022',
        bullets: [
          'Backend w Node.js (Express, NestJS) dla klienta z branży lotniskowej w UK',
          'Architektura w stylu mikroserwisów i REST API',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'ActivNet',
        period: 'sty 2022 — maj 2022',
        bullets: [
          'Backend w niepełnym wymiarze godzin — mała aplikacja w Node.js',
          'Wdrażanie kluczowych funkcji i porządkowanie struktury kodu',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'SolidStudio',
        location: 'Kraków',
        period: 'cze 2021 — wrz 2021',
        bullets: [
          'Node.js na AWS Lambda — funkcje serverless i integracja z chmurą',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'IT.Focus',
        location: 'Katowice',
        period: 'lis 2019 — cze 2021',
        bullets: [
          'Backend do ponad pięciu projektów PWA, głównie samodzielnie — Node.js, NestJS, bazy SQL',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'AbiSerwkom',
        location: 'Mysłowice',
        period: 'mar 2019 — lis 2019',
        bullets: [
          'Frontend: przepisanie aplikacji z AngularJS na nowoczesny Angular',
        ],
      },
    ],
  },
};

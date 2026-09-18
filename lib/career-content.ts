import type { Locale } from './locales';

export type CareerJob = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
  image?: { src: string; alt: string };
};

type CareerBundle = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  imageCloseLabel: string;
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
    imageCloseLabel: 'Close image',
    jobs: [
      {
        role: 'Senior Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'Sep 2025 — present',
        bullets: [
          'Designed and developed scalable backend services using Node.js and GraphQL',
          'Built and maintained high-traffic e-commerce systems for airport retail platforms',
          'Collaborated with cross-functional teams to deliver business-critical features',
          'Ensured code quality through reviews, testing, and best engineering practices',
        ],
      },
      {
        role: 'Senior Software Engineer (Part-time)',
        company: 'Zan',
        location: 'Saudi Arabia',
        period: 'Nov 2025 — Jun 2026',
        bullets: [
          'Built a full-featured e-commerce platform from scratch in a small, high-impact engineering team',
          'Designed and implemented backend and frontend architecture based on Medusa v2 boilerplate',
          'Developed scalable APIs and business logic using Node.js and modern web technologies',
          'Owned end-to-end product development, from system design to production deployment',
          'Collaborated closely with product and business stakeholders to deliver core platform features',
        ],
      },
      {
        role: 'Senior Software Engineer',
        company: 'Flip',
        location: 'Los Angeles',
        period: 'Aug 2022 — Aug 2025',
        bullets: [
          'Contributed to the development and maintenance of a large-scale backend system consisting of ~300 microservices, primarily built with Node.js and NestJS',
          'Enabled seamless inter-service communication using RabbitMQ and Kafka, ensuring high reliability and scalability',
          'Worked with a diverse tech stack, including MongoDB, PostgreSQL, ScyllaDB, TimescaleDB, and Redis, optimizing performance across various use cases',
          'Supported a mobile-first application with a strong presence on iOS and Android, consistently ranking high in U.S. app charts',
          'Scaled the system to handle nearly 5 million orders, with over 2 million placed in 2024 alone, serving users in the USA and Canada',
        ],
        image: {
          src: '/images/career/flip-shutdown.png',
          alt: 'Flip shutdown announcement: 16.5M people joined, 10M videos uploaded, 5B video views, 22B post and creator engagements, 4.6M creators contributed, $13.4M paid to creators, 12k active brands, $375M sales for brands',
        },
      },
      {
        role: 'Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'Sep 2021 — Aug 2022',
        bullets: [
          'Built backend services in Node.js with Express and NestJS for a UK airport-related company',
          'Introduced to microservices architecture, focusing on modular design and RESTful APIs',
        ],
      },
      {
        role: 'Software Engineer (Part-time)',
        company: 'ActivNet',
        period: 'Jan 2022 — May 2022',
        bullets: [
          'Part-time backend development in a small-scale application using Node.js',
          'Assisted in implementing core features and improving code structure',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'SolidStudio',
        location: 'Kraków',
        period: 'Jun 2021 — Sep 2021',
        bullets: [
          'Worked briefly on a project using Node.js with AWS Lambda, focusing on serverless backend functions and cloud integration',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'IT.Focus',
        location: 'Katowice',
        period: 'Nov 2019 — Jun 2021',
        bullets: [
          'Developed backend for over five PWA projects, working mostly independently with Node.js, NestJS, and SQL databases',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'AbiSerwkom',
        location: 'Mysłowice',
        period: 'Mar 2019 — Nov 2019',
        bullets: [
          'Frontend development focused on rewriting the application from AngularJS to modern Angular',
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
    imageCloseLabel: 'Zamknij obraz',
    jobs: [
      {
        role: 'Senior Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'wrz 2025 — obecnie',
        bullets: [
          'Projektowanie i rozwijanie skalowalnych usług backendowych z użyciem Node.js i GraphQL',
          'Budowa i utrzymanie systemów e-commerce o dużym ruchu dla platform retailu lotniskowego',
          'Współpraca z zespołami międzyfunkcyjnymi przy dostarczaniu krytycznych funkcji biznesowych',
          'Zapewnianie jakości kodu poprzez przeglądy, testy i najlepsze praktyki inżynierskie',
        ],
      },
      {
        role: 'Senior Software Engineer (Niepełny etat)',
        company: 'Zan',
        location: 'Arabia Saudyjska',
        period: 'lis 2025 — cze 2026',
        bullets: [
          'Budowa kompletnej platformy e-commerce od zera w małym, wysoce efektywnym zespole inżynierskim',
          'Projektowanie i wdrażanie architektury backendu i frontendu na bazie boilerplate\'u Medusa v2',
          'Rozwijanie skalowalnych API i logiki biznesowej z użyciem Node.js i nowoczesnych technologii webowych',
          'Odpowiedzialność end-to-end za rozwój produktu — od projektu systemu do wdrożenia produkcyjnego',
          'Ścisła współpraca z interesariuszami produktowymi i biznesowymi przy dostarczaniu kluczowych funkcji platformy',
        ],
      },
      {
        role: 'Senior Software Engineer',
        company: 'Flip',
        location: 'Los Angeles',
        period: 'sie 2022 — sie 2025',
        bullets: [
          'Udział w rozwoju i utrzymaniu rozbudowanego systemu backendowego złożonego z ok. 300 mikroserwisów, głównie w Node.js i NestJS',
          'Zapewnianie płynnej komunikacji między usługami z użyciem RabbitMQ i Kafki, gwarantując wysoką niezawodność i skalowalność',
          'Praca z różnorodnym stackiem technologicznym, w tym MongoDB, PostgreSQL, ScyllaDB, TimescaleDB i Redis, optymalizując wydajność w różnych scenariuszach',
          'Wsparcie aplikacji mobile-first z silną obecnością na iOS i Android, stale wysoko w rankingach w USA',
          'Skalowanie systemu do obsługi blisko 5 milionów zamówień, z ponad 2 milionami samego 2024 roku, dla użytkowników w USA i Kanadzie',
        ],
        image: {
          src: '/images/career/flip-shutdown.png',
          alt: 'Ogłoszenie o zamknięciu Flip: 16,5 mln dołączonych osób, 10 mln przesłanych filmów, 5 mld wyświetleń filmów, 22 mld interakcji z postami i twórcami, 4,6 mln twórców, 13,4 mln USD wypłaconych twórcom, 12 tys. aktywnych marek, 375 mln USD sprzedaży dla marek',
        },
      },
      {
        role: 'Software Engineer',
        company: 'Future Processing',
        location: 'Gliwice',
        period: 'wrz 2021 — sie 2022',
        bullets: [
          'Budowa usług backendowych w Node.js z Express i NestJS dla firmy z branży lotniskowej w UK',
          'Wdrożenie do architektury mikroserwisowej, z naciskiem na modularny design i RESTful API',
        ],
      },
      {
        role: 'Software Engineer (Niepełny etat)',
        company: 'ActivNet',
        period: 'sty 2022 — maj 2022',
        bullets: [
          'Praca w niepełnym wymiarze godzin przy małej aplikacji z użyciem Node.js',
          'Wsparcie przy wdrażaniu kluczowych funkcji i poprawie struktury kodu',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'SolidStudio',
        location: 'Kraków',
        period: 'cze 2021 — wrz 2021',
        bullets: [
          'Krótka praca nad projektem z użyciem Node.js i AWS Lambda, skupiona na serverless backendzie i integracji z chmurą',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'IT.Focus',
        location: 'Katowice',
        period: 'lis 2019 — cze 2021',
        bullets: [
          'Rozwój backendu dla ponad pięciu projektów PWA, w większości samodzielnie — z użyciem Node.js, NestJS i baz SQL',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'AbiSerwkom',
        location: 'Mysłowice',
        period: 'mar 2019 — lis 2019',
        bullets: [
          'Rozwój frontendu skoncentrowany na przepisaniu aplikacji z AngularJS na nowoczesny Angular',
        ],
      },
    ],
  },
};

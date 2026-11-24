export const portfolioData = {
  profile: {
    brand: 'Aleks.dev',
    name: 'Алекс Алексовски',
    nameEn: 'Aleks Aleksovski',
    email: 'alex.dev@example.com',
    location: {
      mk: 'Скопје, Македонија (Remote)',
      en: 'Skopje, Macedonia (Remote)',
    },
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    stats: [
      { value: '4+', label: { mk: 'Год. искуство', en: 'Years Exp.' } },
      { value: '28+', label: { mk: 'Проекти', en: 'Projects' } },
      { value: '99%', label: { mk: 'Задоволство', en: 'Satisfaction' } },
    ],
  },
  nav: {
    mk: [
      { id: 'home', label: 'Почетна' },
      { id: 'about', label: 'За мене' },
      { id: 'skills', label: 'Вештини' },
      { id: 'projects', label: 'Проекти' },
      { id: 'experience', label: 'Искуство' },
      { id: 'contact', label: 'Контакт' },
    ],
    en: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  hero: {
    mk: {
      status: 'Достапен за нови проекти',
      greeting: 'Здраво, јас сум',
      roles: [
        'Full-Stack React Developer',
        'UI/UX Engineer',
        'Креативен веб-архитект',
      ],
      description:
        'Градам брзи, прецизни и визуелно впечатливи веб-апликации со модерен темен дизајн, чист код и беспрекорно корисничко искуство.',
      ctaProjects: 'Погледни проекти',
      ctaContact: 'Контактирај ме',
      copyEmail: 'Копирај е-пошта',
      copied: 'Копирано!',
    },
    en: {
      status: 'Available for new projects',
      greeting: "Hi, I'm",
      roles: [
        'Full-Stack React Developer',
        'UI/UX Engineer',
        'Creative Web Architect',
      ],
      description:
        'I craft fast, precise, and visually striking web applications with modern dark aesthetics, clean architecture, and seamless UX.',
      ctaProjects: 'Explore Projects',
      ctaContact: 'Get in Touch',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
    },
  },
  about: {
    mk: {
      eyebrow: '01 / За мене',
      title: 'Дизајн и инженерство во совршен баланс',
      subtitle:
        'Фокусиран сум на создавање дигитални производи што изгледаат модерно, се вчитуваат инстантно и решаваат реални проблеми.',
      cards: [
        {
          title: 'Мојот пристап',
          text: 'Секој интерфејс го третирам како комбинација од архитектура и уметност — чиста компонентна структура, пристапност и суптилни микро-анимации.',
          pills: ['Clean Code', 'Component Systems', 'Performance First'],
        },
        {
          title: 'Тековен фокус',
          text: 'Модерни React апликации, SaaS контролни табли, дизајн системи и интерактивни веб-искуства.',
          pills: ['React 18+', 'TypeScript', 'Next.js', 'Node.js'],
        },
        {
          title: 'Локација & Соработка',
          text: 'Работа на далечина со тимови и стартапи низ Европа и светот, во агилен ритам и транспарентна комуникација.',
        },
        {
          title: 'Зошто темен дизајн?',
          text: 'Темните интерфејси овозможуваат висок контраст, фокус на содржината и елегантна длабочина без визуелен замор.',
        },
      ],
    },
    en: {
      eyebrow: '01 / About Me',
      title: 'Design and engineering in perfect balance',
      subtitle:
        'Focused on building digital products that look sharp, load instantly, and solve real user problems.',
      cards: [
        {
          title: 'My Approach',
          text: 'I treat every interface as both architecture and craft — modular components, accessibility, and purposeful micro-interactions.',
          pills: ['Clean Code', 'Component Systems', 'Performance First'],
        },
        {
          title: 'Current Focus',
          text: 'Modern React applications, SaaS dashboards, dark design systems, and interactive web experiences.',
          pills: ['React 18+', 'TypeScript', 'Next.js', 'Node.js'],
        },
        {
          title: 'Location & Workflow',
          text: 'Working remotely with product teams and startups worldwide with agile delivery and clear communication.',
        },
        {
          title: 'Why Dark UI?',
          text: 'Dark interfaces create crisp contrast, focus user attention on content, and deliver depth without visual fatigue.',
        },
      ],
    },
  },
  skills: {
    eyebrow: { mk: '02 / Вештини', en: '02 / Skills' },
    title: { mk: 'Технологии со кои работам', en: 'Technologies I work with' },
    subtitle: {
      mk: 'Модерен стек од фронтенд, бекенд и дизајн алатки за скалабилни веб-производи.',
      en: 'A modern stack spanning frontend, backend, and design tooling for scalable web products.',
    },
    categories: {
      mk: [
        { id: 'all', label: 'Сите' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'tools', label: 'UI/UX & Алатки' },
      ],
      en: [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'tools', label: 'UI/UX & Tools' },
      ],
    },
    items: [
      { name: 'React / Next.js', level: 95, category: 'frontend', tag: 'UI Architecture' },
      { name: 'TypeScript / JS (ES6+)', level: 92, category: 'frontend', tag: 'Core Language' },
      { name: 'Tailwind / Modern CSS', level: 94, category: 'frontend', tag: 'Styling & Motion' },
      { name: 'Redux / Zustand / Query', level: 88, category: 'frontend', tag: 'State Management' },
      { name: 'Node.js / Express', level: 85, category: 'backend', tag: 'REST & APIs' },
      { name: 'PostgreSQL / MongoDB', level: 82, category: 'backend', tag: 'Databases' },
      { name: 'Figma & Design Systems', level: 90, category: 'tools', tag: 'Prototyping' },
      { name: 'Git / Docker / Vite', level: 89, category: 'tools', tag: 'DevOps & Build' },
    ],
  },
  projects: {
    eyebrow: { mk: '03 / Избрани проекти', en: '03 / Featured Work' },
    title: { mk: 'Проекти изработени со прецизност', en: 'Projects built with precision' },
    subtitle: {
      mk: 'Кликнете на „Детали“ кај секој проект за целосен преглед на проблемот, решението и резултатите.',
      en: 'Click "Details" on any project to inspect the problem, architecture, and outcomes.',
    },
    filters: {
      mk: [
        { id: 'all', label: 'Сите' },
        { id: 'webapp', label: 'Web Apps' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'uiux', label: 'UI/UX' },
      ],
      en: [
        { id: 'all', label: 'All' },
        { id: 'webapp', label: 'Web Apps' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'uiux', label: 'UI/UX' },
      ],
    },
    items: [
      {
        id: 'nebula-analytics',
        category: 'webapp',
        year: '2026',
        gradient: 'linear-gradient(135deg, rgba(34,211,238,0.28), rgba(99,102,241,0.34))',
        accent: '#22d3ee',
        title: 'Nebula SaaS Analytics',
        tag: { mk: 'Web Апликација', en: 'Web Application' },
        description: {
          mk: 'Интерактивна темна SaaS контролна табла за следење метрики во реално време, KPI графикони и управување со тимови.',
          en: 'Interactive dark SaaS analytics dashboard for real-time telemetry, KPI charts, and team management.',
        },
        stack: ['React', 'TypeScript', 'Vite', 'Recharts', 'WebSockets'],
        demoUrl: 'https://example.com',
        repoUrl: 'https://github.com',
        details: {
          mk: {
            challenge: 'Обработка и визуелизација на илјадници настани во секунда без забавување.',
            solution: 'Виртуелизирани табели, memoized React компоненти и WebSocket batching на 60fps.',
            highlights: [
              'Намалено време на рендерирање за 58%',
              'Модуларен темен дизајн систем со 35+ компоненти',
              'Извоз на извештаи во PDF и CSV со еден клик',
            ],
          },
          en: {
            challenge: 'Rendering thousands of live telemetry events per second without UI lag.',
            solution: 'Virtualized data grids, memoized React subtrees, and batched WebSocket updates at 60fps.',
            highlights: [
              '58% faster initial dashboard render',
              'Modular dark design system with 35+ components',
              'One-click CSV and PDF executive reporting',
            ],
          },
        },
      },
      {
        id: 'obsidian-commerce',
        category: 'fullstack',
        year: '2025',
        gradient: 'linear-gradient(135deg, rgba(168,85,247,0.28), rgba(236,72,153,0.24))',
        accent: '#c084fc',
        title: 'Obsidian Tech Store',
        tag: { mk: 'Full-Stack Платформа', en: 'Full-Stack Platform' },
        description: {
          mk: 'Модерна e-commerce платформа за премиум хардвер со инстант пребарување, кошничка и Stripe наплата.',
          en: 'Sleek e-commerce storefront for premium tech gear with instant search, cart drawer, and Stripe checkout.',
        },
        stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Prisma'],
        demoUrl: 'https://example.com',
        repoUrl: 'https://github.com',
        details: {
          mk: {
            challenge: 'Ултра-брз процес на купување со динамични филтри и сигурни трансакции.',
            solution: 'SSR страници, оптимизирани слики и webhook-базирана синхронизација на нарачки.',
            highlights: [
              '99/100 Lighthouse Performance резултат',
              'Инстант филтрирање по спецификации и цена',
              'Админ панел за следење залихи во реално време',
            ],
          },
          en: {
            challenge: 'Delivering an ultra-fast checkout flow with dynamic filtering and secure payments.',
            solution: 'SSR product pages, optimistic cart updates, and webhook-driven order processing.',
            highlights: [
              '99/100 Lighthouse Performance score',
              'Instant spec and price range filtering',
              'Real-time inventory admin console',
            ],
          },
        },
      },
      {
        id: 'aether-ui',
        category: 'uiux',
        year: '2025',
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.26), rgba(34,211,238,0.26))',
        accent: '#34d399',
        title: 'Aether Dark UI Kit',
        tag: { mk: 'Дизајн Систем', en: 'Design System' },
        description: {
          mk: 'Библиотека на пристапни темни UI компоненти со токени, тастатурна навигација и документација.',
          en: 'Accessible dark-mode UI component library featuring design tokens, keyboard navigation, and live docs.',
        },
        stack: ['React', 'CSS Variables', 'Storybook', 'Aria', 'Figma'],
        demoUrl: 'https://example.com',
        repoUrl: 'https://github.com',
        details: {
          mk: {
            challenge: 'Одржување конзистентен контраст и визуелна хиерархија низ 4 производи.',
            solution: 'Семантички CSS токени и целосна WAI-ARIA поддршка за сите контроли.',
            highlights: [
              'WCAG AA/AAA усогласен контраст на бои',
              'Zero-runtime CSS токени за брзо темизирање',
              'Целосна документација со примери на код',
            ],
          },
          en: {
            challenge: 'Maintaining consistent contrast and hierarchy across four product suites.',
            solution: 'Semantic CSS tokens paired with full WAI-ARIA keyboard accessibility.',
            highlights: [
              'WCAG AA/AAA compliant contrast ratios',
              'Zero-runtime CSS variables for instant theming',
              'Interactive playground documentation',
            ],
          },
        },
      },
    ],
  },
  experience: {
    eyebrow: { mk: '04 / Искуство', en: '04 / Experience' },
    title: { mk: 'Кариерен пат и соработки', en: 'Career path & milestones' },
    subtitle: {
      mk: 'Искуство во градење комерцијални веб-апликации, дизајн системи и соработка со продукциски тимови.',
      en: 'Experience building commercial web apps, design systems, and collaborating with product teams.',
    },
    items: [
      {
        period: '2024 — 2026',
        role: { mk: 'Senior Frontend / React Engineer', en: 'Senior Frontend / React Engineer' },
        company: 'NovaDigital Studio · Remote',
        summary: {
          mk: 'Водење на фронтенд архитектура за SaaS производи, оптимизација на перформанси и менторирање на јуниор програмери.',
          en: 'Leading frontend architecture for SaaS products, performance optimization, and mentoring junior engineers.',
        },
      },
      {
        period: '2022 — 2024',
        role: { mk: 'Full-Stack Web Developer', en: 'Full-Stack Web Developer' },
        company: 'Skopje Tech Labs',
        summary: {
          mk: 'Развој на React + Node.js клиентски портали, интеграција на платежни системи и REST/GraphQL сервиси.',
          en: 'Built React + Node.js client portals, payment gateway integrations, and REST/GraphQL APIs.',
        },
      },
      {
        period: '2021 — 2022',
        role: { mk: 'UI/UX & Frontend Freelancer', en: 'UI/UX & Frontend Freelancer' },
        company: 'Freelance · Global Clients',
        summary: {
          mk: 'Изработка на темни портфолија, landing страници со висок степен на конверзија и интерактивни прототипи во Figma.',
          en: 'Crafted dark-themed portfolios, high-converting landing pages, and interactive Figma prototypes.',
        },
      },
    ],
  },
  contact: {
    eyebrow: { mk: '05 / Контакт', en: '05 / Contact' },
    title: { mk: 'Ајде да создадеме нешто одлично', en: "Let's build something great" },
    subtitle: {
      mk: 'Имате идеја, проект или отворена позиција? Испратете ми порака и ќе ви одговорам во рок од 24 часа.',
      en: 'Have a project idea or an open role? Send a message and I will get back within 24 hours.',
    },
    labels: {
      mk: {
        name: 'Ваше име',
        namePh: 'Марко Петровски',
        email: 'Е-пошта',
        emailPh: 'marko@example.com',
        subject: 'Наслов / Тип на проект',
        subjectPh: 'Веб-апликација / Редизајн',
        message: 'Порака',
        messagePh: 'Раскажете ми накратко за вашиот проект...',
        send: 'Испрати порака',
        sending: 'Се испраќа...',
        success: 'Ви благодарам! Пораката е успешно примена (демо режим).',
        error: 'Ве молам пополнете ги сите полиња со валидна е-пошта.',
        copy: 'Копирај',
        copied: 'Копирано',
      },
      en: {
        name: 'Your Name',
        namePh: 'John Doe',
        email: 'Email',
        emailPh: 'john@example.com',
        subject: 'Subject / Project Type',
        subjectPh: 'Web App / Redesign',
        message: 'Message',
        messagePh: 'Tell me briefly about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! Your message has been received (demo mode).',
        error: 'Please fill in all fields with a valid email address.',
        copy: 'Copy',
        copied: 'Copied',
      },
    },
  },
  footer: {
    mk: 'Изработено со React.',
    en: 'Built with React.',
    top: { mk: 'Назад горе', en: 'Back to top' },
  },
};

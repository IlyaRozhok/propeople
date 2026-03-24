import { Lang } from "@/lib/i18n";

type LocalizedText = Record<Lang, string>;

export type BlogPost = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  category: LocalizedText;
  publishedAt: string;
  readTime: LocalizedText;
  imageAlt: LocalizedText;
  imageSrc: string;
  content: LocalizedText[];
  featured?: boolean;
};

export const site = {
  name: {
    uk: "ГО «Proлюдей»",
    en: "NGO Pro People",
  },
  brandShort: {
    uk: "PRO людей",
    en: "PRO PEOPLE",
  },
  tagline: {
    uk: "Допомога військовим | Соціальні проєкти | Інформаційна підтримка | Одеса-Миколаїв",
    en: "Military aid | Social projects | Information support | Odesa-Mykolaiv",
  },
  mission: {
    uk: "Ми об'єднуємо людей, волонтерів і локальні ініціативи, щоб підтримка доходила швидко, гідно та без зайвого шуму.",
    en: "We connect people, volunteers, and local initiatives so support reaches communities quickly, clearly, and with dignity.",
  },
  email: "hello@propeople.org.ua",
  phone: "+380 67 555 01 21",
  address: {
    uk: "Одеса - Миколаїв, Україна",
    en: "Odesa - Mykolaiv, Ukraine",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Telegram", href: "https://t.me" },
  ],
};

export const homepage = {
  eyebrow: {
    uk: "Громадська організація для людей в Україні",
    en: "Community organization for people in Ukraine",
  },
  heroTitle: {
    uk: "PRO людей",
    en: "PRO PEOPLE",
  },
  heroSummary: {
    uk: "Підтримуємо військових, розвиваємо соціальні проєкти та даємо інформаційну опору тим, хто тримається поруч із громадами півдня України.",
    en: "We support the military, run social projects, and provide information support for communities across southern Ukraine.",
  },
  primaryCta: {
    uk: "Читати новини",
    en: "Read news",
  },
  secondaryCta: {
    uk: "Зв'язатися",
    en: "Contact us",
  },
};

export const aboutPoints = [
  {
    title: {
      uk: "Допомога військовим",
      en: "Military aid",
    },
    copy: {
      uk: "Передаємо адресну підтримку, збираємо необхідне та працюємо там, де рішення потрібне без затримки.",
      en: "We deliver direct support, gather what is needed, and work where decisions cannot wait.",
    },
  },
  {
    title: {
      uk: "Соціальні проєкти",
      en: "Social projects",
    },
    copy: {
      uk: "Створюємо ініціативи для реабілітації, взаємодопомоги та відновлення людських зв'язків у громадах.",
      en: "We build initiatives for rehabilitation, mutual aid, and stronger community ties.",
    },
  },
  {
    title: {
      uk: "Інформаційна підтримка",
      en: "Information support",
    },
    copy: {
      uk: "Пояснюємо, куди звертатися, як отримати допомогу та як об'єднати людей навколо конкретної дії.",
      en: "We explain where to turn, how to get support, and how to organize people around concrete action.",
    },
  },
];

export const featuredNews: BlogPost[] = [
  {
    slug: "rehabilitation-support-program",
    title: {
      uk: "Всебічна підтримка поранених: команда розширює напрям реабілітації",
      en: "Comprehensive support for wounded defenders: rehabilitation work expands",
    },
    excerpt: {
      uk: "Організація посилює напрям підтримки поранених військових через супровід, побутову допомогу та увагу до відновлення після лікування.",
      en: "The organization is expanding support for wounded defenders through guidance, practical help, and rehabilitation-focused care.",
    },
    category: {
      uk: "Головна новина",
      en: "Featured news",
    },
    publishedAt: "March 21, 2026",
    readTime: {
      uk: "4 хв читання",
      en: "4 min read",
    },
    imageAlt: {
      uk: "Підтримка поранених військових",
      en: "Support for wounded defenders",
    },
    imageSrc: "/pro-people/rehabilitation-support.jpg",
    content: [
      {
        uk: "ГО «Proлюдей» продовжує роботу поруч із пораненими військовими, допомагаючи не лише з побутовими запитами, а й з психологічною та інформаційною підтримкою. У центрі цього напряму не формальна послуга, а людська присутність.",
        en: "NGO Pro People continues working alongside wounded defenders, helping not only with everyday needs but also with emotional and informational support. The core of this work is human presence, not a formal service.",
      },
      {
        uk: "Команда планує розширювати партнерства з медичними та реабілітаційними ініціативами, щоб люди отримували більш цілісний супровід після складного лікування.",
        en: "The team plans to expand partnerships with medical and rehabilitation initiatives so people receive more complete support after difficult treatment.",
      },
    ],
    featured: true,
  },
  {
    slug: "team-coordination-south",
    title: {
      uk: "Команда в Одесі та Миколаєві посилює координацію локальних проєктів",
      en: "Teams in Odesa and Mykolaiv strengthen coordination of local projects",
    },
    excerpt: {
      uk: "Нові зустрічі з волонтерами та партнерами допомагають швидше погоджувати допомогу військовим і цивільним ініціативам.",
      en: "New meetings with volunteers and partners help coordinate aid for military and civilian initiatives faster.",
    },
    category: {
      uk: "Команда",
      en: "Team",
    },
    publishedAt: "March 13, 2026",
    readTime: {
      uk: "3 хв читання",
      en: "3 min read",
    },
    imageAlt: {
      uk: "Команда ГО Proлюдей",
      en: "NGO Pro People team",
    },
    imageSrc: "/pro-people/team-odessa-mykolaiv.jpg",
    content: [
      {
        uk: "Координаційна робота між Одесою та Миколаєвом дає можливість швидше поєднувати людей, потреби та ресурси. Для організації це не просто логістика, а спосіб утримувати сталість у роботі.",
        en: "Coordination between Odesa and Mykolaiv makes it easier to connect people, needs, and resources. For the organization, this is not just logistics but a way to sustain continuity.",
      },
      {
        uk: "Наступний етап передбачає зручніший публічний формат новин та окрему адмін-панель для редакторів і команди.",
        en: "The next stage includes a clearer public news flow and a dedicated admin panel for editors and the team.",
      },
    ],
  },
  {
    slug: "seed-quote-campaign",
    title: {
      uk: "«Ми - насіння»: нова візуальна кампанія про стійкість і взаємодопомогу",
      en: "\"We are seeds\": a new visual campaign about resilience and mutual aid",
    },
    excerpt: {
      uk: "Нова комунікаційна лінія об'єднує історії людей, які вистояли, допомагають іншим і продовжують тримати громади живими.",
      en: "A new communication line brings together stories of people who endured, helped others, and kept communities alive.",
    },
    category: {
      uk: "Кампанія",
      en: "Campaign",
    },
    publishedAt: "February 28, 2026",
    readTime: {
      uk: "5 хв читання",
      en: "5 min read",
    },
    imageAlt: {
      uk: "Візуальна кампанія Ми - насіння",
      en: "We are seeds visual campaign",
    },
    imageSrc: "/pro-people/we-are-seeds.jpg",
    content: [
      {
        uk: "Візуальна кампанія нагадує, що навіть після втрат люди знаходять у собі силу продовжувати, підтримувати ближніх і відновлювати спільноту навколо себе.",
        en: "The campaign reminds us that even after loss, people find the strength to continue, support others, and rebuild community around them.",
      },
      {
        uk: "У подальшому такі матеріали будуть публікуватися через адмін-панель і зберігатися в повноцінній стрічці новин сайту.",
        en: "Later, materials like this will be published through the admin panel and stored in the full site news feed.",
      },
    ],
  },
];

export const adminPreviewStats = [
  {
    label: {
      uk: "Чернетки",
      en: "Drafts",
    },
    value: "12",
  },
  {
    label: {
      uk: "Опубліковано",
      en: "Published",
    },
    value: "38",
  },
  {
    label: {
      uk: "На перевірці",
      en: "In review",
    },
    value: "5",
  },
  {
    label: {
      uk: "Редактори онлайн",
      en: "Editors online",
    },
    value: "3",
  },
];

export function t(text: LocalizedText, lang: Lang) {
  return text[lang];
}

export function getPostBySlug(slug: string) {
  return featuredNews.find((post) => post.slug === slug);
}

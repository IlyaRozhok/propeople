export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  imageAlt: string;
  heroClassName: string;
  content: string[];
  featured?: boolean;
};

export const site = {
  name: "PRO PEOPLE",
  tagline: "Community organization for people in and for Ukraine",
  mission:
    "We connect volunteers, communities, and local initiatives so support reaches people with clarity, dignity, and continuity.",
  email: "hello@propeople.org.ua",
  phone: "+380 67 555 01 21",
  address: "Kyiv, Ukraine",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Telegram", href: "https://t.me" },
  ],
};

export const featuredNews: BlogPost[] = [
  {
    slug: "mobile-support-points-expanded",
    title: "Mobile support points expanded across three frontline communities",
    excerpt:
      "New weekly stops will help families access legal guidance, emergency kits, and local coordinators without leaving their district.",
    category: "Field Update",
    publishedAt: "March 18, 2026",
    readTime: "4 min read",
    imageAlt: "Warm evening field and road symbolizing outreach routes",
    heroClassName:
      "bg-[linear-gradient(160deg,rgba(16,45,74,0.1),rgba(16,45,74,0.45)),radial-gradient(circle_at_75%_20%,rgba(249,212,105,0.95),rgba(249,212,105,0.05)_30%),linear-gradient(180deg,#7ba8d4_0%,#c5d5dc_48%,#d7aa49_100%)]",
    content: [
      "This spring, PRO PEOPLE added new mobile support stops in three communities where travel to regional centers remains difficult. Each route is designed around practical access: legal consultations, first response referrals, and direct links to local coordinators.",
      "The new schedule was shaped with local partners who know where queues are growing and where families have started to fall through regular service networks. Instead of one-time visits, the organization is committing to repeat presence so trust can build over time.",
      "The next phase will focus on clearer information materials and a simpler booking flow for partner organizations once the admin and backend are in place.",
    ],
    featured: true,
  },
  {
    slug: "winterization-drive-neighborhood-hubs",
    title: "Neighborhood hubs completed winterization drive ahead of schedule",
    excerpt:
      "Volunteer teams distributed heaters, insulation materials, and warm kits through local pickup points coordinated with residents.",
    category: "Community Work",
    publishedAt: "March 10, 2026",
    readTime: "3 min read",
    imageAlt: "Neighborhood support hub represented by blue and wheat gradient",
    heroClassName:
      "bg-[linear-gradient(155deg,rgba(14,49,82,0.12),rgba(14,49,82,0.5)),radial-gradient(circle_at_22%_18%,rgba(255,244,198,0.92),rgba(255,244,198,0.05)_26%),linear-gradient(180deg,#86aed4_0%,#d6d8cc_44%,#c2872d_100%)]",
    content: [
      "Local hubs coordinated a winterization drive that moved faster than expected because pickup windows were aligned with neighborhood routines. Families were able to collect supplies close to home instead of crossing the city for a single distribution point.",
      "The work highlighted the value of small, well-run logistics rather than oversized one-day events. Reliable timing and familiar coordinators made the process calmer and easier to navigate.",
    ],
  },
  {
    slug: "youth-story-lab-launch",
    title: "Youth story lab launched to document community memory",
    excerpt:
      "A new media program will help young participants record oral histories, neighborhood change, and acts of mutual aid in their own words.",
    category: "Programs",
    publishedAt: "February 27, 2026",
    readTime: "5 min read",
    imageAlt: "Editorial blue and wheat background for storytelling initiative",
    heroClassName:
      "bg-[linear-gradient(155deg,rgba(12,41,66,0.15),rgba(12,41,66,0.54)),radial-gradient(circle_at_68%_16%,rgba(248,214,111,0.92),rgba(248,214,111,0.08)_28%),linear-gradient(180deg,#6f9fcc_0%,#b7c8d0_48%,#e2b24d_100%)]",
    content: [
      "The story lab gives young people equipment, editorial support, and a framework for documenting how their communities are changing. The goal is not polished branding. It is memory, testimony, and local authorship.",
      "The first cycle will focus on interviews with family members, volunteers, and neighborhood organizers. Selected stories will later appear in the public news feed once the editorial workflow is wired to the backend.",
    ],
  },
];

export const aboutPoints = [
  {
    title: "Local first",
    copy:
      "We work with people already trusted in their communities, then build logistics and visibility around that local knowledge.",
  },
  {
    title: "Clear coordination",
    copy:
      "We reduce noise, define responsibilities, and make it easier for partners to understand what is needed and what is already covered.",
  },
  {
    title: "Longer continuity",
    copy:
      "Support matters more when it repeats. We focus on steady presence instead of one-off attention spikes.",
  },
];

export const adminPreviewStats = [
  { label: "Draft posts", value: "12" },
  { label: "Published posts", value: "38" },
  { label: "Pending review", value: "5" },
  { label: "Editors online", value: "3" },
];

export function getPostBySlug(slug: string) {
  return featuredNews.find((post) => post.slug === slug);
}

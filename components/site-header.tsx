import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Lang, localizedPath } from "@/lib/i18n";
import { site, t } from "@/lib/content";

export function SiteHeader({ lang }: { lang: Lang }) {
  const navItems = [
    { href: "/", label: lang === "uk" ? "Головна" : "Home" },
    { href: "/blog", label: lang === "uk" ? "Блог" : "Blog" },
    { href: "/#about", label: lang === "uk" ? "Про нас" : "About" },
    { href: "/#contact", label: lang === "uk" ? "Контакти" : "Contacts" },
    { href: "/admin/login", label: "Admin" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="page-width mx-auto flex flex-wrap items-start justify-between gap-6 py-5 text-cream">
        <Link href={localizedPath(lang, "/")} className="max-w-[17rem] leading-none">
          <span className="block font-display text-[2rem] tracking-[0.04em]">
            {site.name[lang]}
          </span>
          <span className="mt-2 block text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(246,237,220,0.78)]">
            {t(site.tagline, lang)}
          </span>
        </Link>

        <div className="flex flex-wrap items-start justify-end gap-4">
          <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 pt-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[rgba(246,237,220,0.88)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(lang, item.href)}
                className="transition duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher lang={lang} path="/" inverse />
        </div>
      </div>
    </header>
  );
}

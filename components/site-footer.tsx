import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Lang, localizedPath } from "@/lib/i18n";
import { site } from "@/lib/content";

export function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-[rgba(19,48,74,0.14)] bg-[#f3e8d1]">
      <div className="page-width mx-auto flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(19,48,74,0.55)]">
            {site.name[lang]}
          </p>
          <p className="mt-3 text-sm leading-7 text-[rgba(19,48,74,0.72)]">
            {lang === "uk"
              ? "Фронтенд сайту громадської організації з українською мовою за замовчуванням, окремим блогом та адмін-зоною, підготовленою до JWT-авторизації."
              : "Frontend for a community organization website with Ukrainian as default, a separate blog, and an admin area prepared for JWT-based authentication."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-ink">
          <Link href={localizedPath(lang, "/blog")}>
            {lang === "uk" ? "Блог" : "Blog"}
          </Link>
          <Link href={localizedPath(lang, "/admin/login")}>Admin</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <LanguageSwitcher lang={lang} path="/" />
        </div>
      </div>
    </footer>
  );
}

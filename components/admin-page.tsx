import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { adminPreviewStats, featuredNews, t } from "@/lib/content";
import { Lang, localizedPath } from "@/lib/i18n";

export function AdminPage({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-[#f7f1e4] text-ink">
      <header className="border-b border-[rgba(19,48,74,0.14)] bg-[rgba(255,255,255,0.48)] backdrop-blur-sm">
        <div className="page-width mx-auto flex flex-wrap items-end justify-between gap-6 py-8">
          <div>
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[rgba(19,48,74,0.5)]">
              {lang === "uk" ? "Прев'ю адмінки" : "Admin preview"}
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.92]">
              {lang === "uk" ? "Робочий простір контенту" : "Content workspace"}
            </h1>
            <p className="mt-3 max-w-[36rem] text-sm leading-7 text-[rgba(19,48,74,0.72)]">
              {lang === "uk"
                ? "Фронтендова адмін-поверхня для майбутньої JWT-захищеної публікації, редагування та керування новинами."
                : "Frontend admin surface for future JWT-protected publishing, editing, and news management."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-[0.18em]">
            <Link href={localizedPath(lang, "/")} className="border-b border-[rgba(19,48,74,0.3)] pb-1">
              {lang === "uk" ? "Публічний сайт" : "Public site"}
            </Link>
            <Link href={localizedPath(lang, "/blog")} className="border-b border-[rgba(19,48,74,0.3)] pb-1">
              {lang === "uk" ? "Блог" : "Blog"}
            </Link>
            <LanguageSwitcher lang={lang} path="/admin" />
          </div>
        </div>
      </header>

      <section className="page-width mx-auto py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="grid gap-10">
            <section>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {adminPreviewStats.map((stat) => (
                  <div
                    key={stat.label.uk}
                    className="border-t border-[rgba(19,48,74,0.16)] pt-4"
                  >
                    <p className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.48)]">
                      {t(stat.label, lang)}
                    </p>
                    <p className="mt-3 font-display text-5xl leading-none">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[rgba(19,48,74,0.16)] pt-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.48)]">
                    {lang === "uk" ? "Останні матеріали" : "Recent posts"}
                  </p>
                  <h2 className="mt-3 font-display text-[2.4rem] font-semibold leading-none">
                    {lang === "uk" ? "Прев'ю керування новинами" : "News management preview"}
                  </h2>
                </div>
                <button
                  type="button"
                  className="inline-flex min-h-[3rem] items-center justify-center bg-ink px-5 text-sm font-bold uppercase tracking-[0.18em] text-cream"
                >
                  {lang === "uk" ? "Новий допис" : "New post"}
                </button>
              </div>

              <div className="mt-8 grid gap-6">
                {featuredNews.map((post) => (
                  <article
                    key={post.slug}
                    className="grid gap-4 border-t border-[rgba(19,48,74,0.12)] pt-5 md:grid-cols-[minmax(0,1fr)_9rem_8rem]"
                  >
                    <div>
                      <p className="text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.48)]">
                        {t(post.category, lang)}
                      </p>
                      <h3 className="mt-2 font-display text-[2rem] font-semibold leading-none">
                        {t(post.title, lang)}
                      </h3>
                      <p className="mt-3 max-w-[40rem] text-sm leading-7 text-[rgba(19,48,74,0.72)]">
                        {t(post.excerpt, lang)}
                      </p>
                    </div>
                    <div className="text-sm leading-7 text-[rgba(19,48,74,0.72)]">
                      <p>{post.publishedAt}</p>
                      <p>{t(post.readTime, lang)}</p>
                    </div>
                    <div className="flex items-start gap-4 text-sm font-bold uppercase tracking-[0.18em]">
                      <button type="button">{lang === "uk" ? "Редагувати" : "Edit"}</button>
                      <button type="button">{lang === "uk" ? "Перегляд" : "Preview"}</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="border-t border-[rgba(19,48,74,0.16)] pt-6">
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.48)]">
              {lang === "uk" ? "Нотатка про авторизацію" : "Auth note"}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-none">
              {lang === "uk" ? "План для JWT" : "JWT route plan"}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[rgba(19,48,74,0.72)]">
              {lang === "uk"
                ? "Пізніше сторінка входу зможе зберігати access token, оновлювати сесію та відкривати цю адмінку лише для авторизованих користувачів."
                : "Later the login page can store an access token, refresh session state, and gate this workspace behind authenticated checks."}
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

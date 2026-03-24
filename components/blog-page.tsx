import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MediaPhoto } from "@/components/media-photo";
import { SiteFooter } from "@/components/site-footer";
import { featuredNews, t } from "@/lib/content";
import { Lang, localizedPath } from "@/lib/i18n";

export function BlogPage({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f1e4c3_0%,#f7efdf_48%,#efe6d3_100%)] text-ink">
      <section className="border-b border-[rgba(19,48,74,0.14)] bg-[linear-gradient(180deg,rgba(31,80,126,0.18),rgba(31,80,126,0.04)_40%,rgba(31,80,126,0)_100%)]">
        <div className="page-width mx-auto py-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-[38rem]">
              <Link
                href={localizedPath(lang, "/")}
                className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(19,48,74,0.5)]"
              >
                {lang === "uk" ? "Назад на головну" : "Back to home"}
              </Link>
              <h1 className="mt-5 font-display text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[0.9]">
                {lang === "uk" ? "Блог" : "Blog"}
              </h1>
              <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
                {lang === "uk"
                  ? "Публічні новини, польові історії та оновлення проєктів. Згодом ця стрічка зможе отримувати дані з адмін-панелі та бекенду."
                  : "Public news, field stories, and project updates. Later this feed can be connected to the admin panel and backend API."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={localizedPath(lang, "/admin/login")}
                className="inline-flex min-h-[3.2rem] items-center justify-center border border-[rgba(19,48,74,0.18)] px-5 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:-translate-y-0.5"
              >
                {lang === "uk" ? "Вхід в адмін" : "Admin login"}
              </Link>
              <LanguageSwitcher lang={lang} path="/blog" />
            </div>
          </div>
        </div>
      </section>

      <section className="page-width mx-auto py-16">
        <div className="grid gap-10">
          {featuredNews.map((post) => (
            <article
              key={post.slug}
              className="grid gap-5 border-t border-[rgba(19,48,74,0.16)] pt-5 md:grid-cols-[minmax(14rem,20rem)_minmax(0,1fr)] md:gap-8"
            >
              <MediaPhoto
                src={post.imageSrc}
                alt={t(post.imageAlt, lang)}
                className="aspect-[4/3] w-full"
              />
              <div className="max-w-[42rem]">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
                  <span>{t(post.category, lang)}</span>
                  <span>{post.publishedAt}</span>
                  <span>{t(post.readTime, lang)}</span>
                </div>
                <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[0.95]">
                  {t(post.title, lang)}
                </h2>
                <p className="mt-4 leading-7 text-[rgba(19,48,74,0.72)]">
                  {t(post.excerpt, lang)}
                </p>
                <Link
                  href={localizedPath(lang, `/blog/${post.slug}`)}
                  className="mt-5 inline-flex border-b border-ink pb-1 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:translate-x-1"
                >
                  {lang === "uk" ? "Читати статтю" : "Read article"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}

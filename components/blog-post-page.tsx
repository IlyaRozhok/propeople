import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MediaPhoto } from "@/components/media-photo";
import { SiteFooter } from "@/components/site-footer";
import { BlogPost, t } from "@/lib/content";
import { Lang, localizedPath } from "@/lib/i18n";

export function BlogPostPage({
  lang,
  post,
}: {
  lang: Lang;
  post: BlogPost;
}) {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="relative overflow-hidden border-b border-line">
        <MediaPhoto
          src={post.imageSrc}
          alt={t(post.imageAlt, lang)}
          className="absolute inset-0"
          overlayClassName="bg-[linear-gradient(90deg,rgba(20,20,20,0.86)_0%,rgba(20,20,20,0.56)_42%,rgba(20,20,20,0.08)_72%,rgba(20,20,20,0)_100%)]"
        />
        <div className="page-width relative z-10 mx-auto py-12 text-cream md:py-20">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <Link
              href={localizedPath(lang, "/blog")}
              className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(248,246,241,0.75)]"
            >
              {lang === "uk" ? "Назад до блогу" : "Back to blog"}
            </Link>
            <LanguageSwitcher lang={lang} path={`/blog/${post.slug}`} inverse />
          </div>
          <div className="mt-10 max-w-[42rem]">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(248,246,241,0.72)]">
              <span>{t(post.category, lang)}</span>
              <span>{post.publishedAt}</span>
              <span>{t(post.readTime, lang)}</span>
            </div>
            <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.9]">
              {t(post.title, lang)}
            </h1>
            <p className="mt-5 max-w-[34rem] text-[1.04rem] leading-7 text-[rgba(248,246,241,0.9)]">
              {t(post.excerpt, lang)}
            </p>
          </div>
        </div>
      </section>

      <article className="page-width mx-auto py-14 md:py-20">
        <div className="max-w-[44rem]">
          {post.content.map((paragraph) => (
            <p
              key={paragraph.uk}
              className="muted-copy mb-6 text-[1.03rem] leading-8"
            >
              {t(paragraph, lang)}
            </p>
          ))}
        </div>
      </article>

      <SiteFooter lang={lang} />
    </main>
  );
}

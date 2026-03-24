import Link from "next/link";
import { MediaPhoto } from "@/components/media-photo";
import { MotionLayer } from "@/components/motion-layer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutPoints, featuredNews, homepage, site, t } from "@/lib/content";
import { Lang, localizedPath } from "@/lib/i18n";

export function HomePage({ lang }: { lang: Lang }) {
  const featuredPost = featuredNews[0];
  const secondaryPosts = featuredNews.slice(1);

  return (
    <main className="overflow-clip bg-[linear-gradient(180deg,#f0dfb6_0%,#f8f0e0_46%,#efe4ce_100%)] text-ink">
      <MotionLayer />

      <section data-hero className="relative isolate min-h-svh overflow-hidden">
        <MediaPhoto
          src={featuredPost.imageSrc}
          alt={t(featuredPost.imageAlt, lang)}
          className="absolute inset-0"
          overlayClassName="bg-[linear-gradient(90deg,rgba(13,37,58,0.9)_0%,rgba(13,37,58,0.7)_34%,rgba(13,37,58,0.22)_62%,rgba(13,37,58,0)_82%),linear-gradient(180deg,rgba(213,166,61,0.18)_0%,rgba(213,166,61,0)_40%,rgba(213,166,61,0.16)_100%)]"
        />
        <div className="absolute inset-x-[-4%] bottom-[17%] h-[22%] translate-y-[var(--mid-shift,0px)] bg-[linear-gradient(180deg,rgba(77,113,89,0.24),rgba(77,113,89,0.72))] [clip-path:polygon(0_72%,15%_62%,28%_66%,44%_56%,57%_59%,70%_49%,86%_54%,100%_39%,100%_100%,0_100%)]" />
        <div className="absolute inset-x-[-2%] bottom-0 h-[22%] translate-y-[var(--front-shift,0px)] bg-[linear-gradient(180deg,rgba(233,194,94,0.78),rgba(183,124,31,0.94)),repeating-linear-gradient(102deg,rgba(250,220,139,0.28)_0_22px,rgba(170,113,24,0.24)_22px_42px)] [clip-path:polygon(0_42%,14%_48%,28%_40%,43%_46%,59%_36%,75%_41%,100%_27%,100%_100%,0_100%)]" />

        <SiteHeader lang={lang} />

        <div className="page-width relative z-10 mx-auto flex min-h-svh items-end pb-14 pt-28">
          <div className="max-w-[36rem] text-cream">
            <p className="hero-line mb-4 animate-hero-rise opacity-0 [animation-delay:120ms]">
              {t(homepage.eyebrow, lang)}
            </p>
            <h1 className="font-display text-[clamp(3.5rem,16vw,8.2rem)] font-semibold leading-[0.85] tracking-[0.04em] opacity-0 animate-hero-rise [animation-delay:240ms]">
              {t(homepage.heroTitle, lang)}
            </h1>
            <p className="mt-4 text-[0.92rem] font-bold uppercase tracking-[0.18em] text-[rgba(246,237,220,0.86)] opacity-0 animate-hero-rise [animation-delay:300ms]">
              {t(site.tagline, lang)}
            </p>
            <p className="mt-5 max-w-[31rem] text-[clamp(1rem,2.25vw,1.18rem)] leading-7 text-[rgba(246,237,220,0.92)] opacity-0 animate-hero-rise [animation-delay:360ms]">
              {t(homepage.heroSummary, lang)}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-hero-rise [animation-delay:480ms] max-sm:flex-col max-sm:items-start">
              <Link
                href={localizedPath(lang, "/blog")}
                className="inline-flex min-h-[3.35rem] items-center justify-center bg-cream px-5 py-3 text-sm font-bold tracking-[0.02em] text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,244,194,0.92)] max-sm:w-full"
              >
                {t(homepage.primaryCta, lang)}
              </Link>
              <Link
                href={localizedPath(lang, "/#contact")}
                className="inline-flex min-h-[3.35rem] items-center justify-center border-b border-[rgba(246,237,220,0.5)] px-1 py-3 text-sm font-bold tracking-[0.02em] text-cream transition duration-200 hover:border-[rgba(255,248,235,0.9)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,244,194,0.92)]"
              >
                {t(homepage.secondaryCta, lang)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="page-width mx-auto border-b border-[rgba(19,48,74,0.14)] py-20 opacity-0 translate-y-8 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 max-sm:py-[4.4rem]"
      >
        <div className="max-w-[42rem]">
          <p className="section-line">{lang === "uk" ? "Головні новини" : "Featured news"}</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.94]">
            {lang === "uk"
              ? "Новини, у яких видно людей, команду та реальну підтримку."
              : "News where people, team work, and real support stay visible."}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
            {lang === "uk"
              ? "Головна сторінка показує найважливіші історії, а окрема сторінка блогу зберігає повну стрічку для майбутньої CMS."
              : "The home page highlights the most important stories, while the separate blog keeps the full feed ready for a future CMS."}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <article className="border-t border-[rgba(19,48,74,0.16)] pt-5">
            <MediaPhoto
              src={featuredPost.imageSrc}
              alt={t(featuredPost.imageAlt, lang)}
              className="aspect-[16/10] w-full"
            />
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              <span>{t(featuredPost.category, lang)}</span>
              <span>{featuredPost.publishedAt}</span>
              <span>{t(featuredPost.readTime, lang)}</span>
            </div>
            <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[0.96]">
              {t(featuredPost.title, lang)}
            </h3>
            <p className="mt-4 max-w-[42rem] leading-7 text-[rgba(19,48,74,0.72)]">
              {t(featuredPost.excerpt, lang)}
            </p>
            <Link
              href={localizedPath(lang, `/blog/${featuredPost.slug}`)}
              className="mt-6 inline-flex border-b border-ink pb-1 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:translate-x-1"
            >
              {lang === "uk" ? "Відкрити історію" : "Open story"}
            </Link>
          </article>

          <div className="grid gap-8">
            {secondaryPosts.map((post) => (
              <article
                key={post.slug}
                className="border-t border-[rgba(19,48,74,0.16)] pt-5"
              >
                <MediaPhoto
                  src={post.imageSrc}
                  alt={t(post.imageAlt, lang)}
                  className="aspect-[5/4] w-full"
                />
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
                  <span>{t(post.category, lang)}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <h3 className="mt-3 font-display text-[2.1rem] font-semibold leading-none">
                  {t(post.title, lang)}
                </h3>
                <p className="mt-3 leading-7 text-[rgba(19,48,74,0.72)]">
                  {t(post.excerpt, lang)}
                </p>
                <Link
                  href={localizedPath(lang, `/blog/${post.slug}`)}
                  className="mt-4 inline-flex border-b border-[rgba(19,48,74,0.3)] pb-1 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:translate-x-1"
                >
                  {lang === "uk" ? "Читати далі" : "Read more"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        data-reveal
        className="page-width mx-auto grid gap-12 border-b border-[rgba(19,48,74,0.14)] py-20 opacity-0 translate-y-8 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.9fr)] max-sm:py-[4.4rem]"
      >
        <div>
          <div className="max-w-[40rem]">
            <p className="section-line">{lang === "uk" ? "Про нас" : "About us"}</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.94]">
              {lang === "uk"
                ? "Працюємо там, де людям потрібна не формальність, а жива опора."
                : "We work where people need human support, not formal distance."}
            </h2>
            <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
              {t(site.mission, lang)}
            </p>
          </div>
          <MediaPhoto
            src="/pro-people/team-odessa-mykolaiv.jpg"
            alt={lang === "uk" ? "Команда ГО Proлюдей" : "NGO Pro People team"}
            className="mt-8 aspect-[16/10] w-full"
          />
        </div>

        <div className="grid gap-6">
          {aboutPoints.map((point) => (
            <article
              key={point.title.uk}
              className="border-t border-[rgba(19,48,74,0.16)] pt-4"
            >
              <h3 className="font-display text-[2rem] font-semibold leading-none">
                {t(point.title, lang)}
              </h3>
              <p className="mt-3 leading-7 text-[rgba(19,48,74,0.72)]">
                {t(point.copy, lang)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        data-reveal
        className="page-width mx-auto grid gap-12 py-20 opacity-0 translate-y-8 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] max-sm:py-[4.4rem]"
      >
        <div>
          <div className="max-w-[36rem]">
            <p className="section-line">{lang === "uk" ? "Контакти" : "Contacts"}</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.94]">
              {lang === "uk"
                ? "Зв'яжіться з командою, слідкуйте за роботою або переходьте до стрічки новин."
                : "Reach the team, follow the work, or move into the news archive."}
            </h2>
            <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
              {lang === "uk"
                ? "Сайт уже готовий до двомовної публічної подачі, а адмін-зона підготовлена до майбутньої JWT-авторизації та керування контентом."
                : "The site is already prepared for bilingual public presentation, and the admin area is ready for future JWT-based authentication and content management."}
            </p>
          </div>
          <MediaPhoto
            src="/pro-people/we-are-seeds.jpg"
            alt={lang === "uk" ? "Візуальна кампанія Ми - насіння" : "We are seeds campaign"}
            className="mt-8 aspect-[4/3] w-full"
            overlayClassName="bg-[linear-gradient(180deg,rgba(213,166,61,0.16),rgba(213,166,61,0.1)_35%,rgba(213,166,61,0.2)_100%)]"
          />
        </div>

        <div className="grid gap-6 border-t border-[rgba(19,48,74,0.16)] pt-5">
          <a href={`mailto:${site.email}`} className="group">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              Email
            </p>
            <p className="mt-2 text-lg font-semibold transition duration-200 group-hover:translate-x-1">
              {site.email}
            </p>
          </a>
          <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="group">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              {lang === "uk" ? "Телефон" : "Phone"}
            </p>
            <p className="mt-2 text-lg font-semibold transition duration-200 group-hover:translate-x-1">
              {site.phone}
            </p>
          </a>
          <div>
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              {lang === "uk" ? "Локація" : "Location"}
            </p>
            <p className="mt-2 text-lg font-semibold">{site.address[lang]}</p>
          </div>
          <div>
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              {lang === "uk" ? "Соцмережі" : "Social media"}
            </p>
            <div className="mt-3 flex flex-wrap gap-5 text-sm font-bold uppercase tracking-[0.16em]">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-[rgba(19,48,74,0.28)] pb-1 transition duration-200 hover:translate-x-1"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}

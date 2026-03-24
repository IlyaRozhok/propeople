import Link from "next/link";
import { MotionLayer } from "@/components/motion-layer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutPoints, featuredNews, site } from "@/lib/content";

const featuredPost = featuredNews[0];
const secondaryPosts = featuredNews.slice(1);

export default function Home() {
  return (
    <main className="overflow-clip bg-[linear-gradient(180deg,#efe1bc_0%,#f7efdf_44%,#f3ead8_100%)] text-ink">
      <MotionLayer />

      <section data-hero className="relative isolate min-h-svh overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,80,126,0.32)_0%,rgba(31,80,126,0.1)_28%,rgba(211,175,88,0.22)_100%),radial-gradient(circle_at_74%_18%,rgba(255,232,151,0.95),rgba(255,232,151,0.08)_24%),linear-gradient(180deg,#6b9ecf_0%,#8eafd0_26%,#d4d7ce_49%,#e0b657_74%,#b77d26_100%)]"
        />
        <div className="absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(90deg,rgba(11,36,55,0.9),rgba(11,36,55,0.62)_45%,rgba(11,36,55,0)_100%)] max-md:w-full" />
        <div className="absolute inset-x-[-4%] bottom-[21%] h-[23%] translate-y-[var(--mid-shift,0px)] bg-[linear-gradient(180deg,rgba(76,113,88,0.4),rgba(76,113,88,0.88))] [clip-path:polygon(0_70%,14%_60%,28%_64%,43%_54%,57%_58%,70%_48%,86%_53%,100%_36%,100%_100%,0_100%)]" />
        <div className="absolute inset-x-[-2%] bottom-[7%] h-[27%] translate-y-[var(--back-shift,0px)] bg-[linear-gradient(180deg,rgba(229,188,90,0.42),rgba(190,132,33,0.92)),repeating-linear-gradient(101deg,rgba(254,227,147,0.25)_0_18px,rgba(178,120,29,0.24)_18px_34px)] [clip-path:polygon(0_36%,13%_44%,28%_30%,43%_38%,60%_26%,76%_35%,100%_19%,100%_100%,0_100%)]" />
        <div className="absolute inset-x-[-2%] bottom-0 h-[31%] translate-y-[var(--front-shift,0px)] bg-[linear-gradient(180deg,rgba(236,194,91,0.96),rgba(181,123,28,0.98)),repeating-linear-gradient(102deg,rgba(250,220,139,0.42)_0_22px,rgba(170,113,24,0.32)_22px_42px)] [clip-path:polygon(0_34%,16%_42%,30%_31%,44%_38%,58%_26%,72%_33%,100%_17%,100%_100%,0_100%)]" />

        <SiteHeader />

        <div className="page-width relative z-10 mx-auto flex min-h-svh items-end pb-14 pt-28">
          <div className="max-w-[34rem] text-cream">
            <p className="hero-line mb-4 animate-hero-rise opacity-0 [animation-delay:120ms]">
              Community organization for people and communities in Ukraine
            </p>
            <h1 className="font-display text-[clamp(3.4rem,16vw,8.8rem)] font-semibold leading-[0.86] tracking-[0.04em] opacity-0 animate-hero-rise [animation-delay:240ms]">
              PRO PEOPLE
            </h1>
            <p className="mt-5 max-w-[30rem] text-[clamp(1rem,2.25vw,1.18rem)] leading-7 text-[rgba(246,237,220,0.92)] opacity-0 animate-hero-rise [animation-delay:360ms]">
              We help local initiatives, volunteers, and residents stay connected
              to practical support, trusted information, and long-term community
              coordination.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-hero-rise [animation-delay:480ms] max-sm:flex-col max-sm:items-start">
              <Link
                href="/blog"
                className="inline-flex min-h-[3.35rem] items-center justify-center bg-cream px-5 py-3 text-sm font-bold tracking-[0.02em] text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,244,194,0.92)] max-sm:w-full"
              >
                Read News
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-[3.35rem] items-center justify-center border-b border-[rgba(246,237,220,0.5)] px-1 py-3 text-sm font-bold tracking-[0.02em] text-cream transition duration-200 hover:border-[rgba(255,248,235,0.9)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,244,194,0.92)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        data-reveal
        className="page-width mx-auto border-b border-[rgba(19,48,74,0.14)] py-20 opacity-0 translate-y-8 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 max-sm:py-[4.4rem]"
      >
        <div className="max-w-[40rem]">
          <p className="section-line">Featured news</p>
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.94]">
            Field updates shaped into a readable public newsroom.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
            The main page highlights the newest reporting, while the separate
            blog keeps the full archive ready for future CMS integration.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <article className="border-t border-[rgba(19,48,74,0.16)] pt-5">
            <div
              aria-hidden="true"
              className={`aspect-[16/9] w-full ${featuredPost.heroClassName}`}
            />
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              <span>{featuredPost.category}</span>
              <span>{featuredPost.publishedAt}</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[0.96]">
              {featuredPost.title}
            </h3>
            <p className="mt-4 max-w-[42rem] leading-7 text-[rgba(19,48,74,0.72)]">
              {featuredPost.excerpt}
            </p>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="mt-6 inline-flex border-b border-ink pb-1 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:translate-x-1"
            >
              Open story
            </Link>
          </article>

          <div className="grid gap-8">
            {secondaryPosts.map((post) => (
              <article
                key={post.slug}
                className="border-t border-[rgba(19,48,74,0.16)] pt-5"
              >
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
                  <span>{post.category}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <h3 className="mt-3 font-display text-[2.1rem] font-semibold leading-none">
                  {post.title}
                </h3>
                <p className="mt-3 leading-7 text-[rgba(19,48,74,0.72)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex border-b border-[rgba(19,48,74,0.3)] pb-1 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:translate-x-1"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        data-reveal
        className="page-width mx-auto grid gap-12 border-b border-[rgba(19,48,74,0.14)] py-20 opacity-0 translate-y-8 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] max-sm:py-[4.4rem]"
      >
        <div className="max-w-[40rem]">
          <p className="section-line">About us</p>
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.94]">
            Built to support people, not just publish statements.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
            {site.mission}
          </p>
        </div>

        <div className="grid gap-6">
          {aboutPoints.map((point) => (
            <article
              key={point.title}
              className="border-t border-[rgba(19,48,74,0.16)] pt-4"
            >
              <h3 className="font-display text-[2rem] font-semibold leading-none">
                {point.title}
              </h3>
              <p className="mt-3 leading-7 text-[rgba(19,48,74,0.72)]">
                {point.copy}
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
        <div className="max-w-[36rem]">
          <p className="section-line">Contacts</p>
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.94]">
            Reach the team, follow the work, or move into the news archive.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
            This frontend already includes the public content structure you
            described, plus a separate admin entry point for future JWT-based
            authentication and editorial management.
          </p>
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
              Phone
            </p>
            <p className="mt-2 text-lg font-semibold transition duration-200 group-hover:translate-x-1">
              {site.phone}
            </p>
          </a>
          <div>
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              Address
            </p>
            <p className="mt-2 text-lg font-semibold">{site.address}</p>
          </div>
          <div>
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
              Social media
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

      <SiteFooter />
    </main>
  );
}

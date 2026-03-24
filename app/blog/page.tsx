import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { featuredNews } from "@/lib/content";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f1e4c3_0%,#f7efdf_48%,#efe6d3_100%)] text-ink">
      <section className="border-b border-[rgba(19,48,74,0.14)] bg-[linear-gradient(180deg,rgba(31,80,126,0.18),rgba(31,80,126,0.04)_40%,rgba(31,80,126,0)_100%)]">
        <div className="page-width mx-auto py-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-[38rem]">
              <Link
                href="/"
                className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(19,48,74,0.5)]"
              >
                Back to home
              </Link>
              <h1 className="mt-5 font-display text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[0.9]">
                Blog
              </h1>
              <p className="mt-4 text-[1.02rem] leading-7 text-[rgba(19,48,74,0.72)]">
                Public updates, program notes, and field reporting. Later this
                feed can be hydrated from the admin panel and backend API.
              </p>
            </div>

            <Link
              href="/admin/login"
              className="inline-flex min-h-[3.2rem] items-center justify-center border border-[rgba(19,48,74,0.18)] px-5 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:-translate-y-0.5"
            >
              Admin login
            </Link>
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
              <div
                aria-hidden="true"
                className={`aspect-[4/3] w-full ${post.heroClassName}`}
              />
              <div className="max-w-[42rem]">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.5)]">
                  <span>{post.category}</span>
                  <span>{post.publishedAt}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[0.95]">
                  {post.title}
                </h2>
                <p className="mt-4 leading-7 text-[rgba(19,48,74,0.72)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex border-b border-ink pb-1 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:translate-x-1"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

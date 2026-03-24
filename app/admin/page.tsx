import Link from "next/link";
import { adminPreviewStats, featuredNews } from "@/lib/content";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e4] text-ink">
      <header className="border-b border-[rgba(19,48,74,0.14)] bg-[rgba(255,255,255,0.48)] backdrop-blur-sm">
        <div className="page-width mx-auto flex flex-wrap items-end justify-between gap-6 py-8">
          <div>
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[rgba(19,48,74,0.5)]">
              Admin preview
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.92]">
              Content workspace
            </h1>
            <p className="mt-3 max-w-[36rem] text-sm leading-7 text-[rgba(19,48,74,0.72)]">
              Frontend-only admin surface for future JWT-protected publishing,
              draft review, and post management.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.18em]">
            <Link href="/" className="border-b border-[rgba(19,48,74,0.3)] pb-1">
              Public site
            </Link>
            <Link href="/blog" className="border-b border-[rgba(19,48,74,0.3)] pb-1">
              Blog
            </Link>
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
                    key={stat.label}
                    className="border-t border-[rgba(19,48,74,0.16)] pt-4"
                  >
                    <p className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.48)]">
                      {stat.label}
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
                    Recent posts
                  </p>
                  <h2 className="mt-3 font-display text-[2.4rem] font-semibold leading-none">
                    News management preview
                  </h2>
                </div>
                <button
                  type="button"
                  className="inline-flex min-h-[3rem] items-center justify-center bg-ink px-5 text-sm font-bold uppercase tracking-[0.18em] text-cream"
                >
                  New post
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
                        {post.category}
                      </p>
                      <h3 className="mt-2 font-display text-[2rem] font-semibold leading-none">
                        {post.title}
                      </h3>
                      <p className="mt-3 max-w-[40rem] text-sm leading-7 text-[rgba(19,48,74,0.72)]">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="text-sm leading-7 text-[rgba(19,48,74,0.72)]">
                      <p>{post.publishedAt}</p>
                      <p>{post.readTime}</p>
                    </div>
                    <div className="flex items-start gap-4 text-sm font-bold uppercase tracking-[0.18em]">
                      <button type="button">Edit</button>
                      <button type="button">Preview</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="border-t border-[rgba(19,48,74,0.16)] pt-6">
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(19,48,74,0.48)]">
              Auth note
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-none">
              JWT-ready route plan
            </h2>
            <p className="mt-4 text-sm leading-7 text-[rgba(19,48,74,0.72)]">
              Later the login page can store an access token, refresh protected
              session state, and gate this workspace behind authenticated route
              checks.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

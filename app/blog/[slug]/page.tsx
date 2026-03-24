import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { featuredNews, getPostBySlug } from "@/lib/content";

export function generateStaticParams() {
  return featuredNews.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f0e2bc_0%,#f8f0e0_52%,#eee4cf_100%)] text-ink">
      <section className="relative overflow-hidden border-b border-[rgba(19,48,74,0.14)]">
        <div aria-hidden="true" className={`absolute inset-0 ${post.heroClassName}`} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,36,55,0.88)_0%,rgba(11,36,55,0.58)_42%,rgba(11,36,55,0.1)_72%,rgba(11,36,55,0)_100%)]" />
        <div className="page-width relative z-10 mx-auto py-12 text-cream md:py-20">
          <Link
            href="/blog"
            className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(246,237,220,0.75)]"
          >
            Back to blog
          </Link>
          <div className="mt-10 max-w-[42rem]">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[rgba(246,237,220,0.72)]">
              <span>{post.category}</span>
              <span>{post.publishedAt}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.9]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-[34rem] text-[1.04rem] leading-7 text-[rgba(246,237,220,0.9)]">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <article className="page-width mx-auto py-14 md:py-20">
        <div className="max-w-[44rem]">
          {post.content.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-6 text-[1.03rem] leading-8 text-[rgba(19,48,74,0.78)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

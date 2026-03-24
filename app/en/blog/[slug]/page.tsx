import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/blog-post-page";
import { featuredNews, getPostBySlug } from "@/lib/content";

export function generateStaticParams() {
  return featuredNews.map((post) => ({ slug: post.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage lang="en" post={post} />;
}

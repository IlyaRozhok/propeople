import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(19,48,74,0.14)] bg-[#f3e8d1]">
      <div className="page-width mx-auto flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(19,48,74,0.55)]">
            PRO PEOPLE
          </p>
          <p className="mt-3 text-sm leading-7 text-[rgba(19,48,74,0.72)]">
            Public-facing frontend for a civic organization website with a
            separate news feed and an admin shell prepared for future JWT-based
            authentication.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink">
          <Link href="/blog">Blog</Link>
          <Link href="/admin/login">Admin</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </footer>
  );
}

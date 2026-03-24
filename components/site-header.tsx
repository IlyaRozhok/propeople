import Link from "next/link";
import { site } from "@/lib/content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contacts" },
  { href: "/admin/login", label: "Admin" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="page-width mx-auto flex items-start justify-between gap-6 py-5 text-cream">
        <Link href="/" className="max-w-[12rem] leading-none">
          <span className="block font-display text-[2rem] tracking-[0.06em]">
            {site.name}
          </span>
          <span className="mt-2 block text-[0.72rem] uppercase tracking-[0.22em] text-[rgba(246,237,220,0.78)]">
            for Ukraine
          </span>
        </Link>

        <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 pt-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[rgba(246,237,220,0.88)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

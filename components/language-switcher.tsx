import Link from "next/link";
import { alternateLang, Lang, localizedPath } from "@/lib/i18n";

export function LanguageSwitcher({
  lang,
  path,
  inverse = false,
}: {
  lang: Lang;
  path: string;
  inverse?: boolean;
}) {
  const nextLang = alternateLang(lang);

  return (
    <Link
      href={localizedPath(nextLang, path)}
      className={[
        "inline-flex min-h-[2.6rem] items-center justify-center border px-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] transition duration-200 hover:-translate-y-0.5",
        inverse
          ? "border-[rgba(246,237,220,0.28)] text-cream hover:bg-[rgba(255,255,255,0.08)]"
          : "border-[rgba(19,48,74,0.18)] text-ink hover:bg-[rgba(19,48,74,0.04)]",
      ].join(" ")}
    >
      {lang === "uk" ? "EN" : "UA"}
    </Link>
  );
}

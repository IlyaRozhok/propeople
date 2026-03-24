import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Lang, localizedPath } from "@/lib/i18n";

export function AdminLoginPage({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="page-width mx-auto grid min-h-screen items-center py-10 lg:grid-cols-[minmax(0,1fr)_30rem] lg:gap-12">
        <div className="max-w-[34rem]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <Link
              href={localizedPath(lang, "/")}
              className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(20,20,20,0.48)]"
            >
              {lang === "uk" ? "Назад на сайт" : "Back to site"}
            </Link>
            <LanguageSwitcher lang={lang} path="/admin/login" />
          </div>
          <p className="mt-10 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(20,20,20,0.5)]">
            {lang === "uk" ? "Доступ до адмінки" : "Admin access"}
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6.6rem)] font-semibold leading-[0.9]">
            {lang === "uk"
              ? "Редакторський вхід, підготовлений до JWT-авторизації."
              : "Editorial login prepared for JWT authentication."}
          </h1>
          <p className="muted-copy mt-5 max-w-[30rem] text-[1.02rem] leading-7">
            {lang === "uk"
              ? "Це фронтендова точка входу для майбутньої адмін-панелі. Форма та структура захищених маршрутів уже готові до підключення бекенд-авторизації."
              : "This is the frontend entry point for the future admin panel. The form and protected route structure are ready to connect to backend authentication."}
          </p>
        </div>

        <section className="soft-panel mt-12 border border-line p-7 lg:mt-0">
          <div>
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[rgba(20,20,20,0.5)]">
              {lang === "uk" ? "Увійти" : "Sign in"}
            </p>
            <h2 className="mt-3 font-display text-[2.2rem] font-semibold leading-none">
              {lang === "uk" ? "Адмін-панель" : "Admin panel"}
            </h2>
          </div>

          <form className="mt-8 grid gap-5">
            <label className="grid gap-2">
              <span className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(20,20,20,0.5)]">
                Email
              </span>
              <input
                type="email"
                placeholder="editor@propeople.org.ua"
                className="min-h-[3.3rem] border border-line bg-white px-4 text-base text-ink placeholder:text-[rgba(20,20,20,0.35)] focus:outline-none focus:ring-2 focus:ring-[rgba(212,166,42,0.35)]"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(20,20,20,0.5)]">
                {lang === "uk" ? "Пароль" : "Password"}
              </span>
              <input
                type="password"
                placeholder={lang === "uk" ? "Введіть пароль" : "Enter password"}
                className="min-h-[3.3rem] border border-line bg-white px-4 text-base text-ink placeholder:text-[rgba(20,20,20,0.35)] focus:outline-none focus:ring-2 focus:ring-[rgba(212,166,42,0.35)]"
              />
            </label>
            <button
              type="button"
              className="mt-2 inline-flex min-h-[3.3rem] items-center justify-center bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-paperStrong transition duration-200 hover:-translate-y-0.5 hover:bg-[#202020]"
            >
              {lang === "uk" ? "Продовжити" : "Continue"}
            </button>
          </form>

          <p className="muted-copy mt-6 text-sm leading-6">
            {lang === "uk"
              ? "Поки це лише фронтенд-прев'ю. Далі форма зможе відправляти дані на бекенд, отримувати JWT і відкривати захищені маршрути."
              : "This is still a frontend preview. Later the form can post credentials, receive a JWT, and open protected routes."}
          </p>

          <Link
            href={localizedPath(lang, "/admin")}
            className="mt-6 inline-flex border-b border-accent pb-1 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:translate-x-1"
          >
            {lang === "uk" ? "Відкрити прев'ю адмінки" : "Open admin preview"}
          </Link>
        </section>
      </div>
    </main>
  );
}

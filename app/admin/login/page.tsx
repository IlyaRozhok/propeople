import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#143452_0%,#204f7f_34%,#edd38a_100%)] text-cream">
      <div className="page-width mx-auto grid min-h-screen items-center py-10 lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-12">
        <div className="max-w-[36rem]">
          <Link
            href="/"
            className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgba(246,237,220,0.72)]"
          >
            Back to site
          </Link>
          <p className="mt-10 text-[0.78rem] font-bold uppercase tracking-[0.22em]">
            Admin access
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6.6rem)] font-semibold leading-[0.9]">
            Editorial login prepared for JWT auth.
          </h1>
          <p className="mt-5 max-w-[30rem] text-[1.02rem] leading-7 text-[rgba(246,237,220,0.88)]">
            This is the frontend entry point for the future admin panel. The
            form and secure route structure are ready to connect to backend
            authentication once you implement the API.
          </p>
        </div>

        <section className="mt-12 border border-[rgba(246,237,220,0.22)] bg-[rgba(14,35,54,0.3)] p-7 backdrop-blur-sm lg:mt-0">
          <div>
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[rgba(246,237,220,0.7)]">
              Sign in
            </p>
            <h2 className="mt-3 font-display text-[2.2rem] font-semibold leading-none">
              Admin panel
            </h2>
          </div>

          <form className="mt-8 grid gap-5">
            <label className="grid gap-2">
              <span className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(246,237,220,0.7)]">
                Email
              </span>
              <input
                type="email"
                placeholder="editor@propeople.org.ua"
                className="min-h-[3.3rem] border border-[rgba(246,237,220,0.22)] bg-[rgba(255,255,255,0.08)] px-4 text-base text-cream placeholder:text-[rgba(246,237,220,0.45)] focus:outline-none focus:ring-2 focus:ring-[rgba(246,237,220,0.4)]"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[rgba(246,237,220,0.7)]">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter password"
                className="min-h-[3.3rem] border border-[rgba(246,237,220,0.22)] bg-[rgba(255,255,255,0.08)] px-4 text-base text-cream placeholder:text-[rgba(246,237,220,0.45)] focus:outline-none focus:ring-2 focus:ring-[rgba(246,237,220,0.4)]"
              />
            </label>
            <button
              type="button"
              className="mt-2 inline-flex min-h-[3.3rem] items-center justify-center bg-cream px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff5df]"
            >
              Continue
            </button>
          </form>

          <p className="mt-6 text-sm leading-6 text-[rgba(246,237,220,0.72)]">
            Frontend preview only. Later this form can post credentials, store a
            JWT, and redirect into protected routes.
          </p>

          <Link
            href="/admin"
            className="mt-6 inline-flex border-b border-[rgba(246,237,220,0.45)] pb-1 text-sm font-bold uppercase tracking-[0.18em] text-cream transition duration-200 hover:translate-x-1"
          >
            Open admin preview
          </Link>
        </section>
      </div>
    </main>
  );
}

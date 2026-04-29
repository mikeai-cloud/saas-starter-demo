import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles, CreditCard } from "lucide-react";

const features = [
  {
    title: "Auth included",
    body: "Email magic-link authentication powered by Supabase.",
    icon: Shield
  },
  {
    title: "Billing ready",
    body: "Stripe Checkout route for recurring subscription plans.",
    icon: CreditCard
  },
  {
    title: "MVP speed",
    body: "A clean foundation for shipping SaaS products quickly.",
    icon: Sparkles
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:py-24">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-bold">SaaS Starter</div>
          <Link href="/login" className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Sign in
          </Link>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
              Next.js 15 · Supabase · Stripe
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Launch a SaaS MVP without starting from zero.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A production-style boilerplate with landing page, auth, dashboard, database notes,
              and Stripe subscription checkout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200"
              >
                Try the demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">
                View pricing
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-2xl bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Dashboard</p>
                  <h2 className="text-2xl font-bold">Revenue Snapshot</h2>
                </div>
                <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-sm text-emerald-200">Live</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["MRR $2,450", "Users 128", "Churn 2.1%", "Plan Pro"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xl font-semibold">{item}</p>
                    <p className="mt-1 text-sm text-slate-400">Demo metric</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <feature.icon className="mb-4 h-7 w-7 text-emerald-300" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-slate-300">{feature.body}</p>
            </div>
          ))}
        </section>

        <section id="pricing" className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Pricing</p>
              <h2 className="mt-2 text-3xl font-bold">Simple monthly plan</h2>
              <p className="mt-3 text-slate-300">
                Use Stripe Checkout to collect recurring subscription payments.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-slate-950">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="mt-2 text-slate-600">For founders validating a SaaS MVP.</p>
              <p className="mt-6 text-4xl font-bold">$29<span className="text-base font-normal text-slate-500">/mo</span></p>
              <ul className="mt-6 space-y-3">
                {["Protected dashboard", "Supabase database", "Stripe subscription", "Vercel deployment"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/login" className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-3 font-semibold text-white">
                Start demo
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

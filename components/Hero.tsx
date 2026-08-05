import Image from "next/image";

const STATS = [
  { value: "30+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "10k+", label: "Filings Completed" },
  { value: "95%", label: "Client Retention" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-900 uppercase">
            Chartered Accountants &bull; Since 1996
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Trusted Financial Guidance for{" "}
            <span className="text-blue-900">Individuals &amp; Businesses</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            A. Mannan &amp; Co. delivers precise audit, taxation, and advisory
            services built on three decades of experience &mdash; so you can
            make confident decisions and stay fully compliant.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-900 hover:text-blue-900"
            >
              Explore Services
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-blue-950">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8">
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-blue-800 via-sky-400 to-blue-700 opacity-25 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute h-64 w-64 rounded-full border border-blue-900/10 sm:h-72 sm:w-72" />
          <div className="absolute h-52 w-52 rounded-full border border-blue-900/10 sm:h-60 sm:w-60" />
          <Image
            src="/logo-mark.png"
            alt="A. Mannan & Co. emblem"
            width={617}
            height={509}
            className="relative w-full max-w-xs drop-shadow-xl sm:max-w-sm"
            unoptimized
            priority
          />
        </div>
      </div>
    </section>
  );
}

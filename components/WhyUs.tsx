const REASONS = [
  {
    title: "30+ Years of Trust",
    description:
      "Serving clients since 1996 with consistent, dependable financial guidance.",
  },
  {
    title: "Qualified Experts",
    description:
      "A team of ICAB-registered Chartered Accountants with cross-industry experience.",
  },
  {
    title: "Timely Compliance",
    description:
      "We track every deadline so your filings are always accurate and on time.",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront fees with no hidden charges — ever.",
  },
  {
    title: "Confidential & Secure",
    description:
      "Your financial data is handled with the strictest confidentiality.",
  },
  {
    title: "Client-First Approach",
    description:
      "We take time to understand your goals before recommending a solution.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold tracking-wide text-blue-900 uppercase">
          Why Choose Us
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Built on experience. Backed by integrity.
        </h2>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason, i) => (
          <div key={reason.title} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-900">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                {reason.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

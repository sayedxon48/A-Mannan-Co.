const POINTS: { text: string; href?: string }[] = [
  {
    text: "ICAB-registered Chartered Accountants",
    href: "https://www.icab.org.bd/page/all-ca-firms",
  },
  { text: "Personalized attention to every client" },
  { text: "Accurate, on-time regulatory compliance" },
  { text: "Strict confidentiality on all engagements" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-sm font-semibold tracking-wide text-blue-900 uppercase">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Three decades of trusted financial expertise
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Founded in 1996, A. Mannan &amp; Co. has grown into a firm trusted
            by individuals, startups, and established businesses for reliable
            audit, tax, and advisory work. We combine deep regulatory
            knowledge with a practical, client-first approach &mdash; helping
            you stay compliant while focusing on what matters most: running
            your business.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Our team stays current with evolving tax laws and accounting
            standards so you don&apos;t have to, delivering advice that is
            accurate, timely, and easy to act on.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Md Abdul Mannan FCA
              </p>
              <p className="text-xs text-slate-500">
                Founder &bull; ICAB Membership No. 0662
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <h3 className="text-lg font-semibold text-slate-900">
            Why clients stay with us
          </h3>
          <ul className="mt-6 space-y-4">
            {POINTS.map((point) => (
              <li key={point.text} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-sky-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                {point.href ? (
                  <a
                    href={point.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 hover:text-blue-900 hover:decoration-blue-900"
                  >
                    {point.text}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-700">
                    {point.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

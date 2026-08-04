const SERVICES = [
  {
    title: "Audit & Assurance",
    description:
      "Statutory, internal, and tax audits conducted with rigor and full regulatory compliance.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: "Taxation",
    description:
      "Income tax planning, return filing, and representation that keeps you compliant and efficient.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-9-11.25h16.5A2.25 2.25 0 0 1 21 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6a2.25 2.25 0 0 1 2.25-2.25Z"
      />
    ),
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate books of accounts and MIS reporting so you always know where your business stands.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 5.25m8.5-5.25 1 5.25M9 12h6"
      />
    ),
  },
  {
    title: "Company Formation & RJSC Compliance",
    description:
      "Company incorporation with ongoing RJSC compliance and secretarial support.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15l-.75 18h-13.5L4.5 3Zm4.5 6.75h6m-6 3.75h6"
      />
    ),
  },
  {
    title: "Financial & Business Advisory",
    description:
      "Strategic guidance on budgeting, forecasting, and growth to support sound decisions.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125 8.25 7.5l4.5 4.5 8.25-9M21 12v-4.5h-4.5"
      />
    ),
  },
  {
    title: "Student Asset Valuation",
    description:
      "Specialized financial certification, net worth valuation reports, and asset validation required for students applying for international visas and foreign university admissions.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347M4.26 10.147a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814M4.26 10.147A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-blue-900 uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive services for every stage of your business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From compliance to strategy, our services are designed to keep
            your finances accurate, compliant, and ready to grow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-blue-950/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-900 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

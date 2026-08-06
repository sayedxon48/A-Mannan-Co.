import Image from "next/image";

const QUICK_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#verify", label: "Verify Report" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  "Audit & Assurance",
  "Taxation",
  "Accounting & Bookkeeping",
  "Company Formation & RJSC Compliance",
  "Financial & Business Advisory",
  "Net Worth Certificate & Asset Valuation",
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-mark.png"
                alt="A. Mannan & Co. logo"
                width={617}
                height={509}
                className="h-12 w-auto drop-shadow-sm"
                unoptimized
              />
              <span className="leading-tight">
                <span className="block text-base font-bold tracking-tight text-white">
                  A. Mannan &amp; Co.
                </span>
                <span className="block text-xs font-medium text-sky-300">
                  Chartered Accountants &bull; Since 1996
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Trusted advisors in audit, taxation, and financial compliance,
              helping individuals and businesses stay compliant and grow with
              confidence.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61553319433148"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A. Mannan & Co. on Facebook"
              className="mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4.5 w-4.5"
              >
                <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.06 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.21 22 17.06 22 12.06Z" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>&copy; 2026 A. Mannan &amp; Co. All rights reserved.</p>
          <p className="text-slate-500">
            Chartered Accountants &bull; Since 1996
          </p>
        </div>
      </div>
    </footer>
  );
}

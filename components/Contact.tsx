"use client";

import { useEffect, useState } from "react";

type ContactLine = { text: string; href?: string };

const CONTACT_INFO: {
  label: string;
  lines: ContactLine[];
  icon: React.ReactNode;
}[] = [
  {
    label: "Office Address",
    lines: [
      { text: "Barnali-3 (9th Floor), 476-E Malibag, DIT Road, Dhaka" },
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    ),
  },
  {
    label: "Phone",
    lines: [
      { text: "01732 040449", href: "tel:+8801732040449" },
      { text: "01749 505506", href: "tel:+8801749505506" },
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a.75.75 0 0 1-.94.232 12.035 12.035 0 0 1-5.485-5.485.75.75 0 0 1 .233-.94l1.292-.97a1.125 1.125 0 0 0 .418-1.173L8.52 3.852a1.125 1.125 0 0 0-1.091-.852H6a2.25 2.25 0 0 0-2.25 2.25v1.5Z"
      />
    ),
  },
  {
    label: "Email",
    lines: [
      { text: "support@amannan.cc", href: "mailto:support@amannan.cc" },
      { text: "mannan_fca@yahoo.com", href: "mailto:mannan_fca@yahoo.com" },
      { text: "amannanfca@gmail.com", href: "mailto:amannanfca@gmail.com" },
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21.75 6.75-9.192 6.394a2.25 2.25 0 0 1-2.116 0L1.25 6.75M3.75 4.5h16.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5Z"
      />
    ),
  },
  {
    label: "Office Hours",
    lines: [{ text: "Sun – Thu, 10:00 AM – 6:30 PM" }],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"sent" | "error" | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const result = params.get("contact");
    if (result === "sent" || result === "error") {
      setStatus(result);
      params.delete("contact");
      const query = params.toString();
      window.history.replaceState(
        {},
        "",
        window.location.pathname + (query ? `?${query}` : "") + "#contact"
      );
    }
  }, []);

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-blue-900 uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s talk about your finances
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Reach out for a consultation and we&apos;ll get back to you within
            one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.label}
                    </p>
                    <div className="mt-0.5 space-y-0.5">
                      {item.lines.map((line) =>
                        line.href ? (
                          <a
                            key={line.text}
                            href={line.href}
                            className="block text-sm text-slate-600 hover:text-blue-900"
                          >
                            {line.text}
                          </a>
                        ) : (
                          <p key={line.text} className="text-sm text-slate-600">
                            {line.text}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            action="/contact.php"
            method="POST"
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3"
          >
            {status === "sent" && (
              <div className="mb-6 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                Thanks — your message has been sent. We&apos;ll get back to
                you within one business day.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                Something went wrong sending your message. Please try again
                or email us directly.
              </div>
            )}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  placeholder="01XXX XXXXXX"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  placeholder="Tell us how we can help"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

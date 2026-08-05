"use client";

import { useEffect, useState } from "react";

type ContactLine = { text: string; href?: string; whatsapp?: string };

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 4.99L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.9c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.18 8.18 0 0 1-1.26-4.39c0-4.54 3.7-8.22 8.24-8.22zm-4.52 4.66c-.15 0-.4.06-.61.29c-.21.24-.8.78-.8 1.9c0 1.12.82 2.2.93 2.35c.12.15 1.6 2.47 3.94 3.36c1.94.75 2.34.6 2.76.56c.42-.04 1.36-.55 1.55-1.09c.19-.53.19-.98.13-1.08c-.06-.1-.22-.16-.46-.28c-.24-.12-1.36-.67-1.57-.75c-.21-.08-.36-.12-.52.12c-.15.24-.6.75-.73.9c-.13.15-.27.17-.5.06c-.24-.12-1-.37-1.9-1.17c-.7-.63-1.18-1.4-1.31-1.64c-.13-.24-.01-.37.1-.49c.11-.11.24-.28.36-.42c.12-.14.16-.24.24-.4c.08-.16.04-.3-.02-.42c-.06-.12-.52-1.26-.72-1.72c-.19-.46-.38-.4-.52-.4z" />
    </svg>
  );
}

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
      {
        text: "01732 040449",
        href: "tel:+8801732040449",
        whatsapp: "https://wa.me/8801732040449",
      },
      {
        text: "01749 505506",
        href: "tel:+8801749505506",
        whatsapp: "https://wa.me/8801749505506",
      },
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
                    <div className="mt-0.5 space-y-1">
                      {item.lines.map((line) => (
                        <div
                          key={line.text}
                          className="flex items-center gap-2"
                        >
                          {line.href ? (
                            <a
                              href={line.href}
                              className="text-sm text-slate-600 hover:text-blue-900"
                            >
                              {line.text}
                            </a>
                          ) : (
                            <p className="text-sm text-slate-600">
                              {line.text}
                            </p>
                          )}
                          {line.whatsapp && (
                            <a
                              href={line.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Chat on WhatsApp: ${line.text}`}
                              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
                            >
                              <WhatsAppIcon className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      ))}
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

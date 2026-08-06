"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What services does A. Mannan & Co. offer?",
    answer:
      "Audit & assurance, taxation, accounting & bookkeeping, company formation & RJSC compliance, financial & business advisory, and net worth certificates / asset valuation reports (including CA reports for student visa and foreign university applications).",
  },
  {
    question:
      "How do I get a net worth certificate or asset valuation report for a visa or university application?",
    answer:
      "Book a consultation through the form below or reach out on WhatsApp. We'll ask for the relevant asset and income documents, verify them, and prepare a certified CA report suitable for visa and admissions requirements.",
  },
  {
    question: "How long does a CA report or net worth certificate take?",
    answer:
      "Turnaround depends on how complex your assets and documentation are. Straightforward cases are typically completed within a few working days — get in touch and we'll give you a timeline specific to your situation.",
  },
  {
    question: "Is A. Mannan & Co. ICAB-registered?",
    answer:
      "Yes. We're an ICAB-registered Chartered Accountancy firm, serving clients in Dhaka and across Bangladesh since 1996.",
  },
  {
    question: "Do you help with company registration and RJSC compliance?",
    answer:
      "Yes — we handle company incorporation along with ongoing RJSC compliance and secretarial support for businesses of all sizes.",
  },
  {
    question:
      "Do you work with individuals, or only businesses?",
    answer:
      "Both. We serve individuals (including personal tax filing and asset valuation for students and professionals) as well as startups and established businesses.",
  },
  {
    question: "What are your office hours?",
    answer:
      "We're open Sunday to Thursday, 10:00 AM to 6:30 PM. You can also reach us anytime by phone, WhatsApp, or email, and we'll respond within one business day.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold tracking-wide text-blue-900 uppercase">
          FAQ
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Can&apos;t find what you&apos;re looking for? Reach out and
          we&apos;ll get back to you within one business day.
        </p>
      </div>

      <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-slate-900 sm:text-base">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`h-5 w-5 shrink-0 text-blue-900 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {isOpen && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

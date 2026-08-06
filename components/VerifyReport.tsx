"use client";

import { useState } from "react";

type Report = {
  nidNumber: string;
  type: string;
  clientRef: string;
  issueDate: string;
};

type Result =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "found"; report: Report }
  | { state: "not-found" }
  | { state: "error" };

export default function VerifyReport() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result>({ state: "idle" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    setResult({ state: "loading" });
    try {
      const res = await fetch(
        `/verify.php?nid=${encodeURIComponent(trimmed)}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      if (data.found) {
        const report: Report = {
          nidNumber: data.nidNumber,
          type: data.type,
          clientRef: data.clientRef,
          issueDate: data.issueDate,
        };
        setResult({ state: "found", report });
      } else {
        setResult({ state: "not-found" });
      }
    } catch {
      setResult({ state: "error" });
    }
  }

  return (
    <section id="verify" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-blue-900 uppercase">
            Report Verification
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Verify an audit report or asset valuation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Embassies, universities, banks, and other third parties can
            confirm the authenticity of any audit report, net worth
            certificate, or asset valuation report issued by A. Mannan &amp;
            Co. using the NID number on the document.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <label
            htmlFor="nid-number"
            className="text-sm font-medium text-slate-700"
          >
            NID Number
          </label>
          <div className="mt-1.5 flex flex-col gap-3 sm:flex-row">
            <input
              id="nid-number"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. 1234567890123"
              className="flex-1 rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
            <button
              type="submit"
              disabled={result.state === "loading"}
              className="rounded-full bg-blue-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 disabled:opacity-60"
            >
              {result.state === "loading" ? "Checking…" : "Verify"}
            </button>
          </div>

          {result.state === "found" && (
            <div className="mt-6 rounded-lg bg-green-50 px-4 py-4 text-sm text-green-800">
              <p className="font-semibold">✓ Verified — this report is genuine</p>
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                <dt className="text-green-700">NID Number</dt>
                <dd>{result.report.nidNumber}</dd>
                <dt className="text-green-700">Type</dt>
                <dd>{result.report.type}</dd>
                <dt className="text-green-700">Issued To</dt>
                <dd>{result.report.clientRef}</dd>
                <dt className="text-green-700">Issue Date</dt>
                <dd>{result.report.issueDate}</dd>
              </dl>
            </div>
          )}

          {result.state === "not-found" && (
            <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
              We couldn&apos;t find a report with that NID number.
              Double-check it against the document, or contact us directly to
              confirm.
            </div>
          )}

          {result.state === "error" && (
            <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
              Something went wrong checking that report. Please try again or
              contact us directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

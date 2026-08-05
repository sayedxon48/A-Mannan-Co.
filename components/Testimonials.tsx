type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Add real client testimonials here (with their permission) — replace the
// placeholders below. Each entry needs a quote, the client's name, and a
// short role/company line.
const TESTIMONIALS: Testimonial[] = [];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-blue-900 uppercase">
            Client Stories
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What our clients say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <blockquote className="text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-semibold text-slate-900">
                  {t.name}
                </p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

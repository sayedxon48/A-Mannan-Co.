export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "A. Mannan & Co.",
    description:
      "ICAB-registered Chartered Accountancy firm in Dhaka offering audit & assurance, taxation, CA reports, net worth certificates, and asset valuation services since 1996.",
    url: "https://amannan.cc",
    telephone: ["+8801732040449", "+8801749505506"],
    email: "support@amannan.cc",
    foundingDate: "1996",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barnali-3 (9th Floor), 476-E Malibag, DIT Road",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    areaServed: "Bangladesh",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        "Audit & Assurance",
        "Taxation",
        "Accounting & Bookkeeping",
        "Company Formation & RJSC Compliance",
        "Financial & Business Advisory",
        "Net Worth Certificate",
        "Asset Valuation Report",
        "CA Report",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

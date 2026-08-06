export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "A. Mannan & Co.",
    alternateName: ["A Mannan and Co", "A. Mannan and Company", "AMC"],
    description:
      "ICAB-registered Chartered Accountancy firm in Dhaka offering audit & assurance, taxation, CA reports, net worth certificates, and asset valuation services since 1996.",
    url: "https://amannan.cc",
    logo: "https://amannan.cc/logo-mark.png",
    image: "https://amannan.cc/og-image.png",
    telephone: ["+8801732040449", "+8801749505506"],
    email: "support@amannan.cc",
    sameAs: ["https://www.facebook.com/profile.php?id=61553319433148"],
    foundingDate: "1996",
    founder: {
      "@type": "Person",
      name: "Md Abdul Mannan FCA",
      jobTitle: "Founder",
      identifier: "ICAB Membership No. 0662",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barnali-3 (9th Floor), 476-E Malibag, DIT Road",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    areaServed: "Bangladesh",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "10:00",
      closes: "18:30",
    },
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

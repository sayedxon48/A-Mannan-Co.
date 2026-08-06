import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amannan.cc"),
  title: "A. Mannan & Co. | Chartered Accountants Dhaka | Since 1996",
  description:
    "Trusted chartered accountants since 1996. A. Mannan & Co. delivers audit, taxation, advisory, CA reports, net worth certificates, and asset valuation services in Dhaka. ICAB-registered. 500+ clients served.",
  keywords: [
    "chartered accountant Dhaka",
    "statutory audit Bangladesh",
    "CA report",
    "asset valuation",
    "net worth certificate",
    "student asset valuation",
    "ICAB registered CA firm",
    "tax filing Bangladesh",
    "RJSC compliance",
  ],
  alternates: {
    canonical: "https://amannan.cc",
  },
  openGraph: {
    title: "A. Mannan & Co. | Chartered Accountants Dhaka",
    description:
      "CA reports, net worth certificates, and asset valuation services from a trusted, ICAB-registered CA firm in Dhaka since 1996.",
    url: "https://amannan.cc",
    type: "website",
    siteName: "A. Mannan & Co.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "A. Mannan & Co. — Chartered Accountants, Dhaka, Since 1996",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A. Mannan & Co. | Chartered Accountants Dhaka",
    description:
      "CA reports, net worth certificates, and asset valuation services from a trusted, ICAB-registered CA firm in Dhaka since 1996.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-700">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

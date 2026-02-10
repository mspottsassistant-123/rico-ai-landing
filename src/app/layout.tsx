import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CookieConsent from "@/components/consent/CookieConsent";
import ConsentScripts from "@/components/analytics/ConsentScripts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const appStoreUrl =
  "https://apps.apple.com/us/app/rico-ai-skincare-scanner/id6741412208";

export const metadata: Metadata = {
  title: "Rico AI — Skincare Ingredient Scanner",
  description:
    "Scan any skincare product in seconds. Get clear clean-to-toxic scores, ingredient breakdowns, and gentle swaps under $30.",
  metadataBase: new URL("https://ricoai.app"),
  alternates: {
    canonical: "https://ricoai.app",
  },
  keywords: [
    "skincare ingredient scanner",
    "clean skincare",
    "ingredient decoder",
    "clean-to-toxic score",
    "skincare routine",
    "acne-safe products",
    "Rico AI",
  ],
  openGraph: {
    title: "Rico AI — Skincare Ingredient Scanner",
    description:
      "Know what you're really putting on your skin. Scan labels, get glow scores, and find cleaner swaps—fast.",
    url: "https://ricoai.app",
    siteName: "Rico AI",
    type: "website",
    images: [
      {
        url: "/images/hero-mockups.png",
        width: 1200,
        height: 630,
        alt: "Rico AI app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rico AI — Skincare Ingredient Scanner",
    description:
      "Scan labels, get glow scores, and find cleaner swaps—fast.",
    images: ["/images/hero-mockups.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased overflow-x-hidden`}>
        {children}
        <CookieConsent />
        <ConsentScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Rico AI",
              applicationCategory: "HealthApplication",
              operatingSystem: "iOS",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              url: "https://ricoai.app",
              downloadUrl: appStoreUrl,
              description:
                "AI skincare ingredient scanner. Scan any product, get clean-to-toxic scores, and discover gentle swaps under $30.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What do I get after a scan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A clean-to-toxic score, ingredient breakdown, safer budget-friendly swaps, and habit tracking for progress.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is Rico AI for?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anyone who wants healthier skin — sensitive, acne-prone, dry, irritated, or just seeking a cleaner routine.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it really free to try?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — start with a free trial and cancel anytime. Pricing is transparent in-app.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

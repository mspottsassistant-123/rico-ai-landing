import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
  openGraph: {
    title: "Rico AI — Skincare Ingredient Scanner",
    description:
      "Know what you're really putting on your skin. Scan labels, get glow scores, and find cleaner swaps—fast.",
    url: "https://ricoai.app",
    siteName: "Rico AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rico AI — Skincare Ingredient Scanner",
    description:
      "Scan labels, get glow scores, and find cleaner swaps—fast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}
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
      </body>
    </html>
  );
}

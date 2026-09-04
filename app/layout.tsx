import type { Metadata } from "next";
import { Geist_Mono, Marcellus, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cambridge International's own typeface (cambridgeinternational.org runs on
// Source Sans Pro site-wide — one family, no separate display serif).
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

// Premium display serif for hero / editorial focal points.
// Loaded alongside Source Sans 3 — used sparingly, never site-wide.
const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
});

const BASE_URL = "https://cambridge.seedlingschools.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Cambridge IGCSE School in Jaipur | Seedling Academy",
    template: "%s | Seedling International Academy",
  },
  description:
    "Seedling International Academy and SMIA — Cambridge IGCSE and A-Level schools in Jawahar Nagar and Durgapura, Jaipur. Admissions open for 2026-27.",
  verification: {
    google: "LzKlHJhPde7RhG9zSVx4gbkk7ZuWP0GnfhcHhcK1Qe0",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Seedling International Academy",
    title: "Cambridge IGCSE School in Jaipur | Seedling Academy",
    description:
      "Seedling International Academy and SMIA — Cambridge IGCSE and A-Level schools in Jawahar Nagar and Durgapura, Jaipur. Admissions open for 2026-27.",
    url: BASE_URL,
    images: [
      {
        url: "/assets/Home/SIA_collage_v3.webp",
        width: 1200,
        height: 630,
        alt: "Seedling International Academy — Cambridge School, Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge IGCSE School in Jaipur | Seedling Academy",
    description:
      "Seedling International Academy and SMIA — Cambridge IGCSE and A-Level schools in Jawahar Nagar and Durgapura, Jaipur. Admissions open for 2026-27.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: {},
  manifest: "/manifest.json",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-pathname") ?? headersList.get("next-url") ?? "/";
  const isErpLogin = pathname.startsWith("/erp-login");

  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${sourceSans.variable} ${marcellus.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="LzKlHJhPde7RhG9zSVx4gbkk7ZuWP0GnfhcHhcK1Qe0" />
        <link rel="canonical" href={`${BASE_URL}${pathname}`} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-83PTXLJEJ1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-83PTXLJEJ1');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <NavbarWrapper />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        {!isErpLogin && <FooterWrapper />}
      </body>
    </html>
  );
}

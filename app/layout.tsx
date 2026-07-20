import type { Metadata } from "next";
import { Geist_Mono, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
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

export const metadata: Metadata = {
  title: "Seedling International Academy | Best Cambridge School, Jawahar Nagar, Jaipur",
  description: "Seedling International Academy is the best Cambridge IGCSE school in Jawahar Nagar, Jaipur, offering globally benchmarked education.",
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
      className={`${geistMono.variable} ${sourceSans.variable} h-full antialiased`}
    >
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

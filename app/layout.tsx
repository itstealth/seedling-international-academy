import type { Metadata } from "next";
import { Outfit, Geist_Mono, Playfair_Display, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Seedling Group of Schools",
  description: "A premium educational institution dedicated to excellence.",
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
      className={`${outfit.variable} ${geistMono.variable} ${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NavbarWrapper />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        {!isErpLogin && <FooterWrapper />}
      </body>
    </html>
  );
}

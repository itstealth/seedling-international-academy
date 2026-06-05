import type { Metadata } from "next";
import { Geist_Mono, DM_Serif_Text, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Text({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cambridge International School Group",
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
      className={`${geistMono.variable} ${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
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

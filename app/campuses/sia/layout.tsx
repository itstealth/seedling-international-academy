import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seedling International Academy (SIA), Jawahar Nagar Jaipur",
  description:
    "Seedling International Academy, Jawahar Nagar — a 5-acre Cambridge campus in Jaipur since 1993, with a 20:1 ratio, science labs, sports complex and arts.",
  openGraph: {
    title: "SIA — Jawahar Nagar Campus | Seedling International Academy",
    description:
      "Seedling International Academy at Jawahar Nagar: three decades of Cambridge excellence, a five-acre green campus, 20:1 student-teacher ratio.",
    url: "https://cambridge.seedlingschools.com/campuses/sia",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "SIA Campus Jawahar Nagar Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIA — Jawahar Nagar Campus | Seedling International Academy",
    description: "Three decades of Cambridge excellence at SIA, Jawahar Nagar, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/campuses/sia" },
};

export default function SIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

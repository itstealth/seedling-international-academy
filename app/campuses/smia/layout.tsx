import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seedling Modern International Academy, Durgapura Jaipur",
  description:
    "Seedling Modern International Academy (SMIA), Ashok Marg, Mahaveer Nagar II — a modern Cambridge campus in Durgapura, Jaipur with STEM labs, sports and arts.",
  openGraph: {
    title: "SMIA — Durgapura Campus | Seedling International Academy",
    description:
      "Modern facilities, timeless values — SMIA at Durgapura brings globally benchmarked Cambridge education to central Jaipur.",
    url: "https://cambridge.seedlingschools.com/campuses/smia",
    images: [{ url: "/assets/Home/SMIA_collage_v3.webp", width: 1200, height: 630, alt: "SMIA Campus Durgapura Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMIA — Durgapura Campus | Seedling International Academy",
    description: "Modern Cambridge education at SMIA, Durgapura, Jaipur.",
    images: ["/assets/Home/SMIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/campuses/smia" },
};

export default function SMIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

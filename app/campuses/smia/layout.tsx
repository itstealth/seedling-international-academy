import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://cambridge.seedlingschools.com/campuses/smia" },
  title: "Seedling Modern International Academy, Durgapura Jaipur",
  description:
    "Seedling Modern International Academy (SMIA), Ashok Marg, Mahaveer Nagar II â€” a modern Cambridge campus in Durgapura, Jaipur with STEM labs, sports and arts.",
  openGraph: {
    title: "SMIA â€” Durgapura Campus | Seedling International Academy",
    description:
      "Modern facilities, timeless values â€” SMIA at Durgapura brings globally benchmarked Cambridge education to central Jaipur.",
    url: "https://cambridge.seedlingschools.com/campuses/smia",
    images: [{ url: "/assets/Home/SMIA_collage_v3.webp", width: 1200, height: 630, alt: "SMIA Campus Durgapura Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMIA â€” Durgapura Campus | Seedling International Academy",
    description: "Modern Cambridge education at SMIA, Durgapura, Jaipur.",
    images: ["/assets/Home/SMIA_collage_v3.webp"],
  },
};

export default function SMIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

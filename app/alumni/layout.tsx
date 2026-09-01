import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni — Seedling's Global Community",
  description:
    "5,000+ Seedling alumni across 50+ nations. Discover where a Seedling education takes you — top universities worldwide and thriving global careers.",
  openGraph: {
    title: "Alumni | Seedling International Academy",
    description:
      "5,000+ Seedling alumni across 50+ nations. Discover where a Seedling education takes you — top universities and thriving global careers.",
    url: "https://cambridge.seedlingschools.com/alumni",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Seedling Alumni Network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumni | Seedling International Academy",
    description: "5,000+ Seedling alumni across 50+ nations.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/alumni" },
};

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

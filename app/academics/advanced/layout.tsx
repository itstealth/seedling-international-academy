import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambridge AS & A Level School in Jaipur | Seedling Advanced",
  description:
    "Cambridge Advanced at Seedling Jaipur: AS & A Levels across 50+ subjects, IPQ research and university counselling for the IITs, Oxbridge and the Ivy League.",
  openGraph: {
    title: "Cambridge AS & A Level School in Jaipur | Seedling Advanced",
    description:
      "Cambridge Advanced at Seedling Jaipur: AS & A Levels across 50+ subjects, IPQ research and university counselling for the IITs, Oxbridge and the Ivy League.",
    url: "https://cambridge.seedlingschools.com/academics/advanced",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Cambridge A Levels at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge AS & A Level School in Jaipur | Seedling Advanced",
    description: "Cambridge AS & A Levels at Seedling Jaipur — 50+ subjects, IPQ and university counselling.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/academics/advanced" },
};

export default function AdvancedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambridge IGCSE School in Jaipur | Upper Secondary, Seedling",
  description:
    "Cambridge Upper Secondary (IGCSE) at Seedling Jaipur — 70+ subjects spanning Sciences, Maths, Business, Economics and Psychology, for learners aged 14-16.",
  openGraph: {
    title: "Cambridge IGCSE School in Jaipur | Upper Secondary, Seedling",
    description:
      "Cambridge Upper Secondary (IGCSE) at Seedling Jaipur — 70+ subjects spanning Sciences, Maths, Business, Economics and Psychology, for learners aged 14-16.",
    url: "https://cambridge.seedlingschools.com/academics/upper-secondary",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Cambridge IGCSE at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge IGCSE School in Jaipur | Upper Secondary, Seedling",
    description: "Cambridge Upper Secondary (IGCSE) at Seedling Jaipur — 70+ subjects, ages 14-16.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/academics/upper-secondary" },
};

export default function UpperSecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

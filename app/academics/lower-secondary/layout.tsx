import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambridge Lower Secondary in Jaipur (Ages 11-14) | Seedling",
  description:
    "Cambridge Lower Secondary at Seedling Jaipur, ages 11-14: 10+ subjects, Checkpoint and progression tests, and a strong bridge into Cambridge IGCSE.",
  openGraph: {
    title: "Cambridge Lower Secondary in Jaipur (Ages 11-14) | Seedling",
    description:
      "Cambridge Lower Secondary at Seedling Jaipur, ages 11-14: 10+ subjects, Checkpoint and progression tests, and a strong bridge into Cambridge IGCSE.",
    url: "https://cambridge.seedlingschools.com/academics/lower-secondary",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Cambridge Lower Secondary at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge Lower Secondary in Jaipur (Ages 11-14) | Seedling",
    description: "Cambridge Lower Secondary at Seedling Jaipur — ages 11 to 14.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/academics/lower-secondary" },
};

export default function LowerSecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

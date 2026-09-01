import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambridge Primary School in Jaipur (Ages 5-11) | Seedling",
  description:
    "Cambridge Primary at Seedling Jaipur, ages 5-11: 10+ subjects including Global Perspectives, Checkpoint assessment and a smooth path into Lower Secondary.",
  openGraph: {
    title: "Cambridge Primary School in Jaipur (Ages 5-11) | Seedling",
    description:
      "Cambridge Primary at Seedling Jaipur, ages 5-11: 10+ subjects including Global Perspectives, Checkpoint assessment and a smooth path into Lower Secondary.",
    url: "https://cambridge.seedlingschools.com/academics/primary",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Cambridge Primary at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge Primary School in Jaipur (Ages 5-11) | Seedling",
    description: "Cambridge Primary at Seedling Jaipur — ages 5 to 11.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/academics/primary" },
};

export default function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

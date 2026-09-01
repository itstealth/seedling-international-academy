import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambridge & IGCSE Insights for Parents | Seedling Blog",
  description:
    "Guides for Jaipur parents on IGCSE subject choices, A-Level pathways, university admissions and moving from CBSE to the Cambridge curriculum.",
  openGraph: {
    title: "Blog | Seedling International Academy",
    description:
      "Insights, stories and perspectives from Seedling International Academy — Jaipur's Cambridge school community.",
    url: "https://cambridge.seedlingschools.com/blog",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Seedling International Academy Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Seedling International Academy",
    description: "Insights and stories from Seedling International Academy, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

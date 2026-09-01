import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambridge Curriculum — Early Years to A Level",
  description:
    "Explore the Cambridge International curriculum at Seedling International Academy — from Early Years through IGCSE to AS & A Level. Rigorous, globally benchmarked education.",
  openGraph: {
    title: "Cambridge Curriculum | Seedling International Academy",
    description:
      "Full Cambridge pathway — Early Years, Primary, Lower Secondary, IGCSE and AS & A Level — at Seedling International Academy, Jaipur.",
    url: "https://cambridge.seedlingschools.com/curriculum",
    images: [{ url: "/assets/curriculum.webp", width: 1200, height: 630, alt: "Cambridge Curriculum at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge Curriculum | Seedling International Academy",
    description: "Full Cambridge pathway at Seedling International Academy, Jaipur.",
    images: ["/assets/curriculum.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/curriculum" },
};

export default function CurriculumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

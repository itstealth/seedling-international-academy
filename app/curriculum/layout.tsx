import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/curriculum",
  title: "Cambridge Curriculum: Early Years to A Level | SIA & SMIA",
  description:
    "Explore the Cambridge International curriculum at Seedling International Academy, from Early Years through IGCSE to AS & A Level. Globally benchmarked.",
  image: "/assets/curriculum.webp",
  imageAlt: "Cambridge Curriculum at Seedling International Academy",
});

export default function CurriculumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

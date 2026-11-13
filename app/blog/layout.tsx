import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: "Cambridge & IGCSE Insights for Parents | Seedling Blog",
  description:
    "Guides for Jaipur parents on IGCSE subject choices, A-Level pathways, university admissions and moving from CBSE to the Cambridge curriculum.",
  imageAlt: "Seedling International Academy Blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

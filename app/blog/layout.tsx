import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/blog',
  title: 'Cambridge & IGCSE Blog for Jaipur Parents | Seedling',
  description: 'Guides for Jaipur parents on IGCSE subject choices, A-Level pathways, university admissions and moving from CBSE to Cambridge.',
  imageAlt: 'Seedling International Academy Blog',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

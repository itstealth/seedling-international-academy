import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/campuses/smia',
  title: 'International School in Durgapura Jaipur | Seedling',
  description: 'SMIA is a Cambridge school near Durgapura and Mahaveer Nagar, Jaipur, with STEM labs, sports and arts. Admissions open for 2026-27.',
  image: "/assets/Home/SMIA_collage_v3.webp",
  imageAlt: 'SMIA Campus Durgapura Jaipur',
});

export default function SMIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

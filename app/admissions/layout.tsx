import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/admissions',
  title: 'Cambridge Admissions in Jaipur 2026-27 | Seedling',
  description: "Apply to Seedling's Cambridge schools in Jaipur for 2026-27. Admission for Jawahar Nagar and Durgapura: eligibility, documents, entrance test and steps.",
  imageAlt: 'Admissions at Seedling International Academy',
});

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

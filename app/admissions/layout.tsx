import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/admissions",
  title: "Cambridge School Admissions 2026-27, Jaipur | SIA & SMIA",
  description:
    "Apply to Seedling's Cambridge schools in Jaipur for 2026-27. Eligibility, documents, entrance test details and the full step-by-step admission process.",
  imageAlt: "Admissions at Seedling International Academy",
});

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

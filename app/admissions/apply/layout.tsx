import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/admissions/apply",
  title: "Apply Online for Cambridge School Admission | Seedling",
  description:
    "Apply online for admission to Seedling's Cambridge schools in Jaipur. Submit student, parent, academic and contact details for the 2026-27 session.",
  imageAlt: "Online admission application for Seedling Cambridge schools",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

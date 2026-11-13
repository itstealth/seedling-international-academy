import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/admissions/fee-structure",
  title: "Fee Structure 2026-27 | Seedling International Academy",
  description:
    "Seedling International Academy fees for 2026-27: one-time admission and quarterly composite fees by grade, payment options and sibling concessions.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

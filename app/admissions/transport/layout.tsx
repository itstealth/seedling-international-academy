import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/admissions/transport",
  title: "School Transport in Jaipur | Seedling International Academy",
  description:
    "Seedling International Academy's school bus service across Jaipur, with GPS tracking for parents, speed governors, female attendants, CCTV and route timings.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

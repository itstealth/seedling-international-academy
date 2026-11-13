import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/alumni",
  title: "Seedling Alumni: A Global Community | SIA & SMIA Jaipur",
  description:
    "5,000+ Seedling alumni across 50+ nations. Discover where a Seedling education takes you — top universities worldwide and thriving global careers.",
  imageAlt: "Seedling Alumni Network",
});

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

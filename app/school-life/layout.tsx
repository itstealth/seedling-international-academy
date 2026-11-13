import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/school-life",
  title: "School Life at Our Cambridge Schools in Jaipur | SIA & SMIA",
  description:
    "Sports, arts, wellness, clubs and celebrations at Seedling's Cambridge campuses in Jaipur - a look at daily life beyond the IGCSE classroom.",
  imageAlt: "School Life at Seedling International Academy",
});

export default function SchoolLifeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/faculty",
  title: "Our Faculty: Cambridge Teachers | SIA & SMIA Jaipur",
  description:
    "Meet the educators at Seedling's Cambridge schools in Jaipur: trained, experienced teachers who set high standards for character and academic achievement.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

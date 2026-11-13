import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/news-and-events/events",
  title: "Upcoming School Events in Jaipur | SIA & SMIA",
  description:
    "Upcoming cultural, sports, academic and innovation events at Seedling's Cambridge schools in Jaipur, with dates, venues and details for parents and students.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

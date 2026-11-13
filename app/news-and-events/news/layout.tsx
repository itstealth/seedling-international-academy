import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/news-and-events/news",
  title: "School News & Media Highlights | SIA & SMIA Jaipur",
  description:
    "News, media highlights and announcements from the Seedling Group of Schools in Jaipur, including awards, exam results and new programmes at our schools.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/faculty-testimonials",
  title: "Faculty Testimonials | Seedling International Academy",
  description:
    "Reflections from the Seedling community: an educator and a student share what the Cambridge journey at Seedling International Academy has meant to them.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

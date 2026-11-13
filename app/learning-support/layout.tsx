import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/learning-support",
  title: "Student-Centric Learning Support | SIA Jawahar Nagar",
  description:
    "Learning support at Seedling International Academy, Jawahar Nagar: a student-centric, inclusive approach with remedial and bridge learning programmes.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

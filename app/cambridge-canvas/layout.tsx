import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/cambridge-canvas",
  title: "Why the Cambridge Curriculum? IGCSE & A Level in Jaipur",
  description:
    "How the Cambridge pathway works from Early Years to A-Level, why 1,400+ universities recognise it, and what it means for students in Jaipur.",
  imageAlt: "Cambridge Canvas at Seedling International Academy",
});

export default function CambridgeCanvasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

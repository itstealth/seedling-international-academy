import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/alumni",
  title: "Seedling Alumni: A Global Community | SIA & SMIA Jaipur",
  description:
    "Discover Seedling alumni and the universities and careers they pursue around the world.",
  imageAlt: "Seedling Alumni Network",
});

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

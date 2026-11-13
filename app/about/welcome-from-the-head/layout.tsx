import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about/welcome-from-the-head",
  title: "Welcome from the Principal | Seedling International Academy",
  description:
    "A personal note from the Principal of Seedling International Academy, Jaipur, on what a Cambridge education means and what every child should carry forward.",
  image: "/assets/about/about-banner.jpg",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

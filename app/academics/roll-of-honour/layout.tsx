import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/academics/roll-of-honour",
  title: "Roll of Honour | Seedling International Academy, Jaipur",
  description:
    "Seedling International Academy's Roll of Honour celebrates students for Cambridge board results, subject toppers, national-level sport and scholarships.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

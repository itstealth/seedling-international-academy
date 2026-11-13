import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/campuses/sia",
  title: "Seedling International Academy (SIA), Jawahar Nagar Jaipur",
  description:
    "Seedling International Academy, Jawahar Nagar — a 5-acre Cambridge campus in Jaipur since 1993, with a 20:1 ratio, science labs, sports complex and arts.",
  imageAlt: "SIA Campus Jawahar Nagar Jaipur",
});

export default function SIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/academics/early-years",
  title: "Cambridge Early Years in Jaipur (Ages 3-6) | SIA & SMIA",
  description:
    "Cambridge Early Years at Seedling, Jaipur, for ages 3 to 6: a child-centred, play-based programme across six curriculum areas that builds a strong foundation.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

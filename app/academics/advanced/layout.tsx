import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/academics/advanced",
  title: "Cambridge AS & A Levels in Jaipur | SIA & SMIA",
  description:
    "Cambridge Advanced at Seedling Jaipur: AS & A Levels across 50+ subjects, IPQ research and university counselling for the IITs, Oxbridge and the Ivy League.",
  imageAlt: "Cambridge A Levels at Seedling International Academy",
});

export default function AdvancedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

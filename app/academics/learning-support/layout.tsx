import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/academics/learning-support",
  title: "Learning Support & Student Wellbeing | SIA Jaipur",
  description:
    "How Seedling International Academy supports every learner: counselling and mindfulness for mental wellness, and hands-on STEAM in the Atal Tinkering Lab.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/news-and-events",
  title: "News & Events at Our Jaipur Cambridge Schools | SIA & SMIA",
  description:
    "Stay up to date with the latest news, events, achievements and announcements from Seedling International Academy — Jaipur's Cambridge school.",
  imageAlt: "News and Events at Seedling International Academy",
});

export default function NewsEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

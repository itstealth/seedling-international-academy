import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/campuses",
  title: "Cambridge School Campuses in Jaipur | SIA & SMIA",
  description:
    "Compare Seedling's two Cambridge campuses in Jaipur - SIA at Jawahar Nagar and SMIA at Durgapura. Facilities, class sizes, results and how to visit.",
  imageAlt: "Seedling Campuses",
});

export default function CampusesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

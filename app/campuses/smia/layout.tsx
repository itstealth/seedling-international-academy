import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/campuses/smia",
  title: "Seedling Modern International Academy (SMIA), Durgapura",
  description:
    "Seedling Modern International Academy (SMIA), Ashok Marg, Mahaveer Nagar II — a modern Cambridge campus in Durgapura, Jaipur with STEM labs, sports and arts.",
  image: "/assets/Home/SMIA_collage_v3.webp",
  imageAlt: "SMIA Campus Durgapura Jaipur",
});

export default function SMIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

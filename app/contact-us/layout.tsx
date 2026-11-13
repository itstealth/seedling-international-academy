import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contact-us",
  title: "Contact Seedling's Cambridge Schools in Jaipur | SIA & SMIA",
  description:
    "Contact Seedling International Academy, Jawahar Nagar and SMIA, Durgapura. Phone numbers, email, office hours and directions to both Jaipur campuses.",
  imageAlt: "Contact Seedling International Academy",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

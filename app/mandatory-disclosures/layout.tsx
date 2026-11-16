import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/mandatory-disclosures',
  title: 'Mandatory Disclosures | Cambridge Schools Jaipur',
  description: "Statutory and Cambridge accreditation disclosures for Seedling's international schools in Jawahar Nagar and Durgapura, Jaipur, with certificates and reports.",
  image: "/assets/Home/SIA_collage_v3.webp",
  imageAlt: 'Seedling International Academy',
});

export default function MandatoryDisclosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

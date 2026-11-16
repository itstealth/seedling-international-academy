import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/contact-us',
  title: 'Contact Seedling | Cambridge Schools in Jaipur',
  description: "Contact Seedling's international schools in Jaipur: SIA, Jawahar Nagar and SMIA, Durgapura. Phone, email, office hours and directions.",
  imageAlt: 'Contact Seedling International Academy',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

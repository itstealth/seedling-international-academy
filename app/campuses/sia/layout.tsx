import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/campuses/sia',
  title: 'Cambridge School in Jawahar Nagar, Jaipur | Seedling',
  description: 'Seedling International Academy, a global school in Jawahar Nagar: a Cambridge campus with science labs, sports facilities, performing arts and student support.',
  imageAlt: 'SIA Campus Jawahar Nagar Jaipur',
});

export default function SIALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/cambridge-canvas',
  title: 'Why Cambridge? IGCSE & A Levels in Jaipur | Seedling',
  description: 'How the Cambridge curriculum works from Early Years to A-Level at Seedling, an IGCSE school in Jaipur, and why 1,400+ universities recognise it.',
  imageAlt: 'Cambridge Canvas at Seedling International Academy',
});

export default function CambridgeCanvasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

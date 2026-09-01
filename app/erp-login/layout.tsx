import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Login | Seedling International Academy",
  description:
    "Secure ERP portal login for Seedling students, parents and staff. Access academics, attendance and fee records.",
  openGraph: {
    title: "ERP Login | Seedling International Academy",
    description:
      "Secure ERP portal login for Seedling students, parents and staff. Access academics, attendance and fee records.",
    url: "https://cambridge.seedlingschools.com/erp-login",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Seedling International Academy ERP Login" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Login | Seedling International Academy",
    description: "Secure ERP portal login for Seedling students, parents and staff.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/erp-login" },
};

export default function ERPLoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

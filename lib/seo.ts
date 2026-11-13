import type { Metadata } from "next";

export const SITE_URL = "https://cambridge.seedlingschools.com";
export const SITE_NAME = "Seedling International Academy";

const DEFAULT_IMAGE = "/assets/Home/SIA_collage_v3.webp";

interface PageSeo {
  /** Route path, e.g. "/admissions/process". */
  path: string;
  /** Full document title, 60 characters or fewer. Used as-is (no template). */
  title: string;
  /** Meta description, ideally 120-158 characters. */
  description: string;
  image?: string;
  imageAlt?: string;
}

/**
 * Builds a page's metadata so the <title>, meta description, canonical,
 * Open Graph and Twitter tags all describe the same page.
 *
 * Next.js merges metadata shallowly, so a nested segment that omits
 * `openGraph` inherits its parent's og:url and og:title. Every page that
 * calls this helper sets all of them, which keeps og:url equal to the canonical.
 */
export function pageMetadata({
  path,
  title,
  description,
  image = DEFAULT_IMAGE,
  imageAlt = title,
}: PageSeo): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      title,
      description,
      url,
      // No width/height: the default collage is 1200x900 and pages may pass other images.
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

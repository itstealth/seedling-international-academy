const siteUrl = "https://cambridge.seedlingschools.com";
const organizationId = `${siteUrl}/#organization`;
const pathwayId = `${siteUrl}/#cambridge-pathway`;

const campusLocations = [
  {
    "@type": "Place",
    name: "Seedling International Academy",
    url: `${siteUrl}/campuses/sia`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 4, Park Lane, Jawahar Nagar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302004",
      addressCountry: "IN",
    },
  },
  {
    "@type": "Place",
    name: "Seedling Modern International Academy",
    url: `${siteUrl}/campuses/smia`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ashok Marg, Mahaveer Nagar II, Durgapura",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302018",
      addressCountry: "IN",
    },
  },
];

function courseListItem({
  position,
  name,
  description,
  path,
  typicalAgeRange,
}: {
  position: number;
  name: string;
  description: string;
  path: string;
  typicalAgeRange: string;
}) {
  const url = `${siteUrl}${path}`;
  const offerId = `${url}#admissions-offer`;

  return {
    "@type": "ListItem",
    position,
    url,
    item: {
      "@type": "Course",
      "@id": `${url}#course`,
      name,
      description,
      url,
      typicalAgeRange,
      provider: {
        "@type": "EducationalOrganization",
        "@id": organizationId,
        name: "Seedling International Academy",
        url: siteUrl,
      },
      offers: {
        "@type": "Offer",
        "@id": offerId,
        category: "Paid",
        priceCurrency: "INR",
        url: `${siteUrl}/admissions/fee-structure`,
        availability: "https://schema.org/InStock",
        offeredBy: { "@id": organizationId },
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        "@id": `${url}#on-campus-instance`,
        name: `${name} — on-campus programme`,
        courseMode: "onsite",
        location: campusLocations,
        offers: { "@id": offerId },
      },
    },
  };
}

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Seedling International Academy",
      alternateName: "SIA & SMIA",
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/Logo%2005.png`,
        caption: "Seedling International Academy logo",
      },
      image: `${siteUrl}/assets/Home/SIA_collage_v3.webp`,
      description:
        "Seedling International Academy and SMIA — Cambridge IGCSE and A-Level schools in Jawahar Nagar and Durgapura, Jaipur. Admissions open for 2026-27.",
      areaServed: { "@type": "City", name: "Jaipur" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "admissions",
          telephone: "+91-7413012351",
        },
        {
          "@type": "ContactPoint",
          contactType: "office",
          telephone: "+91-141-3623000",
        },
      ],
      sameAs: [
        "https://www.instagram.com/seedlinginternational/",
        "https://www.facebook.com/seedlinginternationalacademy",
        "https://www.youtube.com/@seedlinginternationalacade1802",
        "https://www.linkedin.com/company/seedling-international-academy/",
      ],
      subOrganization: [
        { "@id": `${siteUrl}/campuses/sia#school` },
        { "@id": `${siteUrl}/campuses/smia#school` },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Seedling International Academy",
      description:
        "Cambridge IGCSE and A-Level schools in Jaipur. Admissions open for 2026-27.",
      inLanguage: "en-IN",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "Cambridge IGCSE & A Level Schools in Jaipur | SIA & SMIA",
      description:
        "Seedling International Academy and SMIA — Cambridge IGCSE and A-Level schools in Jawahar Nagar and Durgapura, Jaipur. Admissions open for 2026-27.",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": organizationId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/Home/SIA_collage_v3.webp`,
        width: 1200,
        height: 630,
        caption: "Seedling International Academy — Cambridge School, Jaipur",
      },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
      ],
    },
    {
      "@type": "School",
      "@id": `${siteUrl}/campuses/sia#school`,
      name: "Seedling International Academy (SIA)",
      alternateName: "SIA · Jawahar Nagar",
      url: `${siteUrl}/campuses/sia`,
      logo: `${siteUrl}/Logo%2005.png`,
      image: `${siteUrl}/assets/Home/SIA_collage_v3.webp`,
      description:
        "Seedling International Academy is a Cambridge school in Jawahar Nagar, Jaipur, established in 1993.",
      telephone: ["+91-7413012351", "+91-141-3623000"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sector 4, Jawahar Nagar",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      hasMap:
        "https://maps.google.com/?q=Seedling+International+Academy+Jawahar+Nagar+Jaipur",
      parentOrganization: { "@id": organizationId },
      sameAs: [
        "https://www.instagram.com/seedlinginternational/",
        "https://www.facebook.com/seedlinginternationalacademy",
      ],
      knowsAbout: [
        "Cambridge IGCSE",
        "Cambridge International AS & A Level",
        "University counselling",
      ],
      hasOfferCatalog: { "@id": pathwayId },
    },
    {
      "@type": "School",
      "@id": `${siteUrl}/campuses/smia#school`,
      name: "Seedling Modern International Academy (SMIA)",
      alternateName: "SMIA · Durgapura",
      url: `${siteUrl}/campuses/smia`,
      logo: `${siteUrl}/Logo%2006.png`,
      image: `${siteUrl}/assets/Home/SMIA_collage_v3.webp`,
      description:
        "Seedling Modern International Academy brings Cambridge education to Durgapura, Jaipur.",
      telephone: "+91-95877-72837",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ashok Marg, Mahaveer Nagar II",
        addressLocality: "Durgapura, Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302018",
        addressCountry: "IN",
      },
      hasMap:
        "https://maps.google.com/?q=SMIA+Seedling+Mahaveer+Nagar+Durgapura+Jaipur",
      parentOrganization: { "@id": organizationId },
      sameAs: [
        "https://www.instagram.com/smiajaipur/",
        "https://www.facebook.com/SMIAJaipur",
      ],
      knowsAbout: [
        "Cambridge IGCSE",
        "Cambridge International AS & A Level",
        "University counselling",
      ],
      hasOfferCatalog: { "@id": pathwayId },
    },
    {
      "@type": "OfferCatalog",
      "@id": pathwayId,
      name: "Cambridge Pathway (age 3 to 19)",
      itemListElement: [
        courseListItem({
          position: 1,
          name: "Cambridge Primary",
          description: "Foundation learning within the Cambridge Pathway.",
          path: "/academics/primary",
          typicalAgeRange: "5-11",
        }),
        courseListItem({
          position: 2,
          name: "Cambridge Lower Secondary",
          description: "Cambridge learning for the lower-secondary years.",
          path: "/academics/lower-secondary",
          typicalAgeRange: "11-14",
        }),
        courseListItem({
          position: 3,
          name: "Cambridge Upper Secondary (IGCSE)",
          description: "Broad, balanced preparation for Cambridge IGCSE.",
          path: "/academics/upper-secondary",
          typicalAgeRange: "14-16",
        }),
        courseListItem({
          position: 4,
          name: "Cambridge Advanced (AS & A Level)",
          description: "Advanced subject study for AS and A Level learners.",
          path: "/academics/advanced",
          typicalAgeRange: "16-19",
        }),
      ],
    },
  ],
};

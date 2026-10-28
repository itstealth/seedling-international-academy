const siteUrl = "https://cambridge.seedlingschools.com";
const organizationId = `${siteUrl}/#organization`;
const pathwayId = `${siteUrl}/#cambridge-pathway`;

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Seedling International Academy",
      alternateName: "Seedling Academy",
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
      email: "seedlingacademy@hotmail.com",
      areaServed: { "@type": "City", name: "Jaipur" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "admissions",
          telephone: "+91-7413012351",
          email: "seedlingacademy@hotmail.com",
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
      name: "Cambridge IGCSE School in Jaipur | Seedling Academy",
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
      email: "seedlingacademy@hotmail.com",
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
        "https://www.youtube.com/@seedlinginternationalacade1802",
        "https://www.linkedin.com/company/seedling-international-academy/",
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
      email: "seedlingacademy@hotmail.com",
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
        "https://www.youtube.com/@seedlinginternationalacade1802",
        "https://www.linkedin.com/company/seedling-international-academy/",
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
        {
          "@type": "Course",
          name: "Cambridge Primary",
          description:
            "Cambridge Primary for ages 5 to 11 provides a strong foundation and prepares students to progress through the Cambridge Pathway in an age-appropriate way.",
          url: `${siteUrl}/academics/primary`,
          provider: { "@id": organizationId },
        },
        {
          "@type": "Course",
          name: "Cambridge Lower Secondary",
          description:
            "Cambridge Lower Secondary for ages 11 to 14 prepares students for the next step of their education through an age-appropriate Cambridge Pathway.",
          url: `${siteUrl}/academics/lower-secondary`,
          provider: { "@id": organizationId },
        },
        {
          "@type": "Course",
          name: "Cambridge Upper Secondary (IGCSE)",
          description:
            "Cambridge Upper Secondary for ages 14 to 16 offers broad, balanced study across a wide range of subjects using learner-centred, enquiry-based approaches.",
          url: `${siteUrl}/academics/upper-secondary`,
          provider: { "@id": organizationId },
        },
        {
          "@type": "Course",
          name: "Cambridge Advanced (AS & A Level)",
          description:
            "Cambridge International AS & A Levels offer more than 50 subjects for students aged 16 to 19.",
          url: `${siteUrl}/academics/advanced`,
          provider: { "@id": organizationId },
        },
      ],
    },
  ],
};

const SITE_URL = "https://cambridge.seedlingschools.com";

export const siaSchoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  "@id": `${SITE_URL}/campuses/sia#school`,
  name: "Seedling International Academy",
  alternateName: "SIA",
  url: `${SITE_URL}/campuses/sia`,
  telephone: ["+91-7413012351", "+91-141-3623000"],
  sameAs: [
    "https://www.instagram.com/seedlinginternational/",
    "https://www.facebook.com/seedlinginternationalacademy",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 4, Park Lane, Jawahar Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302004",
    addressCountry: "IN",
  },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

export const smiaSchoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  "@id": `${SITE_URL}/campuses/smia#school`,
  name: "Seedling Modern International Academy",
  alternateName: "SMIA",
  url: `${SITE_URL}/campuses/smia`,
  telephone: "+91-95877-72837",
  sameAs: [
    "https://www.instagram.com/smiajaipur/",
    "https://www.facebook.com/SMIAJaipur",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ashok Marg, Mahaveer Nagar II, Durgapura",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302018",
    addressCountry: "IN",
  },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

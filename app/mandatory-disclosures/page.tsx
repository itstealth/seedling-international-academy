"use client";

import HeroWrapper from "@/components/layout/HeroWrapper";

const mandatoryData = [
  {
    section: "1",
    field: "Name of the School with address",
    value: "SEEDLING PUBLIC SCHOOL\nSector- 4 Park Lane, Jawahar Nagar, Jaipur",
    details: [
      { label: "E-mail", value: "seedlingacademy@hotmail.com" },
      { label: "Phone No.", value: "0141-7193000" },
      { label: "Fax No.", value: "0141-2561684" },
    ]
  },
  {
    section: "2",
    field: "Year of establishment of School",
    value: "1992"
  },
  {
    section: "3",
    field: "School Code",
    value: "10441"
  },
  {
    section: "4",
    field: "Status of Affiliation",
    value: "Provisional",
    details: [
      { label: "Affiliation Number", value: "1730084" },
      { label: "Affiliation with the Board since", value: "1993" },
      { label: "Extension of Affiliation upto", value: "31.03.2025" },
    ]
  },
  {
    section: "5",
    field: "Name of Trust/ Society/ Company registered under Section 25 of the Company Act, 1956",
    value: "Mahima Shiksha Samiti",
    details: [
      { label: "Period upto which Registration of Trust/ Society is valid", value: "10.05.2024" },
    ]
  },
  {
    section: "6",
    field: "Documents and Information",
    isList: true,
    listItems: [
      "Affiliation/ Upgradation Letter and Recent Extension of Affiliation",
      "Trust Registration Certificate",
      "No Objection Certificate by the State Government",
      "Recognition Certificate under RTE Act, 2009",
      "Building Safety Certificates as per the National Building Code",
      "Fire Safety Certificates as per the National Building Code",
      "Water, Health and Sanitation Certificate",
      "Fee structure",
      "DEO Certificate",
      "Annual Academic Calendar",
      "List Of School Management Committee (SMC)",
      "List Of Parents Teacher Association (PTA) Members",
      "Last Three-Year Result Of The Board Examination",
      "Fire Fighting Certificate",
    ]
  },
  {
    section: "7",
    field: "Mandatory Public Disclosure",
    value: "View"
  },
  {
    section: "8",
    field: "Area of school campus",
    details: [
      { label: "in sq. mtrs.", value: "3330.28" },
      { label: "Internet Facility", value: "Yes" },
      { label: "Gymnasium", value: "Yes" },
    ]
  },
];

export default function MandatoryDisclosuresPage() {
  return (
    <div className="bg-off-white">
      <HeroWrapper
        backgroundImage="/assets/about/about-banner.jpg"
        title="Mandatory Disclosures"
        badge="CBSE Compliance"
        breadcrumbs={[{ label: "Disclosures" }]}
      />

      {/* Content */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-off-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Table Container */}
          <div
            className="bg-white rounded-2xl shadow-xl shadow-navy/5 border border-navy/10"
          >
            <div className="overflow-x-auto">
            <table className="w-full min-w-150">
              <thead>
                <tr className="bg-linear-to-r from-navy to-navy-dark">
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-white/90">S.No.</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-white/90">Information</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-white/90">Details</th>
                </tr>
              </thead>
              <tbody>
                {mandatoryData.map((item) => (
                  <tr
                    key={item.section}
                    className="border-b border-neutral-100 hover:bg-navy-light/20 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center">
                        <span className="text-sm font-black text-navy">{item.section}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-semibold text-neutral-800 text-sm leading-tight">{item.field}</span>
                    </td>
                    <td className="px-6 py-5">
                      {item.isList ? (
                        <ul className="space-y-1.5">
                          {item.listItems?.map((listItem, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-crimson text-xs">•</span>
                              <span className="text-neutral-600 text-sm">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      ) : item.details ? (
                        <div className="space-y-1">
                          {item.details.map((detail, i) => (
                            <div key={i} className="flex flex-wrap gap-2 items-center">
                              <span className="text-xs text-neutral-500">{detail.label}:</span>
                              <span className="text-xs font-semibold text-neutral-800">{detail.value}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="font-bold text-navy text-sm">{item.value}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
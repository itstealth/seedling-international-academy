"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowUpRight, X } from "lucide-react";
import { Suspense, useMemo } from "react";

// Centralised search index — every page the school has, with keywords
// matched against the user's query.
const SEARCH_INDEX: Array<{
  title: string;
  description: string;
  href: string;
  keywords: string[];
  category: string;
}> = [
  {
    title: "Home",
    description: "Welcome to Seedling International School — beyond education, into transformation.",
    href: "/",
    keywords: ["home", "main", "seedling", "international", "school"],
    category: "General",
  },
  {
    title: "About Us",
    description: "Learn about our history, vision, mission and 30+ years of educational excellence.",
    href: "/about",
    keywords: ["about", "history", "vision", "mission", "story", "nurturing excellence"],
    category: "About",
  },
  {
    title: "Leadership",
    description: "Meet the leadership team guiding Seedling International School.",
    href: "/about/leadership",
    keywords: ["leadership", "principal", "director", "team", "staff"],
    category: "About",
  },
  {
    title: "Our Legacy",
    description: "Three decades of nurturing excellence since 1993.",
    href: "/about/legacy",
    keywords: ["legacy", "1993", "history", "milestone"],
    category: "About",
  },
  {
    title: "Vision",
    description: "Our vision for the future of education at Seedling.",
    href: "/about/vision",
    keywords: ["vision", "future", "philosophy", "values"],
    category: "About",
  },
  {
    title: "Affiliations & Accreditations",
    description: "Cambridge IGCSE and other official affiliations.",
    href: "/about/affiliation",
    keywords: ["affiliation", "accreditation", "cambridge", "igcse", "board"],
    category: "About",
  },
  {
    title: "Academics",
    description: "Cambridge curriculum, learning support, and academic excellence.",
    href: "/academics/curriculum1",
    keywords: ["academics", "curriculum", "cambridge", "syllabus", "subjects"],
    category: "Academics",
  },
  {
    title: "Curriculum",
    description: "Cambridge pathway from Early Years to Advanced Level.",
    href: "/curriculum",
    keywords: ["curriculum", "cambridge", "early years", "primary", "secondary", "advanced", "igcse", "a level"],
    category: "Academics",
  },
  {
    title: "Faculty",
    description: "Meet our experienced and dedicated teaching faculty.",
    href: "/faculty",
    keywords: ["faculty", "teachers", "staff", "educators"],
    category: "Academics",
  },
  {
    title: "Roll of Honour",
    description: "Our toppers and academic achievers over the years.",
    href: "/academics/roll-of-honour",
    keywords: ["roll of honour", "toppers", "merit", "results", "achievers"],
    category: "Academics",
  },
  {
    title: "Learning Support",
    description: "Dedicated support for diverse learners and special needs.",
    href: "/learning-support",
    keywords: ["learning support", "special needs", "diverse learners", "inclusive"],
    category: "Academics",
  },
  {
    title: "Admissions",
    description: "Apply for the 2026–27 academic session. Enquire now.",
    href: "/admissions",
    keywords: ["admissions", "apply", "enquiry", "enroll", "registration", "admission open"],
    category: "Admissions",
  },
  {
    title: "Online Registration",
    description: "Register online for Seedling International School.",
    href: "/admissions/online",
    keywords: ["registration", "online", "apply", "form", "enroll"],
    category: "Admissions",
  },
  {
    title: "Fee Structure",
    description: "Detailed fee structure for the academic year.",
    href: "/admissions/fee-structure",
    keywords: ["fee", "fees", "structure", "cost", "tuition", "price"],
    category: "Admissions",
  },
  {
    title: "Transport Facility",
    description: "Safe and reliable school transport across Jaipur.",
    href: "/transport-facility",
    keywords: ["transport", "bus", "pickup", "drop", "facility", "vehicle"],
    category: "Admissions",
  },
  {
    title: "Results",
    description: "Cambridge IGCSE and A-Level results year after year.",
    href: "/result",
    keywords: ["result", "results", "score", "toppers", "merit", "performance", "100 percent"],
    category: "Academics",
  },
  {
    title: "News & Events",
    description: "Latest news, events, press releases and announcements.",
    href: "/news-and-events",
    keywords: ["news", "events", "press", "announcement", "updates"],
    category: "School Life",
  },
  {
    title: "School Life",
    description: "Explore the vibrant campus life, sports, arts and beyond.",
    href: "/school-life",
    keywords: ["school life", "campus", "activities", "sports", "arts", "culture"],
    category: "School Life",
  },
  {
    title: "Sports",
    description: "Athletics, cricket, football, basketball and more.",
    href: "/school-life#sports",
    keywords: ["sports", "athletics", "cricket", "football", "basketball", "games"],
    category: "School Life",
  },
  {
    title: "Career",
    description: "Join the Seedling team — current openings and how to apply.",
    href: "/career",
    keywords: ["career", "jobs", "vacancy", "hiring", "work", "apply", "teaching jobs"],
    category: "Connect",
  },
  {
    title: "Alumni",
    description: "Connect with Seedling alumni across the globe.",
    href: "/alumni",
    keywords: ["alumni", "alumnus", "graduate", "former student", "network"],
    category: "Connect",
  },
  {
    title: "Contact Us",
    description: "Get in touch with Seedling International School, Jaipur.",
    href: "/contact-us",
    keywords: ["contact", "phone", "email", "address", "location", "reach", "jaipur"],
    category: "Connect",
  },
  {
    title: "Mandatory Disclosures",
    description: "All mandatory public disclosures as per CBSE / Cambridge norms.",
    href: "/mandatory-disclosures",
    keywords: ["disclosure", "mandatory", "public", "cbse", "norms"],
    category: "Connect",
  },
  {
    title: "Policies",
    description: "School policies on safety, conduct and child protection.",
    href: "/policies",
    keywords: ["policy", "policies", "rules", "safety", "child protection", "conduct"],
    category: "Connect",
  },
  {
    title: "Terms & Conditions",
    description: "Terms governing the use of this website.",
    href: "/terms-and-conditions",
    keywords: ["terms", "conditions", "legal", "agreement"],
    category: "Connect",
  },
  {
    title: "ERP Login",
    description: "Parent / student ERP login portal.",
    href: "/erp-login",
    keywords: ["erp", "login", "portal", "parent", "student"],
    category: "Connect",
  },
];

function highlight(text: string, q: string) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
  const parts = text.split(re);
  return parts.map((p, i) =>
    re.test(p) ? (
      <mark key={i} className="bg-sand/40 text-navy-deeper rounded px-0.5">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

function SearchResults() {
  const params = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return SEARCH_INDEX
      .map((item) => {
        const haystack = (
          item.title +
          " " +
          item.description +
          " " +
          item.keywords.join(" ") +
          " " +
          item.category
        ).toLowerCase();
        const score =
          (item.title.toLowerCase().includes(q) ? 50 : 0) +
          (item.keywords.some((k) => k.toLowerCase().includes(q)) ? 30 : 0) +
          (item.description.toLowerCase().includes(q) ? 15 : 0) +
          (haystack.split(q).length - 1) * 5;
        return { item, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.item);
  }, [q]);

  return (
    <div className="bg-off-white min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Search bar */}
        <form
          action="/search"
          method="GET"
          className="flex items-center gap-3 bg-white rounded-2xl shadow-lg border border-sand/40 px-5 py-4"
        >
          <Search className="w-5 h-5 text-navy-deeper flex-shrink-0" />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search the school..."
            autoFocus
            className="flex-1 min-w-0 bg-transparent outline-none font-playfair text-lg text-text-base placeholder:text-[#8c8c8c]"
          />
          {q && (
            <Link
              href="/search"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300 text-text-light hover:bg-navy-deeper hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </Link>
          )}
        </form>

        {/* Status line */}
        <div className="mt-6 mb-8">
          {q ? (
            <p className="text-text-light text-sm">
              {results.length > 0 ? (
                <>
                  Found{" "}
                  <span className="font-black text-navy-deeper">
                    {results.length}
                  </span>{" "}
                  result{results.length === 1 ? "" : "s"} for{" "}
                  <span className="font-black text-navy-deeper">
                    &ldquo;{q}&rdquo;
                  </span>
                </>
              ) : (
                <>
                  No results found for{" "}
                  <span className="font-black text-navy-deeper">
                    &ldquo;{q}&rdquo;
                  </span>
                  . Try a different keyword.
                </>
              )}
            </p>
          ) : (
            <p className="text-text-light text-sm">
              Type a query above to search across the school website.
            </p>
          )}
        </div>

        {/* Results */}
        {results.length > 0 && (
          <ul className="space-y-3">
            {results.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-start justify-between gap-4 bg-white rounded-2xl border border-sand/40 p-5 hover:border-royal-blue/40 hover:shadow-lg transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-crimson">
                      {item.category}
                    </span>
                    <h3 className="font-playfair text-xl font-semibold text-navy-deeper mt-1 mb-1 group-hover:text-royal-blue transition-colors">
                      {highlight(item.title, q)}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {highlight(item.description, q)}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-light group-hover:text-royal-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        {q && results.length === 0 && (
          <div className="bg-white rounded-2xl border border-sand/40 p-10 text-center">
            <p className="text-text-light">
              Try searching for{" "}
              <span className="font-semibold text-navy-deeper">
                admissions
              </span>
              ,{" "}
              <span className="font-semibold text-navy-deeper">curriculum</span>
              ,{" "}
              <span className="font-semibold text-navy-deeper">transport</span>
              , or{" "}
              <span className="font-semibold text-navy-deeper">faculty</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-off-white min-h-screen pt-12 pb-24">
          <div className="max-w-4xl mx-auto px-6 text-text-light">
            Loading…
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}

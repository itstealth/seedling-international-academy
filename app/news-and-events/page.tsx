"use client";

import { useEffect, useRef, useState } from "react";

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Highlight Data ───────────────────────────────────────────────────────────
const highlights = [
  {
    id: 1,
    title: "Academic Block & Smart Classes",
    excerpt:
      "Fully air-conditioned classrooms equipped with smart boards and digital tools, fostering technology-enabled interactive and experiential learning.",
    image: "/assets/Home/classroom1.webp",
    icon: "🏫",
  },
  {
    id: 2,
    title: "The Knowledge Hub (Library)",
    excerpt:
      "A well-stocked library encouraging reading habits and independent learning, serving as a hub for academic resources and literature.",
    image: "/assets/Home/ScienceLabs.webp",
    icon: "📚",
  },
  {
    id: 3,
    title: "Sports & Physical Education",
    excerpt:
      "A dedicated playground and facilities for various sports including basketball, helping inculcate discipline, teamwork, and leadership.",
    image: "/assets/NATIONAL SPORTS DAY/1.webp",
    icon: "🏀",
  },
  {
    id: 4,
    title: "Safety & Well-being First",
    excerpt:
      "A secure environment with proper supervision, first-aid facilities, and transport services, ensuring a balanced space for personal growth.",
    image: "/assets/SAY NO TO SUGAR/1.webp",
    icon: "🛡️",
  },
];

// ─── Gallery Snapshots ────────────────────────────────────────────────────────
const snapshots = [
  { src: "/assets/JAISELMER TRIP/1.webp", label: "Jaisalmer Trip", aspect: "aspect-[4/5]" },
  { src: "/assets/HALLOWEEN/1.webp", label: "Halloween Fest", aspect: "aspect-[4/3]" },
  { src: "/assets/BAISAKHI/1.webp", label: "Baisakhi Celebration", aspect: "aspect-[4/5]" },
  { src: "/assets/XMAS CARNIVAL/1.webp", label: "Christmas Carnival", aspect: "aspect-[4/3]" },
  { src: "/assets/MOTHER CHILD COOK OFF/1.webp", label: "Cook Off Event", aspect: "aspect-[4/5]" },
  { src: "/assets/STELLAR SATURDAYS/1.webp", label: "Stellar Saturday", aspect: "aspect-[4/3]" },
  { src: "/assets/ANNUAL FUNCTION/5.webp", label: "Annual Day Performance", aspect: "aspect-[4/5]" },
  { src: "/assets/INTERNATIONAL GUIDANCE (CAMBRIDGE)/3.webp", label: "International Guidance", aspect: "aspect-[4/3]" },
];

// ─── Christmas Gallery ────────────────────────────────────────────────────────
const christmasGallery = [
  "/assets/XMAS CARNIVAL/christmas 3.webp",
  "/assets/XMAS CARNIVAL/christmas 1.webp",
  "/assets/XMAS CARNIVAL/christmas 2.webp",
  "/assets/XMAS CARNIVAL/christmas 5.webp",
];

// ─── Sports Day Gallery ────────────────────────────────────────────────────────
const sportsDayGallery = [
  "/assets/Home/pgt.jpeg",
  "/assets/Home/prt.jpeg",
];

// ─── Foundation Items ──────────────────────────────────────────────────────────
const foundationItems = [
  {
    id: 1,
    category: "Foundation",
    title: "Foundation Day Celebrations at Seedling Public School",
    date: "2024",
    image: "/assets/Media/foundation/media-coverage-1.jpeg",
    color: "bg-navy",
  },
  {
    id: 2,
    category: "Foundation",
    title: "Annual Foundation Day Ceremony — Honoring Legacy and Excellence",
    date: "2024",
    image: "/assets/Media/foundation/media-coverage-2.jpeg",
    color: "bg-crimson",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CampusHighlightsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">

      {/* ══════════════════════════════════════════════════════
          1. HERO BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[55vh] min-h-[480px] flex items-center overflow-hidden">
        <img
          src="/assets/ANNUAL FUNCTION/1.webp"
          alt="Campus Highlights at Seedling Schools"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/90 via-navy-deeper/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <Reveal delay={100}>
            <h1 className="font-playfair text-white font-light text-4xl md:text-5xl leading-[1.05] mb-6 inline-block">
              News &{" "}
              <em className="font-semibold text-crimson">Events</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. FEATURED ARTICLE
      ══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-8 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Label */}
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase font-dm">
                <span className="w-8 h-px bg-navy inline-block" />
                Campus Highlights
              </span>
              <span className="text-[10px] text-text-light font-black tracking-[0.2em] uppercase font-dm">
                — Featured Story
              </span>
            </div>
          </Reveal>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Large Feature — Left — SPS Sports Day */}
            <div>
              <Reveal delay={100}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedGallery(sportsDayGallery);
                    setGalleryIndex(0);
                  }}
                  className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src="/assets/Home/pgt.jpeg"
                      alt="SPS Sports Day"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                   
                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                      <span className="inline-block bg-navy text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase mb-4 font-dm">
                        Sports Day
                      </span>
                      <h2 className="font-playfair text-2xl font-bold text-white leading-tight mb-3">
                        SPS Sports Day
                      </h2>
                   
                      <div className="mt-5 flex items-center gap-4 font-dm">
                        
                        <span className="w-1 h-1 rounded-full bg-sand/50" />
                        <span className="text-sand text-[10px] font-black uppercase tracking-widest group-hover:underline">View Gallery →</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            </div> 

            {/* Right Column */}
            <div>
              <Reveal delay={300}>
                <a
                  href="#"
                  className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200 h-full">
                    <img
                      src="/assets/ANNUAL FUNCTION/7.webp"
                      alt="SPS Annual Day"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block bg-navy text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase mb-3 font-dm">
                        Celebration
                      </span>
                      <h2 className="font-playfair text-xl md:text-2xl font-bold text-white leading-tight">
                        SPS Annual Day
                      </h2>
                      <p className="text-white/70 text-xs mt-1 line-clamp-1 font-dm font-light">
                        An evening of performances, awards, and shared pride across the Seedling family.
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Stats Band */}
          {/* <Reveal delay={400}>
            <div className="mt-12 bg-white rounded-[2rem] border border-sand/40 shadow-xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-sand/20">
              {[
                { value: "20,000+", label: "Students" },
                { value: "15:1", label: "Student-Teacher Ratio" },
                { value: "5,000+", label: "Alumni Network" },
                { value: "100%", label: "Academic Results" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center px-4">
                  <p className="font-playfair text-2xl md:text-3xl font-bold text-navy-deeper">{value}</p>
                  <p className="text-text-light text-[10px] font-black mt-1 uppercase tracking-widest font-dm">{label}</p>
                </div>
              ))}
            </div>
          </Reveal> */}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. NEWS GRID
      ══════════════════════════════════════════════════════ */}
      <section className="pt-8 md:pt-20 md:pb-8 bg-sand/10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <Reveal>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase mb-3 font-dm">
                  <span className="w-8 h-px bg-navy" />
                  Media Coverage
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-none">
                  In the {" "}
                  <span className="text-crimson">News</span>
                </h2>
              </div>
            </div>
          </Reveal>

          {/* Asymmetric grid for first 5 items */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-5">
              <NewsCard large delay={100} item={newsItems[0]} onClick={() => setSelectedImage(newsItems[0].image)} />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {newsItems.slice(1, 5).map((item, i) => (
                <NewsCard key={item.id} item={item} delay={(i + 2) * 100} onClick={() => setSelectedImage(item.image)} />
              ))}
            </div>
          </div>
          
          {/* Standard grid for remaining items */}
          {newsItems.length > 5 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.slice(5).map((item) => (
                <NewsCard key={item.id} item={item} delay={100} onClick={() => setSelectedImage(item.image)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3b. FOUNDATION
      ══════════════════════════════════════════════════════ */}
      <section className="pt-8 md:pt-10 md:pb-8 bg-sand/10">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-12 flex items-end justify-between">
              <div>
               
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-none">
                  Founder's <span className="text-crimson">Day</span>
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundationItems.map((item, i) => (
              <NewsCard key={item.id} item={item} delay={i * 100} onClick={() => setSelectedImage(item.image)} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. EVENT CARDS
      ══════════════════════════════════════════════════════ */}
      <section className="pt-8 pb-12 md:pt-20 md:pb-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <Reveal>
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase mb-3 font-dm">
                <span className="w-8 h-px bg-navy" />
                Campus Events
              </span>
              <div className="flex items-end justify-between">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-none">
                  Moments That<br />
                  <span className="text-crimson">Define Us</span>
                </h2>
                <a
                  href="https://seedlingschools.com/media.php"
                  className="hidden md:inline-flex items-center gap-2 text-navy font-black text-[10px] uppercase tracking-widest border-2 border-sand/40 px-6 py-3 rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 font-dm"
                >
                  View all events →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <Reveal key={event.id} delay={i * 80}>
                <a
                  href="#"
                  onClick={(e) => {
                    if (event.gallery) {
                      e.preventDefault();
                      setSelectedGallery(event.gallery);
                      setGalleryIndex(0);
                    }
                  }}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-editorial transition-all duration-500 hover:-translate-y-2 border border-sand/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className={`absolute top-4 left-4 ${event.tagColor} text-white text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase font-dm`}>
                      {event.tag}
                    </span>
                    {event.gallery && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xs font-black tracking-widest uppercase font-dm">+{event.gallery.length} images</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-playfair text-3xl font-bold text-crimson">{event.date}</span>
                      <span className="text-[10px] font-black text-text-light uppercase tracking-widest font-dm">{event.year}</span>
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-navy-deeper mb-2 leading-tight">{event.title}</h3>
                    <p className="text-text-light text-sm leading-relaxed font-dm font-light line-clamp-2">{event.description}</p>
                    <div className="mt-5 w-8 h-1 bg-sand/40 group-hover:w-16 group-hover:bg-sand transition-all duration-500 rounded-full" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    {/* ══════════════════════════════════════════════════════
          4. BUILT FOR THE FUTURE, ROOTED IN VALUES
      ══════════════════════════════════════════════════════ */}
      <section className="pt-16 md:pt-20 md:pb-8 py-8 bg-navy-deeper overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <Reveal>
            <div className="mb-14 text-center">
              <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-sand uppercase mb-4 font-dm">
                <span className="w-8 h-px bg-sand" />
                What Makes Us Special
                <span className="w-8 h-px bg-sand" />
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight">
                Built for the Future,
                <br />
                <span className="text-sand">Rooted in Values</span>
              </h2>
              <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto font-dm font-light">
                Our goal is to equip students with knowledge and skills they need to succeed while promoting their
                personal growth and holistic development.
              </p>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden bg-stone-800 hover:bg-stone-700 transition-colors duration-300 cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/90 via-navy-deeper/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-playfair text-base font-bold text-white leading-tight group-hover:text-sand transition-colors duration-200 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-3 font-dm font-light">{item.excerpt}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quote */}
          <Reveal delay={500}>
            <div className="mt-8 md:mt-16 border-t border-white/10 pt-12 text-center">
              <blockquote className="font-playfair text-xl md:text-2xl text-white italic max-w-3xl mx-auto leading-relaxed">
                "Part of the art of teaching is the ability to rearrange the world for students to guide them to see
                things in a new way."
              </blockquote>
              <cite className="text-sand text-[10px] font-black uppercase tracking-widest mt-4 block not-italic font-dm">
                — Sunny Decker
              </cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. LIFE AT SEEDLING (GALLERY)
      ══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-12 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <Reveal>
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase mb-3 font-dm">
                <span className="w-8 h-px bg-navy" />
                Snippets of Seedling
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-none">
                Life at<br />
                <span className="text-crimson">Seedling</span>
              </h2>
            </div>
          </Reveal>

          {/* Masonry strip */}
          <Reveal delay={100}>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {snapshots.map((snap, i) => (
                <div
                  key={i}
                  className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`relative ${snap.aspect} overflow-hidden bg-stone-100`}>
                    <img
                      src={snap.src}
                      alt={snap.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-dm">
                      <p className="text-white text-[10px] font-black uppercase tracking-widest">{snap.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

       
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          IMAGE MODAL
      ══════════════════════════════════════════════════════ */}
      {(selectedImage || selectedGallery) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => { setSelectedImage(null); setSelectedGallery(null); }}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-crimson transition-colors z-50 p-2"
            onClick={() => { setSelectedImage(null); setSelectedGallery(null); }}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {selectedGallery ? (
            <>
              <button
                className="absolute left-4 md:left-8 text-white hover:text-sand transition-colors z-50 p-2"
                onClick={(e) => { e.stopPropagation(); setGalleryIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length); }}
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img
                src={selectedGallery[galleryIndex]}
                alt="Gallery view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute right-4 md:right-8 text-white hover:text-sand transition-colors z-50 p-2"
                onClick={(e) => { e.stopPropagation(); setGalleryIndex((prev) => (prev + 1) % selectedGallery.length); }}
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setGalleryIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === galleryIndex ? "bg-sand" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <img
              src={selectedImage!}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </main>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const newsItems = [
  {
    id: 1,
    category: "Media Coverage",
    title: "Investiture Ceremony 2026-27 — 200+ Student Leaders Inducted at SPS",
    date: "04 May 2026",
    image: "/assets/Media/media-coverage-1.jpeg",
    color: "bg-navy",
  },
  {
    id: 2,
    category: "In the News",
    title: "Challengers Trophy 2026 Winners Honoured by Seedling Group of Schools",
    date: "26 Apr 2026",
    image: "/assets/Media/media-coverage-2.jpeg",
    color: "bg-crimson",
  },
  {
    id: 3,
    category: "Press Release",
    title: "Dr. Sandeep Bakshi Appointed UN Goodwill Ambassador — First from an Indian University",
    date: "18 Apr 2026",
    image: "/assets/Media/media-coverage-3.jpeg",
    color: "bg-navy-dark",
  },
  {
    id: 4,
    category: "Media Spotlight",
    title: "Mother Successfully Donates Kidney to Daughter at JNU Hospital Under Ayushman Bharat",
    date: "05 Mar 2026",
    image: "/assets/Media/media-coverage-4.jpeg",
    color: "bg-crimson-dark",
  },
  {
    id: 5,
    category: "In the News",
    title: "Indian Army Honours Dr. Sandeep Bakshi; JNU Announces Scholarships for Soldiers' Children",
    date: "20 Jan 2026",
    image: "/assets/Media/media-coverage-5.jpeg",
    color: "bg-sand",
  },
  {
    id: 6,
    category: "Media Spotlight",
    title: "Sacred Guruji Satsang Held at Seedling Public School",
    date: "13 Jan 2026",
    image: "/assets/Media/media-coverage-6.jpeg",
    color: "bg-navy",
  },
  {
    id: 7,
    category: "Media Spotlight",
    title: "Class of 2000 Alumni Reunite at Seedling to Celebrate 25th Anniversary",
    date: "11 Jan 2026",
    image: "/assets/Media/media-coverage-7.jpeg",
    color: "bg-crimson",
  },
  {
    id: 8,
    category: "Media Spotlight",
    title: "Dr. Sandeep Bakshi Donates ₹10 Lakh to Army Wives Welfare Association (AWWA)",
    date: "07 Jan 2026",
    image: "/assets/Media/media-coverage-8.jpeg",
    color: "bg-navy-dark",
  },
  {
    id: 9,
    category: "Media Spotlight",
    title: "Dr. Sandeep Bakshi Honoured in University Chancellors-2025 Category by CEO Insights",
    date: "22 Dec 2025",
    image: "/assets/Media/media-coverage-9.jpeg",
    color: "bg-crimson-dark",
  },
  {
    id: 10,
    category: "Media Spotlight",
    title: "Dr. Sandeep Bakshi Named Among India's Most Influential University Chancellors 2025",
    date: "22 Dec 2025",
    image: "/assets/Media/media-coverage-10.jpeg",
    color: "bg-sand",
  },
  {
    id: 11,
    category: "Media Spotlight",
    title: "SPS 31st Annual Function Frozen Staged at Birla Auditorium — 1,500 Students Perform",
    date: "20 Dec 2025",
    image: "/assets/Media/media-coverage-11.jpeg",
    color: "bg-navy",
  },
  {
    id: 12,
    category: "Media Spotlight",
    title: "Historic First Patient Airlift from Mumbai to Jaipur for Treatment at JNU Hospital",
    date: "26 Nov 2025",
    image: "/assets/Media/media-coverage-12.jpeg",
    color: "bg-crimson",
  },
  {
    id: 13,
    category: "Media Spotlight",
    title: "Rajasthan Medical Milestone — Patient Airlifted to JNU Hospital in Record Time",
    date: "26 Nov 2025",
    image: "/assets/Media/media-coverage-13.jpeg",
    color: "bg-navy-dark",
  },
  // {
  //   id: 14,
  //   category: "Media Spotlight",
  //   title: "Seedling Excellence Featured in News",
  //   excerpt: "Catch the latest coverage of Seedling Group of Schools as we continue our journey of educational excellence.",
  //   date: "23 Nov 2025",
  //   image: "/assets/Media/media-coverage-14.jpeg",
  //   color: "bg-crimson-dark",
  // },
  {
    id: 15,
    category: "Media Spotlight",
    title: "SPS Sports Day at JNU Ground — 1,200+ Students Compete in Track and Field Events",
    date: "05 Nov 2025",
    image: "/assets/Media/media-coverage-15.jpeg",
    color: "bg-sand",
  },
  {
    id: 16,
    category: "Media Spotlight",
    title: "Patrika Plus: Seedling Students Excel in Annual Sports Day Athletics",
    date: "05 Nov 2025",
    image: "/assets/Media/media-coverage-16.jpeg",
    color: "bg-navy",
  },
  {
    id: 17,
    category: "Media Spotlight",
    title: "JNU and Seedling Group Donate Furniture and Books to Government School in Ramnagariya",
    date: "11 Jul 2025",
    image: "/assets/Media/media-coverage-17.jpeg",
    color: "bg-crimson",
  },
  {
    id: 18,
    category: "Media Spotlight",
    title: "Dr. Bakshi: Committed to Empowering Every Section of Society Through Education",
    date: "11 Jul 2025",
    image: "/assets/Media/media-coverage-18.jpeg",
    color: "bg-navy-dark",
  },
  {
    id: 19,
    category: "Media Spotlight",
    title: "JNU Ranks 2nd in Rajasthan and Top 50 Nationally in India Today-MDRA Survey 2025",
    date: "06 Jul 2025",
    image: "/assets/Media/media-coverage-19.jpeg",
    color: "bg-crimson-dark",
  },
  {
    id: 20,
    category: "Media Spotlight",
    title: "JNU NAAC A+ Accreditation and Dubai Campus Highlighted in India Today Survey",
    date: "06 Jul 2025",
    image: "/assets/Media/media-coverage-20.jpeg",
    color: "bg-sand",
  },
  {
    id: 21,
    category: "Media Spotlight",
    title: "Seedling Students Shine in CBSE Boards — Sanyam Agrawal Scores 99.2% in Commerce",
    date: "15 May 2025",
    image: "/assets/Media/media-coverage-21.jpeg",
    color: "bg-navy",
  },
];

function NewsCard({ item = newsItems[0], large = false, delay = 0, onClick }: { item?: (typeof newsItems)[0]; large?: boolean; delay?: number; onClick?: () => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={`group block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: "opacity, transform", transitionDuration: "700ms" }}
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/9]" : "aspect-[4/3]"} bg-stone-100`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span
          className={`absolute top-4 left-4 ${item.color} text-white text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase font-dm`}
        >
          {item.category}
        </span>
      </div>
      <div className={`p-5 ${large ? "md:p-7" : ""}`}>
        <p className="text-text-light text-[10px] font-black tracking-widest uppercase mb-2 font-dm">{item.date}</p>
        <h3
          className={`font-playfair font-bold text-navy-deeper leading-tight group-hover:text-crimson transition-colors duration-200 ${
            large ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {item.title}
        </h3>
        <span className="inline-flex items-center gap-1 text-navy text-[10px] font-black uppercase tracking-widest mt-4 group-hover:gap-2 transition-all duration-200 font-dm">
          View Image <span>→</span>
        </span>
      </div>
    </div>
  );
}

// ─── Event Data ───────────────────────────────────────────────────────────────
const events = [
  // {
  //   id: 1,
  //   title: "Yoga & Meditation Day",
  //   date: "June 21",
  //   year: "2025",
  //   description:
  //     "Students and staff embrace mindfulness and physical well-being with guided yoga and meditation sessions across all campuses.",
  //   image: "/assets/WHISPERS OF WELLNESS/2.webp",
  //   tag: "Wellness",
  //   tagColor: "bg-navy",
  // },
  {
    id: 2,
    title: "Mother's Day Celebrations",
    date: "May 11",
    year: "2025",
    description:
      "A heartfelt tribute to all the mothers — featuring performances, handmade gifts, and moments of love shared by students.",
    image: "/assets/MOTHER_S DAY/2.webp",
    tag: "Community",
    tagColor: "bg-crimson",
  },
  {
    id: 3,
    title: "SPS Farewell Programme",
    date: "March 28",
    year: "2025",
    description:
      "Bidding farewell to the graduating class with an evening of nostalgia, awards, and cherished memories.",
    image: "/assets/FAREWELL 12TH/1.webp",
    tag: "Milestone",
    tagColor: "bg-sand",
  },
  // {
  //   id: 4,
  //   title: "SMHS Sports Carnival",
  //   date: "December 14",
  //   year: "2024",
  //   description:
  //     "A high-energy carnival celebrating athletic talent, team spirit, and the joy of healthy competition.",
  //   image: "/assets/NATIONAL SPORTS DAY/2.webp",
  //   tag: "Sports",
  //   tagColor: "bg-navy-dark",
  // },
  {
    id: 5,
    title: "CBSE Result Celebrations",
    date: "May 20",
    year: "2025",
    description:
      "100% results year after year — celebrating the outstanding academic achievements of Seedling students.",
    image: "/assets/FELICITATING TOPPERS IN BOARDS/1.webp",
    tag: "Academics",
    tagColor: "bg-crimson-dark",
  },
  {
    id: 6,
    title: "Christmas Festivities",
    date: "December 24",
    year: "2024",
    description:
      "The campus comes alive with carols, decorations, and the festive spirit shared by the entire Seedling community.",
    image: "/assets/XMAS CARNIVAL/christmas.webp",
    tag: "Festival",
    tagColor: "bg-navy-deeper",
    gallery: christmasGallery,
  },
];
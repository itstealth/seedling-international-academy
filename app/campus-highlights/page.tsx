// app/campus-highlights/page.tsx
// (or pages/campus-highlights.tsx for Pages Router)

"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   1. FEATURED ARTICLE
───────────────────────────────────────────── */
function FeaturedArticle() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-24 pb-8 md:pt-24 md:pb-14 bg-off-white" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out mb-10 flex items-center gap-4">
          <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase font-dm">
            <span className="w-8 h-px bg-navy inline-block" />
            Campus Highlights
          </span>
          <span className="text-[10px] text-text-light font-black tracking-[0.2em] uppercase font-dm">
            — Featured Story
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Feature — Left */}
          <div className="lg:col-span-7 fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
            <a
              href="#"
              className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src="https://seedlingschools.com/assets/img/founderday18.jpg"
                  alt="Founders Day — Seedling Group of Schools"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/90 via-navy-deeper/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <span className="inline-block bg-navy text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase mb-4 font-dm">
                    Campus Overview
                  </span>
                  <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                    School Campus: A Vibrant Space to Grow
                  </h1>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl line-clamp-3 font-dm font-light">
                    Seedling Public School Jawahar Nagar reflects a harmonious blend of modern infrastructure and a nurturing environment. 
                    Spread across a well-planned area, the campus is designed to provide a safe, stimulating, and engaging atmosphere 
                    conducive to learning and holistic development.
                  </p>
                  <div className="mt-5 flex items-center gap-4 font-dm">
                    <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Jawahar Nagar, Jaipur</span>
                    <span className="w-1 h-1 rounded-full bg-sand/50" />
                    <span className="text-sand text-[10px] font-black uppercase tracking-widest group-hover:underline">Explore Campus →</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column — Two stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1 */}
            <a
              href="#"
              className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 fade-up opacity-0 translate-y-8 transition-all ease-out"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-200">
                <img
                  src="https://seedlingschools.com/assets/img/SMHS-Annual-Day.jpg"
                  alt="SMHS Annual Day"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-navy-deeper/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block bg-sand text-navy-deeper text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase mb-3 font-dm">
                    School Life
                  </span>
                  <h2 className="font-playfair text-xl md:text-2xl font-bold text-white leading-tight">
                    SMHS Annual Day
                  </h2>
                  <p className="text-white/70 text-xs mt-1 line-clamp-1 font-dm font-light">
                    Students, teachers, and parents come together to celebrate achievements and creativity.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#"
              className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 fade-up opacity-0 translate-y-8 ease-out"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-200">
                <img
                  src="https://seedlingschools.com/assets/img/Sps-annual-day.jpg"
                  alt="SPS Annual Day"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-navy-deeper/10 to-transparent" />
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
          </div>
        </div>

        {/* Stats Band */}
        <div
          className="mt-12 fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="bg-white rounded-[2rem] border border-sand/40 shadow-xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-sand/20">
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
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. NEWS GRID
───────────────────────────────────────────── */
const newsItems = [
  {
    id: 1,
    category: "Education",
    title: "Dialogue Over Division — How Schools Can Shape a Conflict-Free Future",
    excerpt:
      "In a world where differences often turn into divisions, the true power to build peace lies not in politics — but in education.",
    date: "10 Mar 2025",
    image: "/assets/BOOT CAMP/1.webp",
    large: true,
    color: "bg-navy",
  },
  {
    id: 2,
    category: "Wellbeing",
    title: "Healthy Screen Time for Young Kids",
    excerpt:
      "What helps, what hurts, and what to do instead — in today's digital age, screens are everywhere.",
    date: "09 Mar 2025",
    image: "/assets/WHISPERS OF WELLNESS/1.webp",
    large: false,
    color: "bg-crimson",
  },
  {
    id: 3,
    category: "Cambridge",
    title: "From Classroom to Global Stage — The Cambridge Learning Approach",
    excerpt:
      "Parents today want a learning system that builds confidence, critical thinking, and global awareness.",
    date: "10 Feb 2025",
    image: "/assets/Home/smart-classroom.jpg",
    large: false,
    color: "bg-navy-dark",
  },
  {
    id: 4,
    category: "Student Life",
    title: "Benefits of Extracurricular Activities for Cambridge Students",
    excerpt:
      "Today's parents want schools that go beyond academics and build well-rounded, confident learners.",
    date: "06 Feb 2025",
    image: "/assets/SPARKLE FEST/1.webp",
    large: false,
    color: "bg-crimson-dark",
  },
  {
    id: 5,
    category: "NEP",
    title: "Integrated Curriculum in Schools — What Parents Should Know",
    excerpt:
      "Choosing the best CBSE school means looking for schools that focus on integrated, holistic development.",
    date: "03 Feb 2025",
    image: "/assets/Home/classroom.jpg",
    large: false,
    color: "bg-sand",
  },
];

function NewsCard({
  item,
  large = false,
  delay = 0,
}: {
  item: (typeof newsItems)[0];
  large?: boolean;
  delay?: number;
}) {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white fade-up opacity-0 translate-y-6"
      style={{ transitionDelay: `${delay}ms` }}
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
        <p className="text-text-light text-sm leading-relaxed mt-2 line-clamp-2 font-dm font-light">{item.excerpt}</p>
        <span className="inline-flex items-center gap-1 text-navy text-[10px] font-black uppercase tracking-widest mt-4 group-hover:gap-2 transition-all duration-200 font-dm">
          Read more <span>→</span>
        </span>
      </div>
    </a>
  );
}

function NewsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-8 md:pt-20 md:pb-8 bg-sand/10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out mb-12 flex items-end justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase mb-3 font-dm">
              <span className="w-8 h-px bg-navy" />
              Latest from the Blog
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-none">
              News &<br />
              <span className="text-crimson">Insights</span>
            </h2>
          </div>
          <a
            href="https://seedlingschools.com/blog"
            className="hidden md:inline-flex items-center gap-2 text-navy font-black text-[10px] uppercase tracking-widest border-2 border-sand/40 px-6 py-3 rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 font-dm"
          >
            View all articles →
          </a>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <NewsCard item={newsItems[0]} large delay={100} />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {newsItems.slice(1).map((item, i) => (
              <NewsCard key={item.id} item={item} delay={(i + 2) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. EVENT CARDS
───────────────────────────────────────────── */
const events = [
  {
    id: 1,
    title: "Yoga & Meditation Day",
    date: "June 21",
    year: "2025",
    description:
      "Students and staff embrace mindfulness and physical well-being with guided yoga and meditation sessions across all campuses.",
    image: "/assets/WHISPERS OF WELLNESS/2.webp",
    tag: "Wellness",
    tagColor: "bg-navy",
  },
  {
    id: 2,
    title: "Mother's Day Celebrations",
    date: "May 11",
    year: "2025",
    description:
      "A heartfelt tribute to all the mothers — featuring performances, handmade gifts, and moments of love shared by students.",
    image: "/assets/MOTHER_S DAY/1.webp",
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
    image: "/assets/ANNUAL FUNCTION/2.webp",
    tag: "Milestone",
    tagColor: "bg-sand",
  },
  {
    id: 4,
    title: "SMHS Sports Carnival",
    date: "December 14",
    year: "2024",
    description:
      "A high-energy carnival celebrating athletic talent, team spirit, and the joy of healthy competition.",
    image: "/assets/SPORTS DAY/1.webp",
    tag: "Sports",
    tagColor: "bg-navy-dark",
  },
  {
    id: 5,
    title: "CBSE Result Celebrations",
    date: "May 20",
    year: "2025",
    description:
      "100% results year after year — celebrating the outstanding academic achievements of Seedling students.",
    image: "/assets/STELLAR SATURDAYS/1.webp",
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
    image: "/assets/XMAS CARNIVAL/1.webp",
    tag: "Festival",
    tagColor: "bg-navy-deeper",
  },
];

function EventCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-8 pb-12 md:pt-20 md:pb-8 bg-[#FAFAF8]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="fade-up opacity-0 translate-y-6 mb-12">
          <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase mb-3 font-dm">
            <span className="w-8 h-px bg-navy" />
            Campus Events
          </span>
          <div className="flex items-end justify-between">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-none">
              Moments That
              <br />
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <a
              key={event.id}
              href="#"
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 fade-up opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span
                  className={`absolute top-4 left-4 ${event.tagColor} text-white text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase font-dm`}
                >
                  {event.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3 font-dm">
                  <span className="text-[9px] font-black text-navy-deeper bg-sand/20 px-3 py-1 rounded-full uppercase tracking-widest">
                    {event.date}, {event.year}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy-deeper leading-tight group-hover:text-crimson transition-colors duration-200">
                  {event.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mt-2 line-clamp-2 font-dm font-light">{event.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. HIGHLIGHT ROW
───────────────────────────────────────────── */
const highlights = [
  {
    id: 1,
    title: "Academic Block & Smart Classes",
    excerpt:
      "Fully air-conditioned classrooms equipped with smart boards and digital tools, fostering technology-enabled interactive and experiential learning.",
    image: "/assets/Home/classroom.jpg",
    icon: "🏫",
  },
  {
    id: 2,
    title: "The Knowledge Hub (Library)",
    excerpt:
      "A well-stocked library encouraging reading habits and independent learning, serving as a hub for academic resources and literature.",
    image: "/assets/Home/library.jpg",
    icon: "📚",
  },
  {
    id: 3,
    title: "Sports & Physical Education",
    excerpt:
      "A dedicated playground and facilities for various sports including basketball, helping inculcate discipline, teamwork, and leadership.",
    image: "/assets/SPORTS DAY/2.webp",
    icon: "🏀",
  },
  {
    id: 4,
    title: "Safety & Well-being First",
    excerpt:
      "A secure environment with proper supervision, first-aid facilities, and transport services, ensuring a balanced space for personal growth.",
    image: "/assets/Home/smart-classroom.jpg",
    icon: "🛡️",
  },
];

function HighlightRow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="md:pt-20 md:pb-8 py-8 bg-navy-deeper overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="fade-up opacity-0 translate-y-6 mb-14 text-center">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-800 hover:bg-stone-700 transition-colors duration-300 cursor-pointer fade-up opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
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
          ))}
        </div>

        {/* Quote */}
        <div
          className="fade-up opacity-0 translate-y-6 mt-8 md:mt-16 border-t border-white/10 pt-12 text-center"
          style={{ transitionDelay: "500ms" }}
        >
          <blockquote className="font-playfair text-xl md:text-2xl text-white italic max-w-3xl mx-auto leading-relaxed">
            "Part of the art of teaching is the ability to rearrange the world for students to guide them to see
            things in a new way."
          </blockquote>
          <cite className="text-sand text-[10px] font-black uppercase tracking-widest mt-4 block not-italic font-dm">
            — Sunny Decker
          </cite>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. GALLERY STRIP
───────────────────────────────────────────── */
const snapshots = [
  { src: "/assets/ANNUAL FUNCTION/3.webp", label: "Founders Day", aspect: "aspect-[4/5]" },
  { src: "/assets/SPORTS DAY/3.webp", label: "SPS Sportsday", aspect: "aspect-[4/3]" },
  { src: "/assets/BOOT CAMP/3.webp", label: "Boot Camp Activity", aspect: "aspect-[4/5]" },
  { src: "/assets/STELLAR SATURDAYS/2.webp", label: "Stellar Saturday", aspect: "aspect-[4/3]" },
  { src: "/assets/ANNUAL FUNCTION/4.webp", label: "SMHS Farewell", aspect: "aspect-[4/5]" },
  { src: "/assets/XMAS CARNIVAL/2.webp", label: "Christmas Carnival", aspect: "aspect-[4/3]" },
  { src: "/assets/MOTHER CHILD COOK OFF/1.webp", label: "Mother Child Cook Off", aspect: "aspect-[4/5]" },
];

function GalleryStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-8 pb-12 bg-off-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="fade-up opacity-0 translate-y-6 mb-12">
          <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase mb-3 font-dm">
            <span className="w-8 h-px bg-navy" />
            Snippets of Seedling
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-none">
            Life at
            <br />
            <span className="text-crimson">Seedling</span>
          </h2>
        </div>

        {/* Masonry strip */}
        <div
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 fade-up opacity-0 translate-y-8"
          style={{ transitionDelay: "100ms" }}
        >
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

        {/* CTA */}
        <div
          className="fade-up opacity-0 translate-y-6 mt-10 text-center"
          style={{ transitionDelay: "200ms" }}
        >
          <a
            href="https://seedlingschools.com/media.php"
            className="inline-flex items-center gap-2 text-navy font-black text-[10px] uppercase tracking-widest border-2 border-sand/40 px-8 py-4 rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 font-dm"
          >
            View Full Media Gallery →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. CTA SECTION
───────────────────────────────────────────── */
function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-8 md:pt-16 md:pb-8 bg-sand/10 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-navy/10 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-crimson/5 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Split: CTA + School list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Left */}
          <div className="fade-up opacity-0 translate-y-8">
            <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-navy uppercase mb-4 font-dm">
              <span className="w-8 h-px bg-navy" />
              Admissions Open 2026–27
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-deeper leading-tight mb-4">
              Join Seedling
              <br />
              Group of Schools Today
            </h2>
            <p className="text-text-light text-lg leading-relaxed mb-8 max-w-md font-dm font-light">
              Come feel the buzz! Where every student matters. Seedling Group of Schools has been prioritizing
              student well-being and community interests since 1992.
            </p>
            <div className="flex flex-wrap gap-4 font-dm">
              <a
                href="https://seedlingschools.com/admission-procedure.php"
                className="inline-flex items-center gap-2 bg-navy text-white font-black px-8 py-4 rounded-full text-[11px] uppercase tracking-widest hover:bg-navy-dark transition-colors duration-200 shadow-xl shadow-navy/10"
              >
                Enquire Now →
              </a>
              <a
                href="https://seedlingschools.com/admission-online.php"
                className="inline-flex items-center gap-2 border-2 border-sand/40 text-navy-deeper font-black px-8 py-4 rounded-full text-[11px] uppercase tracking-widest hover:border-navy hover:text-navy transition-colors duration-200"
              >
                Online Admission Form
              </a>
            </div>
          </div>

          {/* Right — school cards */}
          <div
            className="fade-up opacity-0 translate-y-8 grid grid-cols-1 gap-3"
            style={{ transitionDelay: "150ms" }}
          >
            {[
              {
                name: "Seedling Public School",
                short: "SPS",
                board: "CBSE",
                location: "Jawahar Nagar, Jaipur",
                image: "https://seedlingschools.com/assets/img/sps-school.jpg",
                href: "https://seedlingschools.com/sps.php",
              },
              {
                name: "Seedling Modern High School",
                short: "SMHS",
                board: "CBSE",
                location: "Durgapura, Jaipur",
                image: "https://seedlingschools.com/assets/img/smhs.jpg",
                href: "https://seedlingschools.com/smhs.php",
              },
              {
                name: "Seedling International Academy",
                short: "SIA",
                board: "Cambridge",
                location: "Jawahar Nagar, Jaipur",
                image: "https://seedlingschools.com/assets/img/sia.jpg",
                href: "https://seedlingschools.com/sia.php",
              },
              {
                name: "Seedling Wonderland Kids League",
                short: "SWKL",
                board: "Pre-School",
                location: "Jaipur",
                image: "https://seedlingschools.com/assets/img/swkl.jpg",
                href: "https://seedlingschools.com/swkl.php",
              },
            ].map((school) => (
              <a
                key={school.short}
                href={school.href}
                className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100">
                  <img src={school.image} alt={school.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-playfair font-bold text-navy-deeper text-sm group-hover:text-crimson transition-colors duration-200">
                    {school.name}
                  </p>
                  <p className="text-text-light text-[10px] font-black uppercase tracking-widest mt-0.5 font-dm">
                    {school.board} · {school.location}
                  </p>
                </div>
                <span className="text-sand group-hover:text-crimson transition-colors duration-200 text-sm">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Full-width image band */}
        <div
          className="fade-up opacity-0 translate-y-8 relative rounded-2xl overflow-hidden"
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative h-64 md:h-72 overflow-hidden">
            <img
              src="https://seedlingschools.com/assets/img/happy-parents.jpg"
              alt="Happy Seedling community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/70 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10 md:px-16">
              <div>
                <p className="text-emerald-300 text-sm font-bold tracking-widest uppercase mb-2">Get in Touch</p>
                <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
                  Where Every Student Matters
                </h3>
                <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                  <span>📞 SPS: +91 74130 12351</span>
                  <span>📞 SMHS: +91 95877 72837</span>
                  <span>🕒 Office: 8:30 AM – 6:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div
          className="fade-up opacity-0 translate-y-4 mt-10 text-center"
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-stone-400 text-xs tracking-wider uppercase">
            © Seedling Group of Schools · Established 1992 · Jaipur, Rajasthan, India
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE — assembles all sections + global styles
───────────────────────────────────────────── */
export default function CampusHighlightsPage() {
  return (
    <>
      {/* Global animation styles — single declaration for the entire page */}
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .fade-up {
          transition-property: opacity, transform;
          transition-duration: 700ms;
          transition-timing-function: ease-out;
        }
      `}</style>

      <main>
        <FeaturedArticle />
        <NewsGrid />
        <EventCards />
        <HighlightRow />
        <GalleryStrip />
        <CTASection />
      </main>
    </>
  );
}
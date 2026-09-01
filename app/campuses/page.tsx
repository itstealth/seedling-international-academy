"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";
import SixPillars from "@/components/campus/SixPillars";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

type CampusKey = "sia" | "smia";

type Campus = {
  key: CampusKey;
  id: string;
  shortName: string;
  fullName: string;
  badge: string;
  heroImage: string;
  introHeadline: string;
  introLead: string;
  established: string;
  studentTeacher: string;
  campusSize: string;
  results: string;
  facilities: { name: string; desc: string }[];
  address: string;
  phones: { label: string; value: string; tel: string }[];
  email: string;
  mapEmbed: string;
  mapHref: string;
  tagline: string;
  motto: string;
  pageHref: string;
};

const campuses: Campus[] = [
  {
    key: "sia",
    id: "sia",
    shortName: "SIA",
    fullName: "Seedling International Academy",
    badge: "SIA · Jawahar Nagar, Jaipur",
    heroImage: "/assets/Home/SIA_collage_v3.webp",
    introHeadline: "Where Cambridge meets <em class='font-semibold text-navy'>three decades of Seedling.</em>",
    introLead: "Our Jawahar Nagar campus is the home of Seedling International Academy (SIA) — a five-acre green space where the Cambridge curriculum comes alive through joyful learning, caring teachers, and a community that treats every child as irreplaceable.",
    established: "1993",
    studentTeacher: "20:1",
    campusSize: "5 Acres",
    results: "100%",
    tagline: "Where Cambridge meets three decades of Seedling.",
    motto: "Holistic. Joyful. Rigorous.",
    facilities: [
      { name: "Modern Classrooms", desc: "Smart classrooms with AV, ergonomic furniture and natural light." },
      { name: "Science Labs", desc: "Dedicated Physics, Chemistry, Biology and Computer Science laboratories." },
      { name: "Library & Resource Centre", desc: "Curated library, e-resources, periodicals and quiet study zones." },
      { name: "Sports Complex", desc: "Multi-sport ground, basketball courts, swimming pool and indoor games." },
      { name: "Performing Arts", desc: "Auditorium, music rooms, dance studio and art gallery." },
      { name: "Cafeteria", desc: "Healthy, hygienically prepared meals and snacks for students and staff." },
    ],
    address: "Sector 4, Jawahar Nagar, Jaipur, Rajasthan",
    phones: [
      { label: "Admission Helpline", value: "+91 74130 12351", tel: "+917413012351" },
      { label: "Office Landline", value: "0141 3623000", tel: "01413623000" },
    ],
    email: "seedlingacademy@hotmail.com",
    mapEmbed: "https://www.google.com/maps?q=Seedling+International+Academy+Jawahar+Nagar+Jaipur&output=embed",
    mapHref: "https://maps.google.com/?q=Seedling+International+Academy+Jawahar+Nagar+Jaipur",
    pageHref: "/campuses/sia",
  },
  {
    key: "smia",
    id: "smia",
    shortName: "SMIA",
    fullName: "Seedling Modern International Academy",
    badge: "SMIA · Durgapura, Jaipur",
    heroImage: "/assets/Home/SMIA_collage_v3.webp",
    introHeadline: "Modern facilities. <em class='font-semibold text-navy'>Timeless Seedling values.</em>",
    introLead: "Seedling Modern International Academy (SMIA) at Durgapura brings the same globally benchmarked Cambridge education to central Jaipur — modern, vibrant and built for the next generation of learners.",
    established: "1993",
    studentTeacher: "20:1",
    campusSize: "Modern",
    results: "100%",
    tagline: "Modern facilities. Timeless Seedling values.",
    motto: "Vibrant. Connected. Forward-looking.",
    facilities: [
      { name: "Smart Classrooms", desc: "Modern AV-equipped classrooms with interactive whiteboards and ergonomic furniture." },
      { name: "STEM Labs", desc: "Purpose-built Physics, Chemistry, Biology and Robotics laboratories." },
      { name: "Library & Resource Centre", desc: "Extensive book collection, e-resources, periodicals and quiet study zones." },
      { name: "Sports Facilities", desc: "Multi-sport courts, athletics track, swimming pool and indoor games room." },
      { name: "Performing Arts Spaces", desc: "Auditorium, music rooms, dance studio and visual arts studio." },
      { name: "Cafeteria & Canteen", desc: "Nutritious, hygienically prepared meals and refreshments." },
    ],
    address: "Ashok Marg, Mahaveer Nagar II, Durgapura, Jaipur - 302018",
    phones: [{ label: "Admission Helpline", value: "+91 95877 72837", tel: "+919587772837" }],
    email: "seedlingacademy@hotmail.com",
    mapEmbed: "https://www.google.com/maps?q=Seedling+Modern+International+Academy+Durgapura+Jaipur&output=embed",
    mapHref: "https://maps.google.com/?q=Seedling+Modern+International+Academy+Durgapura+Jaipur",
    pageHref: "/campuses/smia",
  },
];

function CampusBlock({ campus, index }: { campus: Campus; index: number }) {
  return (
    <section id={campus.id} className={`relative scroll-mt-24 py-14 md:py-20 ${index % 2 === 0 ? "bg-white" : "bg-off-white"} overflow-x-clip`}>
      {/* Soft accent blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Campus header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className={`size-2.5 rounded-full ${campus.key === "sia" ? "bg-crimson" : "bg-royal-blue"}`} />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-navy">{campus.badge}</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl font-light leading-[1.05] text-ink">
              {campus.fullName}
              <br />
              <span className="text-xs md:text-sm font-black tracking-[0.3em] uppercase align-middle text-navy ml-2">
                {campus.key === "sia" ? "three decades of Seedling." : "Timeless Seedling values."}
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={campus.pageHref}
              className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase text-navy hover:text-crimson transition-colors"
            >
              Dedicated Page →
            </a>
            <a
              href={campus.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase text-crimson hover:text-[#133844] transition-colors"
            >
              View on Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
          </div>
        </motion.div>

        {/* Intro — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-12 md:mb-16"
        >
          <p className="font-playfair text-crimson text-xl mb-3 font-semibold">{campus.motto}</p>
          <h3
            className="font-playfair text-3xl md:text-4xl font-light text-ink leading-tight mb-5"
            dangerouslySetInnerHTML={{ __html: campus.introHeadline }}
          />
          <p className="text-text-light text-base md:text-lg leading-[1.85] font-dm mb-6">{campus.introLead}</p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: campus.established, l: "Established", palette: "purple" },
              { v: campus.studentTeacher, l: "Student : Teacher", palette: "blue" },
              { v: campus.campusSize, l: "Campus", palette: "green" },
              { v: campus.results, l: "Cambridge Results", palette: "orange" },
            ].map((s) => {
              const paletteMap: Record<string, string> = {
                purple: "bg-purple-100 border-purple-700",
                blue: "bg-blue-100 border-blue-700",
                green: "bg-green-100 border-green-700",
                orange: "bg-orange-100 border-orange-700",
              };
              return (
              <div key={s.l} className={`${paletteMap[s.palette]} rounded-2xl p-5 border-2 shadow-md hover:shadow-lg transition-all`}>
                <p className="font-playfair text-3xl md:text-4xl font-black text-navy leading-none mb-1.5">{s.v}</p>
                <p className="text-[11px] uppercase tracking-widest text-text-light font-dm font-semibold">{s.l}</p>
              </div>
              );
            })}
          </div>
        </motion.div>

        {/* Facilities + Map split */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT: Sticky campus image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="md:sticky md:top-28 self-start"
          >
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-sand/40 shadow-lg">
              <img src={campus.heroImage} alt={campus.fullName} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow">
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-navy">{campus.shortName}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Facilities */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl mb-2">The Campus</p>
            <h3 className="font-playfair text-2xl md:text-3xl font-light text-ink leading-tight mb-5">
              Facilities &amp; Spaces
            </h3>
            <div className="space-y-3">
              {campus.facilities.map((f, i) => {
                const palettes = [
                  "bg-purple-100 border-purple-700",
                  "bg-blue-100 border-blue-700",
                  "bg-green-100 border-green-700",
                  "bg-orange-100 border-orange-700",
                  "bg-red-100 border-red-700",
                  "bg-orange-100 border-orange-700",
                ];
                const paletteClass = palettes[i % palettes.length];
                return (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: EASE }}
                  className={`flex gap-4 p-4 ${paletteClass} rounded-2xl border-2`}
                >
                  <span className="size-9 rounded-xl bg-crimson text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-playfair text-base font-semibold text-[#133844] leading-tight">{f.name}</p>
                    <p className="text-[13px] text-text-light leading-relaxed font-dm">{f.desc}</p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function CampusesPage(): React.JSX.Element {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash) as HTMLElement | null;
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, []);

  return (
    <main className="bg-off-white text-text-base overflow-x-clip font-dm">
      <HeroWrapper
        backgroundImage="/assets/campus-images/3.jpeg"
        title="Our Two Cambridge Campuses in Jaipur"
        badge="Two Distinct Schools, One Cambridge Standard"
        breadcrumbs={[{ label: "Campuses" }]}
        height="medium"
      />

      {/* Intro band */}
      <motion.section
        className="py-12 md:py-16 max-w-4xl mx-auto px-5 sm:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <motion.span
          className="block w-px h-12 bg-sand mx-auto mb-5"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <p className="font-playfair text-crimson text-xl mb-3">One Vision, Two Campuses</p>
        <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight text-ink mb-5">
          Choose <em className="font-semibold text-navy">the campus</em> that fits your family.
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Both Seedling campuses deliver the same globally benchmarked Cambridge education with their own distinct character — choose the one closer to home, or the one whose ethos feels right for your child.
        </p>

        {/* Quick jump links */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.a
            variants={cardRise}
            whileHover={{ y: -2, scale: 1.02 }}
            href="/campuses/sia"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-crimson text-white text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-xl hover:shadow-crimson/40"
          >
            SIA Page →
          </motion.a>
          <motion.a
            variants={cardRise}
            whileHover={{ y: -2, scale: 1.02 }}
            href="/campuses/smia"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-royal-blue text-white text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-xl hover:shadow-royal-blue/40"
          >
            SMIA Page →
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Two campus sections (exact original layout & styling) */}
      {campuses.map((campus, i) => (
        <CampusBlock key={campus.id} campus={campus} index={i} />
      ))}

      {/* Shared Six Pillars */}
      <SixPillars />
    </main>
  );
}

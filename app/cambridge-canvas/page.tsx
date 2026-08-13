"use client";

import HeroWrapper from "@/components/layout/HeroWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

// Cambridge Learner Attributes card palette — cycled sequentially.
const claPalette = [
  { bg: "#7e25e0", bgTo: "#5a1aa3" }, // Confident
  { bg: "#5165ec", bgTo: "#3849b0" }, // Responsible
  { bg: "#028819", bgTo: "#015a0e" }, // Reflective
  { bg: "#e04220", bgTo: "#a82e16" }, // Innovative
  { bg: "#8c0e24", bgTo: "#5e0a18" }, // Engaged
];

const stats = [
  { value: "160+", label: "Countries", sub: "Cambridge operates in more than 160 countries worldwide." },
  { value: "10,000+", label: "Schools", sub: "Over ten thousand schools deliver the Cambridge curriculum globally." },
  { value: "1M+", label: "Learners", sub: "More than a million students sit Cambridge exams each year." },
  { value: "70+", label: "IGCSE Subjects", sub: "And 50+ AS & A Level subjects — the widest range in international education." },
  { value: "1,400+", label: "Universities", sub: "Cambridge qualifications are recognised by leading universities worldwide." },
  { value: "190+", label: "Years of Heritage", sub: "A pedagogy refined over more than a century of educational research." },
];

const recognition = [
  {
    title: "Recognised by Top Universities",
    desc: "Cambridge International AS & A Levels are accepted by every leading university in the UK, US, Canada, Australia and beyond — including the Ivy League, Oxbridge, IITs and NITs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    color: "crimson",
  },
  {
    title: "Trusted by Governments",
    desc: "Cambridge is the chosen international curriculum of ministries of education across continents — from Singapore and Malaysia to the UAE, Egypt, South Africa and beyond.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11h16V10M9 21V13h6v8" />
      </svg>
    ),
    color: "navy",
  },
  {
    title: "Endorsed by Employers",
    desc: "Multinational employers — from finance and consulting to tech and engineering — actively recruit Cambridge graduates for their analytical rigour and global mindset.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.075a2.25 2.25 0 01-1.59 2.15c-2.282.927-4.683 1.475-7.16 1.475a17.07 17.07 0 01-7.16-1.475 2.25 2.25 0 01-1.59-2.15V14.15M16.5 6.75l-4.5-3-4.5 3M12 3.75v13.5" />
      </svg>
    ),
    color: "mauve",
  },
  {
    title: "Aligned with NEP 2020",
    desc: "Cambridge International's flexible, inquiry-led approach aligns naturally with India's National Education Policy 2020 — making the transition seamless for our students.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    color: "royal-blue",
  },
];

const benefits = [
  { title: "Globally Portable", desc: "Cambridge qualifications travel with the student — whether they pursue higher education in India, the UK, the US, Australia or anywhere else." },
  { title: "Recognised Excellence", desc: "A Cambridge diploma is one of the most recognised credentials in international education, opening doors at top universities and competitive careers." },
  { title: "Future-Ready Skills", desc: "The Cambridge approach develops critical thinking, research, collaboration and problem-solving — skills that define the next generation of leaders." },
  { title: "Flexible Pathways", desc: "From Early Years through Cambridge Advanced, students can shape a learning path that matches their strengths and ambitions." },
  { title: "Internationally Connected", desc: "Joining a global community of Cambridge learners — competing, collaborating, and connecting with peers across 160+ countries." },
  { title: "Holistic Growth", desc: "Beyond academics, Cambridge nurtures curiosity, resilience, and global citizenship — shaping well-rounded young people ready for an interconnected world." },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

const cardColors5 = [
  "bg-pathway-rose-bg border-pathway-rose-border",
  "bg-pathway-purple-bg border-pathway-purple-border",
  "bg-pathway-blue-bg border-pathway-blue-border",
  "bg-pathway-orange-bg border-pathway-orange-border",
  "bg-pathway-rose-bg border-pathway-rose-border",
];

const cardColors4 = [
  "bg-pathway-rose-bg border-pathway-rose-border",
  "bg-pathway-purple-bg border-pathway-purple-border",
  "bg-pathway-blue-bg border-pathway-blue-border",
  "bg-pathway-orange-bg border-pathway-orange-border",
];

export default function CambridgeEducationPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/img/sps-banner.jpg"
        title="Cambridge Canvas"
        badge="A Global Standard"
        breadcrumbs={[{ label: "Cambridge Canvas" }]}
        height="large"
      />

      {/* ═══ INTRO ═══ */}
      <section className="py-14 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <span className="block w-px h-12 bg-sand mx-auto mb-5" />
        <p className="font-playfair text-crimson text-xl mb-4">A Passport to the World</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          Recognised in <em className="font-semibold text-navy">160+ countries</em>.<br />
          Trusted across generations.
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Cambridge International is the world's largest provider of international education — a curriculum designed not for one country, but for every learner, anywhere. When your child studies Cambridge, they join a community that opens doors from Jaipur to Johannesburg, Singapore to Stockholm.
        </p>
      </section>

      {/* ═══ BIG STATS BAND ═══ */}
      <section className="relative py-14 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-playfair text-[#133844]/70 text-xl font-black mb-3">Cambridge by the Numbers</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-black text-[#133844]">
              A Presence That <em className="font-semibold text-[#133844]">Spans the Globe</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {stats.map((s, i) => {
              const c = claPalette[i % 5];
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 32px 70px -14px ${c.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                  }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 p-6 md:p-8 min-h-[200px] flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(160deg, ${c.bg} 0%, ${c.bgTo} 100%)`,
                    boxShadow: "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)" }} />
                  <p className="relative z-10 font-playfair text-7xl md:text-9xl font-black text-white leading-none mb-4 tracking-tight">{s.value}</p>
                  <div className="relative z-10">
                    <p className="font-playfair text-xl md:text-2xl text-white font-black uppercase tracking-[0.18em] mb-3">{s.label}</p>
                    <p className="text-white/85 text-xs md:text-sm leading-relaxed font-dm font-medium">{s.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CAMBRIDGE WORLDWIDE MAP ═══ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Image
            src="/cambridge map.png"
            alt="Cambridge Worldwide — A global community with 10,000+ schools across 160+ countries and 40+ governments"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* ═══ RECOGNITION ═══ */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-playfair text-navy text-xl mb-3">Globally Trusted</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            Where a Cambridge <em className="font-semibold text-navy">Qualification</em> Is Recognised
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {[
            {
              title: "Recognised by Top Universities",
              headerBg: "bg-purple-700",
              bg: "bg-purple-100",
              border: "border-purple-700",
              desc: "Cambridge International AS & A Levels are accepted by every leading university in the UK, US, Canada, Australia and beyond — including the Ivy League, Oxbridge, IITs and NITs.",
              footer: "Every leading university worldwide",
            },
            {
              title: "Trusted by Governments",
              headerBg: "bg-blue-700",
              bg: "bg-blue-100",
              border: "border-blue-700",
              desc: "Cambridge is the chosen international curriculum of ministries of education across continents — from Singapore and Malaysia to the UAE, Egypt, South Africa and beyond.",
              footer: "Adopted by national education systems",
            },
            {
              title: "Endorsed by Employers",
              headerBg: "bg-green-700",
              bg: "bg-green-100",
              border: "border-green-700",
              desc: "Multinational employers — from finance and consulting to tech and engineering — actively recruit Cambridge graduates for their analytical rigour and global mindset.",
              footer: "Recruited by global companies",
            },
            {
              title: "Aligned with NEP 2020",
              headerBg: "bg-orange-700",
              bg: "bg-orange-100",
              border: "border-orange-700",
              desc: "Cambridge International's flexible, inquiry-led approach aligns naturally with India's National Education Policy 2020 — making the transition seamless for our students.",
              footer: "Aligned with India's NEP 2020",
            },
          ].map((c) => (
            <div key={c.title} className={`group relative ${c.bg} ${c.border} rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
              <div className={`relative ${c.headerBg} px-5 py-4 text-white`}>
                <div className="absolute right-0 top-0 h-full w-11 bg-white/20 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,35%_50%)]" />
                <h3 className="relative z-10 font-playfair text-base font-black leading-tight text-white pr-10">
                  {c.title}
                </h3>
              </div>
              <div className="px-5 py-5">
                <p className="text-[#133844] text-sm leading-[1.85] font-dm">{c.desc}</p>
              </div>
              <div className="border-t border-black/10 bg-white/50 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#133844]">
                {c.footer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section className="relative py-14 md:py-20 bg-navy-light/40 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mauve/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-playfair text-navy text-xl mb-3">Why This Matters</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              What <em className="font-semibold text-navy">Cambridge</em> Means for Your Child
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Globally Portable",
                headerBg: "bg-purple-700",
                bg: "bg-purple-100",
                border: "border-purple-700",
                desc: "Cambridge qualifications travel with the student — whether they pursue higher education in India, the UK, the US, Australia or anywhere else.",
                footer: "Accepted across 160+ countries",
              },
              {
                num: "02",
                title: "Recognised Excellence",
                headerBg: "bg-blue-700",
                bg: "bg-blue-100",
                border: "border-blue-700",
                desc: "A Cambridge diploma is one of the most recognised credentials in international education, opening doors at top universities and competitive careers.",
                footer: "Among the most respected credentials globally",
              },
              {
                num: "03",
                title: "Future-Ready Skills",
                headerBg: "bg-green-700",
                bg: "bg-green-100",
                border: "border-green-700",
                desc: "The Cambridge approach develops critical thinking, research, collaboration and problem-solving — skills that define the next generation of leaders.",
                footer: "Skills for an evolving world",
              },
              {
                num: "04",
                title: "Flexible Pathways",
                headerBg: "bg-orange-700",
                bg: "bg-orange-100",
                border: "border-orange-700",
                desc: "From Early Years through Cambridge Advanced, students can shape a learning path that matches their strengths and ambitions.",
                footer: "A path tailored to every learner",
              },
              {
                num: "05",
                title: "Internationally Connected",
                headerBg: "bg-red-700",
                bg: "bg-red-100",
                border: "border-red-700",
                desc: "Joining a global community of Cambridge learners — competing, collaborating, and connecting with peers across 160+ countries.",
                footer: "A global peer network from day one",
              },
              {
                num: "06",
                title: "Holistic Growth",
                headerBg: "bg-purple-700",
                bg: "bg-purple-100",
                border: "border-purple-700",
                desc: "Beyond academics, Cambridge nurtures curiosity, resilience, and global citizenship — shaping well-rounded young people ready for an interconnected world.",
                footer: "Educating the whole child, every day",
              },
            ].map((c) => (
              <div key={c.num} className={`group relative ${c.bg} ${c.border} rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                <div className={`relative ${c.headerBg} px-5 py-4 text-white`}>
                  <div className="absolute right-0 top-0 h-full w-11 bg-white/20 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,35%_50%)]" />
                  <h3 className="relative z-10 font-playfair text-base font-black leading-tight text-white pr-10">
                    {c.title}
                  </h3>
                </div>
                <div className="px-5 py-5">
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#133844] mb-3">
                    <span className="opacity-70 mr-1">0{c.num.slice(-1)}</span>· Why it matters
                  </p>
                  <p className="text-[#133844] text-sm leading-[1.85] font-dm">{c.desc}</p>
                </div>
                <div className="border-t border-black/10 bg-white/50 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#133844]">
                  {c.footer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <section
        className="relative py-14 md:py-20 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,244,237,0.82), rgba(212,244,237,0.82)), url('/assets/Home/building-from-top.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <span className="block w-px h-10 bg-[#133844]/40 mx-auto mb-5" />
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            A Cambridge education.<br />
            <em className="font-semibold text-[#133844]">A world of possibility.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            At Seedling International Academy, your child doesn't just study Cambridge — they join a 160-country community of learners shaping the future.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/admissions"
              className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 hover:shadow-2xl hover:shadow-crimson/40 font-dm"
            >
              Begin Your Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            {/* <a
              href="/why-cambridge/path"
              className="inline-flex items-center gap-3 border border-[#133844]/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 font-dm"
            >
              Your Path, Your Way
            </a> */}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import HeroWrapper from "@/components/layout/HeroWrapper";
import { motion } from "framer-motion";

// Cambridge Learner Attributes card palette — cycled sequentially.
const claPalette = [
  { bg: "#7e25e0", bgTo: "#5a1aa3" }, // Confident
  { bg: "#5165ec", bgTo: "#3849b0" }, // Responsible
  { bg: "#028819", bgTo: "#015a0e" }, // Reflective
  { bg: "#e04220", bgTo: "#a82e16" }, // Innovative
  { bg: "#8c0e24", bgTo: "#5e0a18" }, // Engaged
];

const assessmentPillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Reliability",
    desc: "Every assessment is designed to measure what it claims to measure — consistently, fairly and without bias — so that every grade a Seedling student earns is one they can stand on.",
    color: "red",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.001 5.001 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.001 5.001 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Validity",
    desc: "Tasks mirror real skills and understanding — not memorisation tricks. Students are assessed on the abilities they will actually need at university, in the workplace and in life.",
    color: "blue",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Progression",
    desc: "Marks are tracked over time. We do not just see where a student is today — we look at how far they have come, and what they are ready for next.",
    color: "green",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Transparency",
    desc: "Students and parents see exactly what is being assessed, how it is being marked, and what the next steps are. There are no surprises at Seedling.",
    color: "purple",
  },
];

const awardingPrinciples = [
  {
    num: "01",
    title: "Criterion-Referenced, Not Norm-Referenced",
    desc: "We do not grade on a curve. Each student is measured against a published set of criteria describing what they know and can do — never against the performance of their peers.",
  },
  {
    num: "02",
    title: "Internally Moderated",
    desc: "Before any grade is released, samples of student work are independently re-marked by a second teacher. Disagreements are resolved through structured moderation, so no grade rests on a single judgement.",
  },
  {
    num: "03",
    title: "Externally Benchmarked",
    desc: "Our internal assessments are aligned with Cambridge International grade descriptors and benchmarks. Where applicable, our students sit the same Cambridge examinations as their peers worldwide.",
  },
  {
    num: "04",
    title: "Grade Boundaries With Integrity",
    desc: "Grade boundaries are set in advance, using Cambridge statistical evidence and examiner judgement — and are never adjusted to manipulate cohort results.",
  },
  {
    num: "05",
    title: "Recognition of Effort and Growth",
    desc: "Beyond the final grade, we recognise sustained effort, character growth and contributions to the community — because a learner is more than a number.",
  },
];

const reportingTouchpoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Continuous",
    title: "Day-to-day Feedback",
    desc: "Verbal and written feedback after every significant task — in the moment, when it matters most.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2a4 4 0 014-4h4a4 4 0 014 4v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2zM12 11a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    label: "Termly",
    title: "Parent–Teacher Conferences",
    desc: "Three formal conversations a year to discuss progress, effort and next steps.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2a4 4 0 014-4h4a4 4 0 014 4v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
      </svg>
    ),
    label: "Annual",
    title: "Detailed Progress Report",
    desc: "A comprehensive written report summarising attainment, attitude, contribution and recommended next steps.",
  },
];

const colorMap: Record<string, { glass: string; text: string; border: string; ring: string }> = {
  red: {
    glass: "bg-red-500/30 backdrop-blur-xl",
    text: "text-red-700",
    border: "border-red-500/50",
    ring: "ring-red-500/20",
  },
  blue: {
    glass: "bg-blue-500/30 backdrop-blur-xl",
    text: "text-blue-700",
    border: "border-blue-500/50",
    ring: "ring-blue-500/20",
  },
  green: {
    glass: "bg-green-500/30 backdrop-blur-xl",
    text: "text-green-700",
    border: "border-green-500/50",
    ring: "ring-green-500/20",
  },
  purple: {
    glass: "bg-purple-500/30 backdrop-blur-xl",
    text: "text-purple-700",
    border: "border-purple-500/50",
    ring: "ring-purple-500/20",
  },
};

export default function OurStandardsPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/about/about-banner.jpg"
        title="Our Standards"
        badge="Quality You Can Measure"
        breadcrumbs={[{ label: "Our Standards" }]}
        height="medium"
      />

      {/* ═══ INTRO ═══ */}
      <section className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <span className="block w-px h-12 bg-sand mx-auto mb-5" />
        <p className="font-playfair text-crimson text-xl mb-4">Quality &amp; Integrity</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          Every grade, <em className="font-semibold text-navy">earned</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          A Seedling grade is a promise. It is the school's word that the student who holds it has demonstrated a specific set of knowledge, skills and understanding — under conditions that are fair, transparent and internationally recognised.
        </p>
      </section>

      {/* ═══ ASSESSMENT QUALITY PILLARS ═══ */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mauve/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-playfair text-navy text-xl mb-3">How We Assess</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              The Four Pillars of <em className="font-semibold text-navy">Assessment Quality</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {assessmentPillars.map((p) => {
              const c = colorMap[p.color];
              return (
                <div
                  key={p.title}
                  className={`group relative rounded-2xl p-7 transition-all duration-500 border ${c.glass} ${c.border} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ring-1 ${c.ring}`}
                  style={{ boxShadow: "0 10px 40px -20px rgba(0,0,0,0.08)" }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/90 backdrop-blur-md border ${c.border} ${c.text} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    {p.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-3 text-ink">{p.title}</h3>
                  <p className="text-text-light text-sm leading-[1.85] font-dm">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ AWARDING STANDARDS ═══ */}
      <section className="relative py-12 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(at 50% 0%, rgba(19,56,68,0.06) 0px, transparent 55%), radial-gradient(at 0% 100%, rgba(162,15,39,0.10) 0px, transparent 50%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-playfair text-[#133844]/70 text-xl mb-3">Our Awarding Standards</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-[#133844] uppercase tracking-[0.04em]">
              GRADING <em className="font-semibold text-[#133844]">STANDARDS</em>
            </h2>
            <p className="mt-6 text-[#133844]/75 text-lg max-w-2xl mx-auto font-dm leading-relaxed">
              Five principles govern every grade, mark and rank our school issues — at every stage from the Early Years through Cambridge Advanced.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {awardingPrinciples.map((p, i) => {
              const c = claPalette[i % 5];
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 32px 70px -14px ${c.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                  }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 p-7 min-h-[260px] flex flex-col"
                  style={{
                    background: `linear-gradient(160deg, ${c.bg} 0%, ${c.bgTo} 100%)`,
                    boxShadow: "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)" }} />
                  <span className="absolute top-5 right-5 text-5xl font-black text-white/15 leading-none select-none">{p.num}</span>
                  <div className="relative z-10">
                    <h3 className="font-playfair text-xl font-semibold mb-3 leading-tight tracking-tight text-white pr-12">{p.title}</h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ REPORTING TOUCHPOINTS ═══ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-playfair text-navy text-xl mb-3">Continuous &amp; Clear</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            How We <em className="font-semibold text-navy">Report</em> Progress
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reportingTouchpoints.map((r, i) => (
            <div
              key={r.title}
              className="group bg-white rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sand/40 hover:border-navy/30"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  {r.icon}
                </div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-navy">{r.label}</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 text-ink">{r.title}</h3>
              <p className="text-text-light text-sm leading-[1.85] font-dm">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PULL QUOTE ═══ */}
      {/* <section className="relative py-14 md:py-20 px-5 sm:px-6 overflow-hidden bg-crimson">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson via-crimson-dark/30 to-crimson-darker" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="font-playfair text-sand text-2xl mb-6 tracking-wide">Our Standard</p>
          <blockquote className="font-playfair text-3xl md:text-4xl font-light leading-[1.2] mb-8 text-white">
            &ldquo;A grade is not the goal. The grade is the evidence that a real learning goal was met. Our standard is the evidence.&rdquo;
          </blockquote>
          <p className="font-playfair text-lg text-sand">— Seedling Awarding Standards Charter</p>
        </div>
      </section> */}

      {/* ═══ CLOSING CTA ═══ */}
      <section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <span className="block w-px h-10 bg-[#133844]/40 mx-auto mb-5" />
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6 text-[#133844]">
            Want to see our standards <em className="font-semibold text-[#133844]">in action?</em>
          </h2>
          <p className="text-[#133844] text-lg leading-[1.85] max-w-2xl mx-auto font-dm mb-10">
            Speak with our admissions team or visit a campus to experience the Seedling standard — in our classrooms, our interactions and our results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/admissions"
              className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 hover:shadow-2xl hover:shadow-crimson/40 font-dm"
            >
              Plan a Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about/welcome-from-the-head"
              className="inline-flex items-center gap-3 border border-[#133844]/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 font-dm"
            >
              Read From The Head
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

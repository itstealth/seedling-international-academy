"use client";

import { motion, AnimatePresence } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

// ─── Motion variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};

const cardRise = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

const cardPop = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// Cambridge Learner Attributes card palette — cycled sequentially.
const claPalette = [
  { bg: "#7e25e0", bgTo: "#5a1aa3" }, // Confident
  { bg: "#5165ec", bgTo: "#3849b0" }, // Responsible
  { bg: "#028819", bgTo: "#015a0e" }, // Reflective
  { bg: "#e04220", bgTo: "#a82e16" }, // Innovative
  { bg: "#8c0e24", bgTo: "#5e0a18" }, // Engaged
];

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3A2.25 2.25 0 0111.25 6v3.776M3.75 9.776V12A2.25 2.25 0 006 14.25h12A2.25 2.25 0 0020.25 12V9.776" />
      </svg>
    ),
    title: "An Adaptable Curriculum",
    desc: "Cambridge programmes for ages 3–19 can be tailored to local context and individual learners. Schools build a curriculum with real choice — choosing from the widest range of subjects of any international education provider.",
    color: "crimson",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "High-Quality Resources",
    desc: "Teaching resources are designed for an international audience using clear language. They keep learners of all backgrounds and abilities engaged, developing at pace, and maximising every minute of classroom time.",
    color: "navy",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fair & Meaningful Assessment",
    desc: "Our flexible assessment structure maximises time for teaching. We measure deep subject knowledge, conceptual understanding and higher-level thinking — and the system is fair and accessible for non-native English speakers and students with special educational needs.",
    color: "mauve",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 0a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z" />
      </svg>
    ),
    title: "Dedicated Support for Schools",
    desc: "Cambridge regional teams support schools across 160 countries — understanding each local context. Seedling teachers tap into a global professional development programme, the School Support Hub, and 24/6 customer service whenever they need it.",
    color: "royal-blue",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

const cardColors4 = [
  "bg-red-100 border-red-700",
  "bg-purple-100 border-purple-700",
  "bg-blue-100 border-blue-700",
  "bg-orange-100 border-orange-700",
];

const cardColors5 = [
  "bg-red-100 border-red-700",
  "bg-purple-100 border-purple-700",
  "bg-blue-100 border-blue-700",
  "bg-orange-100 border-orange-700",
  "bg-red-100 border-red-700",
];

const pathways = [
  {
    initials: "AS",
    name: "Aarav S.",
    stage: "Cambridge Upper Secondary · IGCSE",
    track: "Sciences + Mathematics",
    electives: ["Physics", "Chemistry", "Biology", "Mathematics A", "English Language"],
    aspiration: "Medicine · AIIMS / MBBS",
    quote: "I loved the lab work from Year 9. Seedling let me lean into sciences without giving up English Literature — that combination made me a stronger applicant.",
    next: "On track for IGCSEs in 2027; A-Levels in Biology, Chemistry, Maths.",
    color: "crimson",
  },
  {
    initials: "NM",
    name: "Naina M.",
    stage: "Cambridge Advanced · AS Level",
    track: "Humanities + Global Perspectives",
    electives: ["English Literature", "History", "Global Perspectives & Research", "Psychology", "Hindi"],
    aspiration: "Law · National Law School",
    quote: "I wanted to study how societies work — Cambridge gave me a path that blends literature with social science, which is exactly what law schools look for.",
    next: "AS Levels in 2026; applying to NLS and NUJS with a Cambridge diploma in hand.",
    color: "navy",
  },
  {
    initials: "RK",
    name: "Riya K.",
    stage: "Cambridge Lower Secondary",
    track: "Sciences + Commerce electives",
    electives: ["Combined Science", "Mathematics B", "Business Studies", "Computer Science", "English Language"],
    aspiration: "BBA · Entrepreneurship",
    quote: "I code for fun and run a small school club. Cambridge let me pick Computer Science alongside the sciences — that mix is rare, and it changed my options.",
    next: "IGCSEs in 2027; aims for a Cambridge diploma with both science and business.",
    color: "mauve",
  },
];

const stages = [
  {
    stage: "01",
    name: "Cambridge Early Years",
    age: "Age 3+",
    desc: "Play-based, holistic learning that builds the curiosity and confidence every future Seedling student needs.",
  },
  {
    stage: "02",
    name: "Cambridge Primary",
    age: "Age 5+",
    desc: "A clear, adaptable curriculum with engaging resources — where reading, writing and reasoning take root.",
  },
  {
    stage: "03",
    name: "Cambridge Lower Secondary",
    age: "Age 11+",
    desc: "Subjects deepen, choice begins. Students start shaping the path that matches their strengths.",
  },
  {
    stage: "04",
    name: "Cambridge Upper Secondary",
    age: "Age 14+",
    desc: "IGCSE / O Level — 70+ subjects let students design a curriculum as unique as they are.",
  },
  {
    stage: "05",
    name: "Cambridge Advanced",
    age: "Age 16+",
    desc: "AS & A Level, Cambridge IPQ, Cambridge AICE — depth, specialisation and a passport to the world's top universities.",
  },
];

export default function YourPathYourWayPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/img/sps-banner.jpg"
        title="Your Path, Your Way"
        badge="A Curriculum As Unique As You"
        breadcrumbs={[{ label: "Your Path, Your Way" }]}
        height="large"
      />

      {/* ═══ INTRO ═══ */}
      <motion.section
        className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="block w-px h-12 bg-sand mx-auto mb-5"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <p className="font-playfair text-crimson text-xl mb-4">Education That Adapts To You</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          The same <em className="font-semibold text-navy">rigour</em>.<br />
          A <em className="font-semibold text-navy">thousand</em> different journeys.
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          At Seedling International Academy, Cambridge is not a one-size-fits-all syllabus. Our curriculum, resources, assessments and teacher support are designed to flex around the child — so every student walks a path that matches their strengths, interests and dreams.
        </p>
      </motion.section>

      {/* ═══ FOUR PILLARS ═══ */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-playfair text-navy text-xl mb-3">How Cambridge Adapts</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Four Pillars of a <em className="font-semibold text-navy">Personalised</em> Curriculum
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {pillars.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <motion.div
                  key={p.title}
                  variants={cardRise}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`group ${cardColors4[i]} rounded-2xl p-7 shadow-lg hover:shadow-2xl cursor-default`}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${c.bg} ${c.text}`}
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    {p.icon}
                  </motion.div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-ink">{p.title}</h3>
                  <p className="text-text-light text-sm leading-[1.85] font-dm">{p.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ STUDENT-CHOICE STORIES ═══ */}
      <section className="relative py-12 md:py-20 bg-navy-light/40 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-royal-blue/10 rounded-full blur-2xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/20 rounded-full blur-2xl -ml-48 -mb-48 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-playfair text-navy text-xl mb-3">Real Stories</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Three Students. <em className="font-semibold text-navy">Three Paths.</em>
            </h2>
            <p className="mt-6 text-text-light text-lg max-w-2xl mx-auto font-dm leading-relaxed">
              How Cambridge's flexibility lets Seedling students design a curriculum around who they are.
            </p>
          </motion.div>

          <div className="space-y-8">
            {pathways.map((p, i) => {
              const c = colorMap[p.color];
              const direction = i % 2 === 0 ? slideInLeft : slideInRight;
              return (
                <motion.div
                  key={p.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={direction}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.005 }}
                  className={`group ${cardColors5[i % 5]} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden grid md:grid-cols-[260px_1fr] gap-0`}
                >
                  {/* Student identity */}
                  <div className={`bg-gradient-to-br from-white to-${p.color === 'crimson' ? 'crimson/5' : p.color === 'navy' ? 'navy/5' : p.color === 'mauve' ? 'mauve/5' : 'royal-blue/5'} p-7 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-sand/30`}>
                    <motion.div
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${c.bg} ${c.text} flex items-center justify-center font-playfair text-2xl md:text-3xl font-semibold mb-4`}
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      {p.initials}
                    </motion.div>
                    <p className="font-playfair text-xl font-semibold text-[#133844]">{p.name}</p>
                    <p className={`text-[10px] font-black tracking-[0.2em] uppercase ${c.text} mt-2`}>{p.stage}</p>
                    <div className="mt-4 pt-4 border-t border-sand/30 w-full">
                      <p className="text-[10px] uppercase tracking-widest text-text-light mb-1">Aspiration</p>
                      <p className="text-sm font-bold text-[#133844]">{p.aspiration}</p>
                    </div>
                  </div>

                  {/* Path detail */}
                  <div className="p-7 md:p-8">
                    <p className={`text-[10px] font-black tracking-[0.25em] uppercase ${c.text} mb-2`}>Path {String(i + 1).padStart(2, "0")} · {p.track}</p>

                    <blockquote className="font-playfair text-text-base md:text-lg leading-relaxed mb-5 border-l-4 pl-5" style={{ borderColor: "currentColor" }}>
                      &ldquo;{p.quote}&rdquo;
                    </blockquote>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-text-light mb-2">Chosen Electives</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.electives.map((e, idx) => (
                            <motion.span
                              key={e}
                              initial={{ opacity: 0, scale: 0.6 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.6 }}
                              transition={{ duration: 0.3, delay: 0.3 + idx * 0.05, type: "spring", stiffness: 280, damping: 22 }}
                              whileHover={{ scale: 1.08, y: -2 }}
                              className={`text-xs font-semibold px-3 py-1 rounded-full ${c.bg} ${c.text} cursor-default`}
                            >
                              {e}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-text-light mb-2">Where This Leads</p>
                        <p className="text-sm text-text-light leading-relaxed font-dm">{p.next}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FIVE STAGES ═══ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-playfair text-mauve text-xl mb-3">The Cambridge Journey</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            Five Stages. <em className="font-semibold text-navy">One Continuous Path.</em>
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {stages.map((s, i) => {
            const c = claPalette[i % 5];
            return (
              <motion.div
                key={s.name}
                variants={cardPop}
                whileHover={{
                  y: -10,
                  boxShadow: `0 32px 70px -14px ${c.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative group overflow-hidden rounded-2xl border border-white/15 p-6 min-h-[260px] flex flex-col cursor-default"
                style={{
                  background: `linear-gradient(160deg, ${c.bg} 0%, ${c.bgTo} 100%)`,
                  boxShadow: "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)" }} />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white">Stage {s.stage}</span>
                  <span className="text-[10px] font-semibold text-white/75 uppercase tracking-widest">{s.age}</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 leading-tight tracking-tight text-white">{s.name}</h3>
                <p className="text-white/80 text-xs leading-relaxed font-light flex-1">{s.desc}</p>
                <motion.div
                  className="mt-4 h-1 rounded-full bg-white/40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <motion.section
        className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <motion.span
            className="block w-px h-10 bg-[#133844]/40 mx-auto mb-5"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
          <p className="font-playfair text-[#133844]/70 text-xl mb-4">Designed For You</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            One Cambridge curriculum.<br />
            <em className="font-semibold text-[#133844]">A path as unique as your child.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Talk to our admissions team about how your child can begin designing their own Cambridge journey at Seedling.
          </p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger}
          >
            <motion.a
              variants={cardRise}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/admissions"
              className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 hover:shadow-2xl hover:shadow-crimson/40 font-dm"
            >
              Plan a Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              variants={cardRise}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/why-cambridge/education"
              className="inline-flex items-center gap-3 border border-[#133844]/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 font-dm"
            >
              Cambridge Canvas
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

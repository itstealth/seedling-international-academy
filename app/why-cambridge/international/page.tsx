"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

// ─── Motion variants ───────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

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
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

// ─── Content ────────────────────────────────────────────────────────────────
const facts = [
  { value: "10,000+", label: "Schools", sub: "Schools worldwide follow the Cambridge international curriculum." },
  { value: "160+", label: "Countries", sub: "Cambridge is taught and recognised across more than 160 countries." },
  { value: "70+", label: "IGCSE Subjects", sub: "The widest subject range of any international education provider." },
  { value: "3–19", label: "Age Range", sub: "A continuous Cambridge pathway from Early Years through Advanced." },
];

const principles = [
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "International in Philosophy",
    desc: "The Cambridge curriculum is built on an international outlook — open in approach, global in aspiration, and welcoming of every culture.",
    color: "royal-blue",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Local in Application",
    desc: "Cambridge can be tailored to local contexts — schools combine it with national curricula to honour heritage and community values.",
    color: "crimson",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3A2.25 2.25 0 0111.25 6v3.776M3.75 9.776V12A2.25 2.25 0 006 14.25h12A2.25 2.25 0 0020.25 12V9.776" />
      </svg>
    ),
    title: "Flexible by Design",
    desc: "Schools shape the curriculum around their learners — choosing from the widest range of subjects available in international education.",
    color: "navy",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Globally Recognised",
    desc: "Cambridge qualifications are accepted by leading universities and employers in India and around the world — opening doors everywhere.",
    color: "mauve",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.75 3.75 0 0016.5 10.5h-9A3.75 3.75 0 003.75 14.25v4.5m9-12v-3.375c0-.621-.504-1.125-1.125-1.125h-.75m-.75 0H7.5m9 4.5v3.375c0 .621.504 1.125 1.125 1.125h.75m-.75 0h1.5m-1.5 0H15m1.5 0h.375c.621 0 1.125-.504 1.125-1.125V10.5m-13.5 9V10.5" />
      </svg>
    ),
    title: "Portable for Mobile Families",
    desc: "Cambridge students moving between Cambridge schools worldwide can continue their studies following the same curriculum — without disruption.",
    color: "royal-blue",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Inspires Lasting Curiosity",
    desc: "Cambridge students develop an informed curiosity and a lasting passion for learning — the most important outcome of any education.",
    color: "crimson",
  },
];

const stages = [
  { num: "01", name: "Cambridge Early Years", age: "Age 3+", desc: "Play-based, holistic first steps in a child's lifelong learning journey." },
  { num: "02", name: "Cambridge Primary", age: "Age 5+", desc: "Clear curriculum, engaging resources, and strong foundations in literacy, numeracy and science." },
  { num: "03", name: "Cambridge Lower Secondary", age: "Age 11+", desc: "Subjects deepen and choice begins — students start shaping their own path." },
  { num: "04", name: "Cambridge Upper Secondary", age: "Age 14+", desc: "IGCSE / O Level — 70+ subjects to design a curriculum as unique as each learner." },
  { num: "05", name: "Cambridge Advanced", age: "Age 16+", desc: "AS & A Level — depth, specialisation and a passport to the world's top universities." },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

export default function InternationalCambridgePage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/img/sps-banner.jpg"
        title="International Cambridge"
        badge="Challenging & Inspiring Students Worldwide"
        breadcrumbs={[{ label: "International Cambridge" }]}
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
        <p className="font-playfair text-crimson text-xl mb-4">A Global Standard for Education</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          One curriculum.<br />
          <em className="font-semibold text-navy">A world of possibility.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          The Cambridge international curriculum sets a global standard for education — recognised by universities and employers worldwide. It is flexible, challenging and inspiring; culturally sensitive yet international in approach; designed to spark an informed curiosity and a lasting passion for learning.
        </p>
      </motion.section>

      {/* ═══ BIG FACTS BAND ═══ */}
      <section className="relative py-14 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-playfair text-[#133844] text-xl mb-3">Cambridge by the Numbers</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-light text-[#133844]">
              How Big <em className="font-semibold text-[#133844]">Cambridge</em> Is
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {facts.map((f) => (
              <motion.div
                key={f.label}
                variants={cardRise}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/70 backdrop-blur-sm border border-[#133844]/10 rounded-2xl p-6 md:p-8 cursor-default"
              >
                <p className="font-playfair text-4xl md:text-6xl font-semibold text-[#133844] leading-none mb-3">{f.value}</p>
                <p className="font-playfair text-lg md:text-xl text-[#133844] font-semibold mb-2">{f.label}</p>
                <p className="text-[#133844]/70 text-xs md:text-sm leading-relaxed font-dm">{f.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ SEVEN PRINCIPLES (Alternating slide-in) ═══ */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-playfair text-navy text-xl mb-3">What Makes It International</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Seven Principles of a <em className="font-semibold text-navy">Cambridge</em> Education
            </h2>
          </div>

          <div className="space-y-6">
            {principles.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <div
                  key={p.title}
                  className={`group bg-off-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border ${c.border} grid md:grid-cols-[80px_1fr_auto] gap-5 md:gap-7 items-center`}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${c.bg} ${c.text} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-2 text-ink">{p.title}</h3>
                    <p className="text-text-light text-sm md:text-base leading-[1.85] font-dm">{p.desc}</p>
                  </div>
                  <div className="hidden md:block">
                    <span className={`text-[10px] font-black tracking-[0.25em] uppercase ${c.text}`}>0{i + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FIVE STAGES — Cambridge Pathway ═══ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-playfair text-navy text-xl mb-3">The Cambridge Pathway</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            A Clear Path from <em className="font-semibold text-navy">Age 3 to 19</em>
          </h2>
          <p className="mt-6 text-text-light text-lg max-w-2xl mx-auto font-dm leading-relaxed">
            One continuous, internationally recognised curriculum — from a child's first school day to university admission.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {stages.map((s, i) => (
            <motion.div
              key={s.name}
              variants={cardRise}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-sand/40 cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-crimson rounded-t-2xl" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-crimson mb-3 block">Stage {s.num}</span>
              <h3 className="font-playfair text-lg font-semibold mb-1 text-ink">{s.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-text-light font-bold mb-3">{s.age}</p>
              <p className="text-text-light text-xs leading-relaxed font-dm">{s.desc}</p>
              <motion.div
                className="mt-4 h-1 rounded-full bg-royal-blue"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ PULL QUOTE ═══ */}
      <section className="relative py-14 md:py-20 px-5 sm:px-6 overflow-hidden bg-crimson">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson via-crimson-dark/30 to-crimson-darker" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-playfair text-sand text-2xl mb-6 tracking-wide">What Cambridge Builds</p>
          <blockquote className="font-playfair text-3xl md:text-4xl font-light leading-[1.15] mb-8">
            &ldquo;Cambridge students develop an <em>informed curiosity</em> and a <em>lasting passion for learning</em>. They gain the essential skills they need for success at university and in their future careers.&rdquo;
          </blockquote>
          <p className="text-white/70 text-sm tracking-wider uppercase font-dm">— Cambridge International</p>
        </motion.div>
      </section>

      {/* ═══ CLOSING CTA REMOVED ═══ */}
    </main>
  );
}

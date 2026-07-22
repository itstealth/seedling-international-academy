"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

// Cambridge Learner Attributes card palette — cycled sequentially.
const claPalette = [
  { bg: "#7e25e0", bgTo: "#5a1aa3" }, // Confident
  { bg: "#5165ec", bgTo: "#3849b0" }, // Responsible
  { bg: "#028819", bgTo: "#015a0e" }, // Reflective
  { bg: "#e04220", bgTo: "#a82e16" }, // Innovative
  { bg: "#8c0e24", bgTo: "#5e0a18" }, // Engaged
];

const pillars = [
  { title: "Child-Centred", desc: "A play-based programme where every child develops at their own pace — building independence, choice-making, and self-worth.", icon: "🎈" },
  { title: "Holistic Curriculum", desc: "Six curriculum areas covering communication, creative expression, physical development, and personal & social growth.", icon: "🌱" },
  { title: "Bilingual Friendly", desc: "Designed for all learners whatever their level of English — with built-in support for bilingual and multilingual classrooms.", icon: "🌍" },
  { title: "Engaging Resources", desc: "Beautiful, research-backed teaching and learning resources designed to spark joy and curiosity in every learner.", icon: "🎨" },
  { title: "Assessment for Growth", desc: "Gentle, observation-based assessment that measures progress and celebrates milestones — never pressures children.", icon: "📈" },
  { title: "Parent Partnership", desc: "Strong parent support materials — because the most powerful learning happens when home and school work together.", icon: "👨‍👩‍👧" },
];

export default function CambridgeEarlyYearsPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      <HeroWrapper backgroundImage="/assets/img/sps-banner.jpg" title="Cambridge Early Years" badge="Ages 3–6 · The First Step" breadcrumbs={[{ label: "Cambridge Early Years" }]} height="large" />

      <motion.section className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <motion.span className="block w-px h-12 bg-sand mx-auto mb-5" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ transformOrigin: "top" }} />
        <p className="font-playfair text-crimson text-xl mb-4">Where Learning Begins</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          The best start in life,<br />
          <em className="font-semibold text-navy">in school and beyond.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Cambridge Early Years gives young learners the strongest possible foundation — a child-centred, play-based programme that helps every child meet key milestones and thrive.
        </p>
      </motion.section>

      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl mb-3">Six Pillars of Early Years</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              What Makes Early Years <em className="font-semibold text-navy">Work</em>
            </h2>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {pillars.map((p, i) => {
              const c = claPalette[i % 5];
              return (
                <motion.div
                  key={p.title}
                  variants={cardRise}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{
                    y: -10,
                    boxShadow: `0 32px 70px -14px ${c.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 p-7 min-h-[280px] flex flex-col gap-5"
                  style={{
                    background: `linear-gradient(160deg, ${c.bg} 0%, ${c.bgTo} 100%)`,
                    boxShadow: "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)" }} />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/95 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[4deg]"
                    style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)" }}
                  >
                    <span className="text-2xl" style={{ filter: "saturate(1.1)" }}>{p.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold mb-3 leading-tight tracking-tight text-white">{p.title}</h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <p className="font-playfair text-[#133844]/70 text-xl mb-4">Begin The Journey</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            The first chapter of a Cambridge story<br />
            <em className="font-semibold text-[#133844]">that lasts a lifetime.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Admissions open for Nursery and Pre-Nursery at Seedling. Visit a campus and see how our youngest learners begin their Cambridge journey.
          </p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={stagger}>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/admissions" className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 font-dm">
              Enquire Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/academics/primary" className="inline-flex items-center gap-3 border border-[#133844]/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 font-dm">
              Cambridge Primary
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

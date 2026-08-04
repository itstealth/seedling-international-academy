"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const pillars = [
  { title: "Cambridge Curriculum", desc: "Full Cambridge International pathway from Early Years through Advanced — 70+ IGCSE subjects and 50+ AS & A Levels, the same world-class standards across both campuses.", icon: "📚", color: "crimson" },
  { title: "Experienced Faculty", desc: "Trained Cambridge educators with a 20:1 student-to-teacher ratio and personalised attention for every learner at both SIA and SMIA.", icon: "👩‍🏫", color: "navy" },
  { title: "Modern Facilities", desc: "Smart classrooms, dedicated STEM labs, library, performing arts spaces, and multi-sport zones — purpose-built for deep, joyful learning.", icon: "🏛️", color: "mauve" },
  { title: "Holistic Development", desc: "Beyond academics — sports, performing arts, clubs, leadership programmes and community service shape the complete learner.", icon: "🎨", color: "royal-blue" },
  { title: "Safe & Nurturing", desc: "Secure campuses with trained counsellors, mentors, and a culture of care that puts every child's emotional and physical well-being first.", icon: "❤️", color: "crimson" },
  { title: "Strong Results", desc: "Cambridge IGCSE and AS/A Level cohorts with proven records of top grades, university placements and a global alumni network across 50+ nations.", icon: "🏆", color: "navy" },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

export default function SixPillars() {
  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
          <p className="font-playfair text-navy text-xl mb-3">What Makes Seedling Special</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            Six <em className="font-semibold text-navy">Pillars</em> of the Seedling Experience
          </h2>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {pillars.map((p) => {
            const c = colorMap[p.color];
            return (
              <motion.div key={p.title} variants={cardRise} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: EASE }} className={`group bg-off-white rounded-2xl p-7 shadow-sm hover:shadow-xl border ${c.border}`}>
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-ink">{p.title}</h3>
                <p className="text-text-light text-sm leading-[1.85] font-dm">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const pillars = [
  { title: "Cambridge Curriculum", desc: "Full Cambridge International pathway from Early Years through Advanced — 70+ IGCSE subjects and 50+ AS & A Levels, the same world-class standards delivered consistently across both campuses.", icon: "📚", color: "red" },
  { title: "Experienced Faculty", desc: "Trained Cambridge educators with a 20:1 student-to-teacher ratio and genuinely personalised attention for every learner at both SIA and SMIA, not just on paper but in day-to-day classroom practice.", icon: "👩‍🏫", color: "blue" },
  { title: "Modern Facilities", desc: "Smart classrooms, dedicated STEM labs, library, performing arts spaces, and multi-sport zones — purpose-built for deep, joyful learning rather than designed purely for a prospectus photograph.", icon: "🏛️", color: "green" },
  { title: "Holistic Development", desc: "Beyond academics — sports, performing arts, clubs, leadership programmes and community service shape the complete learner, giving every student more than one way to find their strength.", icon: "🎨", color: "purple" },
  { title: "Safe & Nurturing", desc: "Secure campuses with trained counsellors, mentors, and a genuine culture of care that puts every child's emotional and physical well-being first, every single day.", icon: "❤️", color: "amber" },
  { title: "Strong Results", desc: "Cambridge IGCSE and AS/A Level cohorts with proven records of top grades, university placements and a global alumni network spread across 50+ nations.", icon: "🏆", color: "rose" },
];

const colorMap: Record<string, { bg: string; text: string; border: string; accent: string; iconBg: string }> = {
  red:    { bg: "bg-red-100",     text: "text-navy-700",    border: "border-red-700",    accent: "bg-rose-500",    iconBg: "bg-rose-500/10" },
  blue:   { bg: "bg-blue-100",     text: "text-navy-700",   border: "border-blue-700",    accent: "bg-blue-500",   iconBg: "bg-blue-500/10" },
  green:  { bg: "bg-green-100",    text: "text-navy-700",  border: "border-green-700",   accent: "bg-green-500",  iconBg: "bg-green-500/10" },
  purple: { bg: "bg-purple-100",   text: "text-navy-700", border: "border-purple-700",  accent: "bg-purple-500", iconBg: "bg-purple-500/10" },
  amber:  { bg: "bg-orange-100",   text: "text-amber-700",  border: "border-orange-700",  accent: "bg-amber-500",  iconBg: "bg-amber-500/10" },
  rose:   { bg: "bg-orange-100",               text: "text-rose-700",   border: "border-green-700",   accent: "bg-rose-500",   iconBg: "bg-rose-500/10" },
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
              <motion.div key={p.title} variants={cardRise} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: EASE }} className={`group rounded-2xl p-7 border ${c.bg} ${c.border} hover:shadow-[0_32px_64px_-16px_rgba(10,31,58,0.15)] relative overflow-hidden`}>
                {/* Decorative color blob */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 ${c.iconBg} rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125`} />
                <div className={`absolute top-0 right-0 w-24 h-24 ${c.iconBg} rounded-bl-full transition-transform duration-500 group-hover:scale-110`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl ${c.iconBg} ${c.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-3xl">{p.icon}</span>
                </div>

                {/* Content */}
                <h3 className={`font-playfair text-xl font-semibold mb-3 ${c.text}`}>{p.title}</h3>
                <p className="text-text-light text-sm leading-[1.85] font-dm">{p.desc}</p>

                {/* Footer accent line */}
                <div className="mt-6 flex items-center gap-3">
                  <div className={`w-10 h-0.5 ${c.accent} transform origin-left transition-all duration-500 group-hover:w-16`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

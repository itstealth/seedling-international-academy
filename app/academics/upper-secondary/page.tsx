"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const routes = [
  { name: "Cambridge IGCSE", count: "70+", desc: "International General Certificate of Secondary Education — globally recognised, modular-friendly, accepted by leading universities worldwide.", color: "crimson" },
  { name: "Cambridge O Level", count: "40+", desc: "A more locally relevant alternative to IGCSE, available in selected subjects. Often used where national curriculum alignment matters.", color: "navy" },
];

const subjectGroups = [
  { group: "Sciences", color: "crimson", items: ["Biology", "Chemistry", "Physics", "Combined Science", "Marine Science", "Environmental Management", "Computer Science"] },
  { group: "Mathematics", color: "navy", items: ["Mathematics A", "Mathematics B", "Additional Mathematics", "Statistics"] },
  { group: "Humanities", color: "mauve", items: ["English Language", "English Literature", "History", "Geography", "Global Perspectives", "Religious Studies", "Sociology", "Economics"] },
  { group: "Languages", color: "royal-blue", items: ["French", "Spanish", "German", "Hindi", "Urdu", "Mandarin Chinese", "Arabic"] },
  { group: "Business & Tech", color: "crimson", items: ["Business Studies", "Accounting", "Computer Science", "Information & Communication Technology", "Entrepreneurship"] },
  { group: "Creative & Vocational", color: "navy", items: ["Art & Design", "Music", "Drama", "Media Studies", "Physical Education", "Design & Technology", "Food & Nutrition"] },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

export default function CambridgeUpperSecondaryPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      <HeroWrapper backgroundImage="/assets/img/sps-banner.jpg" title="Cambridge Upper Secondary" badge="Ages 14–16 · IGCSE & O Level" breadcrumbs={[{ label: "Cambridge Upper Secondary" }]} height="large" />

      <motion.section className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <motion.span className="block w-px h-12 bg-sand mx-auto mb-5" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ transformOrigin: "top" }} />
        <p className="font-playfair text-crimson text-xl mb-4">Where Specialisation Begins</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          A curriculum as unique<br />
          <em className="font-semibold text-navy">as the student studying it.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Cambridge Upper Secondary offers broad, balanced study across a wide range of subjects using learner-centred, enquiry-based approaches — preparing students for Cambridge Advanced and the world's top universities.
        </p>
      </motion.section>

      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl mb-3">Two Routes</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              <em className="font-semibold text-navy">IGCSE</em> or <em className="font-semibold text-navy">O Level</em>
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-6 md:gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {routes.map((r, idx) => {
              const c = colorMap[r.color];
              const pastel = ["bg-pathway-blue-bg border-pathway-blue-border", "bg-pathway-rose-bg border-pathway-rose-border"][idx] || "bg-pathway-blue-bg border-pathway-blue-border";
              return (
                <motion.div key={r.name} variants={cardRise} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: EASE }} className={`${pastel} rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl border`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-playfair text-2xl font-semibold text-ink">{r.name}</h3>
                    <span className={`text-3xl md:text-4xl font-bold ${c.text}`}>{r.count}</span>
                  </div>
                  <p className="text-text-light text-sm md:text-base leading-[1.85] font-dm">{r.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl mb-3">The Subject Catalogue</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-[#133844]">
              Over <em className="font-semibold text-navy">100 Subjects</em>, One Curriculum
            </h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {subjectGroups.map((g, idx) => {
              const c = colorMap[g.color];
              const cardColors = [
                "bg-pathway-purple-bg border-pathway-purple-border",
                "bg-pathway-blue-bg border-pathway-blue-border",
                "bg-pathway-green-bg border-pathway-green-border",
                "bg-pathway-orange-bg border-pathway-orange-border",
                "bg-pathway-rose-bg border-pathway-rose-border",
                "bg-pathway-orange-bg border-pathway-orange-border",
              ];
              const pastel = cardColors[idx] || "bg-pathway-purple-bg border-pathway-purple-border";
              return (
                <motion.div key={g.group} variants={cardRise} whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: EASE }} className={`${pastel} backdrop-blur-sm rounded-2xl p-6 hover:border-sand/40 transition-colors`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-2 h-2 rounded-full ${c.bg.replace('/10', '')}`} />
                    <h3 className="font-playfair text-lg font-semibold text-[#133844]">{g.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((i) => (<span key={i} className="text-xs font-medium text-[#133844]/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">{i}</span>))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <p className="font-playfair text-[#133844] text-xl mb-4">The Final Stretch</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            Two years that open<br />
            <em className="font-semibold text-[#133844]">a lifetime of doors.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Cambridge Upper Secondary at Seedling International Academy — where every student builds the foundation for Cambridge Advanced and the world's best universities.
          </p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={stagger}>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/admissions" className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 font-dm">
              Enquire Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/academics/advanced" className="inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 font-dm">
              Cambridge Advanced
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

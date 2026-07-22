"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const highlights = [
  { title: "Jawahar Nagar Campus", desc: "Our flagship campus in the heart of Jaipur — a 5-acre green campus serving the SIA community for over three decades.", icon: "🌳", color: "crimson" },
  { title: "Cambridge Curriculum", desc: "Full Cambridge International pathway from Early Years through Advanced — 70+ IGCSE subjects and 50+ AS & A Levels.", icon: "📚", color: "navy" },
  { title: "Experienced Faculty", desc: "Trained Cambridge educators with a 20:1 student-to-teacher ratio and personalised attention for every learner.", icon: "👩‍🏫", color: "mauve" },
  { title: "Holistic Campus Life", desc: "Sports, performing arts, clubs, and community service — a Seedling student grows in every dimension.", icon: "🎨", color: "royal-blue" },
  { title: "Safe & Nurturing", desc: "A secure campus with trained counsellors, medical support, and a culture of care that puts student well-being first.", icon: "❤️", color: "crimson" },
  { title: "Strong Alumni Network", desc: "5,000+ Seedling alumni across 50+ nations — proof that a Seedling education travels.", icon: "🌍", color: "navy" },
];

const facilities = [
  { name: "Modern Classrooms", desc: "Smart classrooms with AV, ergonomic furniture and natural light." },
  { name: "Science Labs", desc: "Dedicated Physics, Chemistry, Biology and Computer Science laboratories." },
  { name: "Library & Resource Centre", desc: "Curated library, e-resources, periodicals and quiet study zones." },
  { name: "Sports Complex", desc: "Multi-sport ground, basketball courts, swimming pool and indoor games." },
  { name: "Performing Arts", desc: "Auditorium, music rooms, dance studio and art gallery." },
  { name: "Cafeteria", desc: "Healthy, hygienically prepared meals and snacks for students and staff." },
];

const stats = [
  { value: "1993", label: "Year Founded" },
  { value: "20:1", label: "Student–Teacher Ratio" },
  { value: "5 Acres", label: "Green Campus" },
  { value: "100%", label: "Cambridge Results" },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

export default function SIAPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      <HeroWrapper backgroundImage="/assets/Home/SIA_collage_v3.webp" title="Seedling International Academy" badge="SIA · Jawahar Nagar, Jaipur" breadcrumbs={[{ label: "SIA" }]} height="large" />

      <motion.section className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <motion.span className="block w-px h-12 bg-sand mx-auto mb-5" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ transformOrigin: "top" }} />
        <p className="font-playfair text-crimson text-xl mb-4">Our Flagship Campus</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          Where Cambridge meets<br />
          <em className="font-semibold text-navy">three decades of Seedling.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Our Jawahar Nagar campus is the home of Seedling International Academy (SIA) — a five-acre green space where the Cambridge curriculum comes alive through joyful learning, caring teachers, and a community that treats every child as irreplaceable.
        </p>
      </motion.section>

      {/* Stats band */}
      <section className="relative py-12 md:py-16 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={cardRise} className="text-center">
                <p className="font-playfair text-4xl md:text-5xl font-semibold text-[#133844] mb-2">{s.value}</p>
                <p className="text-[#133844]/70 text-xs uppercase tracking-widest font-dm">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl mb-3">What Makes SIA Special</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Six <em className="font-semibold text-navy">Pillars</em> of the SIA Experience
            </h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {highlights.map((h) => {
              const c = colorMap[h.color];
              return (
                <motion.div key={h.title} variants={cardRise} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: EASE }} className={`group bg-off-white rounded-2xl p-7 shadow-sm hover:shadow-xl border ${c.border}`}>
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{h.icon}</div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-ink">{h.title}</h3>
                  <p className="text-text-light text-sm leading-[1.85] font-dm">{h.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="relative py-12 md:py-20 bg-navy-light/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl mb-3">The Campus</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              World-Class <em className="font-semibold text-navy">Facilities</em>
            </h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {facilities.map((f, i) => (
              <motion.div key={f.name} variants={cardRise} whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: EASE }} className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg border border-sand/40">
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-crimson mb-3 block">0{i + 1}</span>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-ink">{f.name}</h3>
                <p className="text-text-light text-sm leading-[1.85] font-dm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map + Location */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-crimson text-xl mb-3">Visit Us</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-ink leading-tight mb-4">
              Find Your Way <em className="font-semibold text-navy">to SIA</em>
            </h2>
            <p className="text-text-light text-base md:text-lg leading-relaxed font-dm mb-4">
              Sector 4, Jawahar Nagar, Jaipur — easy to reach from anywhere in the city.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-crimson text-white flex items-center justify-center flex-shrink-0 text-[10px]">📞</span>
                <a href="tel:+917413012351" className="text-[#133844] font-semibold hover:text-crimson transition-colors">+91 74130 12351 (Admissions)</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-crimson text-white flex items-center justify-center flex-shrink-0 text-[10px">✉</span>
                <a href="mailto:seedlingacademy@hotmail.com" className="text-[#133844] font-semibold hover:text-crimson transition-colors break-all">seedlingacademy@hotmail.com</a>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Seedling+International+Academy+Jawahar+Nagar+Jaipur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-[11px] font-black tracking-[0.2em] uppercase text-crimson hover:text-[#133844] transition-colors">
              View on Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, ease: EASE }} className="rounded-[8px] overflow-hidden border border-sand/40 shadow-lg h-[360px]">
            <iframe
              src="https://www.google.com/maps?q=Seedling+International+Academy+Jawahar+Nagar+Jaipur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SIA Jawahar Nagar location"
            />
          </motion.div>
        </div>
      </section>

      <motion.section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <p className="font-playfair text-[#133844] text-xl mb-4">Visit Our Campus</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            Walk the corridors<br />
            <em className="font-semibold text-[#133844]">of a Seedling school.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Book a campus visit and see the SIA difference in person — the classrooms, the teachers, the community.
          </p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={stagger}>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/admissions" className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 font-dm">
              Begin Application
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/smia" className="inline-flex items-center gap-3 border border-[#133844]/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 font-dm">
              Visit SMIA →
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

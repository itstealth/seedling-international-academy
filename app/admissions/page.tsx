"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children, delay = 0, className = "",
}: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TAG LABEL — same as Academics page
───────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-sand/10 text-crimson text-xs font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full border border-sand/20 mb-6 font-dm">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-sand/20 rounded-2xl overflow-hidden transition-all duration-300 ${open ? "shadow-xl border-sand/40" : "shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left bg-white hover:bg-off-white transition-colors duration-200"
      >
        <span className="font-playfair font-black text-navy-deeper text-lg leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 ${open ? "border-crimson bg-crimson text-white rotate-45" : "border-sand/40 text-sand"} flex items-center justify-center transition-all duration-300 text-lg font-light`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-64" : "max-h-0"}`}>
        <p className="px-7 pb-6 text-text-light leading-[1.9] text-sm bg-white font-dm">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const schools = [
  "Seedling Public School (CBSE) — Jawahar Nagar",
  "Seedling International Academy — Jawahar Nagar",
  "Seedling Modern High School (CBSE) — Durgapura",
  "Seedling Modern International Academy — Durgapura",
  "Seedling Wonderland Kids League — Jawahar Nagar",
  "Seedling Wonderland Kids League — Durgapura",
];

const whyUs = [
  { icon: "🏅", title: "100% Board Results", desc: "Consistent 100% results in board examinations — every year, across all campuses." },
  { icon: "📋", title: "NEP Aligned", desc: "Curriculum thoughtfully designed to align with the National Education Policy for a future-ready education." },
  { icon: "🌍", title: "Global Standards", desc: "Choose from CBSE or International curricula — the same Seedling values, globally recognised credentials." },
  { icon: "👨‍👩‍👧", title: "15:1 Teacher Ratio", desc: "Small class sizes ensure every child receives personalised attention, guidance, and genuine care." },
  { icon: "🏛️", title: "State-of-the-Art Facilities", desc: "Modern classrooms, science labs, digital whiteboards, outdoor spaces — all designed for deep learning." },
  { icon: "❤️", title: "Holistic Well-being", desc: "Academic growth, emotional intelligence, sports, arts — we nurture the complete child, not just the student." },
];

const steps = [
  {
    num: "01",
    title: "Visit the Official Website",
    desc: "Go to seedlingschools.com and click on the Admissions tab. Select your preferred school — Jawahar Nagar or Durgapura.",
    icon: "🌐",
  },
  {
    num: "02",
    title: "Fill the Online Application Form",
    desc: "Complete the Online Form with your child's details, preferred class, and contact information. Submit the non-refundable application amount along with the form.",
    icon: "📝",
  },
  {
    num: "03",
    title: "Admission Team Connects",
    desc: "Our Admissions Counsellor will contact you to explain the complete process, answer your questions, and schedule the next steps. Counselling is available both online and offline.",
    icon: "📞",
  },
  {
    num: "04",
    title: "Interaction & Assessment",
    desc: "A friendly interaction/assessment is conducted for the child (age-appropriate). This is not a high-stakes test — it helps us understand your child's learning style and place them correctly.",
    icon: "🤝",
  },
  {
    num: "05",
    title: "Document Submission",
    desc: "Submit the required documents at the school office. Our team will verify and process everything smoothly and guide you at every step.",
    icon: "📂",
  },
  {
    num: "06",
    title: "Confirmation & Welcome",
    desc: "Receive your admission confirmation. Pay the fee as per the schedule and collect the joining kit. Welcome to the Seedling Family!",
    icon: "🎉",
  },
];

const documents = [
  { doc: "Transfer Certificate (TC)", note: "From previous school" },
  { doc: "Birth Certificate", note: "Original + photocopy" },
  { doc: "Residence Proof", note: "Aadhar / utility bill" },
  { doc: "Child's Photograph", note: "Passport size, recent" },
  { doc: "Parents' / Guardian's Photograph", note: "Passport size" },
  { doc: "Marksheet / Report Card", note: "If applicable (Class I+)" },
  { doc: "Medical Reports", note: "If any" },
  { doc: "Character Certificate", note: "From previous school" },
  { doc: "Aadhar Card — Child", note: "Original + photocopy" },
  { doc: "Aadhar Card — Parents", note: "Original + photocopy" },
  { doc: "Achievement Certificates", note: "Sports / academics / arts" },
  { doc: "Category Verification Certificate", note: "If applicable" },
];

const feeRows = [
  { school: "Seedling Public School (CBSE)", level: "Nursery – Class XII", annual: "₹39,500", admission: "On enquiry", transport: "On enquiry", note: "" },
  { school: "Seedling Modern High School (CBSE)", level: "Nursery – Class XII", annual: "₹39,500", admission: "On enquiry", transport: "On enquiry", note: "" },
  { school: "Seedling International Academy", level: "Play Group – IGCSE", annual: "₹40,000+", admission: "₹8,540", transport: "On enquiry", note: "Others: ₹7,700" },
  { school: "Seedling Modern International Academy", level: "Play Group – IGCSE", annual: "₹60,000+", admission: "On enquiry", transport: "On enquiry", note: "" },
  { school: "Seedling Wonderland Kids League", level: "Play Group – UKG", annual: "On enquiry", admission: "On enquiry", transport: "On enquiry", note: "Both campuses" },
];

const transport = [
  { icon: "🚌", title: "Fleet Coverage", desc: "GPS-enabled buses covering all major residential areas across Jaipur — Jawahar Nagar, Durgapura, and surrounding localities." },
  { icon: "📍", title: "Route Planning", desc: "Dedicated routes planned for both Jawahar Nagar and Durgapura campuses. Contact the school office for your nearest pickup point and route details." },
  { icon: "🔒", title: "Safety First", desc: "All buses are equipped with CCTV cameras on premises. Trained drivers and attendants escort students on every route, every day." },
  { icon: "📲", title: "Real-Time Updates", desc: "Parents receive timely communication about bus timings and any changes via the school's communication channels and ERP system." },
];

const faqs = [
  { q: "What boards do Seedling Schools follow?", a: "Seedling Group operates under two boards — CBSE (Central Board of Secondary Education) at Seedling Public School and Seedling Modern High School, and International curricula at Seedling International Academy and Seedling Modern International Academy. Early years are offered through Seedling Wonderland Kids League at both campuses." },
  { q: "What is the age criterion for admission?", a: "The minimum age for Day School (Playgroup / Nursery) is 3 years as of 31st March of the admission year. Age eligibility for each class follows CBSE board norms. For exact age requirements per class, please contact the school's admission counsellor." },
  { q: "Is there an admission test?", a: "An age-appropriate interaction or friendly assessment may be conducted for the child. This is not a high-pressure entrance exam — it helps the school understand the child's learning style and place them in the right environment." },
  { q: "Can I apply online?", a: "Yes. Visit seedlingschools.com, click on Admissions → Online Form. Fill in the required details, select your preferred school, and submit. Our admission team will reach out to guide you through the next steps." },
  { q: "Are scholarships available?", a: "Yes. Seedling Schools offers merit scholarships for academically outstanding students and for students with achievements in sports. Early bird incentives are also available for registrations completed early in the admission season. Contact the school for current scholarship criteria." },
  { q: "Is transportation available?", a: "Yes. Transportation is available for students across both campuses — Jawahar Nagar and Durgapura. GPS-enabled buses with trained attendants cover major routes across Jaipur. For route details and fees, contact the school office directly." },
  { q: "What is the Student-Teacher ratio?", a: "Seedling maintains a 15:1 student-to-teacher ratio, ensuring that every child receives personalised attention, mentoring, and academic support throughout their schooling journey." },
  { q: "Is re-admission done for Class XI?", a: "All successful students of Class X may apply for Class XI admission. Re-admission is processed through the school office. Students must apply on the prescribed form along with the non-refundable application amount." },
];

const campusLocations = [
  {
    name: "Jawahar Nagar Campus",
    address: "Sector-4, Park Lane, Jawahar Nagar, Jaipur, Rajasthan – 302004",
    phone: "+91 74130 12351",
    schools: ["Seedling Public School (CBSE)", "Seedling International Academy", "Seedling Wonderland Kids League"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3!2d75.803!3d26.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db174e7a1a1a1%3A0x1!2sSeedling+Public+School%2C+Jawahar+Nagar!5e0!3m2!1sen!2sin!4v1600000000000",
  },
  {
    name: "Durgapura Campus",
    address: "Ashok Marg, Mahaveer Nagar-II, Durgapura, Jaipur, Rajasthan – 302018",
    phone: "+91 95877 72837",
    schools: ["Seedling Modern High School (CBSE)", "Seedling Modern International Academy", "Seedling Wonderland Kids League"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.784!3d26.894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db174e7a1a1a1%3A0x2!2sSeedling+Modern+High+School%2C+Durgapura!5e0!3m2!1sen!2sin!4v1600000000001",
  },
];


function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <>
    <section className="relative w-full h-[650px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Home/Kindergarten.JPG')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>

    <section className="bg-navy-deeper pt-16 pb-8  md:pb-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight mb-4">
          Admissions
        </h1>
        <p className="text-white text-lg font-dm font-light max-w-2xl mx-auto">
          Begin your child's journey with Seedling — where excellence meets warmth.
        </p>
      </div>
    </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function AdmissionsPage() {
  const [sticky, setSticky] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", school: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      <style>{`
        .duration-400 { transition-duration: 400ms; }
      `}</style>

      {/* ── STICKY CTA BAR ── */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${sticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
        <div className="bg-white border-t border-sand/30 shadow-2xl px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-playfair font-black text-xl text-navy-deeper tracking-tight">Admissions Open 2026–27</p>
              <p className="text-text-light text-xs mt-0.5 font-dm font-medium">Seats are limited — early bird incentives available</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="#enquire" className="bg-crimson hover:bg-crimson-dark text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 hover:shadow-lg">
                Apply Now
              </a>
              <a href="tel:+917413012351" className="border-2 border-crimson text-crimson hover:bg-crimson/5 px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Hero />

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      {/* <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="/assets/Home/classroom.jpg"
          alt="Admissions at Seedling"
          className="absolute inset-0 w-full h-full object-cover object-top scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/95 via-navy-deeper/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="font-dm text-sand text-lg font-black tracking-[0.4em] mb-4 uppercase">
                Admissions Open · 2026–27
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-playfair text-white font-black leading-[1.05] text-4xl md:text-5xl mb-8 tracking-tighter">
                Begin Your<br />
                <span className="text-sand">Seedling</span><br />
                Journey.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-md font-dm font-light">
                Seedling Group of Schools — 5 schools, 2 campuses, CBSE board. Prioritising student well-being and community interests since 1993.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="flex gap-4 flex-wrap">
                <a href="#process" className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-10 py-5 rounded-full text-sm font-black tracking-widest uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40">
                  How to Apply
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a href="#enquire" className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white hover:text-navy-deeper px-10 py-5 rounded-full text-sm font-black tracking-widest uppercase transition-all duration-300">
                  Enquire Now
                </a>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="flex gap-4 flex-wrap mt-12">
                {["100% Board Results", "Est. 1993", "20,000+ Students", "CBSE Board"].map((b) => (
                  <span key={b} className="bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full backdrop-blur-md">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="hidden md:block">
            <div id="enquire" className="bg-white rounded-3xl shadow-2xl p-8 border border-[#F0EDE8]">
              <div className="mb-6">
                <p className="display text-2xl font-semibold text-[#1C1C1E] mb-1">Enquire Now</p>
                <p className="text-[#777] text-sm">Our team will respond within 24 hours.</p>
              </div>
              {submitted ? (
                <div className="text-center py-8">
                  <span className="text-5xl block mb-4">✅</span>
                  <p className="display text-2xl font-semibold text-navy mb-2">Thank You!</p>
                  <p className="text-[#555] text-sm leading-relaxed">Our admissions team will contact you within 24 hours. Welcome to the Seedling family!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Parent Name *</label>
                      <input required type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-light transition-all duration-200" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Phone *</label>
                      <input required type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-light transition-all duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Email</label>
                    <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-light transition-all duration-200" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Select School *</label>
                    <select required value={formData.school} onChange={e => setFormData({ ...formData, school: e.target.value })}
                      className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-light transition-all duration-200 bg-white">
                      <option value="">Choose a school…</option>
                      {schools.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#555] tracking-wide uppercase block mb-1.5">Message</label>
                    <textarea placeholder="Any specific queries?" rows={3} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#BBB] focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-light transition-all duration-200 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-crimson hover:bg-crimson-dark text-white py-4 rounded-xl font-semibold tracking-wide text-sm transition-all duration-300 hover:shadow-lg hover:shadow-crimson/20">
                    Send Enquiry →
                  </button>
                  <p className="text-[#AAA] text-xs text-center">We typically respond within 24 hours · No spam, ever</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section> */}

      {/* STATS BAND — matches About page exactly */}
      <section className="bg-navy-deeper text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #D6D1CF 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 divide-x-0 lg:divide-x lg:divide-white/10">
            {[
              { value: "20k+", label: "Students" },
              { value: "15:1", label: "Ratio" },
              { value: "5k+", label: "Alumni" },
              { value: "100%", label: "Results" },
              { value: "50+", label: "Nations" },
              { value: "1993", label: "Est." },
            ].map((s) => (
              <div key={s.label} className="px-4 text-center">
                <p className="font-playfair text-4xl font-black text-sand mb-1">{s.value}</p>
                <p className="text-white/40 text-[10px] font-black tracking-[0.25em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-24">
          <Tag>Why Seedling</Tag>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper leading-[1.1] tracking-tight">
            Six Reasons Parents<br />
            <span className="text-crimson">Choose Us</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="group bg-white border border-sand/20 rounded-3xl p-10 hover:shadow-[0_32px_64px_-16px_rgba(10,31,58,0.1)] hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sand/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
                <span className="text-5xl mb-8 block transition-all duration-300">{w.icon}</span>
                <h4 className="font-playfair text-2xl font-black text-navy-deeper mb-4 tracking-tight">{w.title}</h4>
                <p className="text-text-light text-sm leading-[1.8] font-dm">{w.desc}</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-crimson transform origin-left transition-all duration-500 group-hover:w-16" />
                  <span className="text-crimson text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500">Excellence</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. ADMISSION PROCESS TIMELINE
      ══════════════════════════════════════════════════ */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <Tag>Admission Process</Tag>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper leading-[1.1] tracking-tight">
              Six Simple Steps<br />
              <span className="text-crimson">to Join Us</span>
            </h2>
            <p className="text-text-light mt-6 max-w-xl mx-auto leading-relaxed font-dm">
              We've made the admission process as clear and frictionless as possible. Our team is with you at every step.
            </p>
          </Reveal>

          {/* Vertical timeline */}
          <div className="relative">
            {/* connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sand/20 via-sand to-sand/20 md:-translate-x-px hidden sm:block" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    {/* dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-crimson rounded-full ring-8 ring-crimson/10 z-10 hidden sm:block" />

                    {/* card — left or right */}
                    <div className="md:w-5/12">
                      <div className={`bg-off-white border border-sand/20 rounded-3xl p-8 hover:shadow-xl hover:border-sand/40 transition-all duration-500 group ${i % 2 === 1 ? "md:ml-auto" : ""}`}>
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 bg-white border border-sand/10 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                              {step.icon}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="font-playfair text-5xl font-black text-navy-deeper/10 leading-none group-hover:text-crimson/10 transition-colors duration-500">{step.num}</span>
                              <h3 className="font-playfair text-2xl font-black text-navy-deeper group-hover:text-crimson transition-colors duration-500">{step.title}</h3>
                            </div>
                            <p className="text-text-light text-sm leading-[1.8] font-dm">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* spacer */}
                    <div className="md:w-2/12" />
                    <div className="md:w-5/12" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* inline CTA after process */}
          <Reveal className="mt-24 text-center">
            <div className="bg-navy-deeper rounded-[2.5rem] p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sand opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="font-dm text-sand text-lg font-black tracking-[0.2em] uppercase mb-4">Ready to take the first step?</p>
              <h3 className="font-playfair text-4xl md:text-5xl font-black mb-10 tracking-tight text-white">Start Your Application Today</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://seedlingschools.com/admission-online.php" target="_blank" rel="noopener noreferrer"
                  className="bg-crimson text-white hover:bg-crimson-dark px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40">
                  Fill Online Form
                </a>
                <a href="tel:+917413012351" className="border-2 border-white/20 text-white hover:bg-white hover:text-navy-deeper px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300">
                  Call +91 74130 12351
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. DOCUMENTS REQUIRED
      ══════════════════════════════════════════════════ */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <Reveal>
            <Tag>Eligibility & Requirements</Tag>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper leading-[1.1] mb-8 tracking-tight">
              Documents<br />
              <span className="text-crimson">Required</span>
            </h2>
            <p className="text-text-light leading-[1.9] mb-10 font-dm">
              Please keep the following documents ready at the time of admission. For Class I and above, bring the marksheet or report card from the previous school. Original documents must be presented for verification.
            </p>
            <div className="bg-sand/10 border border-sand/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-crimson" />
              <p className="font-playfair text-2xl font-black text-navy-deeper mb-6 tracking-tight">📌 Important Notes</p>
              <ul className="space-y-4 text-sm text-text-light leading-relaxed font-dm">
                <li className="flex gap-3"><span className="text-crimson font-black">01</span>All applications must be submitted on the prescribed form with a non-refundable amount.</li>
                <li className="flex gap-3"><span className="text-crimson font-black">02</span>Re-admission is done in Class XI. All Class X students must re-apply.</li>
                <li className="flex gap-3"><span className="text-crimson font-black">03</span>Minimum age for Nursery/Playgroup: 3 years as of 31st March of the admission year.</li>
                <li className="flex gap-3"><span className="text-crimson font-black">04</span>Parent counselling is available both online and offline — we're here to help.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-4">
              {documents.map((d, i) => (
                <div key={d.doc}
                  className="flex items-center gap-5 bg-white border border-sand/10 rounded-2xl px-6 py-5 hover:border-crimson hover:bg-off-white transition-all duration-300 group shadow-sm hover:shadow-lg">
                  <div className="w-10 h-10 bg-sand/10 group-hover:bg-crimson rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500">
                    <svg className="w-5 h-5 text-crimson group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-navy-deeper text-base font-black font-playfair tracking-tight">{d.doc}</p>
                    <p className="text-text-light text-xs mt-0.5 font-dm">{d.note}</p>
                  </div>
                  <span className="text-[10px] text-crimson bg-crimson/5 border border-crimson/10 px-3 py-1 rounded-full font-black uppercase tracking-widest flex-shrink-0">Required</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. FEE STRUCTURE
      ══════════════════════════════════════════════════ */}
      {/* <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Tag>Fee Structure</Tag>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper leading-[1.1] tracking-tight">
              Transparent &<br />
              <span className="text-crimson">Straightforward</span>
            </h2>
            <p className="text-text-light mt-6 max-w-lg mx-auto leading-relaxed font-dm">
              Indicative fee structure for 2025–26. Current fees may vary — contact the school office for the latest confirmed schedule. Early bird discounts and merit scholarships are available.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-3xl border border-sand/20 shadow-xl">
              <table className="w-full min-w-[800px] text-sm font-dm">
                <thead>
                  <tr className="bg-navy-deeper text-white">
                    <th className="text-left px-8 py-6 font-black tracking-widest uppercase text-[10px]">School</th>
                    <th className="text-left px-6 py-6 font-black tracking-widest uppercase text-[10px]">Level</th>
                    <th className="text-center px-6 py-6 font-black tracking-widest uppercase text-[10px]">Annual Fee</th>
                    <th className="text-center px-6 py-6 font-black tracking-widest uppercase text-[10px]">Admission Fee</th>
                    <th className="text-center px-6 py-6 font-black tracking-widest uppercase text-[10px]">Transport</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row, i) => (
                    <tr key={row.school}
                      className={`border-t border-sand/10 transition-colors duration-300 hover:bg-sand/5 ${i % 2 === 0 ? "bg-white" : "bg-off-white"}`}>
                      <td className="px-8 py-6">
                        <p className="font-black text-navy-deeper font-playfair text-lg tracking-tight leading-snug">{row.school}</p>
                        {row.note && <p className="text-crimson text-[10px] font-black uppercase tracking-widest mt-1.5">{row.note}</p>}
                      </td>
                      <td className="px-6 py-6 text-text-light font-medium">{row.level}</td>
                      <td className="px-6 py-6 text-center">
                        <span className="font-playfair text-xl font-black text-navy-deeper">{row.annual}</span>
                      </td>
                      <td className="px-6 py-6 text-center text-text-light font-medium">{row.admission}</td>
                      <td className="px-6 py-6 text-center">
                        <span className="bg-sand/10 text-navy-deeper border border-sand/20 text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest">{row.transport}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sand text-[10px] font-black uppercase tracking-[0.2em] mt-6 text-center">
              * Fees are indicative and subject to revision. Contact the school office for confirmed schedules.
            </p>
          </Reveal>

        
          <Reveal delay={100}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { icon: "🥇", title: "Merit Scholarships", desc: "Available for academically outstanding students across all schools. Contact the admissions office for eligibility criteria." },
                { icon: "🏅", title: "Sports Scholarships", desc: "Exceptional athletes may be eligible for fee concessions. Seedling values sports performance at par with academic achievement." },
                { icon: "⏰", title: "Early Bird Incentive", desc: "Register early in the admission season to benefit from early bird incentives. Seats are limited — don't wait!" },
              ].map((s) => (
                <div key={s.title} className="bg-white border border-sand/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group">
                  <div className="w-16 h-16 bg-off-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {s.icon}
                  </div>
                  <h4 className="font-playfair text-2xl font-black text-navy-deeper mb-3 tracking-tight">{s.title}</h4>
                  <p className="text-text-light text-sm leading-[1.8] font-dm">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════════
          6. TRANSPORT
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <Tag>Transport Facility</Tag>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper leading-[1.1] tracking-tight">
              Safe & Reliable<br />
              <span className="text-crimson">School Transport</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {transport.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="bg-off-white border border-sand/20 rounded-3xl p-10 flex gap-8 hover:shadow-xl hover:border-sand/40 transition-all duration-500 group">
                  <span className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">{t.icon}</span>
                  <div>
                    <h4 className="font-playfair text-2xl font-black text-navy-deeper mb-3 tracking-tight">{t.title}</h4>
                    <p className="text-text-light text-sm leading-[1.9] font-dm">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Campus Maps — tabbed */}
          <Reveal>
            <div className="bg-white border border-sand/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
              {/* tab switcher */}
              <div className="flex border-b border-sand/10">
                {campusLocations.map((campus, i) => (
                  <button key={campus.name} onClick={() => setActiveTab(i)}
                    className={`flex-1 px-8 py-6 text-sm font-black transition-all duration-300 text-left uppercase tracking-widest ${activeTab === i ? "bg-navy-deeper text-white" : "bg-white text-text-light hover:bg-off-white"}`}>
                    <span className="block text-[10px] opacity-60 mb-1">Campus</span>
                    {campus.name}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2">
                {/* map iframe placeholder */}
                <div className="h-80 md:h-[500px] bg-navy-deeper relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('/assets/img/sps-banner.jpg')] bg-cover bg-center opacity-20 transition-transform duration-[10s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper via-navy-deeper/80 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-8 z-10">
                    <div className="w-20 h-20 bg-sand/10 rounded-full flex items-center justify-center mb-2">
                      <span className="text-4xl">📍</span>
                    </div>
                    <p className="font-playfair text-3xl font-black text-white tracking-tight">{campusLocations[activeTab].name}</p>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs font-dm">{campusLocations[activeTab].address}</p>
                    <a href={`https://www.google.com/maps/search/${encodeURIComponent(campusLocations[activeTab].address)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-4 bg-sand text-navy-deeper hover:bg-white text-[10px] px-8 py-3.5 rounded-full font-black tracking-widest uppercase transition-all duration-300 hover:shadow-xl">
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>

                {/* campus info */}
                <div className="p-12 flex flex-col justify-between bg-white">
                  <div>
                    <p className="font-playfair text-4xl font-black text-navy-deeper mb-8 tracking-tight">{campusLocations[activeTab].name}</p>
                    <div className="space-y-6 mb-10">
                      <div className="flex gap-4 items-start">
                        <span className="w-10 h-10 bg-off-white rounded-xl flex items-center justify-center flex-shrink-0 text-xl border border-sand/10">📍</span>
                        <p className="text-text-light text-base leading-relaxed font-dm">{campusLocations[activeTab].address}</p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="w-10 h-10 bg-off-white rounded-xl flex items-center justify-center flex-shrink-0 text-xl border border-sand/10">📞</span>
                        <a href={`tel:${campusLocations[activeTab].phone}`} className="text-crimson font-black text-lg font-playfair tracking-tight hover:text-crimson-dark transition-colors">
                          {campusLocations[activeTab].phone}
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.3em] uppercase text-sand mb-5">Schools at this campus</p>
                      <div className="space-y-3">
                        {campusLocations[activeTab].schools.map(s => (
                          <div key={s} className="flex items-center gap-3 text-sm text-text-base font-dm font-medium">
                            <span className="w-2 h-2 bg-crimson rounded-full flex-shrink-0" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-sand/10 flex gap-4">
                    <a href={`tel:${campusLocations[activeTab].phone}`}
                      className="flex-1 bg-navy-deeper hover:bg-navy-dark text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center transition-all duration-300">
                      Call Campus
                    </a>
                    <a href="#enquire"
                      className="flex-1 border-2 border-crimson text-crimson hover:bg-crimson/5 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center transition-all duration-300">
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. CAMPUS VISIT CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="/assets/Home/smart-classroom.jpg"
          alt="Book a campus visit"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper/95 via-navy-deeper/80 to-crimson/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <Reveal>
            <p className="font-dm text-sand text-lg font-black tracking-[0.4em] mb-6 uppercase">Experience Seedling Firsthand</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-black leading-[1.05] mb-8 tracking-tighter text-white">
              Book a<br />
              <span className="text-sand">Campus Visit</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-12 max-w-xl mx-auto font-dm font-light">
              Walk through our campuses, meet our teachers, and feel the Seedling difference. Parent counselling is available both online and offline. Come feel the buzz.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex gap-6 justify-center flex-wrap">
              <a href="tel:+917413012351"
                className="inline-flex items-center gap-3 bg-white text-navy-deeper hover:bg-sand px-12 py-5 rounded-full text-sm font-black tracking-widest uppercase transition-all duration-300 hover:shadow-2xl">
                📞 Book a Visit
              </a>
              <a href="#enquire"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white hover:text-navy-deeper px-12 py-5 rounded-full text-sm font-black tracking-widest uppercase transition-all duration-300">
                Enquire Online
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                ["🏫", "In-Person", "Campus Tour"],
                ["💻", "Online", "Counselling"],
                ["📅", "Flexible", "Scheduling"],
                ["🆓", "Completely", "Free"],
              ].map(([icon, line1, line2]) => (
                <div key={line2} className="text-center group">
                  <div className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-500">{icon}</div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed">{line1}<br />{line2}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. FAQ
      ══════════════════════════════════════════════════ */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <Tag>Common Questions</Tag>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper leading-[1.1] tracking-tight">
            Parents Ask,<br />
            <span className="text-crimson">We Answer</span>
          </h2>
          <p className="text-text-light mt-6 max-w-lg mx-auto leading-relaxed font-dm">
            Everything you need to know before making your decision. Can't find your answer? Call us directly.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Reveal key={faq.q}>
              <FAQItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="text-text-light text-sm mb-6 font-dm font-medium">Still have questions? We'd love to talk.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+917413012351" className="inline-flex items-center gap-3 bg-navy-deeper hover:bg-navy-dark text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 hover:shadow-xl">
              📞 +91 74130 12351 (Jawahar Nagar)
            </a>
            <a href="tel:+919587772837" className="inline-flex items-center gap-3 border-2 border-navy-deeper/20 text-navy-deeper hover:bg-off-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300">
              📞 +91 95877 72837 (Durgapura)
            </a>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-40 bg-navy-deeper relative overflow-hidden">
        <img
          src="/assets/Home/library.jpg"
          alt="Join Seedling"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper/90 to-navy/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sand/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal>
            <p className="display text-sand text-xl italic mb-4">The Seedling Family Awaits</p>
            <h2 className="display text-4xl md:text-5xl font-light leading-[1.0] mb-6 text-white">
              Where Every{" "}
              <em className="font-semibold text-sand">Student</em>{" "}
              Matters.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Admissions are open for 2026–27. Seats are limited. Enrol your child today and give them the Seedling advantage — from Play Group to University.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://seedlingschools.com/admission-online.php" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-10 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/30 hover:gap-4">
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="tel:+917413012351"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-navy-deeper px-10 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300">
                Call Us Now
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              {["🎓 CBSE Board", "🌿 Est. 1993", "📍 2 Campuses in Jaipur", "❤️ 20,000+ Students"].map((b) => (
                <span key={b} className="bg-white/8 border border-white/15 text-white/60 text-xs px-5 py-2 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

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
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TAG — matches all other pages
───────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-emerald-200 mb-4">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   DATA — all from seedlingschools.com/career.php
───────────────────────────────────────────── */

const openRoles = [
  {
    id: 1,
    title: "Educator — Primary (Classes I–V)",
    board: "CBSE / Cambridge",
    type: "Teaching",
    location: "Jawahar Nagar & Durgapura, Jaipur",
    desc: "Seeking passionate, committed educators for Primary classes who can build joyful classroom connections, deliver NEP-aligned lessons, and nurture each child's holistic development.",
    tags: ["Primary", "CBSE", "Cambridge"],
    urgent: false,
  },
  {
    id: 2,
    title: "Educator — Middle School (Classes VI–VIII)",
    board: "CBSE / Cambridge",
    type: "Teaching",
    location: "Jawahar Nagar & Durgapura, Jaipur",
    desc: "Looking for diligent, subject-specialist educators for Middle School who can make learning immersive, experiential, and deeply engaging for students.",
    tags: ["Middle School", "CBSE", "Cambridge"],
    urgent: false,
  },
  {
    id: 3,
    title: "Educator — Senior Secondary (Classes IX–XII)",
    board: "CBSE / Cambridge",
    type: "Teaching",
    location: "Jawahar Nagar & Durgapura, Jaipur",
    desc: "We need experienced Senior Secondary educators who can deliver rigorous academic content, mentor students through board preparation, and build a culture of excellence.",
    tags: ["Senior", "CBSE", "Cambridge"],
    urgent: true,
  },
  {
    id: 4,
    title: "Administrative Role",
    board: "All Schools",
    type: "Administrative",
    location: "Jawahar Nagar & Durgapura, Jaipur",
    desc: "Seedling is growing, and so is our administrative team. We welcome organised, professional individuals ready to support the smooth functioning of our campuses and contribute to a thriving school community.",
    tags: ["Administrative", "Operations"],
    urgent: false,
  },
];

const whyWork = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Continuous Learning",
    desc: "Regular professional development, training workshops, and access to the latest pedagogical practices — both CBSE and Cambridge methodologies.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Collaborative Culture",
    desc: "Work alongside a league of exemplary educational leaders who inspire each other. We come together, adapt, and grow — as one Seedling family.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Meaningful Impact",
    desc: "Be the guiding light in a student's life. At Seedling, teachers impart not just textbook lessons but invaluable life lessons that shape futures.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Growth Opportunities",
    desc: "30+ years of institutional growth means new roles, expanded responsibilities, and career advancement paths for educators and administrators alike.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trusted Institution",
    desc: "Join one of Jaipur's most respected school groups — 5 schools, 2 campuses, CBSE & Cambridge, and a community of over 20,000 students since 1992.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Holistic Well-being",
    desc: "We care for our staff the same way we care for our students. A supportive, respectful, and flexible work environment across both campuses.",
  },
];

const testimonials = [
  {
    name: "Ms. Ishita Mendiratta",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    quote:
      "Our aim was clear as we transitioned to the virtual platform. Academic engagement was one aspect, but most important was to keep kids involved and spare them from anxiety. Seeing them smile on screen and participate enthusiastically is truly a heartwarming feeling.",
  },
  {
    name: "Ms. Topcee Ahuja",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    quote:
      "The pandemic made us consider things we never thought about before. Sometimes, it takes major disruptions to force us to change. Being able to come together and connect has been so meaningful, exciting, and challenging — but we're definitely all set to deal with the 'new normal' flexibly and successfully.",
  },
];

const qualifications = [
  { label: "Bachelor's Degree", sub: "Minimum eligibility" },
  { label: "Master's Degree", sub: "Preferred for senior roles" },
  { label: "B.Ed", sub: "Required for teaching roles" },
  { label: "Any other", sub: "As applicable to the role" },
];

const experiences = [
  { label: "Less than 5 years", sub: "Entry to mid-level" },
  { label: "More than 5 years", sub: "Senior roles" },
];

/* ─────────────────────────────────────────────
   JOB CARD COMPONENT
───────────────────────────────────────────── */
function JobCard({
  role,
  onApply,
}: {
  role: (typeof openRoles)[0];
  onApply: (role: (typeof openRoles)[0]) => void;
}) {
  return (
    <div className="group bg-white border border-[#E8E3DA] rounded-2xl p-7 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          {role.urgent && (
            <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              Urgent
            </span>
          )}
          <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
            role.type === "Teaching"
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-sky-50 text-sky-700 border-sky-200"
          }`}>
            {role.type}
          </span>
        </div>
        <span className="text-[#999] text-xs flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {role.location}
        </span>
      </div>

      <h3 className="display text-2xl font-semibold text-[#1C1C1E] mb-1 group-hover:text-emerald-700 transition-colors duration-200">
        {role.title}
      </h3>
      <p className="text-emerald-600 text-sm font-medium mb-4">{role.board}</p>

      <p className="text-[#666] text-sm leading-[1.9] mb-6">{role.desc}</p>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex flex-wrap gap-2">
          {role.tags.map((t) => (
            <span key={t} className="bg-[#F5F0E8] text-[#777] text-xs px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => onApply(role)}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200 hover:gap-3"
        >
          Apply Now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   APPLICATION MODAL
───────────────────────────────────────────── */
function ApplyModal({
  role,
  onClose,
}: {
  role: (typeof openRoles)[0] | null;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "", qualification: "", email: "", mobile: "",
    experience: "", subject: "", board: "", classes: "", cvName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!role) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [role]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!role) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-[#F0EDE8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="sticky top-0 bg-white border-b border-[#F0EDE8] px-8 py-5 rounded-t-3xl flex items-start justify-between gap-4">
          <div>
            <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-1">
              Interest Form
            </p>
            <h3 className="display text-xl font-semibold text-[#1C1C1E] leading-snug">
              {role.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F5F0E8] hover:bg-red-50 hover:text-red-500 flex items-center justify-center flex-shrink-0 transition-colors duration-200 text-[#999] text-lg mt-0.5"
          >
            ✕
          </button>
        </div>

        {/* body */}
        <div className="px-8 py-6">
          {submitted ? (
            <div className="text-center py-10">
              <span className="text-6xl block mb-4">🌱</span>
              <p className="display text-2xl font-semibold text-emerald-700 mb-2">
                Thank You!
              </p>
              <p className="text-[#666] text-sm leading-relaxed">
                We've received your interest. Our HR team will reach out as soon as we open our recruitments.
              </p>
              <button
                onClick={onClose}
                className="mt-8 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-[#777] text-sm leading-relaxed mb-2">
                Fill in your details and we will reach out as soon as we open our recruitments.
              </p>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                  Full Name *
                </label>
                <input
                  required type="text" placeholder="Your full name"
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#CCC] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                />
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                  Educational Qualification *
                </label>
                <select
                  required value={form.qualification}
                  onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                  className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] bg-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                >
                  <option value="">Select qualification</option>
                  {qualifications.map((q) => (
                    <option key={q.label} value={q.label}>{q.label}</option>
                  ))}
                </select>
              </div>

              {/* Email + Mobile */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                    Email *
                  </label>
                  <input
                    required type="email" placeholder="your@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#CCC] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                    Mobile *
                  </label>
                  <input
                    required type="tel" placeholder="+91 XXXXX XXXXX"
                    value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#CCC] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                  Experience *
                </label>
                <select
                  required value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] bg-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                >
                  <option value="">Select experience</option>
                  {experiences.map((ex) => (
                    <option key={ex.label} value={ex.label}>{ex.label}</option>
                  ))}
                  <option value="Any other">Any other</option>
                </select>
              </div>

              {/* Teaching Subject */}
              <div>
                <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                  Teaching Subject
                </label>
                <input
                  type="text" placeholder="e.g. Mathematics, Science, English…"
                  value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] placeholder-[#CCC] focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                />
              </div>

              {/* Board + Role */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                    Board *
                  </label>
                  <select
                    required value={form.board}
                    onChange={(e) => setForm({ ...form, board: e.target.value })}
                    className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] bg-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  >
                    <option value="">Select</option>
                    <option>CBSE</option>
                    <option>Cambridge</option>
                    <option>Any other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                    Classes Taught
                  </label>
                  <select
                    value={form.classes}
                    onChange={(e) => setForm({ ...form, classes: e.target.value })}
                    className="w-full border border-[#E8E3DA] rounded-xl px-4 py-3 text-sm text-[#1C1C1E] bg-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  >
                    <option value="">Select</option>
                    <option>Primary (I–V)</option>
                    <option>Middle (VI–VIII)</option>
                    <option>Senior (IX–XII)</option>
                    <option>Any other</option>
                  </select>
                </div>
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-xs font-semibold text-[#555] tracking-wide uppercase mb-1.5">
                  Upload CV / Resume *
                </label>
                <label className="flex items-center gap-4 border-2 border-dashed border-[#E8E3DA] hover:border-emerald-300 rounded-xl px-5 py-4 cursor-pointer transition-colors duration-200 group">
                  <div className="w-10 h-10 bg-emerald-50 group-hover:bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#555] font-medium">
                      {form.cvName || "Click to upload PDF, DOC, DOCX"}
                    </p>
                    <p className="text-xs text-[#AAA] mt-0.5">Max 5MB</p>
                  </div>
                  <input
                    type="file" accept=".pdf,.doc,.docx" className="hidden"
                    onChange={(e) => setForm({ ...form, cvName: e.target.files?.[0]?.name || "" })}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200"
              >
                Submit Interest Form →
              </button>
              <p className="text-[#AAA] text-xs text-center">
                We'll reach out as soon as we open our recruitments · No spam
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<(typeof openRoles)[0] | null>(null);
  const [openGeneral, setOpenGeneral] = useState(false);

  const generalRole = {
    id: 0,
    title: "General Application — All Roles",
    board: "CBSE / Cambridge / Administrative",
    type: "Teaching",
    location: "Jawahar Nagar & Durgapura, Jaipur",
    desc: "Send us your details and resume. We'll reach out when a suitable opportunity opens.",
    tags: ["Open Application"],
    urgent: false,
  };

  return (
    <main
      className="bg-[#FAFAF7] text-[#1C1C1E] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .display { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      {/* Application modal */}
      <ApplyModal
        role={selectedRole ?? (openGeneral ? generalRole : null)}
        onClose={() => { setSelectedRole(null); setOpenGeneral(false); }}
      />

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=85"
          alt="Careers at Seedling"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full py-32">
          <Reveal>
            <p className="display text-emerald-400 text-xl italic tracking-widest mb-4 uppercase">
              Seedling Group of Schools · Careers
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display text-white font-light leading-[1.05] text-6xl md:text-7xl lg:text-[6rem] max-w-3xl mb-6">
              The Hunt<br />
              <em className="font-semibold">Is On.</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Committed, diligent educators ready to reimagine the future and work towards excellence. All subjects, all classes — teaching and administrative roles. Come join the league of exemplary educational leaders.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/30"
              >
                View Openings
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                onClick={() => setOpenGeneral(true)}
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white hover:text-[#1C1C1E] px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
              >
                Send Your CV
              </button>
            </div>
          </Reveal>

          {/* trust micro-badges */}
          <Reveal delay={480}>
            <div className="flex gap-3 flex-wrap mt-10">
              {["CBSE & Cambridge", "Teaching & Admin Roles", "2 Campuses · Jaipur", "Est. 1992"].map((b) => (
                <span key={b} className="bg-white/10 border border-white/20 text-white/70 text-xs px-4 py-2 rounded-full backdrop-blur-sm">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* STATS BAND — matches all other pages */}
      <section className="bg-[#2D6A4F] text-white py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-white/20">
            {[
              { value: "5", label: "Schools" },
              { value: "2", label: "Campuses" },
              { value: "20,000+", label: "Students" },
              { value: "15:1", label: "Teacher Ratio" },
              { value: "100%", label: "Board Results" },
              { value: "1992", label: "Est." },
            ].map((s) => (
              <div key={s.label} className="px-4 py-4 text-center">
                <p className="display text-3xl md:text-4xl font-semibold">{s.value}</p>
                <p className="text-white/60 text-xs mt-1 tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. WHY WORK WITH US
      ══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <Tag>Why Seedling</Tag>
          <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E]">
            Why Work<br />
            <em className="font-semibold">With Us</em>
          </h2>
          <p className="text-[#666] mt-5 max-w-lg mx-auto leading-relaxed">
            More than a job — a calling. Teaching at Seedling means becoming part of a 30-year legacy of educational excellence and community.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyWork.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="group bg-white border border-[#E8E3DA] rounded-2xl p-7 hover:shadow-lg hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="w-11 h-11 bg-emerald-50 group-hover:bg-emerald-600 border border-emerald-200 group-hover:border-emerald-600 rounded-xl flex items-center justify-center text-emerald-600 group-hover:text-white transition-all duration-300 mb-5 flex-shrink-0">
                  {w.icon}
                </div>
                <h4 className="display text-xl font-semibold text-[#1C1C1E] mb-3">{w.title}</h4>
                <p className="text-[#666] text-sm leading-[1.9]">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#E8E3DA]" />
      </div>

      {/* ══════════════════════════════════════════════════
          3. JOB LISTINGS
      ══════════════════════════════════════════════════ */}
      <section id="openings" className="py-32 max-w-5xl mx-auto px-6">
        <Reveal className="mb-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <Tag>Current Openings</Tag>
              <h2 className="display text-5xl md:text-6xl font-light text-[#1C1C1E]">
                Open<br />
                <em className="font-semibold">Positions</em>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-[#777] text-sm max-w-xs leading-relaxed">
                All Subjects · All Classes<br />Teaching and Administrative Roles<br />CBSE & Cambridge
              </p>
            </div>
          </div>
        </Reveal>

        {/* filter pills */}
        <Reveal className="mb-10">
          <div className="flex gap-3 flex-wrap">
            {["All Roles", "Teaching", "Administrative", "CBSE", "Cambridge"].map((f, i) => (
              <button
                key={f}
                className={`text-xs font-semibold tracking-wide px-4 py-2 rounded-full border transition-all duration-200 ${
                  i === 0
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-[#555] border-[#E8E3DA] hover:border-emerald-300 hover:text-emerald-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* job cards */}
        <div className="space-y-5">
          {openRoles.map((role, i) => (
            <Reveal key={role.id} delay={i * 80}>
              <JobCard role={role} onApply={setSelectedRole} />
            </Reveal>
          ))}
        </div>

        {/* inline note */}
        <Reveal className="mt-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-7 py-5 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0 mt-0.5">📌</span>
            <div>
              <p className="font-semibold text-emerald-700 text-sm mb-1">How Applications Work</p>
              <p className="text-[#666] text-sm leading-relaxed">
                Fill in the Interest Form with your details and CV. We will reach out as soon as we open our recruitments. All roles are open across both campuses — Jawahar Nagar and Durgapura.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
          TEACHER VOICES
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <Tag>Voices from Inside</Tag>
            <h2 className="display text-4xl md:text-5xl font-light text-[#1C1C1E]">
              What Our Educators<br />
              <em className="font-semibold">Have to Say</em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="group bg-[#FAFAF7] border border-[#E8E3DA] rounded-2xl p-8 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 relative overflow-hidden h-full">
                  {/* decorative quote mark */}
                  <div className="absolute top-3 right-6 display text-[7rem] leading-none text-emerald-100 font-bold select-none pointer-events-none">
                    "
                  </div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-13 h-13 w-12 h-12 rounded-full object-cover object-top border-2 border-emerald-200 flex-shrink-0"
                    />
                    <div>
                      <p className="display font-semibold text-lg text-[#1C1C1E]">{t.name}</p>
                      <p className="text-emerald-600 text-xs font-medium">Seedling Educator</p>
                    </div>
                  </div>
                  <blockquote className="display italic text-xl font-light text-[#444] leading-[1.7] relative z-10">
                    "{t.quote}"
                  </blockquote>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. GENERAL APPLICATION
      ══════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <Reveal>
              <Tag>Open Application</Tag>
              <h2 className="display text-4xl md:text-5xl font-light text-[#1C1C1E] mb-5 leading-tight">
                Don't See a<br />
                <em className="font-semibold">Role That Fits?</em>
              </h2>
              <p className="text-[#555] leading-[1.9] mb-8 text-base">
                We're always looking for passionate educators and professionals. Drop your details and CV with us — we'll keep your profile active and reach out when the right opportunity opens.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: "🎓", label: "All Subjects Welcome", sub: "Maths, Science, English, Arts, Commerce, Humanities and more" },
                  { icon: "📋", label: "Teaching & Admin", sub: "Both teaching and non-teaching roles considered" },
                  { icon: "🌏", label: "CBSE & Cambridge", sub: "Experience with either or both boards welcomed" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 bg-white border border-[#E8E3DA] rounded-xl hover:border-emerald-200 transition-colors duration-200">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1E] text-sm">{item.label}</p>
                      <p className="text-[#999] text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOpenGeneral(true)}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200 hover:gap-3"
              >
                Send Your CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Reveal>

            {/* Right — contact info cards */}
            <Reveal delay={150}>
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#999] mb-6">
                  Or reach HR directly
                </p>

                {[
                  {
                    campus: "Jawahar Nagar Campus",
                    schools: "SPS · SIA · SWKL",
                    address: "Sector-4, Park Lane, Jawahar Nagar, Jaipur – 302004",
                    phone: "+91 74130 12351",
                    landline: "0141-3623000",
                    email: "seedlingacademy@hotmail.com",
                    color: "border-l-emerald-500",
                  },
                  {
                    campus: "Durgapura Campus",
                    schools: "SMHS · SMIA · SWKL",
                    address: "Ashok Marg, Mahaveer Nagar-II, Durgapura, Jaipur – 302018",
                    phone: "+91 95877 72837",
                    landline: "0141-3624000",
                    email: "smhsjaipur@jnujaipur.ac.in",
                    color: "border-l-sky-500",
                  },
                ].map((campus) => (
                  <div
                    key={campus.campus}
                    className={`bg-white border border-[#E8E3DA] border-l-4 ${campus.color} rounded-2xl p-6 hover:shadow-md transition-shadow duration-300`}
                  >
                    <p className="display font-semibold text-lg text-[#1C1C1E] mb-0.5">{campus.campus}</p>
                    <p className="text-emerald-600 text-xs font-semibold mb-4">{campus.schools}</p>
                    <div className="space-y-2 text-sm text-[#666]">
                      <p className="flex gap-2 items-start">
                        <span className="mt-0.5 flex-shrink-0">📍</span>
                        <span>{campus.address}</span>
                      </p>
                      <p className="flex gap-2 items-center">
                        <span>📞</span>
                        <a href={`tel:${campus.phone}`} className="text-emerald-700 hover:underline font-medium">{campus.phone}</a>
                      </p>
                      <p className="flex gap-2 items-center">
                        <span>☎️</span>
                        <span>{campus.landline}</span>
                      </p>
                      <p className="flex gap-2 items-center">
                        <span>✉️</span>
                        <a href={`mailto:${campus.email}`} className="text-emerald-700 hover:underline">{campus.email}</a>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="bg-[#F5F0E8] rounded-2xl p-5 text-center">
                  <p className="text-[#777] text-xs">
                    <strong className="text-[#555]">Office Hours</strong><br />
                    8:30 AM to 6:30 PM · Monday to Saturday
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-40 bg-[#1C1C1E] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&q=80"
          alt="Join the Seedling team"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1E]/95 to-emerald-950/70" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <Reveal>
            <p className="display text-emerald-400 text-xl italic mb-4 tracking-wide">
              Join the League
            </p>
            <h2 className="display text-6xl md:text-7xl font-light leading-[1.05] mb-6">
              Reimagine<br />
              <em className="font-semibold text-emerald-400">Education</em><br />
              With Us.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-md mx-auto">
              Fill in the Interest Form, drop your details, and you will hear from us as soon as we open our recruitments.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setOpenGeneral(true)}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:gap-4"
              >
                Submit Interest Form
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="tel:+917413012351"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-[#1C1C1E] px-10 py-5 rounded-full text-sm tracking-widest uppercase font-semibold transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              {[
                "🏫 5 Schools",
                "📍 2 Campuses in Jaipur",
                "🎓 CBSE & Cambridge",
                "🌿 Est. 1992",
              ].map((b) => (
                <span
                  key={b}
                  className="bg-white/8 border border-white/15 text-white/50 text-xs px-5 py-2 rounded-full"
                >
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

"use client";

import { useEffect, useRef, useState } from "react";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background image with parallax feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] ease-out"
        style={{
          backgroundImage:
            "url('/assets/about/about-banner.jpg')",
        }}
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper/80 via-navy-dark/60 to-sand/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-transparent to-transparent" />

      {/* Decorative geometry */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 400 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="200" r="300" fill="none" stroke="currentColor" className="text-sand" strokeWidth="1" />
          <circle cx="400" cy="200" r="220" fill="none" stroke="currentColor" className="text-sand" strokeWidth="0.5" />
          <circle cx="400" cy="600" r="200" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="font-playfair text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight mb-6 animate-fade-in-up">
          Leadership{" "}
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand via-white/50 to-sand">
            Us
          </span> */}
        </h1>
      </div>
    </section>
  );
}

// ─── Reveal Wrapper ───────────────────────────────────────────────────────────
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </div>
  );
}

const leaders = [
  {
    name: "Late Ms. Mohini Bakshi",
    role: "Founder Director",
    sub: "Seedling Group of Institutions",
    quote: "The life of one we love is never lost. Its influence goes on through all the lives it ever touched.",
    img: "/assets/img/mohini.png",
    tag: "Legacy",
  },
  {
    name: "Dr. Sandeep Bakshi",
    role: "CEO & Director",
    sub: "Seedling Group of Institutions",
    quote: "To make education monumentally effective, we must teach young people to grow their own plants rather than giving them cut flowers.",
    img: "/assets/img/sandeep.png",
    tag: "Forever New Frontiers",
  },
  {
    name: "Dr. Preeti Bakshi",
    role: "Executive Director",
    sub: "Seedling Group of Institutions",
    quote: "Give pupils something to do, not something to learn — and the doing demands thinking; learning naturally results.",
    img: "/assets/img/preeti.png",
    tag: "Creating Fresh Pathways",
  },
  {
    name: "Ms. Akansha Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Institutions",
    quote: "Adaptability to change is itself a hallmark of successful education.",
    img: "/assets/img/akansha.png",
    tag: "Engagement that Empowers",
  },
  {
    name: "Ms. Aishwarya Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Institutions",
    quote: "The only person who is educated is the one who has learned how to learn and change.",
    img: "/assets/img/aishwarya.png",
    tag: "Promoting Global Citizenship",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      <Hero />
      {/* ══════════════════════════════════════════════════════════════
          DIRECTOR'S MESSAGE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src="/assets/img/sandeep.png"
                alt="Dr. Sandeep Bakshi, Director Seedling Group"
                className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-sand">
                <p className="font-playfair text-lg font-semibold text-text-base">Dr. Sandeep Bakshi</p>
                <p className="text-navy text-sm font-dm">CEO & Director, Seedling Group</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-playfair text-navy text-xl italic mb-4">Director's Communiqué</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8">
                "Life Ready<br />
                &amp; <em className="font-semibold">Life Worthy"</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-text-light leading-[1.9] text-base mb-6 font-dm">
                As we dynamise our movement into a post-pandemic world, we sense opportunity at our doorstep. For us, it is a chance to rewrite the narrative of school — to make it more relevant to the realities of the world today. A place where learning happens not from a textbook or worksheet, but through contextual, real-life problem-solving.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-6 font-dm">
                At Seedling, we are constantly reflecting, reassessing, and recalibrating what the fundamental purpose of school is in an age of deep uncertainty and change. Homes and families must move forward together with the school — being relevant, optimistic, and forever focused on the larger purpose and collective well-being.
              </p>
              <p className="text-text-light leading-[1.9] text-base font-dm">
                From Play Group to University — your child, in our care, is promised a world of opportunities, memories, and milestones.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-navy" />
                <span className="font-playfair italic text-xl text-text-light">Dr. Sandeep Bakshi</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LEADERSHIP
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center mb-16">
            <p className="font-playfair text-navy text-xl italic mb-3">Our Torchbearers</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light">
              The <em className="font-semibold">Leadership</em><br />Behind the Legacy
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 100}>
                <div className="group bg-off-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-sand">
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={l.img}
                      alt={l.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 right-4 bg-navy/90 text-white text-xs px-3 py-1 rounded-full font-dm">
                      {l.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-playfair text-2xl font-semibold text-text-base mb-1">{l.name}</h3>
                    <p className="text-navy text-sm font-medium mb-1 font-dm">{l.role}</p>
                    <p className="text-text-light text-xs mb-5 font-dm">{l.sub}</p>
                    <blockquote className="font-playfair italic text-text-light text-base leading-relaxed border-l-2 border-crimson-dark pl-4">
                      "{l.quote}"
                    </blockquote>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

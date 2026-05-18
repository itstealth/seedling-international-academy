"use client";

import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

const achievements = [
  { value: "100%", label: "Board Results", sub: "Consistently every year", icon: "🏆" },
  { value: "20,000+", label: "Students Enrolled", sub: "Across 5 schools", icon: "👩‍🎓" },
  { value: "15:1", label: "Student–Teacher Ratio", sub: "Personalised attention", icon: "📐" },
  { value: "5,000+", label: "Alumni Network", sub: "Across 50+ nations", icon: "🌍" },
  { value: "30+", label: "Years of Excellence", sub: "Since 1993", icon: "⭐" },
  { value: "2", label: "Boards Offered", sub: "CBSE & Cambridge", icon: "📜" },
];

export default function ResultPage() {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[450px] flex items-center overflow-hidden">
        <img
          src="/assets/img/sps-banner.jpg"
          alt="Results at Seedling Schools"
          className="absolute inset-0 w-full h-full object-cover object-top scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/90 via-navy-deeper/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-24">
          <Reveal delay={100}>
            <h1 className="font-playfair text-white font-light text-4xl md:text-5xl leading-[1.05] mb-6 inline-block">
              Our{" "}
              <em className="font-semibold text-sand">Results</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Numbers That Tell Our Story */}
      <section className="md:py-32 py-16 bg-gradient-to-br from-navy-deeper via-navy-dark to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-mauve/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-sand/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-10 md:mb-24">
            <span className="inline-block bg-white/10 text-white text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full border border-white/20 mb-6 font-dm">
              Roll of Honour
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white">
              Numbers That<br />
              <em className="font-semibold text-sand">Tell Our Story</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 text-center hover:bg-white/10 hover:border-sand/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-editorial backdrop-blur-md">
                  <div className="text-3xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">{a.icon}</div>
                  <p className="font-playfair text-3xl md:text-5xl lg:text-6xl font-semibold text-sand mb-2 md:mb-3">{a.value}</p>
                  <p className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2 font-dm tracking-tight">{a.label}</p>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase font-dm font-bold">{a.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Topers in Seedling */}
          <Reveal delay={150}>
            <div className="mt-24">
              <div className="text-center mb-12">
                <span className="inline-block bg-sand/20 text-sand text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full border border-sand/30 mb-4 font-dm backdrop-blur-sm">
                  Board Toppers
                </span>
                <h3 className="font-playfair text-3xl md:text-5xl font-light text-white">
                  Felicitating <em className="font-semibold text-sand">Excellence</em>
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-sand/50">
                    <img 
                      src={`/assets/FELICITATING TOPPERS IN BOARDS/${num}.webp`} 
                      alt={`Seedling Topper ${num}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/90 via-navy-deeper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-8 h-1 bg-sand mb-4 rounded-full" />
                      <p className="text-white font-playfair font-semibold text-xl">Top Performer</p>
                      <p className="text-white/70 text-[10px] tracking-widest uppercase font-dm mt-1">Board Examinations</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Full-width 100% results banner */}
          <Reveal delay={200}>
            <div className="mt-20 bg-navy-deeper/60 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-xl shadow-editorial group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10">
                <p className="text-sand text-xs tracking-[0.4em] uppercase mb-4 font-black">Our Pride</p>
                <h3 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">100% Board Results</h3>
                <p className="text-white/70 mt-3 max-w-xl text-lg font-dm font-light leading-relaxed">Seedling Group of Schools has consistently achieved 100% results in both CBSE examinations — every year, across all campuses. Many students secure high scores and distinctions, with a strong track record of placements in top universities worldwide.</p>
              </div>
              <div className="flex-shrink-0 relative z-10">
                <div className="w-40 h-40 bg-sand/10 rounded-full flex flex-col items-center justify-center border-2 border-sand/30 group-hover:bg-sand group-hover:text-navy-deeper transition-colors duration-500">
                  <span className="font-playfair text-5xl font-bold">100%</span>
                  <span className="text-[10px] tracking-widest uppercase mt-2 font-black">Every Year</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
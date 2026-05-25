"use client";

import { useEffect, useRef, useState } from "react";
import HeroWrapper from "@/components/layout/HeroWrapper";

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
    img: "/assets/img/Mohini-Bakshi.jpeg",
    tag: "Legacy",
  },
  {
    name: "Dr. Sandeep Bakshi",
    role: "CEO & Director",
    sub: "Seedling Group of Institutions",
    quote: "To make education monumentally effective, we must teach young people to grow their own plants rather than giving them cut flowers.",
    img: "/assets/img/Sandeep-Bakshi.jpeg",
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
    img: "/assets/img/akansha.jpeg",
    tag: "Engagement that Empowers",
  },
  {
    name: "Ms. Aishwarya Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Institutions",
    quote: "The only person who is educated is the one who has learned how to learn and change.",
    img: "/assets/img/Aishwarya-Bakshi.jpeg",
    tag: "Promoting Global Citizenship",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-off-white text-text-base overflow-x-clip font-dm">
      <HeroWrapper
        backgroundImage="/assets/Home/MainCampus.webp"
        title="Leadership"
        badge="Our Team"
        breadcrumbs={[{ label: "Leadership" }]}
      />

          <section className="py-10  bg-white">
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
      {/* ══════════════════════════════════════════════════════════════
          DIRECTOR'S MESSAGE
      ══════════════════════════════════════════════════════════════ */}
      <section className=" bg-crimson">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto py-10 md:py-16  px-5 sm:px-6">
          <Reveal>
            <div className="relative">
              <img
                src="/assets/img/Sandeep-Bakshi.jpeg"
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
              <p className="font-playfair text-white text-xl italic mb-4">Director's Communiqué</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-white">
                "Life Ready<br />
                &amp; <em className="font-semibold text-white">Life Worthy"</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-white/80 leading-[1.9] text-base mb-6 font-dm">
                At Seedling, we constantly reflect and recalibrate what school means in an age of deep uncertainty — rewriting the narrative to make learning relevant, contextual, and real.
              </p>
              <p className="text-white/80 leading-[1.9] text-base font-dm">
                From Play Group to University — your child, in our care, is promised a world of opportunities, memories, and milestones.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-white" />
                <span className="font-playfair italic text-xl text-white">Dr. Sandeep Bakshi</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRINCIPAL'S MESSAGE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="self-start md:sticky md:top-28">
            <Reveal>
              <div className="relative">
                <img
                  src="/assets/Home/principle.jpeg"
                  alt="Shruti Kukar, Principal Seedling Public School"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-sand">
                  <p className="font-playfair text-lg font-semibold text-text-base">Shruti Kukar</p>
                  <p className="text-navy text-sm font-dm">Principal, Seedling Public School</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="font-playfair text-navy text-xl italic mb-4">Principal's Note</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8">
                "Nurturing Happy Minds,<br />
                <em className="font-semibold">Strong Hearts &amp; Bold Futures"</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                At Seedling Public School, we do not believe children are meant to simply pass examinations — they are meant to discover their voice, build their confidence, strengthen their values and step into the future with courage and clarity.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                In a world that is changing faster than ever before, we are committed to nurturing children who are not only academically capable, but emotionally secure, ethically grounded, creatively expressive and mentally resilient.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                From academics to innovation, sports to performing arts, leadership to public speaking, yoga to mindfulness and meditation — every experience at Seedling is designed to shape balanced, future-ready individuals who can thrive in life, not just in classrooms.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                And to every parent, we offer not just education, but partnership, reassurance and trust. Your child will be guided with warmth, challenged with purpose, heard with empathy and encouraged to grow into the finest version of themselves.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm font-semibold">
                Because at Seedling, we are not merely building successful students. We are nurturing happy minds, strong hearts, fearless voices, and extraordinary human beings ready to leave their mark on the world.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-text-light leading-[1.9] text-base italic mb-4 font-dm">Curious Minds. Strong Values. Bold Futures.</p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                Welcome to our portals where every child grows to bloom.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-navy" />
                <span className="font-playfair italic text-xl text-text-light">Shruti Kukar</span>
              </div>
              <p className="text-navy text-sm font-dm mt-1">Principal, Seedling Public School</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LEADERSHIP
      ══════════════════════════════════════════════════════════════ */}
  
    </main>
  );
}

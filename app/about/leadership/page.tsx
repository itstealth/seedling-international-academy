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
    sub: "Cambridge International School Group of Institutions",
    quote: "The life of one we love is never lost. Its influence goes on through all the lives it ever touched.",
    img: "/assets/img/Mohini-Bakshi.jpg",
    tag: "Legacy",
  },
  {
    name: "Dr. Sandeep Bakshi",
    role: "CEO & Director",
    sub: "Cambridge International School Group of Institutions",
    quote: "To make education monumentally effective, we must teach young people to grow their own plants rather than giving them cut flowers.",
    img: "/assets/img/Sandeep-Bakshi.jpg",
    tag: "Forever New Frontiers",
  },
  {
    name: "Dr. Preeti Bakshi",
    role: "Executive Director",
    sub: "Cambridge International School Group of Institutions",
    quote: "Give pupils something to do, not something to learn — and the doing demands thinking; learning naturally results.",
    img: "/assets/img/preeti-bakshi.jpeg",
    tag: "Creating Fresh Pathways",
  },
  {
    name: "Ms. Akansha Bakshi",
    role: "Joint Director",
    sub: "Cambridge International School Group of Institutions",
    quote: "Adaptability to change is itself a hallmark of successful education.",
    img: "/assets/img/akansha.jpeg",
    tag: "Engagement that Empowers",
  },
  {
    name: "Ms. Aishwarya Bakshi",
    role: "Joint Director",
    sub: "Cambridge International School Group of Institutions",
    quote: "The only person who is educated is the one who has learned how to learn and change.",
    img: "/assets/img/Aishwarya-Bakshi.jpeg",
    tag: "Promoting Global Citizenship",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-off-white text-text-base overflow-x-clip font-dm">
      <HeroWrapper
        backgroundImage="/assets/banner/leadership-banner-img.jpeg"
        title="Leadership"
        position={70}
        badge="Anchored In Purpose. Driven By A Vision"
        breadcrumbs={[{ label: "Leadership" }]}
      />

          <section className="py-10  bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center mb-10 md:mb-16">
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
                    {/* <span className="absolute top-4 right-4 bg-navy/90 text-white text-xs px-3 py-1 rounded-full font-dm">
                      {l.tag}
                    </span> */}
                  </div>
                  <div className="p-7">
                    <h3 className="font-playfair text-2xl font-semibold text-text-base mb-1">{l.name}</h3>
                    <p className="text-navy text-sm font-medium mb-1 font-dm">{l.role}</p>
                    <p className="text-text-light text-xs  font-dm">{l.sub}</p>
                    {/* <blockquote className="font-playfair italic text-text-light text-base leading-relaxed border-l-2 border-crimson-dark pl-4">
                      "{l.quote}"
                    </blockquote> */}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════
          CEO & DIRECTOR'S MESSAGE
      ══════════════════════════════════════════════════════════════ */}
      {/* <section className="bg-crimson py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative md:sticky md:top-28 self-start">
                <img
                  src="/assets/img/Sandeep-Bakshi.jpeg"
                  alt="Dr. Sandeep Bakshi, CEO CEO & Director Seedling Director Cambridge International School Group"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-sand">
                  <p className="font-playfair text-lg font-semibold text-text-base">Dr. Sandeep Bakshi</p>
                  <p className="text-navy text-sm font-dm">CEO & Director, Cambridge International School Group</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="font-playfair text-navy text-xl italic mb-4">CEO & Director's Message</p>
                <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-text-base">
                  "Life Ready<br />
                  <em className="font-semibold">& Life Worthy"</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  Welcome to the Cambridge International School Group — a vibrant educational family where learning is inspired by vision, nurtured with care, and guided by the belief that every child carries within them the potential to create extraordinary possibilities.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  At Cambridge International School, education is not confined to classrooms, textbooks, or examinations alone. We believe true education shapes character, ignites curiosity, strengthens confidence, and prepares young minds to lead with intelligence, empathy, courage, and purpose in an ever-changing world.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  Our schools have always stood for progressive learning blended with strong human values. We are committed to creating environments where children feel safe to question, inspired to explore, encouraged to dream, and empowered to discover their individual strengths.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  The world our children are growing into demands far more than information. It requires emotional resilience, adaptability, creativity, collaboration, and ethical leadership. At Cambridge International School, we continuously evolve our educational practices to ensure our learners are future-ready while remaining deeply rooted in compassion, integrity, and social responsibility.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  Equally important to us is the partnership we share with parents. Education becomes most impactful when schools and families walk together with trust, shared values, and a common commitment toward the holistic growth of every child.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  As you explore our website, I warmly invite you to experience the spirit of Cambridge International School — a spirit of excellence, innovation, inclusivity, and lifelong learning.
                </p>
                <p className="text-text-light leading-[1.9] text-base font-dm font-semibold">
                  Together, let us inspire children not merely to succeed in the world, but to contribute meaningfully to it and shape a brighter tomorrow.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-px bg-navy" />
                  <span className="font-playfair italic text-xl text-text-light">Dr. Sandeep Bakshi</span>
                </div>
                <p className="text-navy text-sm font-dm mt-1">CEO & Director, Cambridge International School Group</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section> */}

  <section className="bg-crimson py-10 md:py-16  ">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-5 sm:px-6">
          <div className="self-start md:sticky md:top-28">
            <Reveal>
              <div className="relative">
                <img
                  src="/assets/img/Sandeep-Bakshi.jpg"
                  alt="Dr. Sandeep Bakshi, CEO CEO & Director Seedling Director Cambridge International School Group"
                 
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-sand">
                  <p className="font-playfair text-lg font-semibold text-text-base">Dr. Sandeep Bakshi</p>
                  <p className="text-navy text-sm font-dm">CEO & Director's Message</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
             <Reveal>
                <p className="font-playfair text-blue-300 text-xl italic mb-4">CEO & Director's Message</p>
                <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-white">
                  "Life Ready<br />
                  <em className="font-semibold">& Life Worthy"</em>
                </h2>
              </Reveal>
          <Reveal delay={100}>
                <p className="text-white leading-[1.9] text-base mb-4 font-dm">
                  Welcome to the Cambridge International School Group — a vibrant educational family where learning is inspired by vision, nurtured with care, and guided by the belief that every child carries within them the potential to create extraordinary possibilities.
                </p>
                <p className="text-white leading-[1.9] text-base mb-4 font-dm">
                  At Cambridge International School, education is not confined to classrooms, textbooks, or examinations alone. We believe true education shapes character, ignites curiosity, strengthens confidence, and prepares young minds to lead with intelligence, empathy, courage, and purpose in an ever-changing world.
                </p>
                <p className="text-white leading-[1.9] text-base mb-4 font-dm">
                  Our schools have always stood for progressive learning blended with strong human values. We are committed to creating environments where children feel safe to question, inspired to explore, encouraged to dream, and empowered to discover their individual strengths.
                </p>
                <p className="text-white leading-[1.9] text-base mb-4 font-dm">
                  The world our children are growing into demands far more than information. It requires emotional resilience, adaptability, creativity, collaboration, and ethical leadership. At Cambridge International School, we continuously evolve our educational practices to ensure our learners are future-ready while remaining deeply rooted in compassion, integrity, and social responsibility.
                </p>
                <p className="text-white leading-[1.9] text-base mb-4 font-dm">
                  Equally important to us is the partnership we share with parents. Education becomes most impactful when schools and families walk together with trust, shared values, and a common commitment toward the holistic growth of every child.
                </p>
                <p className="text-white leading-[1.9] text-base mb-4 font-dm">
                  As you explore our website, I warmly invite you to experience the spirit of Cambridge International School — a spirit of excellence, innovation, inclusivity, and lifelong learning.
                </p>
                <p className="text-white leading-[1.9] text-base font-dm font-semibold">
                  Together, let us inspire children not merely to succeed in the world, but to contribute meaningfully to it and shape a brighter tomorrow.
                </p>
              </Reveal>
            <Reveal delay={200}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-px bg-blue-400" />
                  <span className="font-playfair italic text-xl text-white">Dr. Sandeep Bakshi</span>
                </div>
                <p className="text-blue-400 text-sm font-dm mt-1">CEO & Director, Cambridge International School Group</p>
              </Reveal>
           
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          EXECUTIVE DIRECTOR'S MESSAGE — SMHS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="self-start md:sticky md:top-28">
            <Reveal>
              <div className="relative">
                <img
                  src="/assets/img/preeti-bakshi.jpeg"
                  alt="Dr. Preeti Bakshi, Executive Director Cambridge International School"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-off-white rounded-2xl shadow-xl p-6 max-w-xs border border-sand">
                  <p className="font-playfair text-lg font-semibold text-text-base">Dr. Preeti Bakshi</p>
                  <p className="text-crimson text-sm font-dm">Executive Director's Message</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
             <Reveal>
                <p className="font-playfair text-crimson text-xl italic mb-4">Executive Director's Message</p>
                <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-navy-deeper">
                  Education for a<br />
                  <em className="font-semibold">Brighter Tomorrow</em>
                </h2>
              </Reveal>
          <Reveal delay={100}>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  At CAMBRIDGE INTERNATIONAL SCHOOL, we believe that education is the key to unlocking a brighter and more successful future. As one of the best schools in Jaipur and a top school in Jaipur, our commitment is to provide an inspiring learning environment where students are encouraged to achieve academic excellence while developing strong values, confidence, and leadership qualities.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  We understand that every child is unique, and our dedicated educators strive to nurture their individual talents through innovative teaching methods, modern infrastructure, and a student-centred approach. Along with academics, we place equal emphasis on sports, arts, creativity, and co-curricular activities to ensure the holistic development of every learner.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                  Our vision is to shape responsible global citizens who are compassionate, capable, and prepared to meet the challenges of tomorrow. At CAMBRIDGE INTERNATIONAL SCHOOL, we continue to set new standards in education and warmly welcome every child to be a part of our journey towards excellence.
                </p>
              </Reveal>
            <Reveal delay={200}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-px bg-crimson" />
                  <span className="font-playfair italic text-xl text-navy-deeper">Dr. Preeti Bakshi</span>
                </div>
                <p className="text-crimson text-sm font-dm mt-1">Executive Director, Cambridge International School</p>
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
                  alt="Shruti Kukar, Principal Cambridge International School"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-sand">
                  <p className="font-playfair text-lg font-semibold text-text-base">Shruti Kukar</p>
                  <p className="text-navy text-sm font-dm">Principal, Cambridge International School</p>
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
                At Cambridge International School, we do not believe children are meant to simply pass examinations — they are meant to discover their voice, build their confidence, strengthen their values and step into the future with courage and clarity.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                In a world that is changing faster than ever before, we are committed to nurturing children who are not only academically capable, but emotionally secure, ethically grounded, creatively expressive and mentally resilient.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                From academics to innovation, sports to performing arts, leadership to public speaking, yoga to mindfulness and meditation — every experience at Cambridge International School is designed to shape balanced, future-ready individuals who can thrive in life, not just in classrooms.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm">
                And to every parent, we offer not just education, but partnership, reassurance and trust. Your child will be guided with warmth, challenged with purpose, heard with empathy and encouraged to grow into the finest version of themselves.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-4 font-dm font-semibold">
                Because at Cambridge International School, we are not merely building successful students. We are nurturing happy minds, strong hearts, fearless voices, and extraordinary human beings ready to leave their mark on the world.
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
              <p className="text-navy text-sm font-dm mt-1">Principal, Cambridge International School</p>
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

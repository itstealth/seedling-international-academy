"use client";

import Image from "next/image";
import HeroWrapper from "@/components/layout/HeroWrapper";

export default function WelcomeFromTheHeadPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/about/about-banner.jpg"
        title="Welcome from the Head"
        badge="A Personal Note"
        breadcrumbs={[{ label: "Welcome from the Head" }]}
        height="medium"
      />

      {/* ═══ INTRO ═══ */}
      <section className="py-10 md:py-16 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <span className="block w-px h-12 bg-sand mx-auto mb-5" />
        <p className="font-playfair text-crimson text-xl mb-4">A Word From The Principal</p>
        <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight text-ink">
          One voice.<br />
          <em className="font-semibold text-navy">One vision.</em>
        </h2>
        <p className="mt-6 text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          A personal note from our Principal — on what Cambridge means to her, and what she hopes every child who walks through our gates will carry forward.
        </p>
      </section>

      {/* ═══ LETTER ═══ */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-navy opacity-20" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
                  <Image
                    src="/assets/img/heads.jpg"
                    alt="Ms. Shruti Kakkar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-5 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl border-l-4 border-navy">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase text-navy">Principal</p>
                  <p className="text-[10px] text-text-light tracking-widest uppercase font-dm mt-0.5">Seedling International Academy</p>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-10 h-px bg-navy" />
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-navy">A Personal Letter</p>
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-light text-ink leading-tight mb-2">
                Ms. Shruti Kakkar
              </h3>
              <p className="text-sm font-bold tracking-widest uppercase text-navy mb-1">Principal</p>
              <p className="text-xs text-text-light tracking-widest uppercase mb-6 font-dm">Seedling International Academy (SIA)</p>

              <div className="bg-white rounded-2xl p-7 md:p-9 shadow-lg border border-sand/30 relative">
                <span className="absolute -top-5 left-6 text-7xl font-serif leading-none text-navy opacity-20">&ldquo;</span>

                <p className="font-medium text-base md:text-lg mb-5 text-navy">
                  Dear Parents, Students, and Friends of Seedling,
                </p>

                <div className="space-y-4 text-text-light leading-[1.85] text-[15px] md:text-base font-dm">
                  <p>
                    Every morning, when I walk through the gates of Seedling International Academy, I am reminded of a simple truth — a school is not its buildings or its syllabus. A school is the collective heartbeat of the children, teachers and families who pass through it every day.
                  </p>
                  <p>
                    That heartbeat is what we have been listening to, and learning from, for over three decades. It is what shaped our belief that education must never be one-dimensional. Academic rigour matters — and so does the laughter in the corridor, the discipline of a sportsperson, the curiosity of a first-time coder, and the kindness of a friend.
                  </p>
                  <p>
                    At SIA, our promise is simple: every child who enters our classrooms will be known by name, taught with intention, and sent out into the world a little braver than when they came in. The Cambridge curriculum gives us the structure; our teachers give it soul.
                  </p>
                  <p>
                    To the parents reading this — thank you for trusting us with the most precious part of your world. To the students — we cannot wait to see who you will become. To the friends of Seedling — welcome home.
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-sand/30">
                  <p className="text-text-light text-sm">With warm regards,</p>
                  <p className="font-playfair text-xl font-semibold text-navy mt-1">Ms. Shruti Kakkar</p>
                  <p className="text-[10px] text-text-light tracking-widest uppercase font-dm mt-0.5">Principal, Seedling International Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING NOTE ═══ */}
      <section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <span className="block w-px h-10 bg-[#133844] mx-auto mb-5" />
          <p className="font-playfair text-[#133844] text-xl mb-4">One Last Word</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-8 text-[#133844]">
            We don&rsquo;t just run schools.<br />
            <em className="font-semibold text-[#133844]">We grow people.</em>
          </h2>
          <p className="text-[#133844] text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Every letter carries the same quiet promise — that every child who comes to Seedling will be seen, known, and grown with intention. We are honoured to grow with you.
          </p>
        </div>
      </section>
    </main>
  );
}

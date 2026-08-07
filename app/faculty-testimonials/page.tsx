"use client";

import HeroWrapper from "@/components/layout/HeroWrapper";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Being a part of the Cambridge journey at Seedling International Academy has been both an honour and a joy. Over the years, I have had the privilege of watching young minds blossom into confident, thoughtful, and compassionate individuals who are eager to question, explore, and make a positive difference in the world. The Cambridge curriculum goes far beyond textbooks. It nurtures curiosity, creativity, critical thinking, and a lifelong love for learning, allowing every child to discover their unique strengths and potential. As an educator, there is no greater reward than witnessing that spark of understanding transform into confidence and achievement. SIA has created a vibrant learning community where every child is encouraged to dream boldly, think independently, and grow into a responsible global citizen. Being a part of this remarkable journey continues to inspire me every single day.",
    name: "Minnu Puri",
    role: "English Faculty",
    bg: "bg-pathway-purple-bg",
    border: "border-pathway-purple-border",
    accent: "text-[#8b26e6]",
  },
  {
    quote:
      "Joining Seedling International Academy has been one of the best experiences of my life. Every day at school brings something new to learn, and our teachers always encourage us to ask questions, share our ideas, and believe in ourselves. The curriculum is unique and different that has made learning exciting because it teaches us to think, not just memorise. I have become more confident, independent, and willing to take on new challenges. What I love most is that our teachers care about us, not only in our studies but also as our guide, our councillors and our mentors. I feel happy, supported, and inspired here, and I know the lessons I have learned at Seedling will stay with me wherever life takes me.",
    name: "Arnav Ruchlani",
    role: "SIA Representative",
    bg: "bg-pathway-blue-bg",
    border: "border-pathway-blue-border",
    accent: "text-[#5f72f2]",
  },
];

export default function FacultyTestimonialsPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      <HeroWrapper
        backgroundImage="/0N9A9612.JPG"
        title="FACULTY"
        badge="In Their Own Words"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faculty Testimonials" },
        ]}
        height="medium"
      />

      {/* Intro */}
      <section className="py-12 md:py-16 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <span className="block w-px h-12 bg-sand mx-auto mb-5" />
        <p className="font-playfair text-[#133844] text-xl mb-3">FACULTY</p>
        <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink leading-tight">
          Reflections from our <em className="font-semibold text-[#133844]">classroom</em>.
        </h2>
        <p className="mt-6 text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Two voices from inside the Seedling community — one educator, one student — sharing what
          the Cambridge journey at Seedling International Academy has meant to them.
        </p>
      </section>

      {/* Testimonials */}
      <section className="relative py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 space-y-10">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group ${t.bg} border-2 ${t.border} rounded-3xl shadow-lg p-8 md:p-12`}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-12 h-px ${t.border} bg-current ${t.accent}`} />
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${t.accent}`}>
                  FACULTY
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-playfair text-lg md:text-xl leading-[1.85] text-[#133844] mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="pt-6 border-t border-black/10 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.bg} border-2 ${t.border} flex items-center justify-center font-playfair text-lg font-bold ${t.accent}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-playfair text-lg font-semibold text-[#133844] leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-text-light font-semibold mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="py-12 md:py-16 bg-stone border-t border-hairline">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/#testimonials"
            className="inline-flex items-center gap-3 bg-[#133844] text-white hover:bg-navy-dark px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-xl"
          >
            ← Back to all testimonials
          </Link>
        </div>
      </section>
    </main>
  );
}
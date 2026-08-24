"use client";

import Image from "next/image";
import HeroWrapper from "@/components/layout/HeroWrapper";

export default function WelcomeFromTheHeadPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-clip font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/IMG_5875.JPG"
        title="Welcome from the Principal"
        badge="A Personal Note"
        breadcrumbs={[{ label: "Welcome from the Principal" }]}
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
      <section className="relative py-12 md:py-20 bg-white overflow-clip">
        <div className="absolute top-0 right-0 w-72 h-72 bg-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Photo */}
            <div className="relative pb-14 md:pb-0 self-start md:sticky md:top-28">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-navy opacity-20" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
                  <Image
                    src="/assets/img/heads.jpg"
                    alt="Ms. Shruti Kukar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-5 left-6 right-6 md:right-auto bg-purple-100 rounded-2xl px-5 py-3 shadow-xl border-l-4 border-navy border-purple-700">
                  <p className="font-playfair text-base font-semibold text-text-base">Ms. Shruti Kukar</p>
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase text-navy mt-0.5">Principal and Cambridge Exam Officer</p>
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
                Ms. Shruti Kukar
              </h3>
              <p className="text-sm font-bold tracking-widest uppercase text-navy mb-1">Principal and Cambridge Exam Officer </p>
              <p className="text-xs text-text-light tracking-widest uppercase mb-6 font-dm">Seedling Internation Academy</p>

              <div className="bg-blue-100 rounded-2xl p-7 md:p-9 shadow-lg border border-blue-700 relative">
                <span className="absolute -top-5 left-6 text-7xl font-serif leading-none text-navy opacity-20">&ldquo;</span>

                <p className="font-playfair text-lg md:text-xl text-navy mb-2">
                  A Cambridge Education. A Seedling Mindset.
                </p>
                <p className="font-medium text-base md:text-lg mb-5 text-navy">
                  Dear Parents,
                </p>

                <div className="space-y-4 text-text-light leading-[1.85] text-[15px] md:text-base font-dm">
                  <p className="font-medium text-text-base">Welcome to Seedling!</p>
                  <p>
                    There are schools that offer the Cambridge curriculum. And then there are schools that truly believe in what a Cambridge education can make possible.
                  </p>
                  <p>At Seedling International Academy, we aspire to be the latter.</p>
                  <p>
                    Our fascination with Cambridge has never been limited to its academic rigour. What inspires us most is the philosophy beneath it&mdash;the belief that education must do more than prepare a child to answer questions. It must prepare them to ask better questions, think independently, engage deeply, and make meaning of the world around them.
                  </p>
                  <p>That is the learner we are committed to creating.</p>
                  <p>Not a child who knows more. A child who can do more with what they know.</p>
                  <p>
                    We want our students to move beyond the familiar architecture of schooling&mdash;memorise, reproduce, score, move on.
                  </p>
                  <p>We want them to wonder.</p>
                  <p>
                    To challenge an assumption.<br />
                    To defend an idea.<br />
                    To change their mind when evidence demands it.<br />
                    To connect mathematics with the real world, science with human possibility, language with empathy, and knowledge with action.
                  </p>
                  <p>
                    Because the world our children will inherit will not reward them merely for remembering what they were taught. It will increasingly reward those who can think when there is no answer key.
                  </p>
                  <p>That is where we believe the true promise of Cambridge lies.</p>
                  <p>Our Cambridge advantage is not the curriculum alone.</p>
                  <p>It is what we do with it.</p>
                  <p>
                    At Seedling International Academy, Cambridge is not treated as a syllabus to be completed. It is a way of thinking about a child.
                  </p>
                  <p>
                    Our classrooms are designed to make learners active participants rather than passive recipients. We value inquiry over instruction alone, understanding over memorisation, application over repetition, and reflection over simply getting the right answer.
                  </p>
                  <p>
                    But we also believe that intellectual freedom must be accompanied by discipline, rigour and purpose.
                  </p>
                  <p>
                    So we encourage our children to think boldly&mdash;but also to think precisely.<br />
                    To speak confidently&mdash;but listen generously.<br />
                    To be curious&mdash;but substantiate curiosity with evidence.<br />
                    To dream&mdash;but learn how to turn ideas into action.
                  </p>
                  <p>
                    This is why our Cambridge offering is deliberately more expansive than examination preparation.
                  </p>
                  <p>
                    We want every experience at Seedling to become part of the child&rsquo;s education.
                  </p>
                  <p>
                    A discussion.<br />
                    A laboratory experiment.<br />
                    A presentation.<br />
                    A failure.<br />
                    A piece of writing.<br />
                    A performance.<br />
                    A community interaction.<br />
                    A difficult question.<br />
                    A moment when a child discovers something about themselves.
                  </p>
                  <p>All of it counts.</p>
                  <p>We are not preparing children for a world that exists today.</p>
                  <p>We are preparing them for one that does not yet exist.</p>
                  <p>
                    Artificial intelligence is changing what knowledge means. Technology is redefining how we work. Careers are emerging that did not exist when many of us were children. Information is abundant, but wisdom is scarce. Answers are increasingly easy to access, while judgement, discernment and original thought are becoming more valuable than ever.
                  </p>
                  <p>
                    In such a world, the greatest gift we can give a child is not certainty.
                  </p>
                  <p>It is intellectual confidence.</p>
                  <p>
                    The confidence to say, &ldquo;I don&rsquo;t know yet, but I can find out.&rdquo;
                  </p>
                  <p>
                    The confidence to say, &ldquo;I see it differently.&rdquo;
                  </p>
                  <p>
                    The confidence to ask, &ldquo;But why?&rdquo;
                  </p>
                  <p>
                    And eventually, the courage to ask, &ldquo;What if?&rdquo;
                  </p>
                  <p className="font-semibold text-text-base pt-2">The Seedling Learner</p>
                  <p>
                    When our children leave us, we do not want their defining identity to be that they studied at a Cambridge school.
                  </p>
                  <p>We want them to become Cambridge-minded human beings.</p>
                  <p>
                    Curious, without being gullible.<br />
                    Knowledgeable, without being arrogant.<br />
                    Articulate, without losing the ability to listen.<br />
                    Ambitious, without losing empathy.<br />
                    Independent, without becoming disconnected.<br />
                    Resilient enough to fail.<br />
                    Reflective enough to learn from failure.<br />
                    And courageous enough to imagine a better possibility.
                  </p>
                  <p>
                    We want them to enter university not merely with a strong academic profile, but with a mind that is ready for university.
                  </p>
                  <p>
                    And eventually, we want them to enter the world not asking merely,
                  </p>
                  <p>&ldquo;What job can I get?&rdquo;</p>
                  <p>but,</p>
                  <p>&ldquo;What problem can I solve? What value can I create? What difference can I make?&rdquo;</p>
                  <p>That, to us, is the real measure of education.</p>
                  <p className="font-semibold text-text-base pt-2">A Partnership of Trust</p>
                  <p>
                    As parents, you are entrusting us with something far more precious than academic performance.
                  </p>
                  <p>
                    You are entrusting us with a growing mind, a developing identity, a child&rsquo;s confidence, curiosity and sense of possibility.
                  </p>
                  <p>We do not take that responsibility lightly.</p>
                  <p>
                    At Seedling International Academy, we want to walk alongside you&mdash;not simply through examinations and university applications, but through the much larger journey of becoming.
                  </p>
                  <p>Because education is not the filling of a mind.</p>
                  <p>It is the awakening of one.</p>
                  <p>
                    And if there is one promise we would like to make to every family joining us, it is this:
                  </p>
                  <p>We will never stop asking what more your child can become.</p>
                  <p>Welcome to Seedling International Academy.</p>
                  <p>
                    Welcome to a Cambridge education that is not merely about what your child will learn, but about who your child will become because they learned it.
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-sand/30">
                  <p className="text-text-light text-sm">With warmth and great hope for the journey ahead,</p>
                  <p className="font-playfair text-xl font-semibold text-navy mt-1">Shruti Kukar</p>
                  <p className="text-[10px] text-text-light tracking-widest uppercase font-dm mt-0.5">Principal &amp; Cambridge Exam Officer, Seedling International Academy</p>
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

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
    name: "Dr. Sandeep Bakshi",
    role: "CEO & Director",
    sub: "Seedling Group of Schools",
    quote: "To make education monumentally effective, we must teach young people to grow their own plants rather than giving them cut flowers.",
    img: "/assets/img/Sandeep-Bakshi.jpg",
    tag: "Forever New Frontiers",
  },
  {
    name: "Dr. Preeti Bakshi",
    role: "Executive Director",
    sub: "Seedling Group of Schools",
    quote: "Give pupils something to do, not something to learn — and the doing demands thinking; learning naturally results.",
    img: "/assets/img/preeti-bakshi.jpeg",
    tag: "Creating Fresh Pathways",
  },
  {
    name: "Ms. Akansha Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Schools",
    quote: "Adaptability to change is itself a hallmark of successful education.",
    img: "/assets/img/akansha.jpeg",
    tag: "Engagement that Empowers",
  },
  {
    name: "Ms. Aishwarya Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Schools",
    quote: "The only person who is educated is the one who has learned how to learn and change.",
    img: "/assets/img/Aishwarya-Bakshi.jpeg",
    tag: "Promoting Global Citizenship",
  },
  {
    name: "Ms. Shruti Kukar",
    role: "Principal",
    sub: "Seedling Group of Schools",
    quote: "Education is the kindling of a flame, not the filling of a vessel.",
    img: "/assets/Home/principle.jpeg",
    tag: "Inspiring the Next Generation",
  },
  {
    name: "Ms. Gurpreet Puri",
    role: "Vice Principal & Cambridge Coordinator",
    sub: "Seedling Modern International Academy",
    quote: "",
    img: "/gurpreet.jpeg",
    tag: "",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-off-white text-text-base overflow-x-clip font-dm">
      <HeroWrapper
        backgroundImage="/0V8A8608.JPG"
        title="Seedling Leadership"
        position={70}
        badge="Anchored In Purpose. Driven By A Vision"
        breadcrumbs={[{ label: "Seedling Leadership" }]}
      />

          <section className="py-10  bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal className="text-center mb-10 md:mb-16">
            <p className="font-playfair text-navy text-xl mb-3">Our Torchbearers</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light">
              The <em className="font-semibold">Leadership</em><br />Behind the Legacy
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 100}>
                <div className={`group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${["bg-purple-100 border-purple-700","bg-blue-100 border-blue-700","bg-green-100 border-green-700","bg-orange-100 border-orange-700","bg-red-100 border-red-700"][i % 5]}`}>
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={l.img}
                      alt={l.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* <span className="absolute top-4 right-4 bg-navy/90 text-black text-xs px-3 py-1 rounded-full font-dm">
                      {l.tag}
                    </span> */}
                  </div>
                  <div className="p-7">
                    <h3 className="font-playfair text-2xl font-semibold text-text-base mb-1">{l.name}</h3>
                    <p className="text-navy text-sm font-medium mb-1 font-dm">{l.role}</p>
                    <p className="text-text-light text-xs  font-dm">{l.sub}</p>
                    {/* <blockquote className="font-playfair text-text-light text-base leading-relaxed border-l-2 border-crimson-dark pl-4">
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
                  alt="Dr. Sandeep Bakshi, CEO CEO & Director Seedling Director Seedling International School Group"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-100 rounded-2xl shadow-xl p-6 max-w-xs border border-sand border-orange-700">
                  <p className="font-playfair text-lg font-semibold text-text-base">Dr. Sandeep Bakshi</p>
                  <p className="text-navy text-sm font-dm">CEO & Director, Seedling Group of Schools</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="font-playfair text-navy text-xl mb-4">CEO & Director's Message</p>
                <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-text-base">
                  "Life Ready<br />
                  <em className="font-semibold">& Life Worthy"</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Welcome to the Seedling International School Group — a vibrant educational family where learning is inspired by vision, nurtured with care, and guided by the belief that every child carries within them the potential to create extraordinary possibilities.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  At Seedling International School, education is not confined to classrooms, textbooks, or examinations alone. We believe true education shapes character, ignites curiosity, strengthens confidence, and prepares young minds to lead with intelligence, empathy, courage, and purpose in an ever-changing world.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Our schools have always stood for progressive learning blended with strong human values. We are committed to creating environments where children feel safe to question, inspired to explore, encouraged to dream, and empowered to discover their individual strengths.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  The world our children are growing into demands far more than information. It requires emotional resilience, adaptability, creativity, collaboration, and ethical leadership. At Seedling International School, we continuously evolve our educational practices to ensure our learners are future-ready while remaining deeply rooted in compassion, integrity, and social responsibility.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Equally important to us is the partnership we share with parents. Education becomes most impactful when schools and families walk together with trust, shared values, and a common commitment toward the holistic growth of every child.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  As you explore our website, I warmly invite you to experience the spirit of Seedling International School — a spirit of excellence, innovation, inclusivity, and lifelong learning.
                </p>
                <p className="text-text-light leading-[1.9] text-base font-dm font-semibold">
                  Together, let us inspire children not merely to succeed in the world, but to contribute meaningfully to it and shape a brighter tomorrow.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-px bg-navy" />
                  <span className="font-playfair text-xl text-text-light">Dr. Sandeep Bakshi</span>
                </div>
                <p className="text-navy text-sm font-dm mt-1">CEO & Director, Seedling Group of Schools</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section> */}

  <section className="py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto px-5 sm:px-6">
          <div className="self-start md:sticky md:top-28">
            <Reveal>
              <div className="relative">
                <img
                  src="/assets/img/Sandeep-Bakshi.jpg"
                  alt="Dr. Sandeep Bakshi, CEO CEO & Director Seedling Director Seedling International School Group"
                 
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-purple-100 rounded-2xl shadow-xl p-6 max-w-xs border border-sand border-purple-700">
                  <p className="font-playfair text-lg font-semibold text-text-base">Dr. Sandeep Bakshi</p>
                  <p className="text-navy text-sm font-dm">CEO & Director's Message</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
             <Reveal>
                <p className="font-playfair text-black text-xl mb-4">CEO & Director's Message</p>
                <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-black">
                  "Life Ready<br />
                  <em className="font-semibold">& Life Worthy"</em>
                </h2>
              </Reveal>
          <Reveal delay={100}>
                <p className="text-black leading-[1.9] text-base mb-4 font-dm">
                  Welcome to the Seedling International School Group — a vibrant educational family where learning is inspired by vision, nurtured with care, and guided by the belief that every child carries within them the potential to create extraordinary possibilities.
                </p>
                <p className="text-black leading-[1.9] text-base mb-4 font-dm">
                  At Seedling International School, education is not confined to classrooms, textbooks, or examinations alone. We believe true education shapes character, ignites curiosity, strengthens confidence, and prepares young minds to lead with intelligence, empathy, courage, and purpose in an ever-changing world.
                </p>
                <p className="text-black leading-[1.9] text-base mb-4 font-dm">
                  Our schools have always stood for progressive learning blended with strong human values. We are committed to creating environments where children feel safe to question, inspired to explore, encouraged to dream, and empowered to discover their individual strengths.
                </p>
                <p className="text-black leading-[1.9] text-base mb-4 font-dm">
                  The world our children are growing into demands far more than information. It requires emotional resilience, adaptability, creativity, collaboration, and ethical leadership. At Seedling International School, we continuously evolve our educational practices to ensure our learners are future-ready while remaining deeply rooted in compassion, integrity, and social responsibility.
                </p>
                <p className="text-black leading-[1.9] text-base mb-4 font-dm">
                  Equally important to us is the partnership we share with parents. Education becomes most impactful when schools and families walk together with trust, shared values, and a common commitment toward the holistic growth of every child.
                </p>
                <p className="text-black leading-[1.9] text-base mb-4 font-dm">
                  As you explore our website, I warmly invite you to experience the spirit of Seedling International School — a spirit of excellence, innovation, inclusivity, and lifelong learning.
                </p>
                <p className="text-black leading-[1.9] text-base font-dm font-semibold">
                  Together, let us inspire children not merely to succeed in the world, but to contribute meaningfully to it and shape a brighter tomorrow.
                </p>
              </Reveal>
            <Reveal delay={200}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-px bg-blue-100-400" />
                  <span className="font-playfair text-xl text-black">Dr. Sandeep Bakshi</span>
                </div>
                <p className="text-black text-sm font-dm mt-1">CEO & Director, Seedling Group of Schools</p>
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
                  alt="Dr. Preeti Bakshi, Executive Director Seedling International School"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-100 rounded-2xl shadow-xl p-6 max-w-xs border border-sand border-red-700">
                  <p className="font-playfair text-lg font-semibold text-text-base">Dr. Preeti Bakshi</p>
                  <p className="text-crimson text-sm font-dm">Executive Director's Message</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
             <Reveal>
                <p className="font-playfair text-crimson text-xl mb-4">A Message from the Executive Director</p>
                <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-ink">
                  Beyond Achievement:<br />
                  <em className="font-semibold">Educating the Whole Child</em>
                </h2>
              </Reveal>
          <Reveal delay={100}>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Education has never been only about what a child knows. At its finest, education is about who a child becomes.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  At Seedling International Academy and Seedling Modern International Academy, our Cambridge education is founded on this deeper understanding of learning. We believe that academic achievement is important—but it is only one part of a much larger journey.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  A truly meaningful education should help a young person discover their strengths, develop their voice, understand their responsibilities and build the confidence to navigate an increasingly complex world.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  This is why we believe in an education that goes beyond the pursuit of marks and outcomes.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  The Cambridge approach gives our learners the opportunity to question, investigate, analyse, communicate and make connections. But beyond these academic competencies lies something even more important: the development of curiosity, independence, reflection, resilience and a genuine love for learning.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  We want our students to become learners who do not simply ask, &ldquo;What is the right answer?&rdquo; but also, &ldquo;Why is this so? What else could be possible? What can I do with what I have learned?&rdquo;
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  That shift—from receiving knowledge to engaging with it—is at the heart of our educational philosophy.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  At Seedling International Academy and Seedling Modern International Academy, we see the learner not as a passive recipient of information, but as an active participant in their own learning journey. Our Cambridge environment encourages students to take ownership, to think independently, to collaborate meaningfully and to develop the confidence to express ideas with clarity and conviction.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Yet, we believe that a child's education cannot end with intellectual development.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  The world needs young people who can think deeply and feel deeply; who can achieve and empathise; who can lead and listen; who can be ambitious and remain grounded in values.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  That is why character is central to our understanding of education.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  We want our learners to develop the courage to face setbacks, the humility to learn from others, the integrity to make responsible choices and the resilience to keep moving forward when the path is uncertain.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  For us, the purpose of a Cambridge education is therefore not simply to create successful students.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  It is to nurture capable, confident and compassionate human beings.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Young people who know themselves.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Young people who value others.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  Young people who think for themselves.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  And young people who understand that with knowledge comes responsibility.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  We may not be able to predict the world our children will inherit. But we can give them something more enduring than predictions: the capacity to learn, adapt, question, create and contribute.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  That, to us, is education beyond achievement.
                </p>
                <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                  And that is the promise we seek to make to every learner who walks through the doors of Seedling International Academy and Seedling Modern International Academy.
                </p>
              </Reveal>
            <Reveal delay={200}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-px bg-crimson" />
                  <span className="font-playfair text-xl text-[#133844]">Dr. Preeti Bakshi</span>
                </div>
                <p className="text-crimson text-sm font-dm mt-1">Executive Director, Seedling Group of Schools</p>
              </Reveal>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════
          JOINT DIRECTOR'S MESSAGE — MS. AKANSHA BAKSHI
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="self-start md:sticky md:top-28">
            <Reveal>
              <div className="relative">
                <img
                  src="/assets/img/akansha.jpeg"
                  alt="Ms. Akansha Bakshi, Joint Director Seedling International School"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-100 rounded-2xl shadow-xl p-6 max-w-xs border border-sand border-green-700">
                  <p className="font-playfair text-lg font-semibold text-text-base">Ms. Akansha Bakshi</p>
                  <p className="text-navy-700 text-sm font-dm">Joint Director, Seedling Group of Schools</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="font-playfair text-navy-700 text-xl mb-4">A Message from Ms. Akansha, Joint Director, Seedling Group of Schools</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8">
                The Cambridge Learner:<br />
                <em className="font-semibold">Curious Minds, Confident Futures</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Education, at its most meaningful, is not about placing information into a child's mind; it is about awakening the desire to learn, question, explore and discover.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                At Seedling International Academy and Seedling Modern International Academy, we believe that every learner enters the classroom with an innate sense of curiosity. Our responsibility as educators is to protect that curiosity, nurture it and transform it into the confidence to think independently and engage meaningfully with the world.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The Cambridge approach beautifully complements this vision. It encourages learners to move beyond simply remembering what they have been taught and towards understanding why it matters, how it works and what possibilities it creates.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                From Questions to Understanding
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A curious learner does not accept knowledge passively.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                They ask Why?<br />
                They ask How?<br />
                They ask What if?<br />
                And sometimes, most importantly, they ask Could there be another way?
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                These questions are the beginnings of deeper learning.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want our classrooms to be spaces where questions are valued as much as answers. Through inquiry, discussion, investigation and reflection, our learners are encouraged to develop their own perspectives while learning to appreciate those of others.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                This is where education becomes transformative—not when a child can reproduce an answer, but when the child can think, reason, connect and create.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                Confidence to Think Independently
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                True confidence in a learner is not the confidence of always being right. It is the confidence to attempt, question, make mistakes, learn from them and try again.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Our Cambridge learners are encouraged to become increasingly independent in the way they approach their learning. They learn to take responsibility for their choices, evaluate their progress and recognise that challenges are not barriers to success but opportunities for growth.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want every child to experience the quiet satisfaction of saying:
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                &ldquo;I worked this out.&rdquo;<br />
                &ldquo;I found another way.&rdquo;<br />
                &ldquo;I understand it now.&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                These moments build something far more valuable than marks—they build self-belief.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                Learning That Extends Beyond the Textbook
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A truly educated child is not one who merely knows a great deal, but one who knows how to use knowledge wisely.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                That is why we encourage our learners to make connections across subjects, relate learning to real-world situations and look at problems from multiple perspectives. Academic knowledge becomes richer when it is connected to experience, imagination and purpose.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Whether a learner is investigating a scientific question, interpreting a literary text, analysing a mathematical problem, exploring a global issue or presenting an original idea, we want them to understand that learning is not a collection of separate subjects.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Learning is a way of seeing the world.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                Preparing Learners for an Uncertain Future
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The world our children will inherit is changing rapidly. Many of the careers, technologies and challenges they will encounter are still evolving.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Therefore, preparing children for the future cannot simply mean preparing them for a particular profession. It means giving them the intellectual agility, adaptability and confidence to continue learning throughout their lives.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want our learners to be comfortable with change, open to new ideas and willing to challenge assumptions. We want them to collaborate without losing their individuality, to communicate with clarity and to approach unfamiliar problems with curiosity rather than apprehension.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Most importantly, we want them to remain lifelong learners.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                The Learner We Aspire to Nurture
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Our vision for a Cambridge learner goes beyond academic achievement.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We aspire to nurture young people who are:
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Curious enough to question.<br />
                Confident enough to explore.<br />
                Reflective enough to learn from experience.<br />
                Resilient enough to persevere.<br />
                Open-minded enough to embrace different perspectives.<br />
                And courageous enough to imagine something better.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Because education should not merely prepare a child to succeed in an examination. It should prepare that child to think independently, participate responsibly and contribute meaningfully.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                When curiosity is nurtured, learning becomes joyful.<br />
                When independent thinking is encouraged, confidence follows.<br />
                And when confidence is combined with purpose, young people begin to recognise the possibilities within themselves.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                That is the Cambridge learner we aspire to develop at Seedling—a learner who does not simply ask for the answer, but has the courage to seek it, question it and, perhaps one day, create a better one.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-navy" />
                <span className="font-playfair text-xl text-text-light">Ms. Akansha Bakshi</span>
              </div>
              <p className="text-navy-700 text-sm font-dm mt-1">Joint Director, Seedling Group of Schools</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          JOINT DIRECTOR'S MESSAGE — MS. AISHWARYA BAKSHI
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="self-start md:sticky md:top-28">
            <Reveal>
              <div className="relative">
                <img
                  src="/assets/img/Aishwarya-Bakshi.jpeg"
                  alt="Ms. Aishwarya Bakshi, Joint Director Seedling International School"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-100 rounded-2xl shadow-xl p-6 max-w-xs border border-sand border-orange-700">
                  <p className="font-playfair text-lg font-semibold text-text-base">Ms. Aishwarya Bakshi</p>
                  <p className="text-navy-700 text-sm font-dm">Joint Director, Seedling Group of Schools</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="font-playfair text-navy-700 text-xl mb-4">A Message from the Joint Director, Seedling Group of Schools</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8">
                Learning Beyond the Classroom:<br />
                <em className="font-semibold">From Knowledge to Real-World Impact</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Education finds its true meaning when knowledge moves beyond the pages of a textbook and becomes part of how a young person thinks, responds, creates and contributes.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                At Seedling International Academy and Seedling Modern International Academy, we believe that the purpose of education is not simply to prepare learners for examinations, but to prepare them for life. The Cambridge approach gives us a powerful framework to make this philosophy a lived reality—connecting academic understanding with curiosity, experience, collaboration and real-world application.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                When Learning Becomes Experience
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A concept becomes truly meaningful when a learner can see it in the world around them.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A mathematical principle encountered in a classroom can become a tool for understanding everyday decisions. A scientific concept can lead to an investigation of the environment. A historical event can invite reflection on the choices societies make. A literary text can open a conversation about human emotions, relationships and perspectives.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                This is the kind of learning we aspire to create—learning that does not stop with &ldquo;I know this,&rdquo; but progresses to:
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                &ldquo;I understand this.&rdquo;<br />
                &ldquo;I can apply this.&rdquo;<br />
                &ldquo;I can connect this to the world around me.&rdquo;<br />
                &ldquo;And perhaps, I can use it to make a difference.&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                The Classroom as a Launchpad
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The classroom should be a beginning, not a boundary.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Our learners need opportunities to investigate, experiment, collaborate, present ideas, solve authentic problems and learn from experiences. When students work together on a project, conduct an investigation, design a solution or engage with a community issue, they begin to understand that knowledge is powerful because of what we do with it.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Such experiences also cultivate skills that cannot be developed through memorisation alone—communication, collaboration, creativity, critical thinking, decision-making and adaptability.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                These are not merely &ldquo;future skills&rdquo;. They are life skills.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                Connecting Disciplines, Connecting Ideas
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The challenges of the real world rarely arrive neatly divided into subjects.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A problem may require scientific understanding, mathematical reasoning, technological awareness, communication skills and an appreciation of human behaviour—all at once.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                This is why interdisciplinary learning is so important.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                When learners make connections between different areas of knowledge, they begin to see the larger picture. They discover that mathematics can tell a story, science can inspire innovation, language can influence change and creativity can transform a solution.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Knowledge becomes more powerful when learners learn to connect it.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                From Learners to Contributors
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want our students to see themselves not merely as recipients of education, but as active contributors to the world around them.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A learner who identifies an environmental concern and thinks of a possible solution is already beginning to understand citizenship.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A learner who listens to another perspective before presenting an opinion is developing empathy.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A learner who works with peers to overcome a challenge is learning the value of collaboration.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                A learner who takes an idea from conception to execution is developing initiative.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                These experiences shape young people who understand that their education carries a responsibility—to themselves, to their communities and to the wider world.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                Preparing for a World That Keeps Changing
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The future will demand more than academic knowledge.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                It will require young people who can adapt without losing direction, innovate without losing values, and embrace technology without losing their humanity.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Our responsibility is therefore to create learning environments where students are encouraged to experiment, take thoughtful risks, learn from setbacks and remain open to new possibilities.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want them to leave school not with the belief that they have learned everything, but with the confidence that they can learn anything they need to face what comes next.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                Education with Purpose
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Ultimately, the measure of education is not only what a learner achieves personally, but also what that learner chooses to do with what they have learned.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                At Seedling, we aspire to create young people who can take knowledge into the world and turn it into ideas, solutions, relationships, opportunities and positive change.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Because the finest education does not end when the lesson ends.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                It begins when the learner steps outside the classroom and sees the world differently.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                That is the Cambridge journey we envision for our learners:<br />
                from knowledge to understanding,<br />
                from understanding to action,<br />
                and from action to meaningful impact.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-navy" />
                <span className="font-playfair text-xl text-text-light">Ms. Aishwarya Bakshi</span>
              </div>
              <p className="text-navy-700 text-sm font-dm mt-1">Joint Director, Seedling Group of Schools</p>
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
                  alt="Shruti Kukar, Principal and Cambridge Exam officer Seedling International School"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-100 rounded-2xl shadow-xl p-6 max-w-xs border border-sand border-blue-700">
                  <p className="font-playfair text-lg font-semibold text-text-base">Shruti Kukar</p>
                  <p className="text-navy text-sm font-dm">Principal & Cambridge Exam Officer Seedling Group of Schools</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="font-playfair text-navy text-xl mb-4">Principal's Note</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8">
                "Nurturing Happy Minds,<br />
                <em className="font-semibold">Strong Hearts &amp; Bold Futures"</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-playfair text-text-base text-xl mb-3 font-semibold">A Cambridge Education. A Seedling Mindset.</p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">Dear Parents,</p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-medium">Welcome to Seedling!</p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                There are schools that offer the Cambridge curriculum. And then there are schools that truly believe in what a Cambridge education can make possible.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                At Seedling International Academy, we aspire to be the latter.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Our fascination with Cambridge has never been limited to its academic rigour. What inspires us most is the philosophy beneath it&mdash;the belief that education must do more than prepare a child to answer questions. It must prepare them to ask better questions, think independently, engage deeply, and make meaning of the world around them.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                That is the learner we are committed to creating.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Not a child who knows more. A child who can do more with what they know.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want our students to move beyond the familiar architecture of schooling&mdash;memorise, reproduce, score, move on.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want them to wonder.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                To challenge an assumption.<br />
                To defend an idea.<br />
                To change their mind when evidence demands it.<br />
                To connect mathematics with the real world, science with human possibility, language with empathy, and knowledge with action.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Because the world our children will inherit will not reward them merely for remembering what they were taught. It will increasingly reward those who can think when there is no answer key.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                That is where we believe the true promise of Cambridge lies.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Our Cambridge advantage is not the curriculum alone.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                It is what we do with it.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                At Seedling International Academy, Cambridge is not treated as a syllabus to be completed. It is a way of thinking about a child.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Our classrooms are designed to make learners active participants rather than passive recipients. We value inquiry over instruction alone, understanding over memorisation, application over repetition, and reflection over simply getting the right answer.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                But we also believe that intellectual freedom must be accompanied by discipline, rigour and purpose.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                So we encourage our children to think boldly&mdash;but also to think precisely.<br />
                To speak confidently&mdash;but listen generously.<br />
                To be curious&mdash;but substantiate curiosity with evidence.<br />
                To dream&mdash;but learn how to turn ideas into action.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                This is why our Cambridge offering is deliberately more expansive than examination preparation.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want every experience at Seedling to become part of the child&rsquo;s education.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
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
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                All of it counts.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We are not preparing children for a world that exists today.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We are preparing them for one that does not yet exist.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Artificial intelligence is changing what knowledge means. Technology is redefining how we work. Careers are emerging that did not exist when many of us were children. Information is abundant, but wisdom is scarce. Answers are increasingly easy to access, while judgement, discernment and original thought are becoming more valuable than ever.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                In such a world, the greatest gift we can give a child is not certainty.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                It is intellectual confidence.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The confidence to say, &ldquo;I don&rsquo;t know yet, but I can find out.&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The confidence to say, &ldquo;I see it differently.&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                The confidence to ask, &ldquo;But why?&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                And eventually, the courage to ask, &ldquo;What if?&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                The Seedling Learner
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                When our children leave us, we do not want their defining identity to be that they studied at a Cambridge school.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want them to become Cambridge-minded human beings.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Curious, without being gullible.<br />
                Knowledgeable, without being arrogant.<br />
                Articulate, without losing the ability to listen.<br />
                Ambitious, without losing empathy.<br />
                Independent, without becoming disconnected.<br />
                Resilient enough to fail.<br />
                Reflective enough to learn from failure.<br />
                And courageous enough to imagine a better possibility.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We want them to enter university not merely with a strong academic profile, but with a mind that is ready for university.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                And eventually, we want them to enter the world not asking merely,
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                &ldquo;What job can I get?&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                but,
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                &ldquo;What problem can I solve? What value can I create? What difference can I make?&rdquo;
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                That, to us, is the real measure of education.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm font-semibold">
                A Partnership of Trust
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                As parents, you are entrusting us with something far more precious than academic performance.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                You are entrusting us with a growing mind, a developing identity, a child&rsquo;s confidence, curiosity and sense of possibility.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We do not take that responsibility lightly.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                At Seedling International Academy, we want to walk alongside you&mdash;not simply through examinations and university applications, but through the much larger journey of becoming.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Because education is not the filling of a mind.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                It is the awakening of one.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                And if there is one promise we would like to make to every family joining us, it is this:
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                We will never stop asking what more your child can become.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Welcome to Seedling International Academy.
              </p>
              <p className="text-text-light leading-[1.9] text-base mb-2 font-dm">
                Welcome to a Cambridge education that is not merely about what your child will learn, but about who your child will become because they learned it.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-navy" />
                <span className="font-playfair text-xl text-text-light">Shruti Kukar</span>
              </div>
              <p className="text-navy text-sm font-dm mt-1">Principal &amp; Cambridge Exam Officer, Seedling Group of Schools</p>
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

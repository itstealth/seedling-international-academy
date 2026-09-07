"use client";

import React, { useState, useEffect } from "react";
import HeroWrapper from "@/components/layout/HeroWrapper";

const sections = [
  {
    id: "s1",
    title: "1. Admissions & Fee Policy",
    content: "Admission to Seedling International Academy (Cambridge) is subject to availability of seats, age eligibility as per Cambridge International guidelines, and satisfactory completion of the interaction/assessment process. Submission of an online application form and payment of the registration fee does not guarantee admission.",
    callout: "The registration fee is non-refundable under any circumstances. Tuition and other fees paid after confirmation of admission are governed by the Fee Refund Policy communicated at the time of admission. No cash refunds are processed after the academic session commences.",
    list: [
      "Direct admissions to Class 10 (IGCSE 2) and Class 12 (A Level 2) are not permitted except as per Cambridge bye-laws",
      "Admissions to Class 9 (IGCSE 1) and Class 11 (A Level 1) require passing of the school's entrance examination",
      "Age criteria follow Cambridge International Education (CIE) standards and are verified at time of document submission",
      "The School reserves the right to withdraw an offer of admission if documents submitted are found to be incorrect or fraudulent",
    ],
  },
  {
    id: "s2",
    title: "2. Academic Placement & Curriculum",
    content: "Seedling International Academy follows the Cambridge Assessment International Education (CAIE) curriculum. The School reserves the right to place students in the appropriate year group based on age, prior academic records, and assessment outcomes — irrespective of the class applied for.",
    callout: "The School may modify, update, or discontinue specific subjects, streams, or co-curricular programmes in response to Cambridge policy changes, staffing requirements, or regulatory directives from relevant educational authorities. Parents will be informed of material changes in advance wherever operationally possible.",
  },
  {
    id: "s3",
    title: "3. Student Data & Privacy",
    content: "Seedling International Academy collects and processes personal data — including student names, dates of birth, Aadhar numbers, academic records, and parent contact details — solely for the purpose of providing educational services, managing school operations, and fulfilling statutory reporting obligations.",
    list: [
      "Data is stored securely and accessed only by authorised staff members",
      "Student data is not sold, rented, or shared with third parties for commercial purposes",
      "Disclosure to government or regulatory bodies (e.g., Cambridge, RTE) is made only as legally required",
      "Parents may request access to or correction of their child's personal data by writing to the School Administration",
      "On leaving the school, academic transcripts and records are retained as per applicable Indian education regulations",
    ],
  },
  {
    id: "s4",
    title: "4. Website & Digital Platform Use",
    content: "This website and any associated digital platforms (including the school ERP, parent portal, and communication channels) are provided for the exclusive use of prospective families, enrolled students, and authorised staff. You must not misuse any digital resource provided by the School. Prohibited activities include:",
    list: [
      "Accessing or attempting to access another student's or staff member's data without authorisation",
      "Submitting false or misleading information in any online form or application",
      "Using School systems to transmit offensive, defamatory, or unlawful content",
      "Introducing malware, scripts, or any disruptive code into School platforms",
      "Screen-recording, scraping, or reproducing content from the parent portal or ERP for external use",
      "Impersonating a School official, teacher, or staff member in any digital communication",
    ],
  },
  {
    id: "s5",
    title: "5. Attendance & Leave",
    content: "Regular attendance is a fundamental requirement at Seedling International Academy. Students are expected to maintain the minimum attendance percentage prescribed by Cambridge International Education and the School's internal policy. Failure to meet attendance requirements may result in ineligibility to sit Cambridge examinations.",
    callout: "Leave of absence must be applied for in advance through the School's official channels. Retrospective leave applications will not be entertained except in documented medical emergencies. The School is not obligated to provide compensatory instruction for lessons missed due to unauthorised absence.",
  },
  {
    id: "s6",
    title: "6. Code of Conduct",
    subtitle: "Students, Parents & Guardians",
    content: "All members of the Seedling International Academy community — students, parents, and guardians — are expected to uphold the values of respect, integrity, and responsibility. The School's full Code of Conduct is detailed in the Student Handbook issued at the time of admission and forms part of the contractual agreement between the School and the family.",
    list: [
      "Bullying, ragging, discrimination, or harassment of any kind will result in immediate disciplinary action",
      "Damage to school property will be charged to the student's account and may result in suspension",
      "Parents and guardians are expected to interact with staff respectfully; aggressive or threatening behaviour on premises will be reported to authorities",
      "Mobile phones and electronic devices are governed by the School's device policy communicated separately",
      "Any breach of conduct may result in suspension or termination of admission at the School's sole discretion",
    ],
  },
  {
    id: "s7",
    title: "7. Photography, Media & Events",
    content: "By enrolling a child at Seedling International Academy, parents and guardians consent to the School photographing and filming students for the purposes of school publications, the School website, social media channels, annual reports, and promotional materials. Photographs are used to showcase school life and achievements and are never used in a commercially exploitative manner.",
    callout: "If you do not consent to your child's image being used for publication purposes, you must notify the School Administration in writing at the time of admission. Withdrawal of consent will be respected; however, the School cannot guarantee exclusion from incidental group photographs taken at public school events.",
  },
  {
    id: "s8",
    title: "8. Intellectual Property & Copyright",
    content: "All content published on this website — including text, images, logos, branding, curriculum summaries, and design elements — is the intellectual property of Seedling International School Group or its licensed partners. Content may be viewed and printed solely for personal reference and non-commercial purposes.",
    callout: "The Seedling International School name, logo, and associated trademarks may not be reproduced, adapted, or used in any form without prior written authorisation from the School Group's management. Unauthorised use will be pursued under applicable Indian intellectual property law.",
  },
  {
    id: "s9",
    title: "9. Complaints & Grievance Redressal",
    content: "Seedling International Academy is committed to addressing concerns from students, parents, and guardians promptly and fairly. The School maintains a formal Grievance Redressal process:",
    list: [
      "Stage 1 — Direct communication: Raise the matter with the relevant class teacher or department head",
      "Stage 2 — Written complaint: Submit a written complaint to the School Administration at seedlingacademy@hotmail.com",
      "Stage 3 — Principal review: Escalate to the School Principal if Stage 2 does not resolve the matter within 10 working days",
      "Stage 4 — Management review: Unresolved matters may be escalated to School Group Management in writing",
      "Complaints regarding the website or online content will be acknowledged within 5 working days",
    ],
  },
  {
    id: "s10",
    title: "10. Changes to Terms & Governing Law",
    content: "The School reserves the right to amend these Terms and Conditions at any time. Material changes will be communicated via the School website or parent portal. Continued use of the School's website or enrolment of a student constitutes acceptance of the current terms. These Terms and Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan.",
    callout: "These Terms and Conditions should be read in conjunction with the School's Privacy Policy, Fee Schedule, and Student Handbook — all of which form part of the overall agreement between the School and enrolled families.",
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setProgress(pct);

      let current = "";
      sections.forEach((sec) => {
        const element = document.getElementById(sec.id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-off-white font-dm selection:bg-navy/10 scroll-smooth">

      <HeroWrapper
        backgroundImage="/assets/Home/School1.webp"
        title="Terms & Conditions"
        badge="Legal"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
        imageAlt="Seedling International Academy campus, Jaipur — Terms and Conditions"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar Navigation */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-32 space-y-6">

              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full lg:hidden flex items-center justify-between bg-white border border-sand/40 rounded-2xl px-6 py-4 font-bold text-[#133844] shadow-sm"
              >
                <span className="uppercase tracking-widest text-[10px] font-black">Table of Contents</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isTocOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div className={`${isTocOpen ? "block" : "hidden"} lg:block space-y-6`}>
                <div className="bg-white border border-sand/30 rounded-[2rem] p-8 shadow-sm">
                  <div className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                    <span className="w-6 h-px bg-navy" />
                    Navigation
                  </div>

                  <nav className="space-y-1">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`block px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                          activeSection === sec.id
                            ? "text-[#133844] bg-[#d4f4ed] border-[#133844] shadow-lg shadow-navy/20"
                            : "text-text-light hover:text-navy hover:bg-navy/5 border-transparent"
                        }`}
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>

                  {/* Progress */}
                  <div className="mt-10 pt-8 border-t border-sand/20">
                    <div className="flex items-center justify-between text-[9px] font-black text-[#133844] uppercase tracking-widest mb-3">
                      <span>Read Progress</span>
                      <span className="text-crimson">{progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-off-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-navy transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-crimson rounded-[2rem] p-8 text-white shadow-xl shadow-crimson/20">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 mb-4">Legal Framework</p>
                  <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                    Governed by the<br /><span className="text-2xl font-playfair lowercase font-light tracking-normal">laws of India</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <div className="text-right text-text-light text-sm italic font-dm mb-8">
              Last Updated: September 2026
            </div>
            <div className="space-y-16">
              {sections.map((sec, idx) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-32 group">
                  <div className="bg-white border border-sand/30 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">
                    <div className="bg-[#d4f4ed] px-8 py-6 flex items-center gap-6">
                      <span className="font-playfair text-xl font-bold text-[#133844]/60">{(idx + 1).toString().padStart(2, "0")}</span>
                      <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#133844] tracking-widest uppercase">
                        {sec.title.split(". ")[1] || sec.title}
                      </h2>
                    </div>

                    <div className="p-8 md:p-12 space-y-8">
                      {sec.subtitle && (
                        <h3 className="text-[10px] font-black text-crimson uppercase tracking-[0.3em]">
                          {sec.subtitle}
                        </h3>
                      )}

                      <p className="text-text-light leading-relaxed text-lg font-light opacity-90">
                        {sec.content}
                      </p>

                      {sec.callout && (
                        <div className="p-6 bg-off-white border-l-4 border-crimson rounded-r-2xl font-bold text-[#133844] text-sm md:text-base leading-relaxed tracking-wide">
                          {sec.callout}
                        </div>
                      )}

                      {sec.list && (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sec.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-sand/10 border border-sand/20 text-[#133844] font-bold text-sm">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                              <span className="opacity-80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* Agreement Box */}
            <div className="bg-[#d4f4ed] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden mt-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sand/10 blur-[80px] rounded-full -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                  <svg className="w-8 h-8 text-[#133844]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-4xl font-bold text-[#133844] mb-6 uppercase tracking-tighter">Agreement Acknowledged</h3>
                <p className="text-[#133844]/60 text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
                  By continuing to use this website or enrolling a student at Seedling International Academy, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                </p>
                <div className="pt-8 border-t border-white/10 text-[9px] font-black uppercase tracking-[0.5em] text-[#133844]/30">
                  © Seedling International School Group | Jaipur, Rajasthan
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-sand/30">
        <p className="text-text-light text-[10px] font-black uppercase tracking-[0.2em]">
          Seedling International Academy | Jaipur • Rajasthan • India
        </p>
      </footer>
    </div>
  );
}

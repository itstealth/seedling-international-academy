import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Seedling Group of Schools",
  description:
    "Official privacy policy of Seedling School. Learn how we collect, use, and protect your data when using our mobile application and digital services.",
  keywords:
    "Seedling School Privacy Policy, Data Protection, School App Privacy, Device ID Usage, Location Tracking Policy",
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <div className="space-y-4">
        <Text>
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for the School App is managed with the help of standard privacy policy frameworks.
        </Text>
        <Text>
          We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
        </Text>
        <Text>
          This Privacy Policy applies to the mobile application and digital services operated by Seedling School.
        </Text>
      </div>
    ),
  },
  {
    id: "device-id",
    title: "Usage Device ID for Mobile App",
    content: (
      <div className="space-y-4">
        <Text>Our app may collect device IDs for the following purposes:</Text>
        <ul className="list-none space-y-3">
          {[
            { label: "Analytics", text: "To understand app usage and improve performance" },
            { label: "App Functionality", text: "To ensure smooth operation of core features" },
            { label: "Security", text: "To prevent misuse, fraud, and illegal activities" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <Text>
                <strong className="text-primary font-bold">{item.label}:</strong> {item.text}
              </Text>
            </li>
          ))}
        </ul>
        <Text className="mt-4">
          We may share this data with trusted third-party partners only for the purposes mentioned above. All data is encrypted in transit to ensure user privacy and security.
        </Text>
        <Text>
          Users can request deletion of their data by contacting us at the email provided below.
        </Text>
      </div>
    ),
  },
  {
    id: "location",
    title: "Usage of Location",
    content: (
      <div className="space-y-4">
        <Text>
          Our school ERP solutions may include real-time location tracking, particularly for school transportation services. By enabling background location services, the app provides accurate updates of school bus locations, helping enhance student safety and operational efficiency.
        </Text>
        <Text>
          Location data is used strictly for safety, tracking, and operational purposes and is not shared for commercial use.
        </Text>
      </div>
    ),
  },
  {
    id: "usage-data",
    title: "Usage Data",
    content: (
      <div className="space-y-4">
        <Text>
          We may collect information that your browser or device sends whenever you access our Service ("Usage Data"). This may include:
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {[
            "Internet Protocol (IP) address",
            "Browser type and version",
            "Pages visited within the app or website",
            "Time and date of access",
            "Time spent on specific features",
            "Mobile device type & OS",
            "Unique device identifiers",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium">
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "Tracking & Cookies Data",
    content: (
      <div className="space-y-4">
        <Text>
          We use cookies and similar tracking technologies to track activity on our Service and store certain information.
          Cookies are small data files containing anonymous identifiers sent to your device.
        </Text>
        <div className="bg-primary/5 border-l-4 border-secondary p-6 rounded-r-2xl">
          <Text variant="small" className="text-primary font-bold">
            You may choose to refuse cookies through your browser settings; however, some portions of the Service may not function properly.
          </Text>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { tag: "Session Cookies", desc: "To operate the Service" },
            { tag: "Preference Cookies", desc: "To remember settings" },
            { tag: "Security Cookies", desc: "To enhance protection" },
          ].map((cookie, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 hover:border-secondary/20 transition-all duration-300 group hover:bg-slate-50">
              <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">{cookie.tag}</div>
              <Text variant="small">{cookie.desc}</Text>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "use-of-data",
    title: "Use of Data",
    content: (
      <div className="space-y-3">
        <Text className="mb-4">Seedling School uses collected data for the following purposes:</Text>
        <div className="space-y-2">
          {[
            "To provide and maintain the Service",
            "To notify users about updates or changes",
            "To enable interactive features",
            "To provide customer support",
            "To improve app functionality and user experience",
            "To monitor usage and performance",
            "To detect, prevent, and resolve technical issues",
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <Text variant="small" className="font-bold">{point}</Text>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "transfer",
    title: "Transfer of Data",
    content: (
      <div className="space-y-4">
        <Text>
          Your information, including Personal Data, may be transferred to and maintained on servers located outside your state or country, where data protection laws may differ.
        </Text>
        <Text>
          If you are located outside India and choose to provide information, you consent to the transfer and processing of your data in India.
        </Text>
        <Text className="font-bold text-primary">
          Seedling School ensures that adequate security measures are in place to protect your data during such transfers.
        </Text>
      </div>
    ),
  },
  {
    id: "disclosure",
    title: "Disclosure of Data",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Legal Requirements</span>
        </div>
        <Text>Seedling School may disclose your Personal Data if required to:</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
          {[
            "Comply with legal obligations",
            "Protect the rights or property of the school",
            "Prevent or investigate wrongdoing",
            "Ensure the safety of users or the public",
            "Protect against legal liability",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-secondary" />
              <Text variant="small" className="font-medium">{item}</Text>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "security",
    title: "Security of Data",
    content: (
      <div className="space-y-4">
        <Text>
          The security of your data is important to us. While we use commercially acceptable measures to protect Personal Data, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
        </Text>
      </div>
    ),
  },
  {
    id: "service-providers",
    title: "Service Providers & Analytics",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <Text>We may engage third-party companies or individuals ("Service Providers") to:</Text>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 marker:text-secondary">
            <li><Text variant="small" className="font-bold">Facilitate the Service</Text></li>
            <li><Text variant="small" className="font-bold">Provide services on our behalf</Text></li>
            <li><Text variant="small" className="font-bold">Assist in analyzing Service usage</Text></li>
          </ul>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <Text variant="muted">
              These third parties are granted access to Personal Data only to perform assigned tasks and are contractually obligated to protect confidentiality.
            </Text>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <Heading variant="h4" className="mb-3 text-primary">Google Analytics</Heading>
          <Text className="mb-6">
            Google Analytics is a web analytics service provided by Google Inc. Google uses collected data to track and monitor usage of the Service. This information may be shared with other Google services.
          </Text>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="sm">
              Review Google’s Privacy Policy
              <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "links",
    title: "Links to Other Sites",
    content: (
      <Card variant="slate" padding="small">
        <Text>
          Our Service may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. Users are advised to review the privacy policies of any external sites they visit.
        </Text>
      </Card>
    ),
  },
  {
    id: "changes",
    title: "Changes to Policy",
    content: (
      <div className="space-y-4">
        <Text>
          We may update this Privacy Policy from time to time. Updates will be posted on this page and, where appropriate, notified via email or app notifications.
        </Text>
        <Text className="text-primary font-bold">Changes become effective once published.</Text>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Text>If you have any questions regarding this Privacy Policy, please contact us:</Text>
          <div className="p-4 bg-white rounded-xl shadow-premium border border-slate-100 flex items-center gap-4 hover:shadow-premium-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Email</div>
              <a href="mailto:seedlingacademy@hotmail.com" className="text-secondary font-bold text-sm">seedlingacademy@hotmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="p-4 bg-white rounded-xl shadow-premium border border-slate-100 flex items-center gap-4 hover:shadow-premium-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Website</div>
              <a href="https://seedlingschools.com/" target="_blank" className="text-primary font-bold text-sm">seedlingschools.com</a>
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-premium border border-slate-100 flex items-center gap-4 hover:shadow-premium-hover transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Contact No</div>
              <a href="tel:01413623000" className="text-primary font-bold text-sm">0141-3623000</a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-off-white font-dm selection:bg-navy/10">
      
      <PageHero 
        title="Privacy Policy"
        subtitle="Your privacy is our priority. This document outlines how Seedling School handles data with transparency and security."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-2 hidden lg:block">
              <div className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-navy" />
                Table of Contents
              </div>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-text-light hover:text-navy hover:bg-navy/5 transition-all duration-300 border border-transparent hover:border-sand/30"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4 space-y-16">
            {sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-start gap-6 mb-8">
                  <span className="font-playfair text-4xl font-bold text-sand/40 tabular-nums">{(idx + 1).toString().padStart(2, '0')}</span>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-deeper mt-2">{section.title}</h2>
                </div>
                <div className="prose prose-slate max-w-none prose-p:text-text-light prose-p:leading-relaxed prose-p:font-light prose-strong:text-navy-deeper prose-li:text-text-light">
                  {section.content}
                </div>
                {idx < sections.length - 1 && <div className="mt-16 h-px bg-sand/30 w-full" />}
              </section>
            ))}

            {/* Final Contact Card */}
            <div className="bg-navy-deeper rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden mt-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/10 blur-[80px] rounded-full -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-4xl font-bold text-white mb-6">Need Clarification?</h3>
                <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
                  Our compliance team is here to help you understand how we protect your information. 
                  Reach out to us for any privacy-related queries.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:seedlingacademy@hotmail.com" className="bg-sand hover:bg-white text-navy-deeper px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300">
                    Email Support
                  </a>
                  <a href="tel:01413623000" className="border-2 border-white/20 text-white hover:bg-white hover:text-navy-deeper px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300">
                    Call: 0141-3623000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-sand/30">
        <p className="text-text-light text-[10px] font-black uppercase tracking-[0.2em]">
          © Seedling Group of Schools | Compliance Division | Privacy Policy v2.0
        </p>
      </footer>
    </div>
  )
}

function Text({ children, className = "", variant }: { children: React.ReactNode, className?: string, variant?: string }) {
  return <p className={`text-text-light leading-relaxed font-light ${className}`}>{children}</p>;
}

function Heading({ children, className = "" }: { children: React.ReactNode, className?: string, variant?: string }) {
  return <h4 className={`font-playfair font-bold text-navy-deeper ${className}`}>{children}</h4>;
}

function Button({ children, className = "" }: { children: React.ReactNode, className?: string, variant?: string, size?: string }) {
  return <button className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${className}`}>{children}</button>;
}

function Card({ children, className = "" }: { children: React.ReactNode, className?: string, variant?: string, padding?: string }) {
  return <div className={`rounded-2xl border border-sand/40 bg-white ${className}`}>{children}</div>;
}

function CardHeader({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 border-b border-sand/40 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

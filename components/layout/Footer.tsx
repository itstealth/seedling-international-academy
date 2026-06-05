import Link from "next/link";
import { Download, MoveRight, ArrowUp } from "lucide-react";
import { Instagram, Facebook, Linkedin, Youtube } from "@/components/icons/BrandIcons";

export default function Footer() {
  const brochureHref = "/assets/SPS%20(Cambridge)%20PROSPECTUS.pdf";

  return (
    <section className="bg-neutral-100 pt-40 font-dmSans">
      <div className="w-[80%] mx-auto px-6">
        {/* Floating Call to Action */}
        <div className="relative z-10 -mb-24">
          <div className="bg-linear-to-r from-gray-200 to-gray-300 rounded-2xl overflow-hidden h-96 relative group shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1549979047-f06bb9619b61?q=80&w=1374&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-12 md:p-24">
              <h2 className="text-white text-5xl md:text-6xl font-bold max-w-2xl mb-8">
                Join our learning community today
              </h2>
              <Link
                href="/admissions#enquire"
                className="bg-crimson text-white px-8 py-4 rounded-full w-fit flex items-center gap-3 font-semibold hover:bg-crimson-dark transition-colors"
              >
                Apply Now
                <MoveRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-6">
        {/* Main Black Footer Area */}
        <div className="bg-[#060e1c] rounded-t-3xl pt-40 pb-20 px-6 md:px-12 text-white relative overflow-hidden">
          {/* Subtle mesh decoration */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] mesh-gradient opacity-[0.05] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-8">
              {/* Column 1: Brand */}
              <div className="lg:col-span-4 space-y-10">
                <div className="flex items-center">
                  <img
                    src="/camb_Logo.png"
                    alt="Cambridge International School Logo"
                    className="h-36 w-auto object-contain"
                  />
                </div>
                <p className="text-xl leading-relaxed text-white/60 font-medium max-w-lg font-dm hidden md:block">
                  Dedicated to academic excellence and holistic growth since 1993. We empower the next generation of global leaders with curiosity, character, and competence.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/seedlinginternational/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-2xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Instagram className="size-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/seedlinginternationalacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-2xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Facebook className="size-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@seedlinginternationalacade1802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-2xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Youtube className="size-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/seedling-international-academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-2xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Linkedin className="size-5" />
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Overview */}
              <div className="lg:col-span-2 space-y-10">
                <h3 className="text-crimson font-black text-xs tracking-[0.3em] uppercase block border-b border-white/10 pb-4">Quick Overview</h3>
                <ul className="space-y-6">
                  {['Blog', 'Policies', 'Mandatory Disclosures', 'ERP Login', 'Terms & Conditions'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group flex items-center text-sm font-black text-white/60 hover:text-white transition-colors font-dm">
                        <MoveRight className="w-5 h-5 mr-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-sand" />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href={brochureHref}
                      download
                      className="group flex items-center text-sm font-black text-white/60 hover:text-white transition-colors font-dm"
                    >
                      <Download className="w-5 h-5 mr-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-sand" />
                      <span>Download Brochure</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Our Institutions */}
              <div className="lg:col-span-2 space-y-10">
                <h3 className="text-crimson font-black text-xs tracking-[0.3em] uppercase block border-b border-white/10 pb-4">Our Institutions</h3>
                <div className="space-y-6">
                  {[
                    { name: 'Cambridge International School', loc: 'Jawahar Nagar', link: '/' },
                    { name: 'Cambridge International Academy', loc: 'Jawahar Nagar', link: 'https://cambridgeinternationalschool.com/sia.php' },
                  ].map((school) => (
                    <div key={school.name} className="group cursor-default">
                      {school.link ? (
                        <a href={school.link} target={school.link.startsWith('http') ? '_blank' : '_self'} rel={school.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="block text-sm font-black text-white/80 hover:text-sand transition-colors">{school.name}</a>
                      ) : (
                        <span className="block text-sm font-black text-white/80 group-hover:text-sand transition-colors">{school.name}</span>
                      )}
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block mt-1">{school.loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 4: Location Maps */}
              <div className="lg:col-span-2 space-y-10">
                <h3 className="text-crimson font-black text-xs tracking-[0.3em] uppercase block border-b border-white/10 pb-4">Locations</h3>
                <div className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=Seedling+Public+School+Jawahar+Nagar+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 hover:border-sand/50 transition-colors cursor-pointer"
                  >
                    <iframe
                      src="https://www.google.com/maps?q=Seedling+Public+School+Jawahar+Nagar+Jaipur&output=embed"
                      width="100%"
                      height="100"
                      className="h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Cambridge International School Jawahar Nagar Jaipur"
                    />
                  </a>
                </div>
              </div>

              {/* Column 5: Contact */}
              <div className="lg:col-span-2 space-y-10">
                <h3 className="text-crimson font-black text-xs tracking-[0.3em] uppercase block border-b border-white/10 pb-4">Contact</h3>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">General Inquiry</span>
                    <a href="mailto:info@cambridgeinternationalschool.com" className="text-sm font-black text-white/80 hover:text-sand transition-colors">info@cambridgeinternationalschool.com</a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mt-4">Admission Helpline</span>
                    <a href="tel:+917413012351" className="text-sm font-black text-white/80 hover:text-sand transition-colors">+91 7413012351</a>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mt-2">Office Landline</span>
                    <a href="tel:01413623000" className="text-sm font-black text-white/80 hover:text-sand transition-colors">0141 3623000</a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">Visit Us</span>
                    <p className="text-sm font-black text-white/80 leading-snug">Jawahar Nagar, Jaipur</p>
                  </div>
                </div>
              </div>
            </div>

            <nav className="border-t border-white/10 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm font-medium text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
              <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
              <Link href="/news-and-events" className="hover:text-white transition-colors">News & Events</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
            </nav>

            <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="font-semibold text-lg">Cambridge International School</span>
              <span className="text-gray-500 text-sm">
                2026 Cambridge International School. All rights reserved.
              </span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Back to top
                <div className="size-10 bg-white text-black rounded-full flex items-center justify-center">
                  <ArrowUp className="size-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
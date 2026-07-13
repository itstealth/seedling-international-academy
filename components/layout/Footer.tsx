import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Instagram, Facebook, Linkedin, Youtube } from "@/components/icons/BrandIcons";

const schools = [
  {
    name: "Seedling International Academy",
    subtitle: "",
    logo: "/camb_logo.png",
    logoHeight: "h-14 sm:h-16 md:h-20",
    email: "seedlingacademy@hotmail.com",
    phones: [
      { label: "Admission Helpline", value: "+91 7413012351", tel: "+917413012351" },
      { label: "Office Landline", value: "0141 3623000", tel: "01413623000" },
    ],
    address: "Jawahar Nagar, Jaipur",
    mapQuery: "Seedling International Academy Jawahar Nagar Jaipur",
  },
  {
    name: "Seedling Modern International Academy",
    subtitle: "(SMIA)",
    logo: "/assets/Home/SMIA-logo.png",
    logoHeight: "h-10 sm:h-12 md:h-14",
    email: "seedlingacademy@hotmail.com",
    phones: [{ label: "Admission Helpline", value: "+91 95877 72837", tel: "+919587772837" }],
    address: "Ashok Marg, Mahaveer Nagar II, Durgapura, Jaipur - 302018",
    mapQuery: "SMIA Seedling Mahaveer Nagar Durgapura Jaipur",
  },
];

export default function Footer() {
  return (
    <section className="bg-white font-dmSans">
      <div className="px-4 sm:px-6 lg:px-10 pt-8 sm:pt-10">
        {/* Main Black Footer Area */}
        <div className="bg-[#060e1c] rounded-t-3xl pt-16 md:pt-20 pb-10 px-6 md:px-12 text-white relative overflow-hidden">
          {/* Subtle mesh decoration */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] mesh-gradient opacity-[0.05] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Two Schools Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pb-10">
              {schools.map((school) => (
                <div key={school.name} className="space-y-6">
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={school.logo}
                      alt={`${school.name} Logo`}
                      width={200}
                      height={80}
                      className={`${school.logoHeight} w-auto object-contain max-w-full`}
                    />
                  </div>

                  {/* School Name */}
                  <div>
                    <h3 className="font-playfair text-xl md:text-2xl font-semibold text-white leading-tight">
                      {school.name}
                      {school.subtitle && (
                        <span className="text-sand ml-1">{school.subtitle}</span>
                      )}
                    </h3>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <a
                      href={`mailto:${school.email}`}
                      className="group flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-sand" strokeWidth={2} />
                      <span className="break-all">{school.email}</span>
                    </a>

                    {school.phones.length > 0 && (
                      <div className={`grid gap-4 ${school.phones.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                        {school.phones.map((phone) => (
                          <a
                            key={phone.value}
                            href={`tel:${phone.tel}`}
                            className="group flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors"
                          >
                            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-sand" strokeWidth={2} />
                            <div>
                              <span className="block">{phone.value}</span>
                              <span className="block text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{phone.label}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="flex items-start gap-3 text-sm text-white/80">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-sand" strokeWidth={2} />
                      <span className="leading-snug">{school.address}</span>
                    </div>
                  </div>

                  {/* Map */}
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(school.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-[140px] rounded-lg overflow-hidden border border-white/10 hover:border-sand/50 transition-colors cursor-pointer"
                  >
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&output=embed`}
                      width="100%"
                      height="100"
                      className="h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${school.name} location`}
                    />
                  </a>

                  {/* Social Icons */}
                  <div className="flex gap-2.5">
                    <a
                      href="https://www.instagram.com/seedlinginternational/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/seedlinginternationalacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                      aria-label="Facebook"
                    >
                      <Facebook className="size-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@seedlinginternationalacade1802"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                      aria-label="YouTube"
                    >
                      <Youtube className="size-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/seedling-international-academy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Nav */}
            <nav className="border-t border-white/10 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-medium text-gray-300">
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/policies" className="hover:text-white transition-colors">Policies</Link>
              <Link href="/mandatory-disclosures" className="hover:text-white transition-colors">Mandatory Disclosures</Link>
              <Link href="/erp-login" className="hover:text-white transition-colors">ERP Login</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </nav>

            {/* Back to top */}
            <div className="py-5 border-t border-white/10 flex justify-end items-center gap-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                Back to top
                <div className="size-8 bg-white text-black rounded-full flex items-center justify-center">
                  <ArrowUp className="size-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
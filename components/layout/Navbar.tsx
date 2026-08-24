"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Mail, MapPin, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { submitEnquiryForm, validateEnquiryForm, type EnquiryFormData } from "@/lib/enquiry-form";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About", href: "/about", dropdown: [
      { name: "Seedling Leadership", href: "/about/leadership" },
      { name: "Mission and Values", href: "/about/mission" },
      { name: "Our Standards", href: "/about/standards" },
      // { name: "Seedling Legacy", href: "/about/legacy" },
    ]
  },
  {
    name: "Cambridge Canvas", href: "/cambridge-canvas",
    // dropdown: [
    //   { name: "Your Path Your Way", href: "/why-cambridge/path" },
    //   { name: "International Cambridge", href: "/why-cambridge/international" },
    //   { name: "Pedagogy", href: "/why-cambridge/pedagogy" },
    // ]
  },
  {
    name: "Academics", href: "/academics", dropdown: [
      // { name: "Cambridge Early Years", href: "/academics/early-years" },
      { name: "Cambridge Primary", href: "/academics/primary" },
      { name: "Cambridge Lower Secondary", href: "/academics/lower-secondary" },
      { name: "Cambridge Upper Secondary", href: "/academics/upper-secondary" },
      { name: "Cambridge Advanced", href: "/academics/advanced" },
    ]
  },
  {
    name: "School Life", href: "/school-life",
  },
  {
    name: "Admissions", href: "/admissions", dropdown: [
      { name: "Procedure", href: "/admissions" },
      // { name: "Transport Facility", href: "/transport-facility" },
      // { name: "Result", href: "/result" },
    ]
  },
  {
    name: "Campuses", href: "/campuses", dropdown: [
      { name: "SIA", href: "/campuses#sia" },
      { name: "SMIA", href: "/campuses#smia" },
    ]
  },
];

const announcements = [
  "Admissions open for 2026–27 Academic Session",
  "Scholarship available for meritorious students in Academics & Sports",
  "Parent counselling available online & offline",
  "Seedling International School wins State-level inter-school debate championship",
];

const schools = [
  "Seedling International School (Cambridge), Jawahar Nagar, Jaipur",
];

function SearchPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      // Autofocus shortly after the popup mounts
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const suggestions = [
    { label: "Admissions", href: "/admissions" },
    { label: "School Life", href: "/school-life" },
    { label: "SIA", href: "/campuses#sia" },
    { label: "Our Campus", href: "/campuses#sia#smia" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  const handleSuggestionClick = (suggestion: { label: string; href: string }) => {
    onClose();
    router.push(suggestion.href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-ink/60 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed left-1/2 top-24 z-[210] w-[calc(100%-2rem)] max-w-[640px] [translate:-50%_0] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
          >
            <form onSubmit={handleSubmit} className="flex items-center gap-3 px-5 sm:px-7 py-4 sm:py-5 border-b border-neutral-200">
              <svg className="w-5 h-5 text-neutral-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the school..."
                className="flex-1 min-w-0 bg-transparent outline-none font-playfair text-lg sm:text-xl text-text-base placeholder:text-[#8c8c8c]"
              />
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-[#133844]/80 text-[#133844] hover:bg-[#133844] hover:text-white transition-colors flex-shrink-0"
                aria-label="Close search"
              >
                <X className="w-4 h-4" strokeWidth={2} />
              </button>
            </form>

            <div className="px-5 sm:px-7 py-5">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-text-light mb-3">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => handleSuggestionClick(s)}
                    className="px-4 py-2 rounded-full bg-[#133844]/5 hover:bg-royal-blue hover:text-white text-sm font-semibold text-[#133844] transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function InquiryPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    candidateName: "",
    className: "",
    parentName: "",
    email: "",
    phone: "",
    school: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Reset form and errors when popup closes
  useEffect(() => {
    if (!isOpen) {
      setFormErrors({});
    }
  }, [isOpen]);

  const handleFormChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: EnquiryFormData = {
      parentName: formData.parentName,
      candidateName: formData.candidateName,
      phone: formData.phone,
      className: formData.className,
      gender: formData.school,
      message: formData.message,
    };
    const errors = validateEnquiryForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setSubmitting(true);
    try {
      await submitEnquiryForm(data);
      window.location.href = '/thank-you';
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-ink/60 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[210] w-[calc(100%-2rem)] max-w-[400px] [translate:-50%_-50%] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
          >
            <div className="relative px-8 pt-8 pb-3">
              <h3 className="font-playfair text-3xl font-semibold text-center text-ink tracking-tight">Enquiry Form</h3>
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#133844]/80 text-[#133844] hover:bg-[#133844] hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" strokeWidth={1.8} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pb-8">
              {submitted ? (
                <div className="text-center py-10">
                  <h3 className="font-playfair text-3xl font-semibold text-ink mb-3">Thank You!</h3>
                  <p className="text-text-light font-dm mb-7 leading-relaxed">Your admission inquiry has been submitted. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ candidateName: "", className: "", parentName: "", email: "", phone: "", school: "", message: "" }); }}
                    className="w-full h-11 bg-[#133844] text-white border border-crimson rounded font-playfair font-black text-base uppercase hover:bg-navy transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Parent's Name *"
                      value={formData.parentName}
                      onChange={handleFormChange("parentName")}
                      className="h-11 w-full rounded border border-[#cfcfcf] bg-white px-3 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy"
                    />
                    {formErrors.parentName && <p className="text-crimson text-xs mt-1 pl-1">{formErrors.parentName}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Student Name *"
                      value={formData.candidateName}
                      onChange={handleFormChange("candidateName")}
                      className="h-11 w-full rounded border border-[#cfcfcf] bg-white px-3 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy"
                    />
                    {formErrors.candidateName && <p className="text-crimson text-xs mt-1 pl-1">{formErrors.candidateName}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number *"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData(prev => ({ ...prev, phone: val }));
                        if (formErrors.phone) setFormErrors(prev => ({ ...prev, phone: '' }));
                      }}
                      className="h-11 w-full rounded border border-[#cfcfcf] bg-white px-3 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy"
                    />
                    {formErrors.phone && <p className="text-crimson text-xs mt-1 pl-1">{formErrors.phone}</p>}
                  </div>

                  {/* <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleFormChange("email")}
                    className="h-11 w-full rounded border border-[#cfcfcf] bg-white px-3 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy"
                  /> */}

                 

                  <div>
                    <select
                      required
                      value={formData.className}
                      onChange={(e) => {
                        handleFormChange("className")(e);
                        if (formErrors.className) setFormErrors(prev => ({ ...prev, className: '' }));
                      }}
                      className="h-11 w-full rounded border border-[#cfcfcf] bg-white px-3 font-playfair text-base text-text-base focus:outline-none focus:border-navy"
                    >
                      <option value="">Grade Applying For *</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                      <option value="Grade 11">Grade 11</option>
                      <option value="Grade 12">Grade 12</option>
                    </select>
                    {formErrors.className && <p className="text-crimson text-xs mt-1 pl-1">{formErrors.className}</p>}
                  </div>

                  <div>
                    <select
                      required
                      value={formData.school}
                      onChange={(e) => {
                        handleFormChange("school")(e);
                        if (formErrors.school) setFormErrors(prev => ({ ...prev, school: '' }));
                      }}
                      className="h-11 w-full rounded border border-[#cfcfcf] bg-white px-3 font-playfair text-base text-text-base focus:outline-none focus:border-navy"
                    >
                      <option value="">Select Gender *</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {formErrors.school && <p className="text-crimson text-xs mt-1 pl-1">{formErrors.school}</p>}
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleFormChange("message")}
                      className="w-full rounded border border-[#cfcfcf] bg-white px-3 py-2 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy resize-none"
                    />
                    {formErrors.message && <p className="text-crimson text-xs mt-1 pl-1">{formErrors.message}</p>}
                  </div>

                  <button type="submit" disabled={submitting} className="w-full h-11 bg-[#133844] text-white border border-crimson rounded font-playfair font-black text-base uppercase hover:bg-navy disabled:opacity-60 transition-colors">
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


function DesktopNav({ pathname }: { pathname: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleEnter = (name: string) => {
    cancelClose();
    setOpenMenu(name);
  };

  const handleLeaveArea = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      className="hidden xl:flex items-center gap-0.5 flex-shrink min-w-0"
      aria-label="Primary"
      onMouseLeave={handleLeaveArea}
    >
      {navItems.filter((item) => item.name !== "Home").map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
        const hasDropdown = !!item.dropdown;
        const isOpen = openMenu === item.name;

        return (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => hasDropdown && handleEnter(item.name)}
          >
            {/* Parent label — Link when no dropdown, button when dropdown (children are the real links) */}
            {hasDropdown ? (
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                className={`group inline-flex items-center gap-1 px-3 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.14em] transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white text-[#133844]"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </button>
            ) : (
              <Link
                href={item.href}
                className={`group inline-flex items-center gap-1 px-3 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.14em] transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white text-[#133844]"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            )}

            {/* Animated dropdown card with children — appears on hover */}
            {hasDropdown && (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={cancelClose}
                    onMouseLeave={handleLeaveArea}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[55]"
                  >
                    {/* Small upward arrow connecting card to parent */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 rotate-45 bg-white border-l border-t border-hairline" />

                    {/* Card */}
                    <div className="relative w-[260px] bg-white border border-hairline rounded-lg shadow-2xl shadow-black/30 overflow-hidden">
                      {/* Top accent line */}
                      <div className="h-1 bg-gradient-to-r from-[#133844] via-crimson to-[#133844]" />

                      {/* Children list */}
                      <ul className="py-1.5">
                        {item.dropdown!.map((child, idx) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <motion.li
                              key={child.name}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.18, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <Link
                                href={child.href}
                                onClick={() => setOpenMenu(null)}
                                className={`group flex items-center gap-3 px-4 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.1em] transition-colors ${
                                  isChildActive
                                    ? "bg-[#133844] text-white"
                                    : "text-ink hover:bg-stone hover:text-crimson"
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                                    isChildActive
                                      ? "bg-white"
                                      : "bg-ink/30 group-hover:bg-crimson"
                                  }`}
                                />
                                <span className="flex-1">{child.name}</span>
                                <svg
                                  className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12 8.25 19.5" />
                                </svg>
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [showInquiryPopup, setShowInquiryPopup] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset open dropdown when drawer closes
  useEffect(() => {
    if (!isOpen) setOpenDropdown(null);
  }, [isOpen]);

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 bg-royal-blue">
        {/* ── ANNOUNCEMENT TICKER (commented out)
        <div className="overflow-hidden h-8 flex items-center border-b border-white/[0.06]">
          <div className="flex items-center gap-0 whitespace-nowrap animate-marquee">
            {[...announcements, ...announcements].map((a, i) => (
              <span key={i} className="inline-flex items-center gap-4 text-[10.5px] font-medium tracking-[0.12em] uppercase text-white/60 px-8">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 inline-block" />
                {a}
              </span>
            ))}
          </div>
        </div>
        */}

        {/* ── MAIN HEADER ── */}
        <motion.header
          className="bg-royal-blue relative"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated shimmer band */}
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/25 to-transparent pointer-events-none z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-[1600px] mx-auto px-4 py-4 sm:px-6 lg:px-10 relative z-10">
            <div className="flex items-center justify-between gap-4 lg:gap-6">
              {/* LEFT: Logos side by side */}
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href="/" className="flex items-center gap-3 sm:gap-4 md:gap-6">
                  {/* SIA LOGO — full lockup, identical 1550x380 canvas to the SMIA logo
                      so one shared height class renders both at matching scale. */}
                  <Image
                    src="/Logo%2003%20(1).png"
                    alt="Seedling International Academy"
                    width={402}
                    height={114}
                    className="h-7 sm:h-9 md:h-10 w-auto object-contain"
                    priority
                  />
                  {/* Cambridge shield divider */}
                  <div className="h-6 w-px bg-ink/15 hidden sm:block" />
                  {/* Cambridge shield logo */}
                  <Image
                    src="/assets/Home/cambridge_shield_v2.webp"
                    alt="Cambridge Shield Logo"
                    width={50}
                    height={50}
                    className="h-8 sm:h-10 md:h-11 w-auto object-contain"
                    priority
                  />
                  <div className="h-6 w-px bg-ink/15 hidden sm:block" />
                  {/* SMIA LOGO — full lockup, same canvas + height class as SIA */}
                  <Image
                    src="/Logo%2004.png"
                    alt="Seedling Modern International Academy"
                    width={402}
                    height={114}
                    className="h-7 sm:h-9 md:h-10 w-auto object-contain"
                    priority
                  />
                </Link>
              </motion.div>

              {/* INLINE NAV — parent items in header (xl+ only) with animated child cards on hover */}
              <DesktopNav pathname={pathname} />

              {/* RIGHT: Actions */}
              <motion.div
                className="flex items-center gap-3 sm:gap-4 flex-shrink-0"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  href="/"
                  className="hidden sm:inline-flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-all hover:scale-110"
                  aria-label="Home"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 12 2.25 21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                  </svg>
                </Link>
                <button
                  onClick={() => setShowSearchPopup(true)}
                  className="hidden sm:inline-flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-all hover:scale-110 hover:rotate-6"
                  aria-label="Open search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
                <motion.button
                  onClick={() => setIsOpen(true)}
                  className="xl:hidden relative flex items-center gap-0 sm:gap-3 bg-ink text-white p-2.5 sm:px-6 sm:py-3 rounded-full sm:rounded-none overflow-hidden group"
                  aria-label="Open menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Shimmer sweep on hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <span className="relative font-black text-[12px] sm:text-[13px] uppercase tracking-[0.2em] hidden sm:inline">Menu</span>
                  <svg className="relative w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* ── MOBILE NAV DRAWER ── */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] bg-ink/20 backdrop-blur-2xl"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                className="fixed inset-y-0 right-0 z-[90] w-full sm:w-[480px] sm:max-w-[90%] bg-ivory/95 backdrop-blur-2xl border-l border-hairline overflow-y-auto flex flex-col shadow-2xl"
              >
                <div className="flex items-center justify-end p-4 sm:p-6 border-b border-hairline gap-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-ink hover:text-ink transition-colors group flex-shrink-0"
                    aria-label="Close menu"
                  >
                    <span className="inline-flex items-center justify-center w-11 h-11 bg-royal-blue text-ink rounded-full transition-colors group-hover:bg-navy group-hover:text-white">
                      <X className="w-5 h-5" strokeWidth={2.5} />
                    </span>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
                  <div className="flex flex-col gap-1">
                    {navItems.filter(item => item.name !== "Home").map((item) => {
                      const isOpenDrop = openDropdown === item.name;
                      return (
                        <div key={item.name} className="border-b border-hairline pb-3 mb-3">
                          <div className="flex items-center justify-between">
                            {item.dropdown ? (
                              <button
                                type="button"
                                onClick={() => setOpenDropdown(isOpenDrop ? null : item.name)}
                                className={`flex-1 flex items-center justify-between gap-3 py-3 text-base font-bold uppercase tracking-wider transition-colors text-left ${pathname.startsWith(item.href) ? "text-crimson" : "text-ink"}`}
                              >
                                <span>{item.name}</span>
                                <ChevronDown
                                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpenDrop ? "rotate-180 text-crimson" : "text-ink/50"}`}
                                  strokeWidth={2.5}
                                />
                              </button>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex-1 py-3 text-base font-bold uppercase tracking-wider transition-colors hover:text-crimson ${pathname === item.href ? "text-crimson" : "text-ink"}`}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                          {item.dropdown && (
                            <AnimatePresence initial={false}>
                              {isOpenDrop && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 sm:ml-6 border-l-2 border-royal-blue/60 pl-4 sm:pl-6 space-y-1 mt-1 pb-1">
                                    {item.dropdown.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${pathname === child.href ? "text-crimson" : "text-ink-soft hover:text-ink"}`}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="fixed left-3 sm:left-6 bottom-[76px] sm:bottom-[96px] z-[110] flex flex-col items-start gap-2 sm:gap-3">
        <a
          href="tel:+917413012351"
          className="group flex items-center justify-center gap-0 bg-[#133844] hover:bg-navy text-white h-11 w-11 hover:w-auto hover:px-5 rounded-full font-black text-xs tracking-widest uppercase shadow-xl transition-all duration-300 border border-white/10 overflow-hidden"
          aria-label="Call Seedling International School"
          title="Call Us"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="max-w-0 group-hover:max-w-[100px] group-hover:ml-2 overflow-hidden whitespace-nowrap transition-all duration-300">Call Us</span>
        </a>

        <a
          href="https://wa.me/917413012351"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-0 bg-[#25D366] hover:bg-[#1ebe5d] text-white h-11 w-11 hover:w-auto hover:px-5 rounded-full font-black text-xs tracking-widest uppercase shadow-xl transition-all duration-300 overflow-hidden"
          aria-label="Message Seedling International School on WhatsApp"
          title="WhatsApp"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="max-w-0 group-hover:max-w-[110px] group-hover:ml-2 overflow-hidden whitespace-nowrap transition-all duration-300">WhatsApp</span>
        </a>
      </div>

      <div className={`fixed left-3 sm:left-6 bottom-5 sm:bottom-8 z-[70] ${isOpen ? "hidden" : ""}`}>
        <button
          onClick={() => setShowInquiryPopup(true)}
          className="group flex items-center justify-center gap-0 bg-crimson hover:bg-crimson-dark text-white h-11 w-11 hover:w-auto hover:px-5 rounded-full font-black text-xs tracking-widest uppercase shadow-2xl transition-all duration-300 border border-white/10 overflow-hidden"
          aria-label="Open enquiry form"
          title="Enquire Now"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="max-w-0 group-hover:max-w-[120px] group-hover:ml-2 overflow-hidden whitespace-nowrap transition-all duration-300">Enquire Now</span>
        </button>

      </div>

      {/* Back to top — right side, floating, appears after scrolling past hero */}
      <AnimatePresence>
        {showBackToTop && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed right-3 sm:right-6 bottom-5 sm:bottom-8 z-[65] w-11 h-11 bg-ink/85 hover:bg-ink text-white rounded-full shadow-xl backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style> */}
      <InquiryPopup isOpen={showInquiryPopup} onClose={() => setShowInquiryPopup(false)} />
      <SearchPopup isOpen={showSearchPopup} onClose={() => setShowSearchPopup(false)} />
    </>
  );
}

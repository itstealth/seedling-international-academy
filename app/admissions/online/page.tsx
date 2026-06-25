"use client";

import { useState, useRef, useEffect } from "react";
import HeroWrapper from "@/components/layout/HeroWrapper";
import { submitEnquiryForm, validateEnquiryForm, type EnquiryFormData } from "@/lib/enquiry-form";

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   INDIAN STATES
───────────────────────────────────────────── */
const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
  "Chandigarh","Andaman & Nicobar Islands","Lakshadweep","Dadra & Nagar Haveli","Daman & Diu","Puducherry"
];

/* ─────────────────────────────────────────────
   SCHOOL OPTIONS
───────────────────────────────────────────── */
const schoolOptions = [
  "Seedling International School (Cambridge), Jawahar Nagar, Jaipur",
  "Seedling Modern International Academy (Cambridge Board), Durgapura, Jaipur",
];

/* ─────────────────────────────────────────────
   CLASS OPTIONS PER SCHOOL
───────────────────────────────────────────── */
const seedlintInternationalClasses = [
  "Cambridge Primary 1","Cambridge Primary 2","Cambridge Primary 3","Cambridge Primary 4","Cambridge Primary 5",
  "Lower Secondary 1 (Class 6)","Lower Secondary 2 (Class 7)","Lower Secondary 3 (Class 8)",
  "IGCSE 1 (Class 9)","IGCSE 2 (Class 10)",
];

const seedlingModernClasses = [
  "Cambridge Primary 1","Cambridge Primary 2","Cambridge Primary 3","Cambridge Primary 4","Cambridge Primary 5",
  "Lower Secondary 1 (Class 6)","Lower Secondary 2 (Class 7)","Lower Secondary 3 (Class 8)",
];

const otherClasses = [
  "Play Group","Nursery","LKG","UKG",
  "Grade 1","Grade 2","Grade 3","Grade 4","Grade 5",
  "Grade 6","Grade 7","Grade 8","Grade 9","Grade 10",
  "Grade 11 (Commerce)","Grade 11 (Science)","Grade 11 (Humanities)",
  "Grade 12 (Commerce)","Grade 12 (Science)","Grade 12 (Humanities)",
];

/* ─────────────────────────────────────────────
   FORM DATA TYPE
───────────────────────────────────────────── */
interface AdmissionFormData {
  school: string;
  className: string;
  studentName: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  gender: string;
  category: string;
  caste: string;
  religion: string;
  aadhar: string;
  mobile: string;
  email: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  placeOfBirth: string;
  address: string;
  state: string;
  district: string;
  pinCode: string;
  nri: string;
  physicallyHandicapped: string;
  previousSchool: string;
  previousMedium: string;
  annualIncome: string;
  siblingName: string;
  siblingClass: string;
  fee: string;
  terms: boolean;
}

/* ─────────────────────────────────────────────
   DEFAULT FORM STATE
───────────────────────────────────────────── */
const defaultForm: AdmissionFormData = {
  school: "", className: "", studentName: "", fatherName: "", fatherOccupation: "",
  motherName: "", motherOccupation: "", gender: "", category: "", caste: "",
  religion: "", aadhar: "", mobile: "", email: "",
  dobDay: "", dobMonth: "", dobYear: "",
  placeOfBirth: "", address: "", state: "", district: "", pinCode: "",
  nri: "", physicallyHandicapped: "",
  previousSchool: "", previousMedium: "", annualIncome: "",
  siblingName: "", siblingClass: "", fee: "", terms: false,
};

/* ─────────────────────────────────────────────
   FIELD CLASSES
───────────────────────────────────────────── */
const fieldCls = "w-full rounded-xl border border-sand/40 bg-white px-4 py-3 text-sm text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy transition-colors font-dm";
const labelCls = "block text-[10px] font-black text-navy-deeper mb-1.5 tracking-[0.2em] uppercase font-dm";
const selectCls = "w-full rounded-xl border border-sand/40 bg-white px-4 py-3 text-sm text-text-base focus:outline-none focus:border-navy transition-colors font-dm appearance-none";

export default function OnlineAdmissionPage() {
  const [formData, setFormData] = useState<AdmissionFormData>(defaultForm);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof AdmissionFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof AdmissionFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const val = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => {
      const updated = { ...prev, [field]: val };
      // Reset class selection when school changes
      if (field === "school") {
        updated.className = "";
      }
      return updated;
    });
    if (formErrors[field]) setFormErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData(prev => ({ ...prev, mobile: val }));
    if (formErrors.mobile) setFormErrors(prev => ({ ...prev, mobile: "" }));
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof AdmissionFormData, string>> = {};
    if (!formData.school) errors.school = "Required";
    if (!formData.className) errors.className = "Required";
    if (!formData.fee) errors.fee = "Required";
    if (!formData.studentName.trim()) errors.studentName = "Required";
    if (!formData.fatherName.trim()) errors.fatherName = "Required";
    if (!formData.motherName.trim()) errors.motherName = "Required";
    if (!formData.gender) errors.gender = "Required";
    if (!formData.category) errors.category = "Required";
    if (!formData.caste) errors.caste = "Required";
    if (!formData.aadhar.trim()) errors.aadhar = "Required";
    else if (formData.aadhar.replace(/\D/g, "").length !== 12) errors.aadhar = "Must be 12 digits";
    if (!formData.mobile || formData.mobile.length !== 10) errors.mobile = "Required — 10 digits";
    if (!formData.email.trim()) errors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.dobDay) errors.dobDay = "Required";
    if (!formData.dobMonth) errors.dobMonth = "Required";
    if (!formData.dobYear) errors.dobYear = "Required";
    if (!formData.placeOfBirth.trim()) errors.placeOfBirth = "Required";
    if (!formData.address.trim()) errors.address = "Required";
    if (!formData.state) errors.state = "Required";
    if (!formData.district.trim()) errors.district = "Required";
    if (!formData.pinCode.trim()) errors.pinCode = "Required";
    else if (formData.pinCode.replace(/\D/g, "").length !== 6) errors.pinCode = "Must be 6 digits";
    if (!formData.terms) errors.terms = "You must accept the terms";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Build EnquiryFormData from admission form
      const enquiryData: EnquiryFormData = {
        parentName: formData.fatherName,
        candidateName: formData.studentName,
        phone: formData.mobile,
        className: formData.className,
        gender: formData.gender,
        message: `School: ${formData.school} | Fee: ${formData.fee} | Mother: ${formData.motherName} | DOB: ${formData.dobDay}/${formData.dobMonth}/${formData.dobYear} | Address: ${formData.address}, ${formData.district}, ${formData.state} - ${formData.pinCode}`,
      };
      await submitEnquiryForm(enquiryData);
      window.location.href = "/thank-you";
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const months = [
    { value: "01", label: "January" }, { value: "02", label: "February" },
    { value: "03", label: "March" }, { value: "04", label: "April" },
    { value: "05", label: "May" }, { value: "06", label: "June" },
    { value: "07", label: "July" }, { value: "08", label: "August" },
    { value: "09", label: "September" }, { value: "10", label: "October" },
    { value: "11", label: "November" }, { value: "12", label: "December" },
  ];

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));
  const years = Array.from({ length: 27 }, (_, i) => String(2026 - i));

  // Determine class options based on selected school
  const isSeedlingInternational = formData.school === "Seedling International School (Cambridge), Jawahar Nagar, Jaipur";
  const isSeedlingModern = formData.school === "Seedling Modern International Academy (Cambridge Board), Durgapura, Jaipur";

  const filteredClassOptions = isSeedlingInternational
    ? seedlintInternationalClasses
    : isSeedlingModern
    ? seedlingModernClasses
    : [...otherClasses, ...seedlintInternationalClasses];

  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">

      {/* ── HERO ── */}
      <HeroWrapper
        backgroundImage="/assets/Home/classroom-2.webp"
        title="Online Registration"
        subtitle="Complete the admission form below — our team will reach out to guide you through every step."
        badge="Online Form Available · Admissions Open 2026-27"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "Online Registration" }]}
        height="medium"
        overlayOpacity={0.45}
      />

      {/* ── ANNOUNCEMENT BAND ── */}
      <div className="bg-crimson text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm font-dm font-medium">
          <span className="bg-white text-crimson text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shrink-0">
            Announcement
          </span>
          <p className="text-white/90 leading-relaxed">
            <strong>Admission are open for all classes:</strong> Play Group to IX and XI
          </p>
        </div>
      </div>

      {/* ── MAIN FORM SECTION ── */}
      <section className="py-14 max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper tracking-tight mb-4">
            Admission<span className="text-crimson ml-3">Form</span>
          </h2>
          <p className="text-text-light max-w-xl mx-auto leading-relaxed font-dm">
            Fill in all the details below. Our admissions team will contact you within 24 hours of submission to guide you through the next steps.
          </p>
        </Reveal>

        <form onSubmit={handleSubmit} noValidate>

          {/* ── SECTION 1: SCHOOL & CLASS SELECTION ── */}
          <Reveal className="mb-8">
            <div className="bg-white border border-sand/20 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="font-playfair text-2xl font-black text-navy-deeper mb-8 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson text-lg font-black">1</span>
                School & Class Selection
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* School */}
                <div className="sm:col-span-2 md:col-span-1">
                  <label className={labelCls}>Select School <span className="text-crimson">*</span></label>
                  <select value={formData.school} onChange={handleChange("school")} className={selectCls}>
                    <option value="">— Select School —</option>
                    {schoolOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {formErrors.school && <p className="text-crimson text-xs mt-1.5">{formErrors.school}</p>}
                </div>

                {/* Class */}
                <div>
                  <label className={labelCls}>Select Class <span className="text-crimson">*</span></label>
                  <select value={formData.className} onChange={handleChange("className")} className={selectCls}>
                    <option value="">— Select Class —</option>
                    {filteredClassOptions.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {formErrors.className && <p className="text-crimson text-xs mt-1.5">{formErrors.className}</p>}
                </div>

                {/* Fee */}
                <div>
                  <label className={labelCls}>Fee Category <span className="text-crimson">*</span></label>
                  <select value={formData.fee} onChange={handleChange("fee")} className={`${selectCls} ${formErrors.fee ? "border-crimson bg-crimson/5" : ""}`}>
                    <option value="">— Select Fee Category —</option>
                    <option>General</option>
                    <option>Cambridge International</option>
                    <option>Scholarship Applicant</option>
                  </select>
                  {formErrors.fee && <p className="text-crimson text-xs mt-1.5">{formErrors.fee}</p>}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── SECTION 2: STUDENT INFORMATION ── */}
          <Reveal delay={60} className="mb-8">
            <div className="bg-white border border-sand/20 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="font-playfair text-2xl font-black text-navy-deeper mb-8 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson text-lg font-black">2</span>
                Student Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Student Name */}
                <div>
                  <label className={labelCls}>Name of Student <span className="text-crimson">*</span></label>
                  <input type="text" placeholder="Enter student's full name" value={formData.studentName} onChange={handleChange("studentName")}
                    className={`${fieldCls} ${formErrors.studentName ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.studentName && <p className="text-crimson text-xs mt-1.5">{formErrors.studentName}</p>}
                </div>

                {/* Gender */}
                <div>
                  <label className={labelCls}>Gender <span className="text-crimson">*</span></label>
                  <select value={formData.gender} onChange={handleChange("gender")} className={`${selectCls} ${formErrors.gender ? "border-crimson bg-crimson/5" : ""}`}>
                    <option value="">— Select Gender —</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.gender && <p className="text-crimson text-xs mt-1.5">{formErrors.gender}</p>}
                </div>

                {/* Category */}
                <div>
                  <label className={labelCls}>Category <span className="text-crimson">*</span></label>
                  <select value={formData.category} onChange={handleChange("category")} className={`${selectCls} ${formErrors.category ? "border-crimson bg-crimson/5" : ""}`}>
                    <option value="">— Select Category —</option>
                    <option value="Regular">Regular</option>
                    <option value="Ex-Student">Ex-Student Ward</option>
                  </select>
                  {formErrors.category && <p className="text-crimson text-xs mt-1.5">{formErrors.category}</p>}
                </div>

                {/* Caste */}
                <div>
                  <label className={labelCls}>Caste <span className="text-crimson">*</span></label>
                  <select value={formData.caste} onChange={handleChange("caste")} className={`${selectCls} ${formErrors.caste ? "border-crimson bg-crimson/5" : ""}`}>
                    <option value="">— Select Caste —</option>
                    <option value="GEN">GEN</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                    <option value="SBC">SBC</option>
                    <option value="Minority">Minority</option>
                  </select>
                  {formErrors.caste && <p className="text-crimson text-xs mt-1.5">{formErrors.caste}</p>}
                </div>

                {/* Religion */}
                <div>
                  <label className={labelCls}>Religion</label>
                  <input type="text" placeholder="e.g. Hindu, Muslim, Christian, Sikh..." value={formData.religion} onChange={handleChange("religion")} className={fieldCls} />
                </div>

                {/* Aadhar */}
                <div>
                  <label className={labelCls}>Aadhar Card No. <span className="text-crimson">*</span></label>
                  <input type="text" placeholder="12-digit Aadhar number" maxLength={14}
                    value={formData.aadhar}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/\D/g, "").slice(0, 12);
                      const formatted = raw.replace(/(\d{4})(?=\d)/g, "$1 ");
                      setFormData(prev => ({ ...prev, aadhar: formatted }));
                    }}
                    className={`${fieldCls} ${formErrors.aadhar ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.aadhar && <p className="text-crimson text-xs mt-1.5">{formErrors.aadhar}</p>}
                </div>

                {/* Date of Birth */}
                <div className="sm:col-span-2">
                  <label className={labelCls}>Date of Birth <span className="text-crimson">*</span></label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <select value={formData.dobDay} onChange={handleChange("dobDay")} className={`${selectCls} ${formErrors.dobDay ? "border-crimson bg-crimson/5" : ""}`}>
                        <option value="">Day</option>
                        {days.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <select value={formData.dobMonth} onChange={handleChange("dobMonth")} className={`${selectCls} ${formErrors.dobMonth ? "border-crimson bg-crimson/5" : ""}`}>
                        <option value="">Month</option>
                        {months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <select value={formData.dobYear} onChange={handleChange("dobYear")} className={`${selectCls} ${formErrors.dobYear ? "border-crimson bg-crimson/5" : ""}`}>
                        <option value="">Year</option>
                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>
                  {(formErrors.dobDay || formErrors.dobMonth || formErrors.dobYear) && (
                    <p className="text-crimson text-xs mt-1.5">Complete date of birth is required</p>
                  )}
                </div>

                {/* Place of Birth */}
                <div className="sm:col-span-2">
                  <label className={labelCls}>Place of Birth <span className="text-crimson">*</span></label>
                  <input type="text" placeholder="City / Town" value={formData.placeOfBirth} onChange={handleChange("placeOfBirth")}
                    className={`${fieldCls} ${formErrors.placeOfBirth ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.placeOfBirth && <p className="text-crimson text-xs mt-1.5">{formErrors.placeOfBirth}</p>}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── SECTION 3: PARENT INFORMATION ── */}
          <Reveal delay={80} className="mb-8">
            <div className="bg-white border border-sand/20 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="font-playfair text-2xl font-black text-navy-deeper mb-8 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson text-lg font-black">3</span>
                Parent / Guardian Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Father's Name */}
                <div>
                  <label className={labelCls}>Father&apos;s Name <span className="text-crimson">*</span></label>
                  <input type="text" placeholder="Enter father's full name" value={formData.fatherName} onChange={handleChange("fatherName")}
                    className={`${fieldCls} ${formErrors.fatherName ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.fatherName && <p className="text-crimson text-xs mt-1.5">{formErrors.fatherName}</p>}
                </div>

                {/* Father's Occupation */}
                <div>
                  <label className={labelCls}>Father&apos;s Occupation</label>
                  <input type="text" placeholder="e.g. Engineer, Business, Doctor..." value={formData.fatherOccupation} onChange={handleChange("fatherOccupation")} className={fieldCls} />
                </div>

                {/* Mother's Name */}
                <div>
                  <label className={labelCls}>Mother&apos;s Name <span className="text-crimson">*</span></label>
                  <input type="text" placeholder="Enter mother's full name" value={formData.motherName} onChange={handleChange("motherName")}
                    className={`${fieldCls} ${formErrors.motherName ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.motherName && <p className="text-crimson text-xs mt-1.5">{formErrors.motherName}</p>}
                </div>

                {/* Mother's Occupation */}
                <div>
                  <label className={labelCls}>Mother&apos;s Occupation</label>
                  <input type="text" placeholder="e.g. Homemaker, Teacher, Business..." value={formData.motherOccupation} onChange={handleChange("motherOccupation")} className={fieldCls} />
                </div>

                {/* Annual Income */}
                <div className="sm:col-span-2">
                  <label className={labelCls}>Annual Income of Parents (₹)</label>
                  <input type="text" placeholder="e.g. 8,00,000" value={formData.annualIncome} onChange={handleChange("annualIncome")} className={fieldCls} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── SECTION 4: CONTACT DETAILS ── */}
          <Reveal delay={100} className="mb-8">
            <div className="bg-white border border-sand/20 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="font-playfair text-2xl font-black text-navy-deeper mb-8 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson text-lg font-black">4</span>
                Contact Details
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Mobile */}
                <div>
                  <label className={labelCls}>Mobile Number <span className="text-crimson">*</span></label>
                  <input type="tel" placeholder="10-digit mobile" maxLength={10} value={formData.mobile} onChange={handleMobileChange}
                    className={`${fieldCls} ${formErrors.mobile ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.mobile && <p className="text-crimson text-xs mt-1.5">{formErrors.mobile}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className={labelCls}>Email Address <span className="text-crimson">*</span></label>
                  <input type="email" placeholder="parent@email.com" value={formData.email} onChange={handleChange("email")}
                    className={`${fieldCls} ${formErrors.email ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.email && <p className="text-crimson text-xs mt-1.5">{formErrors.email}</p>}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── SECTION 5: ADDRESS ── */}
          <Reveal delay={120} className="mb-8">
            <div className="bg-white border border-sand/20 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="font-playfair text-2xl font-black text-navy-deeper mb-8 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson text-lg font-black">5</span>
                Residential Address
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Address */}
                <div className="sm:col-span-2">
                  <label className={labelCls}>Complete Address <span className="text-crimson">*</span></label>
                  <textarea rows={3} placeholder="House No., Street, Locality, City..." value={formData.address} onChange={handleChange("address")}
                    className={`${fieldCls} resize-none ${formErrors.address ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.address && <p className="text-crimson text-xs mt-1.5">{formErrors.address}</p>}
                </div>

                {/* State */}
                <div>
                  <label className={labelCls}>State <span className="text-crimson">*</span></label>
                  <select value={formData.state} onChange={handleChange("state")} className={`${selectCls} ${formErrors.state ? "border-crimson bg-crimson/5" : ""}`}>
                    <option value="">— Select State —</option>
                    {indianStates.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {formErrors.state && <p className="text-crimson text-xs mt-1.5">{formErrors.state}</p>}
                </div>

                {/* District */}
                <div>
                  <label className={labelCls}>District <span className="text-crimson">*</span></label>
                  <input type="text" placeholder="District" value={formData.district} onChange={handleChange("district")}
                    className={`${fieldCls} ${formErrors.district ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.district && <p className="text-crimson text-xs mt-1.5">{formErrors.district}</p>}
                </div>

                {/* Pin Code */}
                <div>
                  <label className={labelCls}>Pin Code <span className="text-crimson">*</span></label>
                  <input type="text" placeholder="6-digit PIN" maxLength={6} value={formData.pinCode}
                    onChange={(e) => setFormData(prev => ({ ...prev, pinCode: e.target.value.replace(/\D/g, "").slice(0, 6) }))}
                    className={`${fieldCls} ${formErrors.pinCode ? "border-crimson bg-crimson/5" : ""}`} />
                  {formErrors.pinCode && <p className="text-crimson text-xs mt-1.5">{formErrors.pinCode}</p>}
                </div>

                {/* NRI */}
                <div>
                  <label className={labelCls}>Non-Residential Indian (NRI)?</label>
                  <select value={formData.nri} onChange={handleChange("nri")} className={selectCls}>
                    <option value="">— Select —</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>

                {/* Physically Handicapped */}
                <div>
                  <label className={labelCls}>Physically Handicapped?</label>
                  <select value={formData.physicallyHandicapped} onChange={handleChange("physicallyHandicapped")} className={selectCls}>
                    <option value="">— Select —</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── SECTION 6: PREVIOUS SCHOOL & SIBLING ── */}
          <Reveal delay={140} className="mb-8">
            <div className="bg-white border border-sand/20 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="font-playfair text-2xl font-black text-navy-deeper mb-8 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson text-lg font-black">6</span>
                Previous School & Sibling Details
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Previous School */}
                <div>
                  <label className={labelCls}>Name of Previous School</label>
                  <input type="text" placeholder="If applicable" value={formData.previousSchool} onChange={handleChange("previousSchool")} className={fieldCls} />
                </div>

                {/* Previous Medium */}
                <div>
                  <label className={labelCls}>Medium of Instruction (Previous School)</label>
                  <select value={formData.previousMedium} onChange={handleChange("previousMedium")} className={selectCls}>
                    <option value="">— Select Medium —</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Sibling Name */}
                <div>
                  <label className={labelCls}>Name of Sibling (if studying at Seedling)</label>
                  <input type="text" placeholder="Sibling's full name" value={formData.siblingName} onChange={handleChange("siblingName")} className={fieldCls} />
                </div>

                {/* Sibling Class */}
                <div>
                  <label className={labelCls}>Class & Section of Sibling</label>
                  <input type="text" placeholder="e.g. Grade 7, Section A" value={formData.siblingClass} onChange={handleChange("siblingClass")} className={fieldCls} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── SECTION 7: DECLARATION & SUBMIT ── */}
          <Reveal delay={160} className="mb-8">
            <div className="bg-white border border-sand/20 rounded-3xl p-8 md:p-10 shadow-sm">

              {/* Important Notes */}
              <div className="mb-8 p-6 bg-sand/5 rounded-2xl border border-sand/20">
                <p className="text-navy-deeper font-dm text-sm leading-relaxed">
                  <span className="font-black text-crimson">📌 Important Notes:</span>
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text-light leading-relaxed font-dm list-disc pl-5">
                  <li>There are no direct admissions in Class 10th and 12th except as per Cambridge bye-laws.</li>
                  <li>Admissions in Classes 9th & 11th will only be done after the student clears the entrance examination.</li>
                  <li>A non-refundable registration amount is chargeable at the time of form submission.</li>
                  <li>Please carry original documents for verification at the time of admission.</li>
                </ul>
              </div>

              {/* Terms */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={formData.terms} onChange={handleChange("terms")}
                    className="mt-1 w-5 h-5 rounded border-sand/40 text-crimson focus:ring-crimson cursor-pointer flex-shrink-0" />
                  <span className="text-sm text-text-light leading-relaxed font-dm">
                    I have read and understood all the instructions mentioned above. I confirm that all the information provided by me is correct to the best of my knowledge. I agree to abide by the rules and regulations of the school.
                  </span>
                </label>
                {formErrors.terms && <p className="text-crimson text-xs mt-2 pl-1">{formErrors.terms}</p>}
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button type="submit" disabled={submitting}
                  className="w-full sm:w-auto bg-crimson hover:bg-crimson-dark disabled:opacity-60 text-white px-12 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-xl shadow-lg shadow-crimson/20">
                  {submitting ? "Submitting..." : "Submit Admission Form"}
                </button>
                <p className="text-text-light text-xs font-dm text-center sm:text-left">
                  Our team will contact you within 24 hours of submission.
                </p>
              </div>
            </div>
          </Reveal>

        </form>

        {/* ── CONTACT HELPLINE ── */}
        <Reveal delay={200} className="mt-10">
          <div className="bg-navy-deeper rounded-3xl p-8 md:p-10 text-white flex flex-col sm:flex-row items-center gap-8 justify-between">
            <div>
              <p className="text-sand text-xs font-black tracking-[0.3em] uppercase mb-3">Need Assistance?</p>
              <h3 className="font-playfair text-3xl font-black tracking-tight mb-2">Contact our Admissions Helpline</h3>
              <p className="text-white/60 font-dm text-sm leading-relaxed">Our team is available Mon–Sat, 8:00 AM – 4:00 PM to help with your queries.</p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <a href="tel:+917413012351"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-black text-sm transition-colors">
                📞 +91-74130-12351
              </a>
              <a href="mailto:seedlingacademy@hotmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-dm transition-colors">
                ✉️ seedlingacademy@hotmail.com
              </a>
            </div>
          </div>
        </Reveal>

      </section>
    </main>
  );
}

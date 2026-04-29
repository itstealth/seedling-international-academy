'use client'

import { useState } from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string
  email: string
  phone: string
  school: string
  message: string
}

type FormErrors = Partial<Record<keyof Omit<FormData, 'school'>, string>>
type SubmitStatus = 'idle' | 'loading' | 'success'

// ─── Static Data ──────────────────────────────────────────────────────────────

const CAMPUS_MAPS = [
  {
    id: 0,
    label: 'SPS & SIA — Jawahar Nagar',
    address: 'Bank St, Sector 4, Jawahar Nagar, Jaipur, Rajasthan 302004',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5!2d75.783!3d26.943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ebad9f3edb%3A0x7c6a0adf0e0f0e1a!2sSeedling%20Public%20School!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin',
    link: 'https://maps.google.com/?q=Seedling+Public+School+Jawahar+Nagar+Jaipur',
  },
  {
    id: 1,
    label: 'SMHS & SMIA — Durgapura',
    address: 'Ashok Marg, Mahaveer Nagar II, Durgapura, Jaipur 302018',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1!2d75.797!3d26.851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sSeedling%20Modern%20High%20School!5e0!3m2!1sen!2sin!4v1690000000001!5m2!1sen!2sin',
    link: 'https://maps.google.com/?q=Seedling+Modern+High+School+Durgapura+Jaipur',
  },
]

const SCHOOLS = [
  'Seedling Public School (CBSE), Jawahar Nagar',
  'Seedling International Academy (Cambridge), Jawahar Nagar',
  'Seedling Modern High School (CBSE), Durgapura',
  'Seedling Modern International Academy (Cambridge), Durgapura',
  'Seedling Wonderland Kids League, Jawahar Nagar',
  'Seedling Wonderland Kids League, Durgapura',
]

const STATS = [
  { value: '20,000+', label: 'Students' },
  { value: '15:1',    label: 'Student-Teacher Ratio' },
  { value: '5,000+',  label: 'Alumni Network' },
  { value: '100%',    label: 'Board Results' },
  { value: '30+',     label: 'Years of Excellence' },
]

const HOURS = [
  { day: 'Monday – Friday', time: '8:30 AM – 6:30 PM', open: true },
  { day: 'Saturday',        time: '8:30 AM – 2:00 PM', open: true },
  { day: 'Sunday',          time: 'Closed',            open: false },
  { day: 'Public Holidays', time: 'Closed',            open: false },
]

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.15 6.15l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

// ─── Sub-components ──────────────────────────────────────────────────────────

function InfoCard({
  icon, iconBg, accent, label, children,
}: {
  icon: React.ReactNode
  iconBg: string
  accent: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-stone-100 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
      <div className="flex items-start gap-3 mb-5">
        <div className={`${iconBg} rounded-xl p-2.5 shrink-0`}>{icon}</div>
        <div className="pt-0.5">
          <span className="text-xs font-semibold text-stone-400 tracking-wide uppercase block mb-0.5">
            {label}
          </span>
          <span className={`w-6 h-0.5 ${accent} rounded-full block`} />
        </div>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] text-stone-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
      {children}
    </div>
  )
}

function InputField({
  label, required, error, children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-stone-600 mb-1.5 tracking-wide">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputCls = (hasError?: boolean) =>
  `w-full rounded-xl px-4 py-3 text-stone-800 text-sm placeholder-stone-400 border bg-white
   transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/20
   ${hasError
     ? 'border-red-300 bg-red-50/50'
     : 'border-stone-200 hover:border-stone-300 focus:border-green-600'
   }`

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [activeMap, setActiveMap] = useState(0)
  const [form, setForm]           = useState<FormData>({ name: '', email: '', phone: '', school: '', message: '' })
  const [errors, setErrors]       = useState<FormErrors>({})
  const [status, setStatus]       = useState<SubmitStatus>('idle')

  const setField = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }))

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim())                                e.name    = 'Your name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email   = 'A valid email is required.'
    if (!/^[0-9+\s\-(]{7,15}$/.test(form.phone))        e.phone   = 'Enter a valid phone number.'
    if (form.message.trim().length < 10)                  e.message = 'Please write at least 10 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    // 🔁 Replace the timeout below with your real API call, e.g.:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    setTimeout(() => setStatus('success'), 1400)
  }

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', school: '', message: '' })
    setErrors({})
    setStatus('idle')
  }

  const currentMap = CAMPUS_MAPS[activeMap]

  return (
    <main className="min-h-screen bg-[#FAFAF8] font-sans">

      {/* ── Accent bar ─────────────────────────────────────────────────────── */}
      <div className="h-1 bg-gradient-to-r from-green-800 via-green-500 to-green-300" />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white border-b border-stone-100 overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2E7D32 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-8 h-px bg-green-700" />
                <span className="text-green-700 text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-5"
                style={{ fontFamily: 'Lora, Georgia, serif' }}
              >
                We&apos;d love to<br />
                <span className="text-green-700">hear from you.</span>
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-lg">
                Whether you have questions about admissions, curricula, or school life —
                our team is ready to help. Reach out and we&apos;ll get back to you promptly.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+917413012351"
                  className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call SPS / SIA
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 border border-green-700 text-green-700 hover:bg-green-50 text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200"
                >
                  <SendIcon className="w-4 h-4" />
                  Send a Message
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="relative hidden lg:block">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d34f609b962b72ddb80ea49a40a4529dd2d64d1a.jpg"
                  alt="Students at Seedling International Academy, Jawahar Nagar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-5 py-4 border border-stone-100">
                <p className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-0.5">Admissions Open</p>
                <p className="text-green-700 text-sm font-bold">2026–27 Session</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-700 text-white rounded-2xl shadow-lg px-5 py-4">
                <p className="text-xs opacity-70 mb-0.5">Students</p>
                <p className="text-xl font-bold">20,000+</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-green-700 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center text-white">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-green-200 text-xs font-medium mt-0.5 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold text-stone-400 tracking-widest uppercase mb-2">
              Contact Information
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900"
              style={{ fontFamily: 'Lora, Georgia, serif' }}
            >
              Find us at every campus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <InfoCard icon={<PhoneIcon className="w-4 h-4" />} iconBg="bg-emerald-50 text-emerald-700" accent="bg-emerald-500" label="SPS & SIA Campus">
              <ContactItem label="Mobile">
                <a href="tel:+917413012351" className="text-stone-800 text-sm font-medium hover:text-green-700 transition-colors">+91 74130 12351</a>
              </ContactItem>
              <ContactItem label="Landline">
                <a href="tel:01413623000" className="text-stone-800 text-sm font-medium hover:text-green-700 transition-colors">0141-3623000</a>
              </ContactItem>
            </InfoCard>

            <InfoCard icon={<PhoneIcon className="w-4 h-4" />} iconBg="bg-teal-50 text-teal-700" accent="bg-teal-500" label="SMHS & SMIA Campus">
              <ContactItem label="Mobile">
                <a href="tel:+919587772837" className="text-stone-800 text-sm font-medium hover:text-green-700 transition-colors">+91 95877 72837</a>
              </ContactItem>
              <ContactItem label="Landline">
                <a href="tel:01413624000" className="text-stone-800 text-sm font-medium hover:text-green-700 transition-colors">0141-3624000</a>
              </ContactItem>
            </InfoCard>

            <InfoCard icon={<EmailIcon className="w-4 h-4" />} iconBg="bg-lime-50 text-lime-700" accent="bg-lime-500" label="Email Us">
              <ContactItem label="SPS / SIA">
                <a href="mailto:seedlingacademy@hotmail.com" className="text-stone-800 text-sm font-medium hover:text-green-700 transition-colors break-all">seedlingacademy@hotmail.com</a>
              </ContactItem>
              <ContactItem label="SMHS / SMIA">
                <a href="mailto:smhsjaipur@jnujaipur.ac.in" className="text-stone-800 text-sm font-medium hover:text-green-700 transition-colors break-all">smhsjaipur@jnujaipur.ac.in</a>
              </ContactItem>
            </InfoCard>

            <InfoCard icon={<MapPinIcon className="w-4 h-4" />} iconBg="bg-green-50 text-green-700" accent="bg-green-500" label="SPS & SIA Address">
              <ContactItem label="Location">
                <p className="text-stone-800 text-sm font-medium leading-snug">
                  Bank St, Sector 4, Jawahar Nagar,<br />Jaipur, Rajasthan 302004
                </p>
              </ContactItem>
            </InfoCard>

            <InfoCard icon={<MapPinIcon className="w-4 h-4" />} iconBg="bg-emerald-50 text-emerald-700" accent="bg-emerald-500" label="SMHS & SMIA Address">
              <ContactItem label="Location">
                <p className="text-stone-800 text-sm font-medium leading-snug">
                  Ashok Marg, Mahaveer Nagar II,<br />Durgapura, Jaipur 302018
                </p>
              </ContactItem>
            </InfoCard>

            <InfoCard icon={<ClockIcon className="w-4 h-4" />} iconBg="bg-stone-100 text-stone-600" accent="bg-stone-400" label="Office Hours">
              <ContactItem label="Mon – Fri">
                <p className="text-stone-800 text-sm font-medium">8:30 AM – 6:30 PM</p>
              </ContactItem>
              <ContactItem label="Saturday">
                <p className="text-stone-800 text-sm font-medium">8:30 AM – 2:00 PM</p>
              </ContactItem>
              <ContactItem label="Sunday">
                <p className="text-stone-400 text-sm font-medium">Closed</p>
              </ContactItem>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="contact-form" className="py-20 md:py-24 bg-white border-y border-stone-100 scroll-mt-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left copy */}
            <div>
              <p className="text-xs font-semibold text-stone-400 tracking-widest uppercase mb-3">Send a Message</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-5 leading-tight"
                style={{ fontFamily: 'Lora, Georgia, serif' }}
              >
                We&apos;ll get back to you<br />within one working day.
              </h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                Fill in the form and our admissions team will be in touch shortly.
                You can also call us directly or walk in during office hours.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Admissions open for 2026–27 session',
                  'CBSE & Cambridge Board programmes available',
                  'NEP-aligned innovative curriculum',
                  'Three decades of excellence in education',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-stone-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Classroom photo */}
              <div className="relative rounded-2xl overflow-hidden h-52 border border-stone-100 shadow-sm">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f67bfd96544781b29c5739c8b31aa924899055d7.jpg"
                  alt="Students in a Seedling School classroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-semibold drop-shadow">State-of-the-art learning environment</p>
                  <p className="text-white/70 text-xs">Seedling Schools, Jaipur</p>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-[#FAFAF8] rounded-2xl p-8 border border-stone-100 shadow-sm">

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                    <CheckIcon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-stone-900"
                    style={{ fontFamily: 'Lora, Georgia, serif' }}
                  >
                    Message received!
                  </h3>
                  <p className="text-stone-500 text-sm max-w-xs">
                    Thank you for reaching out. Our team will respond within one working day.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-2 text-sm text-green-700 font-medium underline underline-offset-4 hover:text-green-900 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  <InputField label="Full Name" required error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={setField('name')}
                      placeholder="Your full name"
                      className={inputCls(!!errors.name)}
                    />
                  </InputField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={setField('email')}
                        placeholder="you@example.com"
                        className={inputCls(!!errors.email)}
                      />
                    </InputField>
                    <InputField label="Phone" required error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={setField('phone')}
                        placeholder="+91 98765 00000"
                        className={inputCls(!!errors.phone)}
                      />
                    </InputField>
                  </div>

                  <InputField label="School of Interest">
                    <select
                      value={form.school}
                      onChange={setField('school')}
                      className={inputCls() + ' cursor-pointer'}
                    >
                      <option value="">Select a school (optional)</option>
                      {SCHOOLS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </InputField>

                  <InputField label="Message" required error={errors.message}>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={setField('message')}
                      placeholder="Tell us how we can help you..."
                      className={inputCls(!!errors.message) + ' resize-none'}
                    />
                    <p className="text-right text-xs text-stone-400 mt-1">
                      {form.message.length} chars
                    </p>
                  </InputField>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 font-semibold text-sm py-3.5 rounded-xl bg-green-700 hover:bg-green-800 text-white shadow-sm hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <SendIcon className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MAP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold text-stone-400 tracking-widest uppercase mb-2">Our Locations</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900"
              style={{ fontFamily: 'Lora, Georgia, serif' }}
            >
              Visit us on campus
            </h2>
          </div>

          <div className="flex gap-3 mb-6 flex-wrap">
            {CAMPUS_MAPS.map((campus, idx) => (
              <button
                key={campus.id}
                onClick={() => setActiveMap(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200
                  ${activeMap === idx
                    ? 'bg-green-700 text-white border-green-700 shadow-sm'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-green-700 hover:text-green-700'
                  }`}
              >
                <MapPinIcon className="w-3.5 h-3.5" />
                {campus.label}
              </button>
            ))}
          </div>

          <p className="text-stone-500 text-sm mb-6 flex items-start gap-2">
            <MapPinIcon className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
            {currentMap.address}
          </p>

          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm h-80 md:h-96 bg-stone-100">
            <iframe
              key={currentMap.id}           
              src={currentMap.src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentMap.label} Map`}
            />
          </div>

          <a
            href={currentMap.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-green-700 hover:text-green-900 transition-colors underline underline-offset-4"
          >
            <MapPinIcon className="w-3.5 h-3.5" />
            Get Directions on Google Maps
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOURS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            <div>
              <p className="text-xs font-semibold text-stone-400 tracking-widest uppercase mb-3">Availability</p>
              <h2
                className="text-3xl font-bold text-stone-900 mb-4 leading-tight"
                style={{ fontFamily: 'Lora, Georgia, serif' }}
              >
                When to reach us
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Our admissions and support teams are available during office hours
                across all campuses.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#FAFAF8] rounded-2xl border border-stone-100 overflow-hidden mb-5">
                {HOURS.map(({ day, time, open }, i) => (
                  <div
                    key={day}
                    className={`flex items-center justify-between px-6 py-4 ${i < HOURS.length - 1 ? 'border-b border-stone-100' : ''}`}
                  >
                    <span className="text-stone-700 text-sm font-medium">{day}</span>
                    <span className={`text-sm font-semibold ${open ? 'text-green-700' : 'text-stone-400'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+917413012351"
                  className="flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl px-5 py-4 transition-colors duration-200"
                >
                  <PhoneIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">SPS / SIA</p>
                    <p className="text-stone-800 text-sm font-semibold">+91 74130 12351</p>
                  </div>
                </a>
                <a
                  href="tel:+919587772837"
                  className="flex items-center gap-3 bg-teal-50 hover:bg-teal-100 rounded-xl px-5 py-4 transition-colors duration-200"
                >
                  <PhoneIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold text-teal-700 uppercase tracking-wide">SMHS / SMIA</p>
                    <p className="text-stone-800 text-sm font-semibold">+91 95877 72837</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-[#FAFAF8] border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative bg-green-700 rounded-2xl overflow-hidden px-8 md:px-14 py-14 text-white"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white opacity-5" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white opacity-5" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span className="text-xs font-semibold tracking-wide">Admissions Open 2026–27</span>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold leading-tight mb-3"
                  style={{ fontFamily: 'Lora, Georgia, serif' }}
                >
                  Ready to join the<br />Seedling family?
                </h2>
                <p className="text-white/75 text-base leading-relaxed">
                  Visit any of our campuses or start your online application today.
                  Three decades of excellence — and a future built for your child.
                </p>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="https://seedlingschools.com/admission-procedure.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-800 hover:bg-stone-50 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Enquire Now
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://seedlingschools.com/admission-online.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-200 text-white border border-white/30 hover:bg-white/10"
                >
                  Apply Online
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-stone-400 text-xs mt-8">
            © 2026 Seedling Group of Schools, Jaipur. All rights reserved.
          </p>
        </div>
      </section>

    </main>
  )
}
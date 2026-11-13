const ADMISSIONS_PHONE = "+917413012351";

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-[120] grid grid-cols-3 border-t border-slate-200 bg-white px-1 pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_18px_rgba(15,23,42,0.08)] sm:hidden"
    >
      <a
        href={`tel:${ADMISSIONS_PHONE}`}
        className="flex min-h-16 flex-col items-center justify-center gap-0.5 text-[#0755b5]"
        aria-label="Call Seedling International Academy admissions"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.15 6.15l.98-.98a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="text-[11px] font-medium tracking-wide">Call</span>
      </a>

      <a
        href={`https://wa.me/${ADMISSIONS_PHONE.slice(1)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-16 flex-col items-center justify-center gap-0.5 border-x border-slate-200 text-[#007566]"
        aria-label="Message Seedling International Academy on WhatsApp"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.94c0 2.1.55 4.16 1.6 5.97L.05 24l6.25-1.64a11.95 11.95 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.94 0-3.19-1.24-6.19-3.49-8.41ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 0 1-1.52-5.24c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
        <span className="text-[11px] font-medium tracking-wide">WhatsApp</span>
      </a>

      <a
        href="/#home-enquiry"
        className="flex min-h-16 flex-col items-center justify-center gap-0.5 text-[#cf003d]"
        aria-label="Enquire Now - Go to admission enquiry form"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 5 19 10M3 21l5-1 13-13a2.83 2.83 0 0 0-4-4L4 16l-1 5Z" />
          <path d="M14 21h7" />
        </svg>
        <span className="text-[11px] font-medium tracking-wide">Enquire Now</span>
      </a>
    </nav>
  );
}

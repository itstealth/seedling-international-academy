import Link from "next/link";
import { CheckCircle, ArrowRight, Home, Phone, Mail } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#d4f4ed] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sand rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-crimson rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-28 h-28 bg-sand/10 rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
              <CheckCircle className="w-16 h-16 text-[#133844]" strokeWidth={1.5} />
            </div>
            <div className="absolute -inset-4 bg-sand/5 rounded-full animate-ping" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-[#133844] mb-4">
            Thank You!
          </h1>
          <p className="text-[#133844]/70 text-lg leading-relaxed mb-2">
            Your admission inquiry has been submitted successfully.
          </p>
          <p className="text-[#133844]/50 text-sm">
            Our team will contact you within <span className="text-[#133844] font-semibold">24 hours</span>.
          </p>
        </div>


        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="tel:+917413012351"
            className="flex items-center gap-2 text-[#133844]/60 hover:text-[#133844] text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 741301 2351
          </a>
          <span className="hidden sm:block text-[#133844]/20">|</span>
          <a
            href="mailto:seedlingacademy@hotmail.com"
            className="flex items-center gap-2 text-[#133844]/60 hover:text-[#133844] text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            seedlingacademy@hotmail.com
          </a>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-sand hover:bg-sand/90 text-[#133844] px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
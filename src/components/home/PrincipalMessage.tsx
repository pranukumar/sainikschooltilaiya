import Link from 'next/link';
import Image from 'next/image';
import { Quote, ChevronRight } from 'lucide-react';
import { SCHOOL } from '@/data/content';

export default function PrincipalMessage() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Photo + info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-6">
              <div className="w-56 h-72 rounded-lg overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/principal.jpg"
                  alt={SCHOOL.principal}
                  fill
                  className="object-cover object-top"
                />
                {/* Gold strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C8A84B]" />
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#C8A84B]/30 rounded-lg pointer-events-none" />
            </div>

            <div className="text-center lg:text-left">
              <div className="font-bold text-[#0D1B2A] text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{SCHOOL.principal}</div>
              <div className="text-[#4A5568] text-sm">Principal, Sainik School Tilaiya</div>
              <div className="text-xs text-[#C8A84B] mt-1 font-mono">Serving with Honour</div>
            </div>
          </div>

          {/* Right: Message */}
          <div>
            <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">A Message From</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Principal
            </h2>

            <div className="relative pl-6 mb-6">
              <Quote className="absolute left-0 top-0 text-[#C8A84B] opacity-40" size={20} />
              <blockquote className="text-[#4A5568] text-base leading-relaxed italic" style={{ fontFamily: "'Lora', serif" }}>
                Sainik School Tilaiya stands as a beacon of excellence, nurturing young minds with the dual gifts of academic rigour and military character. Our cadets carry forward a proud legacy of service, discipline, and integrity — values that define a true Tilaiyan.
              </blockquote>
            </div>

            <p className="text-[#4A5568] text-sm leading-relaxed mb-6" style={{ fontFamily: "'Lora', serif" }}>
              We remain committed to shaping the officers of tomorrow — individuals who are not only academically accomplished but equipped with the Officers' Like Qualities that the nation demands of its future leaders.
            </p>

            <Link
              href="/about/principal-message"
              className="inline-flex items-center gap-2 text-[#C8A84B] font-semibold text-sm hover:text-[#a8883b] transition-colors group"
            >
              Read Full Message
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

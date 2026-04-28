import Link from 'next/link';
import { ChevronRight, Calendar } from 'lucide-react';
import { SCHOOL, EXTERNAL_LINKS } from '@/data/content';

export default function AdmissionCTA() {
  return (
    <section className="py-16 bg-[#C0392B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(45deg, #0D1B2A 25%, transparent 25%, transparent 75%, #0D1B2A 75%), linear-gradient(45deg, #0D1B2A 25%, transparent 25%, transparent 75%, #0D1B2A 75%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="text-white/70 text-xs font-mono uppercase tracking-widest mb-2">Now Accepting Applications</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Admissions Open
            </h2>
            <p className="text-white/80 text-base mb-4">
              Applications for Academic Session 2026–27 via NTA AISSEE
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-white">
                <span className="font-bold text-[#C8A84B]">Class VI:</span>
                <span>{SCHOOL.seatsClassVI} seats</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-white">
                <span className="font-bold text-[#C8A84B]">Class IX:</span>
                <span>{SCHOOL.seatsClassIX} seats</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-white">
                <Calendar size={14} className="text-[#C8A84B]" />
                <span>AISSEE: 18 Jan 2026</span>
              </div>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={EXTERNAL_LINKS.ntaAissee}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F8F9FA] text-[#C0392B] font-bold px-6 py-3 rounded transition-colors text-sm uppercase tracking-wide shadow-lg"
            >
              Apply via NTA Portal
              <ChevronRight size={16} />
            </a>
            <Link
              href="/admissions/process"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded transition-all text-sm uppercase tracking-wide"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

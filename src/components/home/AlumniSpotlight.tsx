import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { NOTABLE_ALUMNI } from '@/data/content';

export default function AlumniSpotlight() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-2">Proud Tilaiyans</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Distinguished Alumni
            </h2>
          </div>
          <Link
            href="/alumni/notable-alumni"
            className="hidden sm:inline-flex items-center gap-2 text-[#0D1B2A] font-semibold text-sm border-b border-[#C8A84B] hover:text-[#C8A84B] transition-colors group"
          >
            View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {NOTABLE_ALUMNI.map((alumni) => (
            <div
              key={alumni.name}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-5 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#1a2e45] flex items-center justify-center shrink-0 group-hover:border-2 group-hover:border-[#C8A84B] transition-all">
                <span className="text-[#C8A84B] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {alumni.name.split(' ').slice(-1)[0][0]}
                </span>
              </div>
              <div>
                <div className="text-[10px] text-[#C8A84B] font-mono uppercase tracking-widest mb-1">{alumni.sector}</div>
                <div className="font-bold text-[#0D1B2A] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{alumni.name}</div>
                <div className="text-[#4A5568] text-xs mt-0.5">{alumni.designation}</div>
              </div>
            </div>
          ))}

          {/* Register CTA card */}
          <div className="bg-[#0D1B2A] rounded-xl p-6 flex items-center gap-5 sm:col-span-2">
            <div className="flex-1">
              <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-1">Join the Network</div>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Are you a Tilaiyan?
              </h3>
              <p className="text-gray-400 text-sm mt-1">Register as an alumnus and reconnect with the brotherhood that shaped you.</p>
            </div>
            <Link
              href="/alumni/register"
              className="shrink-0 bg-[#C8A84B] hover:bg-[#e0c470] text-[#0D1B2A] font-bold px-5 py-2.5 rounded text-sm transition-colors whitespace-nowrap"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

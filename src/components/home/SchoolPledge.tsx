import { PLEDGE } from '@/data/content';

export default function SchoolPledge() {
  return (
    <section className="py-16 bg-[#0D1B2A] relative overflow-hidden grain-overlay">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section header */}
        <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-4">The Tilaiyan Pledge</div>

        {/* Decorative top rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8A84B]/40" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A84B]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A84B]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A84B]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8A84B]/40" />
        </div>

        <blockquote
          className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed italic font-medium"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          &ldquo;{PLEDGE}&rdquo;
        </blockquote>

        {/* Decorative bottom rule */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8A84B]/40" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A84B]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A84B]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A84B]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8A84B]/40" />
        </div>

        <p className="mt-6 text-[#C8A84B] text-sm font-semibold uppercase tracking-widest">— The Tilaiyan's Creed</p>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Flag, Star, Medal, BookOpen } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/content';

const ICON_MAP = {
  flag: Flag,
  star: Star,
  medal: Medal,
  graduation: BookOpen,
} as const;

const ACHIEVEMENT_PHOTOS: Record<string, string> = {
  'Republic Day Parade 2026': '/images/gallery/vaishnavi-rd-parade.jpg',
  "63rd Founder's Day": '/images/gallery/founders-day-2025.jpg',
  'Air Marshal Visit': '/images/gallery/chief-secretary.jpg',
  'English Language Lab': '/images/gallery/founders-day-1.jpg',
};

export default function Achievements() {
  return (
    <section className="py-20 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8A84B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">Pride of Tilaiya</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Recent Achievements
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#C8A84B]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#C8A84B]" />
            <div className="h-px w-16 bg-[#C8A84B]/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP] ?? Star;
            const photo = ACHIEVEMENT_PHOTOS[item.title];
            return (
              <div
                key={item.title}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-lift border border-gray-100"
              >
                {/* Real photo or gradient fallback */}
                {photo ? (
                  <div className="relative h-40">
                    <Image
                      src={photo}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-[#C8A84B] border border-[#C8A84B]/50 bg-[#0D1B2A]/60 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                ) : (
                  <div className="h-1 bg-gradient-to-r from-[#C8A84B] via-[#e0c470] to-[#C8A84B]" />
                )}

                <div className="p-5">
                  {!photo && (
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A84B] border border-[#C8A84B]/30 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#0D1B2A]/5 flex items-center justify-center group-hover:bg-[#0D1B2A] transition-colors">
                        <Icon size={15} className="text-[#0D1B2A] group-hover:text-[#C8A84B] transition-colors" />
                      </div>
                    </div>
                  )}

                  <h3 className="font-bold text-[#0D1B2A] text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568] text-xs leading-relaxed mb-3">{item.description}</p>
                  <div className="text-[10px] text-[#4A5568]/60 font-mono">{item.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

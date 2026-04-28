import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const GALLERY_ITEMS = [
  { src: '/images/gallery/founders-day-2025.jpg', label: "63rd Founder's Day", category: 'Events', large: true },
  { src: '/images/gallery/vaishnavi-rd-parade.jpg', label: 'Republic Day Parade 2026', category: 'Republic Day', large: false },
  { src: '/images/gallery/founders-day-1.jpg', label: "Founder's Day Ceremony", category: 'Events', large: false },
  { src: '/images/gallery/guard.jpg', label: 'Guard of Honour', category: 'Military', large: false },
  { src: '/images/gallery/lba-meeting.jpg', label: '85th LBA Meeting', category: 'Administration', large: false },
  { src: '/images/gallery/chief-secretary.jpg', label: 'Chief Secretary Visit', category: 'Events', large: false },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-2">Visual Chronicle</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Photo Gallery
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex items-center gap-2 text-[#0D1B2A] font-semibold text-sm border-b border-[#C8A84B] hover:text-[#C8A84B] transition-colors group"
          >
            View All
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <Link
              key={item.src}
              href="/gallery"
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i === 0 ? 'row-span-2' : ''
              }`}
            >
              <div className={`relative w-full ${i === 0 ? 'h-80' : 'h-44'}`}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <div className="text-[10px] text-[#C8A84B] uppercase tracking-widest mb-1">{item.category}</div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-[#C8A84B] font-semibold text-sm">
            View Full Gallery <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

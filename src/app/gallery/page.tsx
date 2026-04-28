'use client';

import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { useState } from 'react';

const GALLERY_ITEMS = [
  { src: '/images/gallery/founders-day-2025.jpg', title: "63rd Founder's Day — Collage", category: "Founder's Day" },
  { src: '/images/gallery/vaishnavi-rd-parade.jpg', title: 'Cdt Vaishnavi Anand — Republic Day 2026', category: 'Republic Day' },
  { src: '/images/gallery/republic-day-2026.jpg', title: 'Republic Day Celebrations 2026', category: 'Republic Day' },
  { src: '/images/gallery/founders-day-collage.jpg', title: "Founder's Day Celebrations Collage", category: "Founder's Day" },
  { src: '/images/gallery/founders-day-1.jpg', title: "Founder's Day — Ceremony", category: "Founder's Day" },
  { src: '/images/gallery/founders-day-2.jpg', title: "Founder's Day — March Past", category: "Founder's Day" },
  { src: '/images/gallery/founders-day-4.jpg', title: "Founder's Day — Sports", category: "Founder's Day" },
  { src: '/images/gallery/founders-day-8.jpg', title: "Founder's Day — Cultural", category: "Founder's Day" },
  { src: '/images/gallery/founders-day-9.jpg', title: "Founder's Day — Felicitation", category: "Founder's Day" },
  { src: '/images/gallery/founders-day-16.jpg', title: "Founder's Day — Alumni Meet", category: 'Alumni' },
  { src: '/images/gallery/guard.jpg', title: 'Guard of Honour', category: 'Military' },
  { src: '/images/gallery/meeting.jpg', title: 'Administrative Meeting', category: 'Administration' },
  { src: '/images/gallery/lba-meeting.jpg', title: '85th LBA Meeting', category: 'Administration' },
  { src: '/images/gallery/chief-secretary.jpg', title: 'Chief Secretary Visit', category: 'Events' },
  { src: '/images/gallery/national-award.jpg', title: 'National Award', category: 'Achievement' },
  { src: '/images/gallery/fire-drill.jpg', title: 'Fire Mock Drill', category: 'Events' },
  { src: '/images/gallery/event-2026.jpg', title: 'School Appointment Ceremony', category: 'Events' },
  { src: '/images/gallery/nov-event1.jpg', title: 'November Event 2025', category: 'Events' },
  { src: '/images/gallery/nov-event2.jpg', title: 'November Event 2025', category: 'Events' },
  { src: '/images/gallery/rd-collage.jpg', title: 'Republic Day Collage', category: 'Republic Day' },
  { src: '/images/gallery/annapurna.jpg', title: 'Annapurna Award', category: 'Achievement' },
  { src: '/images/gallery/rd-1.jpg', title: 'Republic Day 2026', category: 'Republic Day' },
  { src: '/images/gallery/apr-event1.jpg', title: 'April 2026 Event', category: 'Events' },
  { src: '/images/gallery/apr-event2.jpg', title: 'School Activities', category: 'Events' },
];

const CATEGORIES = ['All', 'Republic Day', "Founder's Day", 'Military', 'Alumni', 'Administration', 'Achievement', 'Events'];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active);

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Glimpses of life, achievement, and pride at Sainik School Tilaiya."
        breadcrumbs={[{ label: 'Gallery' }]}
        accentText="Visual Chronicle"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                active === cat
                  ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]'
                  : 'border-gray-200 text-[#4A5568] hover:border-[#C8A84B] hover:text-[#C8A84B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.src}
              onClick={() => setLightbox(item.src)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i % 7 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`relative w-full ${i % 7 === 0 ? 'h-72 sm:h-80' : 'h-44'}`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <div className="text-[9px] text-[#C8A84B] uppercase tracking-widest">{item.category}</div>
                <div className="text-white text-xs font-semibold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={lightbox}
              alt="Gallery photo"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

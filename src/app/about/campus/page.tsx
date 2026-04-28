import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const FACILITIES = [
  { name: 'Lt Col Gadeock Parade Ground', category: 'Military' },
  { name: 'Swimming Pool', category: 'Sports' },
  { name: 'Firing Range', category: 'Military' },
  { name: 'English Language Lab', category: 'Academics' },
  { name: 'Science Laboratories', category: 'Academics' },
  { name: 'Library', category: 'Academics' },
  { name: 'Football & Hockey Ground', category: 'Sports' },
  { name: 'Cricket Ground', category: 'Sports' },
  { name: 'Indoor Sports Hall', category: 'Sports' },
  { name: 'Riding Arena', category: 'Sports' },
  { name: 'Obstacle Course', category: 'Military' },
  { name: '12 House Hostels', category: 'Residential' },
  { name: 'Dining Hall', category: 'Residential' },
  { name: 'Medical Centre (MI Room)', category: 'Healthcare' },
  { name: 'Chapel & Prayer Hall', category: 'Community' },
  { name: 'Auditorium', category: 'Community' },
];

const CATEGORY_COLORS: Record<string, string> = {
  Military: '#C0392B',
  Sports: '#1e8449',
  Academics: '#1a5276',
  Residential: '#6c3483',
  Healthcare: '#b7950b',
  Community: '#4A5568',
};

export default function CampusPage() {
  return (
    <>
      <PageHeader
        title="Campus & Facilities"
        subtitle="A 250+ acre campus set against the scenic backdrop of Tilaiya Dam — built for excellence."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Campus' }]}
        accentText="Our Home"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location info */}
        {/* Real campus photo */}
        <div className="relative h-64 rounded-2xl overflow-hidden mb-10 shadow-xl">
          <Image
            src="/images/campus.jpg"
            alt="Sainik School Tilaiya Campus — Tilaiya Dam"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/70 via-transparent to-transparent flex items-end p-6">
            <div className="text-white">
              <div className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Sainik School Tilaiya</div>
              <div className="text-sm text-[#C8A84B]">Tilaiya Dam, Koderma, Jharkhand · 250+ Acres</div>
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B2A] rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center gap-4">
          <MapPin className="text-[#C8A84B] shrink-0" size={24} />
          <div>
            <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-1">Location</div>
            <div className="text-white font-semibold">P.O. Tilaiya Dam, District Koderma – 825413, Jharkhand</div>
            <div className="text-gray-400 text-xs mt-1">
              Tilaiya Dam: 1 km · Koderma Railway Station: 18 km · Birsa Munda Airport, Ranchi: 150 km
            </div>
          </div>
        </div>

        {/* Facilities grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FACILITIES.map(({ name, category }) => (
              <div
                key={name}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-100 hover:border-[#C8A84B]/30 hover:bg-gray-50 transition-colors"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: CATEGORY_COLORS[category] || '#C8A84B' }}
                />
                <div>
                  <div className="text-sm font-medium text-[#0D1B2A]">{name}</div>
                  <div className="text-xs text-[#4A5568]">{category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6">
          {Object.entries(CATEGORY_COLORS).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2 text-xs text-[#4A5568]">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
              {category}
            </div>
          ))}
        </div>

        {/* Map embed placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 h-80 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-[#4A5568]">
            <MapPin size={32} className="mx-auto mb-3 text-[#C8A84B]" />
            <div className="font-semibold">Interactive Campus Map</div>
            <div className="text-sm mt-1">P.O. Tilaiya Dam, District Koderma, Jharkhand</div>
          </div>
        </div>
      </section>
    </>
  );
}

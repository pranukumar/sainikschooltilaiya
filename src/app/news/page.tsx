import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

const NEWS_ITEMS = [
  {
    date: '26 Jan 2026',
    title: 'Cdt Vaishnavi Anand Marches at Republic Day Parade 2026',
    excerpt: 'Sainik School Tilaiya makes history as Cdt Vaishnavi Anand becomes the first girl cadet from SST to participate in the Republic Day Parade in New Delhi.',
    category: 'Achievement',
    photo: '/images/gallery/vaishnavi-rd-parade.jpg',
  },
  {
    date: '16 Sep 2025',
    title: '63rd Founder\'s Day Celebrated with Grand Alumni Meet',
    excerpt: "The 63rd Founder's Day was celebrated with great enthusiasm, featuring an alumni meet, cultural programs, sports events, and the inauguration of the English Language Lab.",
    category: 'Events',
    photo: '/images/gallery/founders-day-2025.jpg',
  },
  {
    date: '2025',
    title: 'Air Marshal AK Bharti Visits Alma Mater',
    excerpt: 'Air Marshal AK Bharti (DCSAS), a distinguished alumnus of Sainik School Tilaiya, visited the school inspiring the current cadets with his journey from cadet to Air Marshal.',
    category: 'Alumni',
    photo: null,
  },
  {
    date: 'Dec 2025',
    title: '85th LBA Meeting Held',
    excerpt: 'The 85th Local Board of Administration (LBA) Meeting was convened in December 2025 to review school progress and plan future developments.',
    category: 'Administration',
    photo: '/images/gallery/lba-meeting.jpg',
  },
  {
    date: '2025',
    title: 'English Language Lab Inaugurated',
    excerpt: 'A state-of-the-art English Language Lab, funded by the Govt. of Jharkhand and alumni donations (Batch 1974–75 to 1982), was inaugurated at the school.',
    category: 'Infrastructure',
    photo: '/images/gallery/founders-day-1.jpg',
  },
  {
    date: '2024',
    title: 'CBSE Board Results 2024 — Outstanding Performance',
    excerpt: 'Sainik School Tilaiya cadets once again achieved outstanding results in the CBSE Class XII board examinations with multiple students scoring above 90%.',
    category: 'Academics',
    photo: null,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Achievement: '#C8A84B',
  Events: '#1e8449',
  Alumni: '#6c3483',
  Administration: '#1a5276',
  Infrastructure: '#b7950b',
  Academics: '#C0392B',
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Latest happenings, achievements, and announcements from Sainik School Tilaiya."
        breadcrumbs={[{ label: 'News & Events' }]}
        accentText="What's New"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {NEWS_ITEMS.map((item, i) => (
            <article
              key={i}
              className="group rounded-xl border border-gray-100 hover:border-[#C8A84B]/30 hover:shadow-md transition-all overflow-hidden"
            >
              {/* Photo strip if available */}
              {(item as { photo?: string | null }).photo && (
                <div className="relative h-48 w-full">
                  <Image
                    src={(item as { photo: string }).photo}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white"
                    style={{ background: CATEGORY_COLORS[item.category] || '#4A5568' }}
                  >
                    {item.category}
                  </span>
                </div>
              )}

              <div className="p-6 flex gap-5">
              {/* Date column */}
              <div className="shrink-0 text-center w-16">
                <div className="bg-[#0D1B2A] text-[#C8A84B] rounded-lg p-2 text-center">
                  <Calendar size={16} className="mx-auto mb-1" />
                  <div className="text-[10px] font-mono leading-tight">{item.date}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {!(item as { photo?: string | null }).photo && (
                  <div
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2 text-white"
                    style={{ background: CATEGORY_COLORS[item.category] || '#4A5568' }}
                  >
                    {item.category}
                  </div>
                )}
                <h3
                  className="font-bold text-[#0D1B2A] text-lg mb-2 group-hover:text-[#C8A84B] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.excerpt}</p>
              </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

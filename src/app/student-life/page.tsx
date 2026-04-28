import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { ChevronRight, Shield, Trophy, Music, Building } from 'lucide-react';

const SECTIONS = [
  { href: '/student-life/houses', icon: Shield, title: '12 School Houses', desc: 'Magadh, Gautam, Aryabhatta, Vikram, Patliputra, Vaishali, Kunwar Singh, Mithila, Maurya, Ashoka, Nalanda, Rajgir — the heart of cadet life.' },
  { href: '/student-life/sports', icon: Trophy, title: 'Sports & Athletics', desc: '14+ disciplines including Horse Riding, Canoeing, Mountaineering, Boxing and Obstacle Course.' },
  { href: '/student-life/ncc', icon: Shield, title: 'NCC Training', desc: 'Structured NCC program leading to B-Certificate after Class XII. Annual camps and national competitions.' },
  { href: '/student-life/activities', icon: Music, title: 'Co-curricular Activities', desc: 'Declamation, cultural programs, The Tilaiyan magazine, inter-house competitions, and much more.' },
  { href: '/student-life/infrastructure', icon: Building, title: 'Infrastructure', desc: 'Parade ground, labs, library, hostels, firing range, swimming pool — a complete residential campus.' },
];

export default function StudentLifePage() {
  return (
    <>
      <PageHeader
        title="Student Life"
        subtitle="Life at Sainik School Tilaiya is a unique blend of academic excellence, military discipline, and wholesome cadet development."
        breadcrumbs={[{ label: 'Student Life' }]}
        accentText="Life at SST"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS.map(({ href, icon: Icon, title, desc }) => (
            <Link key={href} href={href} className="group p-6 rounded-xl border border-gray-100 hover:border-[#C8A84B]/40 hover:shadow-lg transition-all card-lift">
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center mb-4 group-hover:bg-[#0D1B2A] transition-colors">
                <Icon size={20} className="text-[#0D1B2A] group-hover:text-[#C8A84B] transition-colors" />
              </div>
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#C8A84B] group-hover:gap-2 transition-all">Explore <ChevronRight size={14} /></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

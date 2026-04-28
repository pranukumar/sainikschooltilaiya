import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { NOTABLE_ALUMNI } from '@/data/content';
import { ChevronRight } from 'lucide-react';

const SECTIONS = [
  { href: '/alumni/notable-alumni', title: 'Notable Alumni', desc: 'Distinguished Tilaiyans in defence, civil services, and professional sectors.' },
  { href: '/alumni/register', title: 'Register as Alumni', desc: 'Join the SST alumni network and reconnect with your brotherhood.' },
  { href: '/alumni/events', title: 'Alumni Events', desc: "Founder's Day reunions, alumni meets, and upcoming events." },
  { href: '/alumni/contributions', title: 'Alumni Contributions', desc: 'How our alumni have given back — labs, scholarships, and infrastructure.' },
];

export default function AlumniPage() {
  return (
    <>
      <PageHeader
        title="Alumni Network"
        subtitle="Once a Tilaiyan, always a Tilaiyan. Our alumni carry the school's values into every corner of national life."
        breadcrumbs={[{ label: 'Alumni' }]}
        accentText="The Brotherhood"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Notable Alumni preview */}
        <div>
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Distinguished Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {NOTABLE_ALUMNI.map((a) => (
              <div key={a.name} className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#0D1B2A] flex items-center justify-center shrink-0">
                  <span className="text-[#C8A84B] font-bold text-lg">{a.name.split(' ').slice(-1)[0][0]}</span>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#C8A84B] uppercase tracking-wider">{a.sector}</div>
                  <div className="font-bold text-[#0D1B2A]" style={{ fontFamily: "'Playfair Display', serif" }}>{a.name}</div>
                  <div className="text-[#4A5568] text-xs mt-0.5">{a.designation}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/alumni/notable-alumni" className="text-sm font-semibold text-[#C8A84B] flex items-center gap-1 hover:underline">
            View All Notable Alumni <ChevronRight size={14} />
          </Link>
        </div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SECTIONS.map(({ href, title, desc }) => (
            <Link key={href} href={href} className="group p-6 rounded-xl border border-gray-100 hover:border-[#C8A84B]/40 hover:shadow-lg transition-all card-lift">
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-2 group-hover:text-[#C8A84B] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <p className="text-[#4A5568] text-sm mb-4">{desc}</p>
              <span className="text-xs font-semibold text-[#C8A84B] flex items-center gap-1">Learn More <ChevronRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

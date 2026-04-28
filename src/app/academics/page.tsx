import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { ChevronRight, BookOpen, FlaskConical, Trophy, Library, FileText } from 'lucide-react';

const SECTIONS = [
  { href: '/academics/curriculum', icon: BookOpen, title: 'Curriculum', desc: 'CBSE Science Stream, Class VI to XII with NDA-focused academic programme.' },
  { href: '/academics/departments', icon: FlaskConical, title: 'Departments', desc: 'Science, Mathematics, English, Social Studies, Physical Education, and NCC.' },
  { href: '/academics/examination', icon: FileText, title: 'Examination', desc: 'Internal exams, CBSE board results, and NDA entrance preparation.' },
  { href: '/academics/e-library', icon: Library, title: 'e-Library', desc: 'Digital study resources, past year papers, and recommended reading.' },
  { href: '/academics/results', icon: Trophy, title: 'Results', desc: 'CBSE board result archives and NDA selection records.' },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academics"
        subtitle="Academic excellence is the cornerstone of every Tilaiyan — preparing cadets for NDA, CBSE boards, and lifelong learning."
        breadcrumbs={[{ label: 'Academics' }]}
        accentText="Academic Excellence"
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
              <div className="flex items-center gap-1 text-xs font-semibold text-[#C8A84B] group-hover:gap-2 transition-all">
                Learn More <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

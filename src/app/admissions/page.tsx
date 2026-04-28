import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SCHOOL, EXTERNAL_LINKS } from '@/data/content';
import { ChevronRight, FileText, CheckSquare, BookOpen, DollarSign, Award, ExternalLink } from 'lucide-react';

const ADMISSION_SECTIONS = [
  { href: '/admissions/process', icon: FileText, title: 'Admission Process', desc: 'Step-by-step guide from NTA registration to final admission.' },
  { href: '/admissions/eligibility', icon: CheckSquare, title: 'Eligibility Criteria', desc: 'Age, class, and qualification requirements for Class VI and IX.' },
  { href: '/admissions/aissee', icon: BookOpen, title: 'AISSEE Exam Guide', desc: 'Overview, syllabus, and key dates for the All India Sainik Schools Entrance Examination.' },
  { href: '/admissions/fee-structure', icon: DollarSign, title: 'Fee Structure', desc: 'Complete fee breakdown and payment schedule for 2025–26.' },
  { href: '/admissions/scholarships', icon: Award, title: 'Scholarships', desc: 'State, MoD, and NSP scholarships available for cadets.' },
  { href: '/admissions/apply-now', icon: ExternalLink, title: 'Apply Now', desc: 'Direct link to the NTA AISSEE registration portal.' },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle={`Applications open for Session 2026–27. Class VI: ${SCHOOL.seatsClassVI} seats | Class IX: ${SCHOOL.seatsClassIX} seats`}
        breadcrumbs={[{ label: 'Admissions' }]}
        accentText="Join The Fraternity"
      />

      {/* Urgent notice bar */}
      <div className="bg-[#C0392B] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <span className="font-semibold">AISSEE 2026 Exam Date: 18 January 2026</span>
          <a
            href={EXTERNAL_LINKS.ntaAissee}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#C0392B] font-bold px-4 py-1 rounded text-xs hover:bg-gray-100 transition-colors"
          >
            Register on NTA Portal <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {ADMISSION_SECTIONS.map(({ href, icon: Icon, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group p-6 rounded-xl border border-gray-100 hover:border-[#C8A84B]/40 hover:shadow-lg transition-all card-lift"
            >
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

        {/* Key facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0D1B2A] rounded-xl p-6 text-white">
            <h3 className="font-bold text-[#C8A84B] text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Seats Available 2026–27</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Class VI</span><span className="font-bold text-[#C8A84B]">{SCHOOL.seatsClassVI} seats</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Class IX</span><span className="font-bold text-[#C8A84B]">{SCHOOL.seatsClassIX} seats</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Exam</span><span className="font-bold text-[#C8A84B]">AISSEE 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Exam Date</span><span className="font-bold text-[#C8A84B]">18 January 2026</span>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
            <h3 className="font-bold text-[#0D1B2A] text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose SST?</h3>
            <ul className="space-y-3 text-sm text-[#4A5568]">
              {[
                'Prestigious MoD institution with 63 years of excellence',
                '1800+ NDA selections — proven track record',
                'CBSE Science stream with NDA-focus',
                '14+ sports, NCC, horse riding & more',
                'Scholarships from State, MoD & NSP',
                'Girls admitted since 2021–22',
                'Scenic 250+ acre campus at Tilaiya Dam',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#C8A84B] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

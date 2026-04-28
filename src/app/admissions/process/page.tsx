import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { EXTERNAL_LINKS } from '@/data/content';

const STEPS = [
  {
    step: 1,
    title: 'Register on NTA Portal',
    description: 'Visit the NTA AISSEE portal and complete online registration. Fill in all required details carefully — name, date of birth, category, etc.',
    note: 'Keep Aadhaar and other documents ready for registration.',
  },
  {
    step: 2,
    title: 'AISSEE Examination',
    description: 'Appear for the All India Sainik Schools Entrance Examination (AISSEE). Class VI exam covers Mathematics, Language, Intelligence. Class IX covers Mathematics, Science, English, Social Studies, and Intelligence.',
    note: 'Exam Date: 18 January 2026',
  },
  {
    step: 3,
    title: 'Result Declaration',
    description: 'Results are declared on the NTA portal. A merit list is prepared based on AISSEE scores, with reservations as per government norms.',
    note: 'Check the NTA portal regularly for result updates.',
  },
  {
    step: 4,
    title: 'e-Counselling',
    description: 'Shortlisted candidates are called for e-Counselling on the NTA portal. School preferences are allotted based on merit and availability.',
    note: 'Have all documents ready for verification during counselling.',
  },
  {
    step: 5,
    title: 'Medical Examination',
    description: 'Candidates allotted to SST must undergo a mandatory medical examination at the designated military hospital to meet fitness standards.',
    note: 'Medical standards follow Armed Forces guidelines.',
  },
  {
    step: 6,
    title: 'Final Merit List & Admission',
    description: 'A final merit list is prepared after medical examination. Selected candidates complete the admission formalities at Sainik School Tilaiya including fee payment and document submission.',
    note: 'Keep original documents and attested copies ready.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        title="Admission Process"
        subtitle="A clear, step-by-step guide to join the Sainik School Tilaiya family."
        breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Process' }]}
        accentText="How to Apply"
      />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps */}
        <div className="space-y-6 mb-12">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="flex gap-6 p-6 rounded-xl border border-gray-100 hover:border-[#C8A84B]/30 hover:shadow-md transition-all"
            >
              {/* Step number */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#0D1B2A] text-[#C8A84B] font-bold text-lg flex items-center justify-center" style={{ fontFamily: "'DM Mono', monospace" }}>
                {String(item.step).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0D1B2A] text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{item.description}</p>
                {item.note && (
                  <div className="bg-[#C8A84B]/10 border-l-2 border-[#C8A84B] px-3 py-2 text-xs text-[#4A5568] rounded-r">
                    <span className="font-semibold text-[#a8883b]">Note: </span>{item.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#0D1B2A] rounded-xl p-8 text-center">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">Ready to Begin?</div>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Apply via NTA AISSEE Portal</h2>
          <p className="text-gray-400 text-sm mb-6">All admissions to Sainik Schools are through the centralized NTA AISSEE process.</p>
          <a
            href={EXTERNAL_LINKS.ntaAissee}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8A84B] hover:bg-[#e0c470] text-[#0D1B2A] font-bold px-6 py-3 rounded transition-colors"
          >
            Go to NTA Portal <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

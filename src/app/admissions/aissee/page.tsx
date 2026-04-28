import PageHeader from '@/components/PageHeader';
import { EXTERNAL_LINKS } from '@/data/content';
import { ExternalLink } from 'lucide-react';

export default function AisseePage() {
  return (
    <>
      <PageHeader
        title="AISSEE — All India Sainik Schools Entrance Examination"
        subtitle="The centralized entrance exam for admission to all Sainik Schools across India."
        breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'AISSEE' }]}
        accentText="The Gateway Exam"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="prose max-w-none text-[#4A5568] space-y-4">
          <p>The <strong>All India Sainik Schools Entrance Examination (AISSEE)</strong> is conducted annually by the <strong>National Testing Agency (NTA)</strong> on behalf of the Sainik Schools Society for admission to Class VI and Class IX across all Sainik Schools in India.</p>
          <p>The examination tests candidates on core academic subjects as well as language and intelligence — reflecting the holistic development expected of future defence officers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Class VI Syllabus',
              subjects: ['Mathematics (50 marks)', 'Language (25 marks)', 'Intelligence (25 marks)'],
            },
            {
              title: 'Class IX Syllabus',
              subjects: ['Mathematics (50 marks)', 'Science (25 marks)', 'English (25 marks)', 'Social Studies (25 marks)', 'Intelligence (25 marks)'],
            },
          ].map(({ title, subjects }) => (
            <div key={title} className="border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <ul className="space-y-2">
                {subjects.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-[#4A5568]"><span className="text-[#C8A84B]">•</span>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#0D1B2A] rounded-xl p-6 text-center">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-2">AISSEE 2026</div>
          <div className="text-white text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>18 January 2026</div>
          <div className="text-gray-400 text-sm mb-5">Examination conducted across India at NTA designated centres</div>
          <a href={EXTERNAL_LINKS.ntaAissee} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8A84B] hover:bg-[#e0c470] text-[#0D1B2A] font-bold px-6 py-3 rounded transition-colors">
            Register on NTA Portal <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

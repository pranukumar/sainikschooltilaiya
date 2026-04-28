import PageHeader from '@/components/PageHeader';

export default function ExaminationPage() {
  return (
    <>
      <PageHeader
        title="Examination"
        subtitle="A robust examination framework that prepares cadets for CBSE boards, NDA entrance, and competitive exams."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Examination' }]}
        accentText="Assessment Framework"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {[
          { title: 'Unit Tests & Class Tests', desc: 'Regular unit tests and class tests throughout the term assess day-to-day learning and help identify areas for improvement.' },
          { title: 'Half-Yearly Examinations', desc: 'Comprehensive half-yearly exams covering all subjects, conducted at the end of the first semester.' },
          { title: 'Annual / Final Examinations', desc: 'End-of-year examinations for Classes VI to X determining promotion to the next class.' },
          { title: 'CBSE Board Examinations', desc: 'Class X and XII board examinations as per CBSE schedule. SST cadets consistently achieve outstanding results.' },
          { title: 'UPSC NDA Examination', desc: 'Conducted twice a year by UPSC. SST cadets are specifically coached for the NDA written examination covering Mathematics, General Ability Test, and English.' },
          { title: 'SSB Interview Preparation', desc: 'Structured SSB preparation includes psychological tests, group tasks, conferences, and personal interviews — all aligned with OLQ assessment.' },
        ].map(({ title, desc }) => (
          <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
            <div className="w-2 bg-[#C8A84B] rounded-full shrink-0" />
            <div>
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

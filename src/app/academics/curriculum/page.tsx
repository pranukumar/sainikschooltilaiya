import PageHeader from '@/components/PageHeader';

export default function CurriculumPage() {
  return (
    <>
      <PageHeader
        title="Curriculum"
        subtitle="CBSE-affiliated Science stream from Class VI to XII, with a curriculum designed to excel at NDA and beyond."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Curriculum' }]}
        accentText="Academic Programme"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              level: 'Classes VI–VIII',
              label: 'Middle School',
              subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi', 'Physical Education', 'NCC', 'Computer Science'],
            },
            {
              level: 'Classes IX–X',
              label: 'Secondary',
              subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'English', 'Physical Education', 'NCC', 'Information Technology'],
            },
            {
              level: 'Class XI–XII',
              label: 'Senior Secondary (Science)',
              subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology / Computer Science', 'English (Core)', 'Physical Education', 'NCC'],
            },
            {
              level: 'NDA Preparation',
              label: 'Special Coaching',
              subjects: ['Advanced Mathematics', 'General Knowledge', 'English Comprehension', 'SSB Capsule — OLQ Development', 'Physical Training for NDA Standards'],
            },
          ].map(({ level, label, subjects }) => (
            <div key={level} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-[#0D1B2A] px-5 py-4">
                <div className="text-xs font-mono text-[#C8A84B] uppercase tracking-wider">{level}</div>
                <div className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{label}</div>
              </div>
              <ul className="p-5 space-y-2">
                {subjects.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-[#4A5568]">
                    <span className="text-[#C8A84B] mt-0.5">•</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#4A5568]">* Curriculum is as per CBSE guidelines. Contact the school for the latest academic structure.</p>
      </section>
    </>
  );
}

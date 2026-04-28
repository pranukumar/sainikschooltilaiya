import PageHeader from '@/components/PageHeader';

const DEPTS = [
  { name: 'Science', desc: 'Physics, Chemistry, Biology — hands-on learning in fully equipped labs.' },
  { name: 'Mathematics', desc: 'Strong mathematical foundation from middle school through NDA-level preparation.' },
  { name: 'English', desc: 'Comprehensive English instruction, English Language Lab, and communication skills development.' },
  { name: 'Social Studies', desc: 'History, Geography, Political Science, and Economics — building socially aware citizens.' },
  { name: 'Physical Education', desc: 'Structured PT, sports science, and physical conditioning aligned with armed forces standards.' },
  { name: 'NCC', desc: 'National Cadet Corps integrated into school life, building discipline, leadership, and military ethos.' },
];

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="Academic Departments"
        subtitle="Our dedicated academic departments form the intellectual backbone of Sainik School Tilaiya."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Departments' }]}
        accentText="Departments"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPTS.map(({ name, desc }) => (
            <div key={name} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-2 h-6 bg-[#C8A84B] rounded-full mb-3" />
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

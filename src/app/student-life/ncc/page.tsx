import PageHeader from '@/components/PageHeader';

export default function NCCPage() {
  return (
    <>
      <PageHeader
        title="NCC Training"
        subtitle="National Cadet Corps — building the officers of tomorrow through discipline, training, and national service."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'NCC' }]}
        accentText="National Cadet Corps"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4 text-[#4A5568] leading-relaxed">
          <p>NCC is an integral part of life at Sainik School Tilaiya. Every cadet receives structured NCC training — a core element of our mission to produce future defence officers with the right values, skills, and discipline.</p>
          <p>Cadets are enrolled in the NCC from an early stage, receiving training in drill, weapon handling, field craft, map reading, first aid, and leadership activities. The NCC training at SST is conducted by experienced officers and JCOs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'NCC B-Certificate', desc: 'All cadets completing Class XII at SST are eligible to appear for the NCC B-Certificate examination — a significant credential for SSB and NDA aspirants.' },
            { title: 'Annual NCC Camps', desc: 'Cadets attend annual NCC camps, including Combined Annual Training Camps (CATC), Republic Day camps, and other national-level events.' },
            { title: 'OLQ Development', desc: 'NCC training at SST specifically focuses on developing Officers\' Like Qualities (OLQs) — the very qualities evaluated in the SSB interview.' },
            { title: 'IPSC NCC Events', desc: 'SST cadets participate in IPSC and other inter-school NCC competitions, representing the school with distinction.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

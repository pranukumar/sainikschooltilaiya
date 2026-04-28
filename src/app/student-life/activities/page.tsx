import PageHeader from '@/components/PageHeader';

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Co-curricular Activities"
        subtitle="Beyond the classroom — a rich tapestry of cultural, literary, and creative pursuits."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Activities' }]}
        accentText="Beyond The Classroom"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Declamation & Debate', desc: 'Regular declamation contests, debate competitions, and elocution events develop confident public speakers and critical thinkers.' },
            { title: 'Cultural Programs', desc: 'Annual Day, Founder\'s Day celebrations, Republic Day preparations, and inter-house cultural competitions showcase cadet talent.' },
            { title: 'The Tilaiyan — School Magazine', desc: 'SST\'s annual school magazine, written and edited by cadets, documents school life, achievements, and creative work.' },
            { title: 'Inter-House Competitions', desc: 'Healthy competition across academics, sports, NCC, and cultural events — earning points towards the prestigious Cock House Trophy.' },
            { title: 'Music & Fine Arts', desc: 'Band, choir, painting, and creative arts as part of the holistic cadet development program.' },
            { title: 'Community Service', desc: 'Cadets actively participate in community outreach, blood donation drives, and social awareness programs.' },
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

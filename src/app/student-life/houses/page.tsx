import PageHeader from '@/components/PageHeader';
import { HOUSES } from '@/data/content';

export default function HousesPage() {
  return (
    <>
      <PageHeader
        title="School Houses"
        subtitle="12 houses, each with a proud identity, colour, and history — the bedrock of cadet life at SST."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Houses' }]}
        accentText="The 12 Houses"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A5568] max-w-3xl mb-10 leading-relaxed">
          The house system is the cornerstone of cadet life at Sainik School Tilaiya. Each cadet belongs to one of 12 houses, fostering healthy competition, leadership, and lifelong bonds. The prestigious <strong>Cock House Trophy</strong> is awarded annually to the best-performing house across academics, sports, and military activities.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {HOUSES.map(({ name, colour, light }) => (
            <div
              key={name}
              className="group rounded-xl overflow-hidden border-2 border-transparent hover:border-[#C8A84B] transition-all card-lift cursor-pointer text-center"
              style={{ background: light }}
            >
              <div className="py-4 flex items-center justify-center" style={{ background: colour }}>
                <span className="text-white text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {name[0]}
                </span>
              </div>
              <div className="py-3 px-2">
                <div className="font-bold text-sm" style={{ color: colour }}>{name}</div>
                <div className="text-xs text-[#4A5568] mt-0.5">House</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-[#0D1B2A] rounded-xl p-6 text-center">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-2">Annual Competition</div>
          <h2 className="text-white text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>The Cock House Trophy</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            Awarded to the house that achieves the highest aggregate score across academics, sports, NCC, and military activities over the academic year.
          </p>
        </div>
      </section>
    </>
  );
}

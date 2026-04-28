import PageHeader from '@/components/PageHeader';
import { EXTERNAL_LINKS } from '@/data/content';
import { ExternalLink } from 'lucide-react';

const NDA_SELECTIONS = [
  { year: '2024', count: 48 },
  { year: '2023', count: 52 },
  { year: '2022', count: 45 },
  { year: '2021', count: 40 },
  { year: '2020', count: 38 },
  { year: '2019', count: 55 },
  { year: '2018', count: 42 },
];

export default function NDAPage() {
  const maxCount = Math.max(...NDA_SELECTIONS.map((r) => r.count));

  return (
    <>
      <PageHeader
        title="NDA & Defence Career"
        subtitle="Sainik School Tilaiya's primary mission — to prepare cadets for the National Defence Academy and a life of service to the nation."
        breadcrumbs={[{ label: 'NDA & Defence' }]}
        accentText="Path to NDA"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* About NDA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'National Defence Academy (NDA)',
              location: 'Khadakwasla, Pune',
              desc: 'The premier tri-service training institution of India, NDA trains cadets of the Army, Navy, and Air Force. Entry is through the UPSC NDA examination conducted twice a year. SST has sent 1800+ cadets to NDA.',
              link: EXTERNAL_LINKS.ndaOfficial,
            },
            {
              title: 'Indian Naval Academy (INA)',
              location: 'Ezhimala, Kerala',
              desc: 'The largest naval academy in Asia, INA trains cadets for the Indian Navy. Sainik School Tilaiya alumni have served with distinction in all three armed forces.',
              link: null,
            },
          ].map(({ title, location, desc, link }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-xs font-mono text-[#C8A84B] uppercase tracking-wider mb-1">{location}</div>
              <h3 className="font-bold text-[#0D1B2A] text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{desc}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#C8A84B] flex items-center gap-1 hover:underline">
                  Official Website <ExternalLink size={11} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* NDA Selections Chart */}
        <div>
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            NDA Selections from SST (Recent Years)
          </h2>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-end gap-4 h-48">
              {NDA_SELECTIONS.map(({ year, count }) => (
                <div key={year} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs font-mono text-[#0D1B2A] font-bold">{count}</div>
                  <div
                    className="w-full bg-gradient-to-t from-[#0D1B2A] to-[#1a2e45] rounded-t transition-all hover:from-[#C8A84B] hover:to-[#e0c470]"
                    style={{ height: `${(count / maxCount) * 100}%` }}
                  />
                  <div className="text-[10px] text-[#4A5568] font-mono">{year}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-xs text-[#4A5568]">Year-wise NDA selections (indicative data)</div>
          </div>
        </div>

        {/* OLQ */}
        <div className="bg-[#0D1B2A] rounded-xl p-8">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">SSB Preparation</div>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Officers' Like Qualities (OLQs)</h2>
          <p className="text-gray-400 text-sm mb-6">SST training specifically develops the 15 OLQs assessed at the Services Selection Board (SSB).</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              'Effective Intelligence', 'Reasoning Ability', 'Organising Ability', 'Power of Expression',
              'Social Adaptability', 'Cooperation', 'Sense of Responsibility', 'Initiative',
              'Self Confidence', 'Speed of Decision', 'Ability to Influence', 'Liveliness',
              'Determination', 'Courage', 'Stamina',
            ].map((olq) => (
              <div key={olq} className="text-center p-3 bg-white/5 rounded text-xs text-gray-300 hover:bg-[#C8A84B]/10 hover:text-[#C8A84B] transition-colors">
                {olq}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

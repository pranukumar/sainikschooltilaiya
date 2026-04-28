import PageHeader from '@/components/PageHeader';

const ALUMNI = [
  { name: 'Air Marshal AK Bharti', designation: 'DCSAS, Indian Air Force', batch: 'Alumni', note: 'Visited SST in 2025, inspiring current cadets.' },
  { name: 'Shri CK Anil, IAS', designation: 'Principal Secretary, Bihar', batch: 'Alumni', note: 'Distinguished civil servant from the Tilaiyan fraternity.' },
];

export default function NotableAlumniPage() {
  return (
    <>
      <PageHeader
        title="Notable Alumni"
        subtitle="Distinguished Tilaiyans who have brought honour to the school and served the nation with excellence."
        breadcrumbs={[{ label: 'Alumni', href: '/alumni' }, { label: 'Notable Alumni' }]}
        accentText="Hall of Honour"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {ALUMNI.map((a) => (
          <div key={a.name} className="flex gap-6 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#1a2e45] flex items-center justify-center shrink-0 border-2 border-[#C8A84B]">
              <span className="text-[#C8A84B] font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                {a.name.split(' ').filter(w => /[A-Z]/.test(w[0])).slice(-1)[0]?.[0] ?? 'A'}
              </span>
            </div>
            <div>
              <div className="text-xs font-mono text-[#C8A84B] uppercase tracking-wider mb-1">{a.batch}</div>
              <h3 className="font-bold text-[#0D1B2A] text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{a.name}</h3>
              <div className="text-[#4A5568] text-sm mb-2">{a.designation}</div>
              {a.note && <div className="text-xs text-[#4A5568] italic">{a.note}</div>}
            </div>
          </div>
        ))}
        <div className="bg-[#F8F9FA] rounded-xl p-6 text-center">
          <div className="text-[#4A5568] text-sm">
            This is a growing list. More distinguished alumni will be added as we compile records.{' '}
            <a href="/alumni/register" className="text-[#C8A84B] font-semibold hover:underline">Register as an alumnus</a> to be featured.
          </div>
        </div>
      </section>
    </>
  );
}

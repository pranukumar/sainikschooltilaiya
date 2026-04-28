import PageHeader from '@/components/PageHeader';

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        title="Results"
        subtitle="CBSE board results and NDA selections — a testament to the academic excellence at SST."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Results' }]}
        accentText="Academic Achievements"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-[#0D1B2A] rounded-xl p-6 text-center">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-2">Legacy of Excellence</div>
          <div className="text-white text-4xl font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>1800+</div>
          <div className="text-gray-400 text-sm">Total NDA Selections Since Inception</div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0D1B2A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>CBSE Board Results Archive</h2>
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 text-xs uppercase text-[#4A5568] font-semibold tracking-wider">Year</th>
                  <th className="text-left px-5 py-3 text-xs uppercase text-[#4A5568] font-semibold tracking-wider">Pass %</th>
                  <th className="text-left px-5 py-3 text-xs uppercase text-[#4A5568] font-semibold tracking-wider">Distinction</th>
                  <th className="text-left px-5 py-3 text-xs uppercase text-[#4A5568] font-semibold tracking-wider">NDA Selected</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: '2024', pass: '98%', distinction: '35+', nda: '48' },
                  { year: '2023', pass: '97%', distinction: '30+', nda: '52' },
                  { year: '2022', pass: '99%', distinction: '28+', nda: '45' },
                  { year: '2021', pass: '100%', distinction: '22+', nda: '40' },
                ].map((row, i) => (
                  <tr key={row.year} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3 font-mono font-bold text-[#0D1B2A]">{row.year}</td>
                    <td className="px-5 py-3 text-[#1e8449] font-semibold">{row.pass}</td>
                    <td className="px-5 py-3">{row.distinction}</td>
                    <td className="px-5 py-3 text-[#C8A84B] font-bold">{row.nda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#4A5568] mt-2">* Indicative data. Refer to official school records for verified figures.</p>
        </div>
      </section>
    </>
  );
}

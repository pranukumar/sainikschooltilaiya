import PageHeader from '@/components/PageHeader';
import { EXTERNAL_LINKS } from '@/data/content';
import { ExternalLink } from 'lucide-react';

const FEE_ITEMS = [
  { item: 'Tuition Fee', amount: '₹35,400' },
  { item: 'Boarding & Lodging', amount: '₹48,000' },
  { item: 'Medical & Amenities', amount: '₹12,000' },
  { item: 'Sports & Co-curricular', amount: '₹15,000' },
  { item: 'Uniform & Kit', amount: '₹18,000' },
  { item: 'Caution Deposit (Refundable)', amount: '₹5,000' },
  { item: 'Miscellaneous', amount: '₹7,181' },
];

export default function FeeStructurePage() {
  return (
    <>
      <PageHeader
        title="Fee Structure"
        subtitle="Complete fee breakdown for Academic Session 2025–26. Subject to revision by school authority."
        breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Fee Structure' }]}
        accentText="Financial Information"
      />

      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm mb-10">
          <div className="bg-[#0D1B2A] px-6 py-4">
            <h2 className="text-[#C8A84B] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Annual Fee — 2025–26 (Approx.)
            </h2>
            <p className="text-gray-400 text-xs mt-1">For Class VI & IX (All categories)</p>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs uppercase text-[#4A5568] font-semibold tracking-wider">Fee Component</th>
                <th className="text-right px-6 py-3 text-xs uppercase text-[#4A5568] font-semibold tracking-wider">Amount (Per Annum)</th>
              </tr>
            </thead>
            <tbody>
              {FEE_ITEMS.map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="px-6 py-3 text-sm text-[#0D1B2A]">{row.item}</td>
                  <td className="px-6 py-3 text-sm font-semibold text-right text-[#0D1B2A]" style={{ fontFamily: "'DM Mono', monospace" }}>{row.amount}</td>
                </tr>
              ))}
              <tr className="bg-[#0D1B2A] text-white">
                <td className="px-6 py-4 font-bold text-[#C8A84B]">Total (Approx.)</td>
                <td className="px-6 py-4 font-bold text-right text-[#C8A84B]" style={{ fontFamily: "'DM Mono', monospace" }}>₹1,40,581</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scholarships note */}
        <div className="bg-[#F8F9FA] border border-[#C8A84B]/20 rounded-xl p-6">
          <h3 className="font-bold text-[#0D1B2A] text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Scholarships Available
          </h3>
          <ul className="space-y-2 text-sm text-[#4A5568]">
            {[
              'State Government Scholarships (as per state policy)',
              'Ministry of Defence Scholarships for deserving cadets',
              'National Scholarship Portal (NSP) — based on income criteria',
              'Alumni-instituted scholarships (Batch-specific)',
            ].map((s) => (
              <li key={s} className="flex gap-2"><span className="text-[#C8A84B]">•</span>{s}</li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <a href={EXTERNAL_LINKS.nationalScholarshipPortal} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8A84B] hover:underline">
              National Scholarship Portal <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-[#4A5568] text-center">
          * Fee structure is approximate and subject to revision. Contact the school admission office for the latest details.
        </p>
      </section>
    </>
  );
}

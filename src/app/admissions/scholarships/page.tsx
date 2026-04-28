import PageHeader from '@/components/PageHeader';
import { EXTERNAL_LINKS } from '@/data/content';
import { ExternalLink } from 'lucide-react';

const SCHOLARSHIPS = [
  {
    name: 'State Government Scholarship',
    provider: 'State Government (Jharkhand)',
    eligibility: 'Based on merit and domicile. Varies by state policy.',
    amount: 'As per state norms',
    link: null,
  },
  {
    name: 'Ministry of Defence Scholarship',
    provider: 'MoD / Sainik Schools Society',
    eligibility: 'Awarded to deserving cadets based on academic performance and financial need.',
    amount: 'Partial to full fee coverage',
    link: EXTERNAL_LINKS.sainikSchoolsSociety,
  },
  {
    name: 'National Scholarship Portal (NSP)',
    provider: 'Ministry of Education, GoI',
    eligibility: 'Family income below ₹3.5 lakh per annum. Merit-based.',
    amount: 'Up to ₹1,000/month',
    link: EXTERNAL_LINKS.nationalScholarshipPortal,
  },
  {
    name: 'Alumni-Instituted Scholarships',
    provider: 'SST Alumni Batches (e.g., Batch 1974–75)',
    eligibility: 'Meritorious cadets from economically weaker sections. Batch-specific criteria.',
    amount: 'Varies by batch',
    link: null,
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <PageHeader
        title="Scholarships"
        subtitle="Financial assistance available to ensure no deserving cadet is denied the opportunity."
        breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Scholarships' }]}
        accentText="Financial Aid"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {SCHOLARSHIPS.map((sch) => (
          <div key={sch.name} className="rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-bold text-[#0D1B2A] text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{sch.name}</h3>
              {sch.link && (
                <a href={sch.link} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 text-xs text-[#C8A84B] flex items-center gap-1 hover:underline">
                  Portal <ExternalLink size={11} />
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-[10px] text-[#C8A84B] font-mono uppercase tracking-wider mb-1">Provider</div>
                <div className="text-[#4A5568]">{sch.provider}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#C8A84B] font-mono uppercase tracking-wider mb-1">Eligibility</div>
                <div className="text-[#4A5568]">{sch.eligibility}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#C8A84B] font-mono uppercase tracking-wider mb-1">Amount</div>
                <div className="text-[#4A5568] font-semibold">{sch.amount}</div>
              </div>
            </div>
          </div>
        ))}
        <p className="text-xs text-[#4A5568] mt-4">Contact the school office for current scholarship eligibility and application procedures.</p>
      </section>
    </>
  );
}

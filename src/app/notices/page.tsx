import PageHeader from '@/components/PageHeader';
import { FileText, Download, Calendar } from 'lucide-react';

const NOTICES = [
  { date: '20 Apr 2026', title: 'Admission Notice — Session 2026–27', type: 'Admission', important: true },
  { date: '15 Apr 2026', title: 'Fee Payment Schedule — April 2026', type: 'Finance', important: false },
  { date: '10 Apr 2026', title: 'Annual Sports Day 2026 — Programme', type: 'Events', important: false },
  { date: '01 Apr 2026', title: 'Academic Calendar 2026–27', type: 'Academic', important: true },
  { date: '25 Mar 2026', title: 'Tender Notice — Canteen Services', type: 'Tender', important: false },
  { date: '18 Mar 2026', title: 'RTI Application Procedure & Officer Contact', type: 'RTI', important: false },
  { date: '05 Mar 2026', title: 'AISSEE 2026 Result — Shortlisted Candidates', type: 'Admission', important: true },
  { date: '28 Feb 2026', title: 'Founder\'s Day 2026 — Date Announcement', type: 'Events', important: false },
  { date: '15 Feb 2026', title: 'CBSE Practical Examination Schedule', type: 'Academic', important: false },
  { date: '01 Feb 2026', title: 'Half-Yearly Fee Collection — Notice', type: 'Finance', important: false },
];

const TYPE_COLORS: Record<string, string> = {
  Admission: '#C0392B',
  Finance: '#1a5276',
  Events: '#1e8449',
  Academic: '#6c3483',
  Tender: '#b7950b',
  RTI: '#4A5568',
};

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        title="Notice Board"
        subtitle="Official circulars, notices, tenders, and announcements from Sainik School Tilaiya."
        breadcrumbs={[{ label: 'Notice Board' }]}
        accentText="Official Notices"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Admission', 'Academic', 'Finance', 'Events', 'Tender', 'RTI'].map((type) => (
            <button
              key={type}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                type === 'All'
                  ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]'
                  : 'border-gray-200 text-[#4A5568] hover:border-[#C8A84B] hover:text-[#C8A84B]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {NOTICES.map((notice, i) => (
            <div
              key={i}
              className={`group flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-md ${
                notice.important ? 'border-[#C0392B]/30 bg-[#C0392B]/5' : 'border-gray-100'
              }`}
            >
              <FileText size={18} className={notice.important ? 'text-[#C0392B]' : 'text-[#C8A84B]'} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded text-white"
                    style={{ background: TYPE_COLORS[notice.type] || '#4A5568' }}
                  >
                    {notice.type}
                  </span>
                  {notice.important && (
                    <span className="text-[9px] font-bold text-[#C0392B] uppercase tracking-widest">Important</span>
                  )}
                </div>
                <div className="font-semibold text-[#0D1B2A] text-sm group-hover:text-[#C8A84B] transition-colors truncate">
                  {notice.title}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="text-xs text-[#4A5568] flex items-center gap-1">
                  <Calendar size={11} />{notice.date}
                </div>
                <button className="p-1.5 rounded hover:bg-[#0D1B2A] hover:text-white transition-colors text-[#4A5568]">
                  <Download size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-[#F8F9FA] rounded-xl text-xs text-[#4A5568] text-center">
          For RTI queries, contact the Public Information Officer at {' '}
          <a href="mailto:sainikschooltilaiya@gmail.com" className="text-[#C8A84B] hover:underline">sainikschooltilaiya@gmail.com</a>
        </div>
      </section>
    </>
  );
}

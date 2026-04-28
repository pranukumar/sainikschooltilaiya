import PageHeader from '@/components/PageHeader';
import { SCHOOL } from '@/data/content';

const STAFF = [
  { name: SCHOOL.principal, designation: 'Principal', dept: 'Administration' },
  { name: 'Lt Col (Retd) —', designation: 'Vice Principal (Academics)', dept: 'Academics' },
  { name: 'Maj (Retd) —', designation: 'Adjutant (Military Wing)', dept: 'Military' },
  { name: 'Mr —', designation: 'Head of Department – Mathematics', dept: 'Academics' },
  { name: 'Mr —', designation: 'Head of Department – Science', dept: 'Academics' },
  { name: 'Mr —', designation: 'Head of Department – English', dept: 'Academics' },
  { name: 'Mr —', designation: 'Physical Training Instructor (PTI)', dept: 'Sports' },
  { name: 'Dr —', designation: 'Medical Officer (MO)', dept: 'Healthcare' },
];

export default function AdministrationPage() {
  return (
    <>
      <PageHeader
        title="Administration"
        subtitle="Meet the dedicated officers and faculty who lead Sainik School Tilaiya."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Administration' }]}
        accentText="Our Team"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAFF.map((member, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#1a2e45] flex items-center justify-center mx-auto mb-3 group-hover:border-2 group-hover:border-[#C8A84B] transition-all">
                <span className="text-[#C8A84B] font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {member.name.trim()[0]}
                </span>
              </div>
              <div className="text-[10px] text-[#C8A84B] font-mono uppercase tracking-wider mb-1">{member.dept}</div>
              <div className="font-bold text-[#0D1B2A] text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{member.name}</div>
              <div className="text-[#4A5568] text-xs mt-1">{member.designation}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-center text-[#4A5568]">
          * Detailed staff directory with contact information available at the school office.
        </p>
      </section>
    </>
  );
}

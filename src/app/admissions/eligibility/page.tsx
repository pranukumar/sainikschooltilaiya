import PageHeader from '@/components/PageHeader';

export default function EligibilityPage() {
  return (
    <>
      <PageHeader
        title="Eligibility Criteria"
        subtitle="Who can apply to Sainik School Tilaiya — age, class, and qualification requirements."
        breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Eligibility' }]}
        accentText="Am I Eligible?"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              class: 'Class VI',
              age: '10–12 years (as on 31 March of admission year)',
              qualification: 'Must have passed or be appearing in Class V',
              gender: 'Boys and Girls',
              reservation: 'As per government norms (SC/ST/OBC/Defence)',
            },
            {
              class: 'Class IX',
              age: '13–15 years (as on 31 March of admission year)',
              qualification: 'Must have passed or be appearing in Class VIII',
              gender: 'Boys and Girls',
              reservation: 'As per government norms (SC/ST/OBC/Defence)',
            },
          ].map(({ class: cls, age, qualification, gender, reservation }) => (
            <div key={cls} className="rounded-xl border-2 border-[#C8A84B]/20 overflow-hidden hover:border-[#C8A84B] transition-colors">
              <div className="bg-[#0D1B2A] px-6 py-4">
                <div className="font-bold text-[#C8A84B] text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{cls} Admission</div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: 'Age Limit', value: age },
                  { label: 'Qualification', value: qualification },
                  { label: 'Gender', value: gender },
                  { label: 'Reservation', value: reservation },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs font-bold text-[#C8A84B] uppercase tracking-wider mb-1">{label}</div>
                    <div className="text-sm text-[#4A5568]">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[#F8F9FA] rounded-xl p-6 text-sm text-[#4A5568]">
          <strong className="text-[#0D1B2A]">Note:</strong> Age criteria, reservations, and other eligibility conditions are subject to the official AISSEE notification. Always refer to the latest NTA AISSEE brochure for accurate details.
        </div>
      </section>
    </>
  );
}

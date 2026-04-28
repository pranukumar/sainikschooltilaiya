import PageHeader from '@/components/PageHeader';

export default function AlumniContributionsPage() {
  return (
    <>
      <PageHeader
        title="Alumni Contributions"
        subtitle="How Tilaiyans have given back — building the school that built them."
        breadcrumbs={[{ label: 'Alumni', href: '/alumni' }, { label: 'Contributions' }]}
        accentText="Giving Back"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {[
          { title: 'English Language Lab', by: 'Alumni Batch 1974–75 to 1982 + Govt. of Jharkhand', desc: 'State-of-the-art English Language Lab inaugurated in 2025. Fully equipped for modern language learning, benefiting all cadets.' },
          { title: 'High Mast National Flag', by: 'Alumni Batches', desc: 'The iconic high mast national flag at the parade ground was a gift from SST alumni, symbolising their pride in the nation and their school.' },
          { title: 'Alumni Scholarships', by: 'Various Batches', desc: 'Several batches have instituted merit-cum-need scholarships for deserving cadets, ensuring financial constraints never hinder a cadet\'s potential.' },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-xs font-mono text-[#C8A84B] uppercase tracking-wider mb-2">{item.by}</div>
            <h3 className="font-bold text-[#0D1B2A] text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
        <div className="bg-[#F8F9FA] rounded-xl p-6 text-sm text-[#4A5568]">
          To make a contribution or enquire about sponsoring infrastructure, scholarships, or events, please contact us at{' '}
          <a href="mailto:sainikschooltilaiya@gmail.com" className="text-[#C8A84B] hover:underline">sainikschooltilaiya@gmail.com</a>.
        </div>
      </section>
    </>
  );
}

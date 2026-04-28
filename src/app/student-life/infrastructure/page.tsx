import PageHeader from '@/components/PageHeader';

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        title="Infrastructure"
        subtitle="World-class facilities across our 250+ acre campus at the scenic Tilaiya Dam."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Infrastructure' }]}
        accentText="Our Campus"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Lt Col Gadeock Stadium', desc: 'The iconic parade ground — heart of SST\'s military life, used for drill, PT, and school ceremonies.' },
            { name: 'Swimming Pool', desc: 'Full-size swimming pool used for competitive training and aquatic sports.' },
            { name: 'Firing Range', desc: 'Fully equipped small-arms firing range for NCC training and marksmanship development.' },
            { name: 'English Language Lab', desc: 'State-of-the-art language lab inaugurated in 2025, equipped with modern audio-visual learning systems.' },
            { name: 'Science Laboratories', desc: 'Physics, Chemistry, and Biology labs equipped to CBSE standards for Class XI–XII practical sessions.' },
            { name: 'School Library', desc: 'Extensive library housing thousands of volumes — academic references, general literature, and defence history.' },
            { name: '12 House Hostels', desc: 'Residential hostels for all 12 houses, providing a structured home environment for cadets.' },
            { name: 'Sports Grounds', desc: 'Dedicated grounds for football, hockey, cricket, basketball, volleyball, and athletics.' },
            { name: 'Indoor Sports Hall', desc: 'Badminton, table tennis, boxing, and indoor training.' },
            { name: 'Horse Riding Arena', desc: 'Equestrian training facility — a rare and prestigious sports offering.' },
            { name: 'Medical Centre (MI Room)', desc: '24×7 medical facility staffed by a trained Medical Officer for cadet healthcare.' },
            { name: 'Auditorium & Assembly Hall', desc: 'Venue for school assemblies, cultural programs, and guest lectures.' },
          ].map(({ name, desc }) => (
            <div key={name} className="p-5 rounded-xl border border-gray-100 hover:border-[#C8A84B]/30 hover:shadow-md transition-all">
              <div className="w-2 h-6 bg-[#C8A84B] rounded-full mb-3" />
              <h3 className="font-bold text-[#0D1B2A] text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
              <p className="text-[#4A5568] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

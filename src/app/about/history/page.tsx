import PageHeader from '@/components/PageHeader';

const TIMELINE = [
  {
    year: '1961',
    title: 'Sainik Schools Act',
    description: 'The Government of India passes the Sainik Schools Act, establishing the framework for defence preparatory schools across India.',
  },
  {
    year: '1963',
    title: 'Foundation Stone Laid',
    description: 'Sainik School Tilaiya is established on 16 September 1963 at the scenic Tilaiya Dam, Koderma, Jharkhand, as part of the national vision to produce officers for the armed forces.',
  },
  {
    year: '1970s',
    title: 'First NDA Selections',
    description: 'The first cadets of Sainik School Tilaiya begin making their mark at the National Defence Academy, beginning a proud tradition of NDA selections.',
  },
  {
    year: '1980s',
    title: 'IPSC Membership',
    description: 'Sainik School Tilaiya becomes a proud member of the Indian Public School Conference (IPSC), further strengthening its national academic and co-curricular standing.',
  },
  {
    year: '1990s',
    title: 'Expansion & Infrastructure',
    description: 'Major expansion of campus infrastructure, including sports facilities, hostels, and academic blocks, accommodating a growing cadet strength.',
  },
  {
    year: '2000s',
    title: 'Academic Achievements',
    description: 'Consistent excellence in CBSE board results with cadets achieving distinction in national-level competitive examinations.',
  },
  {
    year: '2021',
    title: 'Girls Admitted',
    description: 'In a historic milestone, Sainik School Tilaiya begins admitting girl cadets from Academic Session 2021–22, in line with the national policy for Sainik Schools.',
  },
  {
    year: '2025',
    title: '63rd Founder\'s Day',
    description: "The 63rd Founder's Day is celebrated on 16 September 2025 with great pomp — alumni meet, cultural programs, and the inauguration of the English Language Lab.",
  },
  {
    year: '2026',
    title: 'Republic Day Pride',
    description: "Cdt Vaishnavi Anand becomes the first girl cadet from Sainik School Tilaiya to march in the Republic Day Parade — a landmark moment in the school's history.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="History & Legacy"
        subtitle="From 1963 to today — six decades of excellence, discipline, and service to the nation."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'History' }]}
        accentText="Our Journey"
      />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8A84B] via-[#C8A84B]/40 to-transparent" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative flex gap-8">
                {/* Year circle */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0D1B2A] border-2 border-[#C8A84B] flex items-center justify-center z-10 relative">
                    <span className="text-[#C8A84B] text-[9px] font-bold font-mono text-center leading-tight">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-wider mb-1">{item.year}</div>
                  <h3 className="font-bold text-[#0D1B2A] text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

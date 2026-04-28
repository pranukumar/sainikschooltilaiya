import PageHeader from '@/components/PageHeader';

export default function AlumniEventsPage() {
  return (
    <>
      <PageHeader
        title="Alumni Events"
        subtitle="Reunions, Founder's Day meets, and events that bring Tilaiyans together."
        breadcrumbs={[{ label: 'Alumni', href: '/alumni' }, { label: 'Events' }]}
        accentText="Together Again"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {[
          { title: "63rd Founder's Day Alumni Meet — 2025", date: '16 September 2025', desc: "A grand reunion of Tilaiyans at the school campus. Highlights included the English Language Lab inauguration, cultural programs, sports, and a formal dinner." },
          { title: "62nd Founder's Day — 2024", date: '16 September 2024', desc: "Alumni from across the country gathered to celebrate another milestone year. Includes sports day, memorial service, and felicitation of distinguished alumni." },
        ].map((ev) => (
          <div key={ev.title} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-xs font-mono text-[#C8A84B] uppercase tracking-wider mb-2">{ev.date}</div>
            <h3 className="font-bold text-[#0D1B2A] text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{ev.title}</h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">{ev.desc}</p>
          </div>
        ))}
        <div className="bg-[#0D1B2A] rounded-xl p-6 text-center">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-2">Save the Date</div>
          <div className="text-white text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>64th Founder's Day</div>
          <div className="text-gray-400 text-sm">16 September 2026 — Sainik School Tilaiya</div>
        </div>
      </section>
    </>
  );
}

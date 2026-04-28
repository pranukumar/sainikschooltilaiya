import PageHeader from '@/components/PageHeader';
import { SPORTS } from '@/data/content';

export default function SportsPage() {
  return (
    <>
      <PageHeader
        title="Sports & Athletics"
        subtitle="A comprehensive sports program designed to build physical excellence, mental toughness, and team spirit."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Sports' }]}
        accentText="Physical Excellence"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A5568] max-w-3xl mb-10 leading-relaxed">
          Physical fitness and sportsmanship are central to the Tilaiyan way of life. Our cadets compete at district, state, and national levels across multiple disciplines — developing not just athletic ability, but resilience, leadership, and the competitive spirit that defines future officers.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SPORTS.map((sport, i) => (
            <div
              key={sport}
              className="p-4 rounded-xl border border-gray-100 text-center hover:border-[#C8A84B]/40 hover:shadow-md transition-all card-lift"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="text-2xl mb-2">
                {['🏃', '⚽', '🏑', '🏏', '🏀', '🏐', '🐎', '🎾', '🏸', '🥊', '🏅', '🚣', '🧗', '🎯'][i % 14]}
              </div>
              <div className="font-semibold text-[#0D1B2A] text-sm">{sport}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

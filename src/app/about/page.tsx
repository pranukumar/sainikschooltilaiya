import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { SCHOOL } from '@/data/content';
import { ChevronRight, BookOpen, Target, User, Users, MapPin } from 'lucide-react';

const ABOUT_SECTIONS = [
  {
    href: '/about/history',
    icon: BookOpen,
    title: 'History & Legacy',
    description: 'Trace our journey from 1963 to the present — six decades of excellence, service, and national pride.',
  },
  {
    href: '/about/vision-mission',
    icon: Target,
    title: 'Vision & Mission',
    description: "Our guiding principles, the school's pledge, and our commitment to the nation's future leaders.",
  },
  {
    href: '/about/principal-message',
    icon: User,
    title: "Principal's Message",
    description: `A personal message from ${SCHOOL.principal}, sharing the vision and values that define life at SST.`,
  },
  {
    href: '/about/administration',
    icon: Users,
    title: 'Administration',
    description: 'Meet our dedicated faculty and administrative staff who shape the Sainik School experience.',
  },
  {
    href: '/about/campus',
    icon: MapPin,
    title: 'Campus & Facilities',
    description: 'Explore our 250+ acre campus at the scenic Tilaiya Dam — parade grounds, labs, hostels, and more.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Sainik School Tilaiya"
        subtitle="Established in 1963, we have been forging leaders of character, intellect, and integrity for over six decades."
        breadcrumbs={[{ label: 'About' }]}
        accentText="Our Story"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Legacy of Honour and Excellence
            </h2>
            <div className="space-y-4 text-[#4A5568] leading-relaxed">
              <p>
                Sainik School Tilaiya is one of the prestigious Sainik Schools established by the Ministry of Defence, Government of India, under the Sainik Schools Society. Founded on <strong>{SCHOOL.established}</strong>, the school has been a cradle of excellence, preparing young cadets for life, service, and leadership.
              </p>
              <p>
                Located at the picturesque Tilaiya Dam in District Koderma, Jharkhand, our school spans over 250 acres of scenic landscape, providing an environment that is both conducive to rigorous academic pursuit and character development.
              </p>
              <p>
                Affiliated to CBSE and a proud member of the Indian Public School Conference (IPSC), we offer education from Class VI to XII with a focus on the Science stream and NDA-preparatory curriculum. Over the decades, Sainik School Tilaiya has sent more than 1,800 cadets to the National Defence Academy and other premier defence institutions.
              </p>
              <p>
                Girls have been admitted to the school since Academic Session 2021–22, reflecting the school's evolution with the nation's changing landscape while holding firm to its founding values of discipline, integrity, and excellence.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-3">
            {[
              { label: 'Established', value: SCHOOL.established },
              { label: 'Principal', value: SCHOOL.principal },
              { label: 'Affiliation', value: SCHOOL.affiliation },
              { label: 'Managed By', value: 'Sainik Schools Society, MoD' },
              { label: 'Classes', value: 'VI to XII (Science)' },
              { label: 'Girls Admitted Since', value: SCHOOL.girlsAdmittedSince },
              { label: 'NDA Selections', value: SCHOOL.ndaSelections },
              { label: 'Campus Size', value: '250+ Acres' },
              { label: 'Number of Houses', value: `${SCHOOL.houses} Houses` },
              { label: 'Total Cadets', value: SCHOOL.cadets },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-start py-2 border-b border-gray-100 text-sm">
                <span className="text-[#4A5568]">{label}</span>
                <span className="font-semibold text-[#0D1B2A] text-right max-w-[55%]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-sections grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_SECTIONS.map(({ href, icon: Icon, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group p-6 rounded-xl border border-gray-100 hover:border-[#C8A84B]/40 hover:shadow-lg transition-all card-lift"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center mb-4 group-hover:bg-[#0D1B2A] transition-colors">
                <Icon size={20} className="text-[#0D1B2A] group-hover:text-[#C8A84B] transition-colors" />
              </div>
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-2 group-hover:text-[#C8A84B] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                {title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{description}</p>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#C8A84B] group-hover:gap-2 transition-all">
                Read More <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

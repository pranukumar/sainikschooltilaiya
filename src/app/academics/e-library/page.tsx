import PageHeader from '@/components/PageHeader';
import { ExternalLink } from 'lucide-react';
import { EXTERNAL_LINKS } from '@/data/content';

const RESOURCES = [
  { title: 'CBSE Sample Papers', desc: 'Official CBSE sample question papers for Class X and XII.', link: EXTERNAL_LINKS.cbse },
  { title: 'NDA Past Year Papers', desc: 'Previous years\' UPSC NDA examination question papers.', link: EXTERNAL_LINKS.ndaOfficial },
  { title: 'Mathematics Reference Books', desc: 'Recommended titles: R.D. Sharma, S.L. Loney (Trigonometry), Hall & Knight.' },
  { title: 'Science Reference Books', desc: 'H.C. Verma (Physics), P. Bahadur (Chemistry), NCERT textbooks.' },
  { title: 'English Language Resources', desc: 'Wren & Martin Grammar, Word Power Made Easy (Norman Lewis), SST English Language Lab.' },
  { title: 'General Knowledge', desc: 'Manorama Yearbook, Lucent\'s GK, current affairs compilations for NDA GK paper.' },
];

export default function ELibraryPage() {
  return (
    <>
      <PageHeader
        title="e-Library"
        subtitle="Digital study resources, past year papers, and recommended reading for academic and NDA preparation."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'e-Library' }]}
        accentText="Study Resources"
      />
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RESOURCES.map(({ title, desc, link }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#0D1B2A] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer"
                    className="text-[#C8A84B] shrink-0 hover:scale-110 transition-transform">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[#F8F9FA] rounded-xl p-6 text-center">
          <div className="text-[#4A5568] text-sm">
            The school library houses 5,000+ volumes. Cadets can access digital resources through the English Language Lab terminals.
          </div>
        </div>
      </section>
    </>
  );
}

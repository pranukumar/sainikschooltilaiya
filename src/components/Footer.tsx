import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, Share2, PlayCircle } from 'lucide-react';
import { SCHOOL, EXTERNAL_LINKS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-gray-300">
      {/* Tricolour bar top */}
      <div className="tricolour-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C8A84B] shrink-0 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Sainik School Tilaiya Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Sainik School Tilaiya
                </div>
                <div className="text-[#C8A84B] text-xs mt-0.5">सैनिक स्कूल तिलैया</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Established in 1963, preparing cadets for excellence in defence and life through academic rigour, military discipline, and character formation.
            </p>
            <div className="text-xs font-bold text-[#C8A84B] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "Forward Ever"
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#C8A84B] flex items-center justify-center transition-colors">
                <Share2 size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#C8A84B] flex items-center justify-center transition-colors">
                <PlayCircle size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C8A84B] font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'About the School', href: '/about' },
                { label: "Principal's Message", href: '/about/principal-message' },
                { label: 'Admissions Process', href: '/admissions/process' },
                { label: 'Fee Structure', href: '/admissions/fee-structure' },
                { label: 'NDA & Defence Career', href: '/nda' },
                { label: 'Student Life', href: '/student-life' },
                { label: 'School Houses', href: '/student-life/houses' },
                { label: 'Notice Board', href: '/notices' },
                { label: 'Photo Gallery', href: '/gallery' },
                { label: 'Alumni Network', href: '/alumni' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#C8A84B] transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#C8A84B]/40 group-hover:bg-[#C8A84B] transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h3 className="text-[#C8A84B] font-bold text-sm uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'NTA AISSEE Portal', href: EXTERNAL_LINKS.ntaAissee },
                { label: 'Sainik Schools Society', href: EXTERNAL_LINKS.sainikSchoolsSociety },
                { label: 'National Scholarship Portal', href: EXTERNAL_LINKS.nationalScholarshipPortal },
                { label: 'CBSE Official', href: EXTERNAL_LINKS.cbse },
                { label: 'NDA Official', href: EXTERNAL_LINKS.ndaOfficial },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="hover:text-[#C8A84B] transition-colors flex items-center gap-1.5">
                    <ExternalLink size={10} className="shrink-0 text-[#C8A84B]/60" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-[#C8A84B] font-bold text-sm uppercase tracking-widest mt-6 mb-4">Compliance</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/notices" className="hover:text-[#C8A84B] transition-colors">RTI Information</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-[#C8A84B] transition-colors">Sitemap</Link></li>
              <li><Link href="/notices" className="hover:text-[#C8A84B] transition-colors">Tenders</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C8A84B] font-bold text-sm uppercase tracking-widest mb-4">Contact Us</h3>
            <div className="space-y-3 text-xs">
              <div className="flex gap-2.5">
                <MapPin size={14} className="text-[#C8A84B] shrink-0 mt-0.5" />
                <div className="leading-relaxed">{SCHOOL.address}</div>
              </div>
              <div className="flex gap-2.5">
                <Phone size={14} className="text-[#C8A84B] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${SCHOOL.phone.replace(/\s/g, '')}`} className="hover:text-[#C8A84B] transition-colors block">{SCHOOL.phone}</a>
                  <a href={`tel:${SCHOOL.phoneMobile.replace(/\s/g, '')}`} className="hover:text-[#C8A84B] transition-colors block mt-0.5">{SCHOOL.phoneMobile}</a>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Mail size={14} className="text-[#C8A84B] shrink-0 mt-0.5" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-[#C8A84B] transition-colors break-all">{SCHOOL.email}</a>
              </div>
            </div>

            <div className="mt-5 p-3 bg-white/5 rounded border border-[#C8A84B]/20">
              <div className="text-[10px] text-[#C8A84B] font-bold uppercase tracking-wider mb-1">Nearest Landmarks</div>
              <ul className="text-xs space-y-1 text-gray-400">
                <li>Tilaiya Dam — 1 km</li>
                <li>Koderma Railway Station — 18 km</li>
                <li>Birsa Munda Airport — 150 km</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Sainik School Tilaiya. Ministry of Defence, Government of India.
          </div>
          <div className="flex gap-4">
            <span>CBSE Affiliated</span>
            <span>·</span>
            <span>IPSC Member</span>
            <span>·</span>
            <a href={EXTERNAL_LINKS.sainikSchoolsSociety} target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A84B] transition-colors">
              Sainik Schools Society
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

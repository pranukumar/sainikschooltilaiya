import PageHeader from '@/components/PageHeader';
import { EXTERNAL_LINKS, SCHOOL } from '@/data/content';
import { ExternalLink, Phone, Mail, Calendar, AlertTriangle } from 'lucide-react';

export default function ApplyNowPage() {
  return (
    <>
      <PageHeader
        title="Apply Now"
        subtitle="Applications for Session 2026–27 are open. All admissions are through the NTA AISSEE centralized process."
        breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Apply Now' }]}
        accentText="Take The First Step"
      />

      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Important notice */}
        <div className="bg-[#C0392B]/10 border border-[#C0392B]/30 rounded-xl p-5 flex gap-4">
          <AlertTriangle className="text-[#C0392B] shrink-0 mt-0.5" size={20} />
          <div>
            <div className="font-bold text-[#C0392B] mb-1">AISSEE 2026 — 18 January 2026</div>
            <div className="text-sm text-[#4A5568]">
              The All India Sainik Schools Entrance Examination will be held on <strong>18 January 2026</strong>. Register on the NTA portal before the deadline. Do not miss the last date for registration.
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-[#0D1B2A] rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(#C8A84B 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          />
          <div className="relative">
            <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">Official Registration Portal</div>
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              NTA AISSEE Portal
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              All Sainik School admissions are conducted centrally by the National Testing Agency (NTA) through the AISSEE examination.
            </p>
            <a
              href={EXTERNAL_LINKS.ntaAissee}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C8A84B] hover:bg-[#e0c470] text-[#0D1B2A] font-bold px-8 py-4 rounded-lg transition-all text-base shadow-xl hover:shadow-[#C8A84B]/30 hover:shadow-2xl"
            >
              Register on NTA AISSEE <ExternalLink size={18} />
            </a>
            <div className="mt-4 text-gray-500 text-xs">exams.nta.nic.in/sainik-school-society</div>
          </div>
        </div>

        {/* Seats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { class: 'Class VI', seats: SCHOOL.seatsClassVI, age: 'Age: 10–12 years' },
            { class: 'Class IX', seats: SCHOOL.seatsClassIX, age: 'Age: 13–15 years' },
          ].map(({ class: cls, seats, age }) => (
            <div key={cls} className="text-center p-6 border-2 border-[#C8A84B]/20 rounded-xl hover:border-[#C8A84B] transition-colors">
              <div className="text-3xl font-bold text-[#C8A84B] mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>{seats}</div>
              <div className="font-bold text-[#0D1B2A]">{cls}</div>
              <div className="text-xs text-[#4A5568] mt-1">{age}</div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-[#F8F9FA] rounded-xl p-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need Help? Contact Admission Office
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <Phone size={16} className="text-[#C8A84B] shrink-0 mt-0.5" />
              <div>
                <a href={`tel:${SCHOOL.phone}`} className="text-[#0D1B2A] hover:text-[#C8A84B] transition-colors block">{SCHOOL.phone}</a>
                <a href={`tel:${SCHOOL.phoneMobile}`} className="text-[#0D1B2A] hover:text-[#C8A84B] transition-colors block">{SCHOOL.phoneMobile}</a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={16} className="text-[#C8A84B] shrink-0 mt-0.5" />
              <a href={`mailto:${SCHOOL.email}`} className="text-[#0D1B2A] hover:text-[#C8A84B] transition-colors">{SCHOOL.email}</a>
            </div>
            <div className="flex gap-3">
              <Calendar size={16} className="text-[#C8A84B] shrink-0 mt-0.5" />
              <span className="text-[#4A5568]">Office hours: Mon–Sat, 9:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

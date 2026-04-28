import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { PLEDGE } from '@/data/content';
import { Eye, Target, Heart } from 'lucide-react';

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        title="Vision & Mission"
        subtitle="The guiding principles and enduring values that define life as a Tilaiyan."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Vision & Mission' }]}
        accentText="Our Purpose"
      />

      {/* Vision Mission real image banner */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src="/images/vision-mission.jpg"
          alt="Sainik School Tilaiya — Vision and Mission"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/60" />
      </div>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Pledge */}
        <div className="bg-[#0D1B2A] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(#C8A84B 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          />
          <div className="relative">
            <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-4">The Sacred Pledge</div>
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Tilaiyan's Pledge</h2>
            <blockquote
              className="text-xl sm:text-2xl text-white/90 italic leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;{PLEDGE}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#C8A84B]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A84B]" />
              <div className="h-px w-12 bg-[#C8A84B]/40" />
            </div>
          </div>
        </div>

        {/* Vision & Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: 'Vision',
              content: 'To be the premier institution that nurtures disciplined, academically excellent, and morally upright cadets who serve the nation with distinction in the armed forces and beyond.',
            },
            {
              icon: Target,
              title: 'Mission',
              content: 'To provide an environment that blends rigorous academics with military discipline, sports, and character formation — producing well-rounded officers and leaders of tomorrow.',
            },
            {
              icon: Heart,
              title: 'Core Values',
              content: 'Truthfulness, Trustworthiness, Honesty, Integrity, Discipline, Excellence, Patriotism, and Service Before Self — the eternal values of a Tilaiyan.',
            },
          ].map(({ icon: Icon, title, content }) => (
            <div key={title} className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#0D1B2A] flex items-center justify-center mx-auto mb-4">
                <Icon size={24} className="text-[#C8A84B]" />
              </div>
              <h3 className="font-bold text-[#0D1B2A] text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

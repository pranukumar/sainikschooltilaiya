import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { SCHOOL } from '@/data/content';
import { Quote } from 'lucide-react';

export default function PrincipalMessagePage() {
  return (
    <>
      <PageHeader
        title="Principal's Message"
        subtitle={`A message from ${SCHOOL.principal}, Principal, Sainik School Tilaiya`}
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: "Principal's Message" }]}
        accentText="From The Principal"
      />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Photo */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="relative w-48 h-64 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/principal.jpg"
                  alt={SCHOOL.principal}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C8A84B]" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-[#C8A84B]/25 rounded-xl pointer-events-none" />
            </div>
            <div className="text-center mt-4">
              <div className="font-bold text-[#0D1B2A] text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{SCHOOL.principal}</div>
              <div className="text-[#4A5568] text-sm">Principal</div>
              <div className="text-[#C8A84B] text-xs mt-1 font-mono">Sainik School Tilaiya</div>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2 space-y-5 text-[#4A5568] leading-relaxed">
            <div className="flex gap-3">
              <Quote className="text-[#C8A84B] shrink-0 mt-1" size={22} />
              <p className="text-lg italic text-[#0D1B2A]" style={{ fontFamily: "'Lora', serif" }}>
                Dear Cadets, Parents, Alumni, and Well-Wishers,
              </p>
            </div>
            <p>
              It gives me immense pride and joy to serve as the Principal of Sainik School Tilaiya — an institution that has, since 1963, stood as one of the finest preparatory schools for India's future military officers and leaders.
            </p>
            <p>
              At Sainik School Tilaiya, we believe that excellence is not merely academic. True excellence emerges from the harmonious development of mind, body, and character. Every day, our cadets are tested, challenged, and inspired — on the parade ground, in the classroom, on the sports field, and in every interaction that shapes their integrity and leadership.
            </p>
            <p>
              Our proud record of NDA selections — over 1,800 and counting — is a testament not just to our academic rigour but to the Officers' Like Qualities we nurture in every Tilaiyan. We prepare young men and women not only to crack entrance examinations, but to become the kind of persons the nation can trust with its defence and future.
            </p>
            <p>
              I extend a warm welcome to all who seek a transformative education at Sainik School Tilaiya. The journey here will demand your best — but it will return far more in character, confidence, and capability.
            </p>
            <p className="font-semibold text-[#0D1B2A]">
              Forward Ever — Always.
            </p>
            <div className="border-t border-gray-100 pt-4">
              <div className="font-bold text-[#0D1B2A]">{SCHOOL.principal}</div>
              <div className="text-sm text-[#4A5568]">Principal, Sainik School Tilaiya</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

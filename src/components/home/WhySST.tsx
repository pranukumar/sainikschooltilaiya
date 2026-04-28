import { GraduationCap, Shield, Trophy, Network } from 'lucide-react';

const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'CBSE-affiliated curriculum from Class VI to XII with a strong focus on Science stream and NDA-preparatory academics, guided by experienced faculty.',
    accent: '#C8A84B',
  },
  {
    icon: Shield,
    title: 'Military Ethos & NCC',
    description: 'Instilling discipline, leadership, and the Officers\' Like Qualities through structured military training, NCC, and daily cadet life.',
    accent: '#C0392B',
  },
  {
    icon: Trophy,
    title: 'Sports & Physical Fitness',
    description: '14+ sports disciplines including Horse Riding, Canoeing, Mountaineering, and Obstacle Course — developing total physical and mental resilience.',
    accent: '#1e8449',
  },
  {
    icon: Network,
    title: 'Proud Alumni Network',
    description: 'Over six decades of distinguished Tilaiyans serving in defence forces, civil services, and professional sectors — a legacy that endures.',
    accent: '#6c3483',
  },
];

export default function WhySST() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">Our Distinction</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Sainik School Tilaiya?
          </h2>
          <p className="mt-4 text-[#4A5568] max-w-xl mx-auto text-sm leading-relaxed">
            More than a school — a forge where character is built, excellence is demanded, and the nation's finest officers are born.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className="group p-6 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 card-lift relative overflow-hidden"
            >
              {/* Diagonal accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full"
                style={{ background: accent }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
              >
                <Icon size={22} style={{ color: accent }} />
              </div>

              <h3 className="font-bold text-[#0D1B2A] text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ background: accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

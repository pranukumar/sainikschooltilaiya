'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/data/content';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontFamily: "'DM Mono', monospace" }}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-[#0D1B2A] py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#C8A84B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">By The Numbers</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            School at a Glance
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#C8A84B]/30" />
            <div className="w-2 h-2 rotate-45 border border-[#C8A84B]" />
            <div className="h-px w-16 bg-[#C8A84B]/30" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 border border-[#C8A84B]/20 rounded-lg hover:border-[#C8A84B]/50 transition-colors group"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#C8A84B] mb-2 group-hover:scale-105 transition-transform">
                <Counter target={parseInt(stat.value)} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

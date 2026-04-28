'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Award, BookOpen, Bell, Users, Library } from 'lucide-react';
import { SCHOOL } from '@/data/content';

const QUICK_ACCESS = [
  { label: 'Admissions', href: '/admissions', icon: Award, color: 'bg-[#C0392B]' },
  { label: 'Results', href: '/academics/results', icon: BookOpen, color: 'bg-[#1a5276]' },
  { label: 'Notice Board', href: '/notices', icon: Bell, color: 'bg-[#1e8449]' },
  { label: 'Alumni', href: '/alumni', icon: Users, color: 'bg-[#6c3483]' },
  { label: 'e-Library', href: '/academics/e-library', icon: Library, color: 'bg-[#b7950b]' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="relative min-h-[92vh] flex items-center bg-[#0D1B2A]">
        {/* Real campus background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/campus.jpg"
            alt="Sainik School Tilaiya Campus"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.60) 100%)' }}
          />
        </div>

        {/* Geometric decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{ background: 'radial-gradient(ellipse at top right, #C8A84B, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-5"
            style={{ background: 'radial-gradient(ellipse at bottom left, #C8A84B, transparent 60%)' }} />
          {/* Grid lines */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
          {/* Diagonal accent strips */}
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C8A84B]/20 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#C8A84B]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 border border-[#C8A84B]/40 rounded-full px-4 py-1.5 mb-6 text-xs text-[#C8A84B] font-mono transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84B] animate-pulse" />
              Est. {SCHOOL.established} · Koderma, Jharkhand
            </div>

            {/* Main heading */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="block">Sainik School</span>
              <span className="gold-shimmer">Tilaiya</span>
            </h1>

            {/* Tagline */}
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="h-px w-12 bg-[#C8A84B]" />
              <span className="text-[#C8A84B] text-xl font-semibold tracking-widest uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
                {SCHOOL.tagline}
              </span>
              <div className="h-px w-12 bg-[#C8A84B]" />
            </div>

            <p
              className={`text-gray-300 text-lg max-w-xl mb-8 leading-relaxed transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Preparing cadets for excellence in defence and life through academic rigour, military discipline, and the highest standards of character.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Link
                href="/admissions/apply-now"
                className="inline-flex items-center gap-2 bg-[#C8A84B] hover:bg-[#e0c470] text-[#0D1B2A] font-bold px-6 py-3 rounded transition-all text-sm uppercase tracking-wide shadow-lg hover:shadow-[#C8A84B]/30 hover:shadow-xl"
              >
                Apply for Admission
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-[#C8A84B] text-white hover:text-[#C8A84B] font-semibold px-6 py-3 rounded transition-all text-sm uppercase tracking-wide"
              >
                Learn More
              </Link>
            </div>

            {/* Stats row */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {[
                { value: '1963', label: 'Established' },
                { value: '1800+', label: 'NDA Selections' },
                { value: '841+', label: 'Cadets' },
                { value: '12', label: 'Houses' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-[#C8A84B]" style={{ fontFamily: "'DM Mono', monospace" }}>{s.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founding year badge */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-[#C8A84B]/30 flex items-center justify-center relative">
              <div className="w-40 h-40 rounded-full border-2 border-[#C8A84B]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#C8A84B] text-4xl font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>1963</div>
                  <div className="text-white text-xs uppercase tracking-widest mt-1">Founded</div>
                </div>
              </div>
              {/* Rotating text effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#C8A84B]/30 text-[9px] uppercase tracking-[0.5em]"
                  style={{ transform: 'rotate(-30deg)', whiteSpace: 'nowrap' }}>Forward Ever</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Ribbon */}
      <div className="bg-[#0D1B2A] border-t border-[#C8A84B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch divide-x divide-[#C8A84B]/10">
            {QUICK_ACCESS.map(({ label, href, icon: Icon, color }) => (
              <Link
                key={label}
                href={href}
                className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 py-4 px-3 text-white hover:bg-white/5 transition-colors group"
              >
                <div className={`${color} w-8 h-8 rounded flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={15} className="text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-center">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

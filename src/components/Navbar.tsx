'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';
import { NAV_LINKS, SCHOOL } from '@/data/content';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#0D1B2A] text-[#C8A84B] text-xs py-1.5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone size={11} />
            {SCHOOL.phone}
          </span>
          <span className="hidden sm:block">{SCHOOL.email}</span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <a href="https://sainikschool.ncog.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sainik Schools Society</a>
          <span className="opacity-40">|</span>
          <a href="/notices" className="hover:text-white transition-colors">RTI</a>
          <span className="opacity-40">|</span>
          <a href="/admissions/apply-now" className="hover:text-white transition-colors font-semibold">Apply Now</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#C8A84B]/20'
          : 'bg-white shadow-sm'
      )}>
        {/* Tricolour bar */}
        <div className="tricolour-bar" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C8A84B] shrink-0 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Sainik School Tilaiya Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-[#0D1B2A] text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Sainik School Tilaiya
                </div>
                <div className="text-[#4A5568] text-xs">सैनिक स्कूल तिलैया</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.children ? (
                    <>
                      <button className={cn(
                        'flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded transition-colors uppercase tracking-wide',
                        'text-[#0D1B2A] hover:text-[#C8A84B] hover:bg-[#0D1B2A]/5'
                      )}>
                        {link.label}
                        <ChevronDown size={12} className={cn(
                          'transition-transform duration-200',
                          activeDropdown === link.label && 'rotate-180'
                        )} />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-0 w-52 bg-white shadow-xl border border-gray-100 rounded-b-lg py-1 z-50">
                          <div className="h-0.5 bg-[#C8A84B]" />
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-xs text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-[#C8A84B] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-3 py-2 text-xs font-semibold rounded transition-colors uppercase tracking-wide text-[#0D1B2A] hover:text-[#C8A84B] hover:bg-[#0D1B2A]/5"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-[#0D1B2A] hover:text-[#C8A84B] transition-colors hidden sm:block">
                <Search size={18} />
              </button>
              <Link
                href="/admissions/apply-now"
                className="hidden sm:inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white text-xs font-bold px-4 py-2 rounded transition-colors uppercase tracking-wide"
              >
                Admissions
              </Link>
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#0D1B2A] hover:text-[#C8A84B] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0D1B2A] text-white max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white hover:text-[#C8A84B] transition-colors"
                      >
                        {link.label}
                        <ChevronDown size={14} className={cn(
                          'transition-transform',
                          mobileExpanded === link.label && 'rotate-180'
                        )} />
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="pl-4 border-l border-[#C8A84B]/30 ml-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-xs text-gray-300 hover:text-[#C8A84B] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2.5 text-sm font-semibold text-white hover:text-[#C8A84B] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/admissions/apply-now"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#C0392B] hover:bg-[#a93226] text-white text-sm font-bold px-4 py-3 rounded transition-colors"
                >
                  Apply for Admission
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

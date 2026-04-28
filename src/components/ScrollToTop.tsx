'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full bg-[#0D1B2A] text-[#C8A84B] border border-[#C8A84B]/40 shadow-lg flex items-center justify-center hover:bg-[#C8A84B] hover:text-[#0D1B2A] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C8A84B] focus:ring-offset-2"
    >
      <ChevronUp size={20} />
    </button>
  );
}

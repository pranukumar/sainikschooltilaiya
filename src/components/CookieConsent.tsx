'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('sst_cookies_accepted');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('sst_cookies_accepted', '1');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('sst_cookies_accepted', '0');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-[#0D1B2A] border-t border-[#C8A84B]/20 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-300 flex-1 leading-relaxed">
          We use essential cookies to ensure this website functions correctly. By continuing, you
          agree to our{' '}
          <Link href="/privacy" className="text-[#C8A84B] underline underline-offset-2 hover:text-[#e0c470]">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-gray-400 border border-gray-600 rounded hover:border-gray-400 hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A84B]"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold bg-[#C8A84B] text-[#0D1B2A] rounded hover:bg-[#e0c470] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A84B] focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

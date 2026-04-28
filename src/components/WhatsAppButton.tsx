'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919470962052"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
    >
      <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
      <span className="absolute right-16 bg-[#0D1B2A] text-white text-xs font-semibold px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp Us
      </span>
    </a>
  );
}

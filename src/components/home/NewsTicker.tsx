'use client';

import { NEWS_TICKER_ITEMS } from '@/data/content';

export default function NewsTicker() {
  return (
    <div className="bg-[#C8A84B] text-[#0D1B2A] overflow-hidden py-2.5">
      <div className="flex items-center">
        <div className="shrink-0 bg-[#0D1B2A] text-[#C8A84B] font-bold text-xs uppercase tracking-widest px-4 py-1 mr-4 whitespace-nowrap z-10">
          Latest News
        </div>
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-12 whitespace-nowrap animate-ticker"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {[...NEWS_TICKER_ITEMS, ...NEWS_TICKER_ITEMS].map((item, i) => (
              <span key={i} className="text-xs font-semibold flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D1B2A]/40 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

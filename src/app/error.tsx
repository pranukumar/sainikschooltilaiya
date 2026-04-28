'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex flex-col items-center justify-center px-4 text-center">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <Image
        src="/images/logo.png"
        alt="Sainik School Tilaiya"
        width={80}
        height={80}
        className="mb-6 opacity-80"
      />

      <p className="text-[#C0392B] text-sm font-mono tracking-[0.3em] uppercase mb-3">
        Something went wrong
      </p>

      <h1
        className="text-5xl md:text-7xl font-bold text-white mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Unexpected Error
      </h1>

      <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
        An unexpected error occurred. Please try again, or return to the homepage.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-8 py-3 bg-[#C8A84B] text-[#0D1B2A] font-bold rounded hover:bg-[#b8973b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A84B] focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-3 border border-[#C8A84B]/40 text-[#C8A84B] font-semibold rounded hover:border-[#C8A84B] hover:bg-[#C8A84B]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A84B] focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

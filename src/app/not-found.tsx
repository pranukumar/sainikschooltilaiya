import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] flex flex-col items-center justify-center px-4 text-center">
      {/* Decorative top bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <Image
        src="/images/logo.png"
        alt="Sainik School Tilaiya"
        width={80}
        height={80}
        className="mb-6 opacity-80"
      />

      <p className="text-[#C8A84B] text-sm font-mono tracking-[0.3em] uppercase mb-3">Error 404</p>

      <h1
        className="text-6xl md:text-8xl font-bold text-white mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Page Not Found
      </h1>

      <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
        The page you are looking for may have been moved, renamed, or does not exist.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 bg-[#C8A84B] text-[#0D1B2A] font-bold rounded hover:bg-[#b8973b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A84B] focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
        >
          Go to Homepage
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 border border-[#C8A84B]/40 text-[#C8A84B] font-semibold rounded hover:border-[#C8A84B] hover:bg-[#C8A84B]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A84B] focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
        >
          Contact Us
        </Link>
      </div>

      <p className="mt-16 text-gray-600 text-sm">
        Sainik School Tilaiya · Tilaiya Dam, Koderma, Jharkhand 825413
      </p>
    </div>
  );
}

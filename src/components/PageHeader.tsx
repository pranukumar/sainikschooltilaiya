import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  accentText?: string;
}

export default function PageHeader({ title, subtitle, breadcrumbs, accentText }: PageHeaderProps) {
  return (
    <div className="bg-[#0D1B2A] py-14 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,168,75,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(200,168,75,0.06) 0%, transparent 60%)' }}
      />
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full"
        style={{ background: 'linear-gradient(135deg, transparent 60%, rgba(200,168,75,0.04) 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#C8A84B] transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-gray-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#C8A84B] transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-[#C8A84B]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {accentText && (
          <div className="text-[#C8A84B] text-xs font-mono uppercase tracking-widest mb-3">{accentText}</div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-gray-400 text-base max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-16 bg-[#C8A84B]" />
          <div className="w-2 h-2 rotate-45 border border-[#C8A84B]" />
        </div>
      </div>
    </div>
  );
}

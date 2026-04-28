import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: {
    default: 'Sainik School Tilaiya — Forward Ever',
    template: '%s | Sainik School Tilaiya',
  },
  description:
    'Sainik School Tilaiya — Established in 1963, a prestigious defence preparatory boarding school at Tilaiya Dam, Koderma, Jharkhand. CBSE affiliated, managed by Sainik Schools Society, Ministry of Defence.',
  keywords: [
    'Sainik School Tilaiya',
    'SST',
    'Sainik School Jharkhand',
    'AISSEE',
    'NDA',
    'Tilaiya Dam',
    'Koderma',
    'Military School India',
    'Defence School',
    'CBSE School Jharkhand',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sainikschooltilaiya.org',
    siteName: 'Sainik School Tilaiya',
    title: 'Sainik School Tilaiya — Forward Ever',
    description:
      'Prestigious defence preparatory boarding school established in 1963 at Tilaiya Dam, Koderma, Jharkhand.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sainik School Tilaiya — Forward Ever',
    description: 'Prestigious defence preparatory boarding school at Tilaiya Dam, Koderma, Jharkhand.',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
  themeColor: '#0D1B2A',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#F8F9FA]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#C8A84B] focus:text-[#0D1B2A] focus:font-bold focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}

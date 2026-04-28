import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sainik School Tilaiya',
    short_name: 'SST',
    description:
      'Official portal of Sainik School Tilaiya — a prestigious defence preparatory boarding school at Tilaiya Dam, Koderma, Jharkhand.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D1B2A',
    theme_color: '#0D1B2A',
    orientation: 'portrait-primary',
    categories: ['education', 'government'],
    lang: 'en-IN',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}

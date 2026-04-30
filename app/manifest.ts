import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brandName} | Profesionalna šminka`,
    short_name: site.brandName,
    description:
      'Profesionalna šminka u Rumi uz dolazak na teren u Beograd i Novi Sad za venčanja, proslave i evente.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#120f18',
    theme_color: '#120f18',
    lang: 'sr-RS',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable' as any,
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable' as any,
      },
      {
        src: '/favicon-1024.png',
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}

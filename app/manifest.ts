import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brandName,
    short_name: site.brandName,
    description:
      'Profesionalna šminka u Rumi uz dolazak na teren u Beograd i Novi Sad za venčanja, proslave i evente.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#120f18',
    theme_color: '#120f18',
    lang: 'sr',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/neon-pink-heart-favicon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}

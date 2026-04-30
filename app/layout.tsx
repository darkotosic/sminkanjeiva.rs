import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { MobileStickyCta } from '@/components/layout/mobile-sticky-cta';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalDomain),
  title: {
    default: `${site.brandName} | Profesionalna šminka u ${site.city}`,
    template: `%s | ${site.brandName}`,
  },
  description:
    'Premium makeup studio za šminkanje u Rumi, sa uslugom na terenu u Beogradu i Novom Sadu za venčanja, rođendane i svečane događaje.',
  keywords: [
    'sminkanje ruma',
    'sminkanje beograd',
    'sminkanje novi sad',
    'sminkanje za vencanje',
    'sminkanje za decije rodjendane',
  ],
  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/neon-pink-heart-favicon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: `${site.brandName} | Profesionalna šminka u ${site.city}`,
    description:
      'Šminkanje u Rumi i na terenu u Beogradu i Novom Sadu. Bridal, svečani i event makeup sa profesionalnim rezultatima.',
    url: '/',
    siteName: site.brandName,
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'BeautySalon',
            name: site.brandName,
            telephone: site.phone,
            email: site.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ruma',
              addressCountry: 'RS',
            },
            areaServed: ['Ruma', 'Beograd', 'Novi Sad'],
            url: site.canonicalDomain,
          }}
        />
        <a href="#main-content" className="skip-link">
          Preskoči na sadržaj
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}

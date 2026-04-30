import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/data/site';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { MobileStickyCta } from '@/components/layout/mobile-sticky-cta';
import { JsonLd } from '@/components/seo/json-ld';

export const viewport: Viewport = {
  themeColor: '#120f18',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalDomain),
  manifest: '/manifest.webmanifest',
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
    languages: {
      sr: '/',
      'x-default': '/',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
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
  twitter: {
    card: 'summary_large_image',
    title: `${site.brandName} | Profesionalna šminka u ${site.city}`,
    description:
      'Šminkanje u Rumi i na terenu u Beogradu i Novom Sadu. Bridal, svečani i event makeup sa profesionalnim rezultatima.',
  },
  category: 'beauty',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        <JsonLd
          data={[
            {
              '@context': 'https://schema.org',
              '@type': 'BeautySalon',
              '@id': `${site.canonicalDomain}/#beauty-salon`,
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
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${site.canonicalDomain}/#website`,
              name: site.brandName,
              url: site.canonicalDomain,
              inLanguage: 'sr-RS',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${site.canonicalDomain}/blog?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${site.canonicalDomain}/#organization`,
              name: site.brandName,
              url: site.canonicalDomain,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: site.phone,
                contactType: 'customer service',
                areaServed: 'RS',
                availableLanguage: ['sr'],
              },
            },
          ]}
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

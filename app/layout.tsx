import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { MobileStickyCta } from '@/components/layout/mobile-sticky-cta';

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalDomain),
  title: {
    default: `${site.brandName} | Profesionalna šminka u ${site.city}`,
    template: `%s | ${site.brandName}`,
  },
  description:
    'Premium makeup studio sa fokusom na dugotrajnu šminku, pouzdan rezultat i profesionalan proces za važne događaje.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}

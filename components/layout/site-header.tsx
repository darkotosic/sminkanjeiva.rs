'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryNav, site } from '@/data/site';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/layout/language-toggle';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header-row">
        <Link href="/" className="site-brand" aria-label={`${site.brandName} početna strana`}>
          {site.brandName}
        </Link>
        <nav className="site-nav" aria-label="Glavna navigacija">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav-link" aria-current={pathname === item.href ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
          <LanguageToggle />
          <Button href={site.bookingUrl}>Zakaži termin</Button>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { primaryNav, site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header style={{ position: 'sticky', top: 0, background: 'rgba(248,245,241,0.96)', borderBottom: '1px solid var(--border)', zIndex: 20 }}>
      <div className="container" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0' }}>
        <Link href="/" style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem' }}>{site.brandName}</Link>
        <nav style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'end' }}>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Button href={site.bookingUrl}>Zakaži termin</Button>
        </nav>
      </div>
    </header>
  );
}

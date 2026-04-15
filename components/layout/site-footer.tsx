import Link from 'next/link';
import { primaryNav, site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: '#f2ece7' }}>
      <div className="container section" style={{ paddingBottom: '2rem' }}>
        <div className="grid grid-3">
          <div>
            <h3>{site.brandName}</h3>
            <p>{site.address}</p>
            <p>{site.phone}</p>
          </div>
          <div>
            <h3>Navigacija</h3>
            {primaryNav.map((item) => <p key={item.href}><Link href={item.href}>{item.label}</Link></p>)}
          </div>
          <div>
            <h3>Društvene mreže</h3>
            <p><a href={site.instagramUrl} target="_blank">Instagram</a></p>
            <p><Link href="/kontakt">Kontakt</Link></p>
          </div>
        </div>
        <small>© {new Date().getFullYear()} {site.brandName}. Sva prava zadržana.</small>
      </div>
    </footer>
  );
}

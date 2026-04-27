import Link from 'next/link';
import { primaryNav, site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: '#f2ece7' }}>
      <div className="container section" style={{ paddingBottom: '2rem' }}>
        <div className="grid grid-3">
          <section aria-label="Kontakt informacije">
            <h3>{site.brandName}</h3>
            <p>{site.address}</p>
            <p>{site.phone}</p>
          </section>
          <nav aria-label="Footer navigacija">
            <h3>Navigacija</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.3rem' }}>
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <section aria-label="Društvene mreže">
            <h3>Društvene mreže</h3>
            <p>
              <a href={site.instagramUrl} target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
            </p>
            <p>
              <Link href="/kontakt">Kontakt</Link>
            </p>
          </section>
        </div>
        <small>
          © {new Date().getFullYear()} {site.brandName}. Sva prava zadržana.
        </small>
      </div>
    </footer>
  );
}

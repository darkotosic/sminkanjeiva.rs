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
          <section aria-label="SEO lokacije i usluge">
            <h3>Najtraženije stranice</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.3rem' }}>
              <li><Link href="/sminkanje-ruma">Šminkanje Ruma</Link></li>
              <li><Link href="/sminkanje-beograd">Šminkanje Beograd</Link></li>
              <li><Link href="/sminkanje-novi-sad">Šminkanje Novi Sad</Link></li>
              <li><Link href="/sminkanje-za-vencanje">Šminkanje za venčanje</Link></li>
            </ul>
          </section>
        </div>
        <small>
          © {new Date().getFullYear()} {site.brandName}. Sva prava zadržana.
        </small>
      </div>
    </footer>
  );
}

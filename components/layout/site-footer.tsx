import Link from 'next/link';
import { primaryNav, site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container section site-footer-inner">
        <div className="grid grid-3 site-footer-grid">
          <section aria-label="Kontakt informacije" className="site-footer-block">
            <h3>{site.brandName}</h3>
            <p>{site.address}</p>
            <p>{site.phone}</p>
          </section>
          <nav aria-label="Footer navigacija" className="site-footer-block">
            <h3>Navigacija</h3>
            <ul className="site-footer-list">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <section aria-label="SEO lokacije i usluge" className="site-footer-block">
            <h3>Najtraženije stranice</h3>
            <ul className="site-footer-list">
              <li><Link href="/sminkanje-ruma" className="site-footer-link">Šminkanje Ruma</Link></li>
              <li><Link href="/sminkanje-beograd" className="site-footer-link">Šminkanje Beograd</Link></li>
              <li><Link href="/sminkanje-novi-sad" className="site-footer-link">Šminkanje Novi Sad</Link></li>
              <li><Link href="/sminkanje-za-vencanje" className="site-footer-link">Šminkanje za venčanje</Link></li>
            </ul>
          </section>
        </div>
        <small className="site-footer-copy">
          © {new Date().getFullYear()} {site.brandName}. Sva prava zadržana.
        </small>
      </div>
    </footer>
  );
}

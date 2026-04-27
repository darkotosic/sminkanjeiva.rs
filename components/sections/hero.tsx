import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="section" aria-labelledby="hero-heading">
      <div className="container grid grid-2" style={{ alignItems: 'center', gap: '1.6rem' }}>
        <div>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.75rem' }}>
            Studio za profesionalnu šminku
          </p>
          <h1 id="hero-heading">{site.heroHeadline}</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 560 }}>{site.heroText}</p>
          <ul className="pill-list" aria-label="Ključne prednosti studija" style={{ marginBottom: '1.1rem' }}>
            <li>Dugotrajna postojanost</li>
            <li>Higijenski protokoli</li>
            <li>Personalizovan look</li>
          </ul>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button href={site.bookingUrl}>Zakaži termin</Button>
            <Button href="/usluge" variant="secondary">
              Pogledaj usluge
            </Button>
          </div>
        </div>
        <aside className="card" aria-label="Brzi pregled rezultata rada" style={{ minHeight: 330, display: 'grid', gap: '0.85rem', alignContent: 'center' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: 0 }}>Premium iskustvo od konsultacije do događaja</h2>
          <p style={{ color: 'var(--muted)', marginBottom: 0 }}>
            Jasno definisan proces, profesionalna kozmetika i priprema koja štedi vreme na dan događaja.
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
            <li>Konzultacija i izbor stila</li>
            <li>Testiranje nijansi prema tenu</li>
            <li>Finalni look sa touch-up savetima</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

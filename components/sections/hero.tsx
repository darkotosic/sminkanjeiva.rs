import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="section hero-centered" aria-labelledby="hero-heading">
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ letterSpacing: '0.08em', color: 'var(--accent)', fontWeight: 600, fontSize: '0.82rem', marginBottom: '0.75rem' }}>
          Studio za profesionalnu šminku
        </p>
        <h1 id="hero-heading" style={{ textTransform: 'uppercase' }}>{site.heroHeadline}</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 760, margin: '0 auto 1rem' }}>{site.heroText}</p>
        <p style={{ color: 'var(--muted)', marginBottom: '1.2rem' }}>Glam šminka • Oslikavanje lica • Specijalni efekti</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button href={site.bookingUrl}>Zakaži termin</Button>
          <Button href="/portfolio" variant="secondary">Pogledaj portfolio</Button>
        </div>
      </div>
    </section>
  );
}

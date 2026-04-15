import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="section">
      <div className="container grid grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem' }}>{site.heroHeadline}</h1>
          <p style={{ color: 'var(--muted)' }}>{site.heroText}</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button href={site.bookingUrl}>Zakaži termin</Button>
            <Button href="/usluge" variant="secondary">Pogledaj usluge</Button>
          </div>
        </div>
        <div className="card" style={{ minHeight: 300, display: 'grid', placeItems: 'center' }}>Premium editorial hero image / collage</div>
      </div>
    </section>
  );
}

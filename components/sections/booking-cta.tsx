import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function BookingCta() {
  return (
    <section className="section">
      <div className="container card" style={{ padding: '2rem' }}>
        <h2 style={{ marginTop: 0, fontFamily: 'Georgia, serif' }}>Rezervišite svoj termin na vreme</h2>
        <p style={{ color: 'var(--muted)' }}>Za venčanja, mature i popularne termine preporučujemo raniju rezervaciju. Pošaljite upit i dobićete informacije o dostupnosti, usluzi i ceni.</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Button href="/kontakt">Zakaži termin</Button>
          <Button href="/kontakt" variant="secondary">Pošalji upit</Button>
          <Button href={site.instagramUrl} variant="ghost">Instagram</Button>
        </div>
      </div>
    </section>
  );
}

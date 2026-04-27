import Link from 'next/link';
import { intentLandings } from '@/data/local-seo';
import { buildLandingMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/json-ld';

const landing = intentLandings.find((item) => item.slug === 'sminkanje-za-vencanje')!;

export const metadata = buildLandingMetadata({
  title: landing.title,
  description: landing.description,
  path: '/sminkanje-za-vencanje',
  keywords: landing.keywordVariants,
});

export default function SminkanjeZaVencanjePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Šminkanje za venčanje',
          areaServed: ['Ruma', 'Beograd', 'Novi Sad'],
          serviceType: 'Bridal makeup',
        }}
      />
      <section className="section">
        <div className="container">
          <h1>{landing.title}</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 800 }}>{landing.description}</p>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            <article className="card"><h2>Proba</h2><p>Probni termin 2–8 nedelja pre venčanja.</p></article>
            <article className="card"><h2>Timeline</h2><p>Precizan plan dana venčanja za mladu i pratnju.</p></article>
            <article className="card"><h2>Na lokaciji</h2><p>Dolazak u Rumi, Beogradu i Novom Sadu po dogovoru.</p></article>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Gradovi: <Link href="/sminkanje-ruma">Ruma</Link>, <Link href="/sminkanje-beograd">Beograd</Link>,{' '}
            <Link href="/sminkanje-novi-sad">Novi Sad</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

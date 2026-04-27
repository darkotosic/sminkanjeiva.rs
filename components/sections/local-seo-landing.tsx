import Link from 'next/link';
import { cityLandings, type CityLandingData } from '@/data/local-seo';
import { JsonLd } from '@/components/seo/json-ld';

export function LocalSeoLanding({ cityData }: { cityData: CityLandingData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Profesionalno šminkanje ${cityData.city}`,
    areaServed: cityData.city,
    serviceType: 'Bridal i svečano šminkanje',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Atelje Iva',
      telephone: '+38162462004',
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="section">
        <div className="container">
          <h1>{cityData.title}</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 760 }}>{cityData.intro}</p>
          <div className="grid grid-2" style={{ marginTop: '1.2rem' }}>
            <article className="card">
              <h2>Za koje upite je stranica optimizovana</h2>
              <ul>
                {cityData.keywordVariants.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h2>Najčešće lokacije izlaska na teren</h2>
              <ul>
                {cityData.neighborhoods.map((zone) => (
                  <li key={zone}>{zone}</li>
                ))}
              </ul>
              <p>Dolazak po dogovoru i u okolna mesta: {cityData.nearby.join(', ')}.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container card">
          <h2>Rezervišite termin</h2>
          <p>
            Za brzu potvrdu dostupnosti pošaljite upit preko <Link href="/kontakt">kontakt forme</Link>.
          </p>
          <p>
            Pogledajte i <Link href="/sminkanje-za-vencanje">šminkanje za venčanje</Link> i{' '}
            <Link href="/sminkanje-za-decije-rodjendane">šminkanje za dečije rođendane</Link>.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Gradovi u kojima radimo</h2>
          <ul>
            {cityLandings.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`}>{item.city} — profesionalno šminkanje</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

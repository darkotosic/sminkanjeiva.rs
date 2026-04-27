import Link from 'next/link';
import { intentLandings } from '@/data/local-seo';
import { buildLandingMetadata } from '@/lib/seo';

const landing = intentLandings.find((item) => item.slug === 'sminkanje-za-decije-rodjendane')!;

export const metadata = buildLandingMetadata({
  title: landing.title,
  description: landing.description,
  path: '/sminkanje-za-decije-rodjendane',
  keywords: landing.keywordVariants,
});

export default function SminkanjeZaDecijeRodjendanePage() {
  return (
    <section className="section">
      <div className="container">
        <h1>{landing.title}</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 800 }}>{landing.description}</p>
        <div className="card" style={{ marginTop: '1rem' }}>
          <h2>Šta najčešće traže klijentkinje</h2>
          <ul>
            <li>Diskretan i postojan makeup za mame.</li>
            <li>Brz termin pre početka rođendana.</li>
            <li>Usklađen look za porodično fotografisanje.</li>
          </ul>
          <p>
            Dostupno za <Link href="/sminkanje-ruma">Rumu</Link>, <Link href="/sminkanje-beograd">Beograd</Link> i{' '}
            <Link href="/sminkanje-novi-sad">Novi Sad</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { intentLandings } from '@/data/local-seo';
import { buildLandingMetadata } from '@/lib/seo';
import { getPortfolioItemsByFolders } from '@/lib/portfolio';

const landing = intentLandings.find((item) => item.slug === 'sminkanje-za-decije-rodjendane')!;

export const metadata = buildLandingMetadata({
  title: landing.title,
  description: landing.description,
  path: '/sminkanje-za-decije-rodjendane',
  keywords: landing.keywordVariants,
});

export default async function SminkanjeZaDecijeRodjendanePage() {
  const facePaintingPhotos = await getPortfolioItemsByFolders(['face_paint']);

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

        <div style={{ marginTop: '2rem' }}>
          <h2>Face painting galerija za dečije rođendane</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 800 }}>
            Na ovoj stranici prikazujemo samo face painting radove, kako biste odmah videli stilove i motive koje najčešće radimo na rođendanima.
          </p>

          <div className="grid grid-4" style={{ marginTop: '1rem' }}>
            {facePaintingPhotos.map((item) => (
              <article key={item.image} className="card" aria-label={item.alt}>
                <Image src={item.image} alt={item.alt} width={600} height={750} style={{ borderRadius: '12px', aspectRatio: '4 / 5', objectFit: 'cover' }} unoptimized />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

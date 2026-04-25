import { PageHero } from '@/components/sections/page-hero';
import { Button } from '@/components/ui/button';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata('/o-nama');

export default function ONamaPage() {
  return (
    <>
      <PageHero title="O nama" intro="Premium beauty studio fokusiran na dugotrajne rezultate, profesionalan proces i poverenje." />
      <section className="section"><div className="container grid grid-2"><div className="card"><h2>Kratka priča o brendu</h2><p>Atelje Iva gradi signature pristup koji spaja estetiku i tehničku preciznost.</p></div><div className="card"><h2>Iskustvo i edukacija</h2><p>Kontinuirano usavršavanje i sertifikovana edukacija u beauty segmentu.</p></div><div className="card"><h2>Pristup radu</h2><p>Miran i organizovan proces sa jasnom pripremom pre svakog termina.</p></div><div className="card"><h2>Sertifikati i priznanja</h2><p>Placeholder za relevantne sertifikate, masterclass potvrde i objave.</p></div></div><div className="container" style={{ marginTop: '1rem' }}><Button href="/usluge">Pogledaj usluge</Button></div></section>
    </>
  );
}

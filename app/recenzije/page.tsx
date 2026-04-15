import { PageHero } from '@/components/sections/page-hero';
import { ReviewList } from '@/components/sections/review-list';
import { Button } from '@/components/ui/button';

export default function RecenzijePage() {
  return (
    <>
      <PageHero title="Recenzije" intro="Poverenje se gradi kroz rezultat, iskustvo i preporuke klijentkinja." />
      <section className="section"><div className="container"><ReviewList /></div><div className="container card" style={{ marginTop: '1rem' }}><h2>Social proof</h2><p>Placeholder za prosečnu ocenu i broj preporuka.</p><Button href="/kontakt">Zakaži termin</Button></div></section>
    </>
  );
}

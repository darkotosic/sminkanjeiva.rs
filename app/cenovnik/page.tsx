import { PageHero } from '@/components/sections/page-hero';
import { PriceList } from '@/components/sections/price-list';
import { Button } from '@/components/ui/button';

export default function CenovnikPage() {
  return (
    <>
      <PageHero title="Cenovnik" intro="Transparentna od-logika sa objašnjenjem šta utiče na finalnu cenu." />
      <section className="section"><div className="container"><PriceList /></div><div className="container" style={{ marginTop: '1rem' }}><Button href="/kontakt">Zakaži termin</Button></div></section>
    </>
  );
}

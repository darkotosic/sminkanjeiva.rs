import { PageHero } from '@/components/sections/page-hero';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { Button } from '@/components/ui/button';
import { getPortfolioItems } from '@/lib/portfolio';

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <PageHero title="Portfolio" intro="Galerija je podeljena po sekcijama i možeš da filtriraš kategorije (Face paint uključuje i Film SFX radove)." />
      <section className="section"><div className="container"><PortfolioGrid items={portfolioItems} /></div><div className="container" style={{ marginTop: '1rem' }}><Button href="/kontakt">Pošalji upit</Button></div></section>
    </>
  );
}

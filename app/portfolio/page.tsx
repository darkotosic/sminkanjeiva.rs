import { PageHero } from '@/components/sections/page-hero';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Portfolio" intro="Kurirani radovi iz bridal, event, matura i studio segmenta." />
      <section className="section"><div className="container"><PortfolioGrid /></div><div className="container" style={{ marginTop: '1rem' }}><Button href="/kontakt">Pošalji upit</Button></div></section>
    </>
  );
}

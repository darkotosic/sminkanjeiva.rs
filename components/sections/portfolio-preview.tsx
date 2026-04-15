import { portfolioItems } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

export function PortfolioPreview() {
  const featured = portfolioItems.filter((item) => item.featured).slice(0, 8);
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Izdvojeni radovi" subtitle="Pogledajte pažljivo odabrane look-ove iz bridal, event i studio segmenta." />
        <div className="grid grid-4">
          {featured.map((item) => <div key={item.image} className="card" aria-label={item.alt}>{item.title}</div>)}
        </div>
        <div style={{ marginTop: '1rem' }}><Button href="/portfolio" variant="secondary">Pogledaj ceo portfolio</Button></div>
      </div>
    </section>
  );
}

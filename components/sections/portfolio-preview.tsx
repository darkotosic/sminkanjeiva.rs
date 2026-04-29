import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { getPortfolioItems } from '@/lib/portfolio';

export async function PortfolioPreview() {
  const portfolioItems = await getPortfolioItems();
  const featured = portfolioItems.filter((item) => item.featured).slice(0, 8);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Izdvojeni radovi" subtitle="Aktuelni look-ovi su povezani direktno iz foldera: Bridal Makeup, Colorful Makeup, Face Paint, Film Sfx Makeup, Glam Makeup i Natural Glam Makeup." />
        <div className="grid grid-4">
          {featured.map((item) => (
            <article key={item.image} className="card" aria-label={item.alt}>
              <Image src={item.image} alt={item.alt} width={600} height={750} style={{ borderRadius: '12px', aspectRatio: '4 / 5', objectFit: 'cover' }} unoptimized />
              <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>{item.title}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: '1rem' }}><Button href="/portfolio" variant="secondary">Pogledaj ceo portfolio</Button></div>
      </div>
    </section>
  );
}

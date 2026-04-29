import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getPortfolioItems } from '@/lib/portfolio';

export async function PortfolioGrid() {
  const portfolioItems = await getPortfolioItems();

  return (
    <div className="grid grid-4">
      {portfolioItems.map((item) => (
        <article key={item.image} className="card" aria-label={item.alt}>
          <Image src={item.image} alt={item.alt} width={600} height={750} style={{ borderRadius: '12px', aspectRatio: '4 / 5', objectFit: 'cover' }} unoptimized />
          <p style={{ marginTop: '0.75rem', marginBottom: '0.4rem' }}>{item.title}</p>
          <Badge text={item.category} />
        </article>
      ))}
    </div>
  );
}

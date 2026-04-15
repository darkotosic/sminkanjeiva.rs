import { portfolioItems } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

export function PortfolioGrid() {
  return (
    <div className="grid grid-4">
      {portfolioItems.map((item) => (
        <article key={item.image} className="card" aria-label={item.alt}>
          <p style={{ marginTop: 0 }}>{item.title}</p>
          <Badge text={item.category} />
        </article>
      ))}
    </div>
  );
}

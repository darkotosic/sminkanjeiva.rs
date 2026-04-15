import { Service } from '@/data/services';
import { Button } from '@/components/ui/button';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card">
      <h3>{service.title}</h3>
      <p style={{ color: 'var(--muted)' }}>{service.shortDescription}</p>
      <p><strong>{service.priceLabel}</strong></p>
      <Button href={`/usluge/${service.slug}`} variant="secondary">Saznaj više</Button>
    </article>
  );
}

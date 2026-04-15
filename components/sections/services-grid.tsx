import { services } from '@/data/services';
import { ServiceCard } from '@/components/ui/service-card';

export function ServicesGrid() {
  return <div className="grid grid-4">{services.filter((s) => s.active).map((service) => <ServiceCard key={service.slug} service={service} />)}</div>;
}

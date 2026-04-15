import { services } from '@/data/services';
import { ServiceDetailTemplate } from '@/components/sections/service-detail-template';

export default function FrizuraPage() {
  const service = services.find((s) => s.slug === 'frizura')!;
  return <ServiceDetailTemplate service={service} />;
}

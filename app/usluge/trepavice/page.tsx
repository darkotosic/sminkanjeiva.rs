import { services } from '@/data/services';
import { ServiceDetailTemplate } from '@/components/sections/service-detail-template';

export default function TrepavicePage() {
  const service = services.find((s) => s.slug === 'trepavice')!;
  return <ServiceDetailTemplate service={service} />;
}

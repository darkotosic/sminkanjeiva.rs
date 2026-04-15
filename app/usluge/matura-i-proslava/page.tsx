import { services } from '@/data/services';
import { ServiceDetailTemplate } from '@/components/sections/service-detail-template';

export default function MaturaPage() {
  const service = services.find((s) => s.slug === 'matura-i-proslava')!;
  return <ServiceDetailTemplate service={service} />;
}

import { services } from '@/data/services';
import { ServiceDetailTemplate } from '@/components/sections/service-detail-template';

export default function ObrvePage() {
  const service = services.find((s) => s.slug === 'obrve')!;
  return <ServiceDetailTemplate service={service} />;
}

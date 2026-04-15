import { services } from '@/data/services';
import { ServiceDetailTemplate } from '@/components/sections/service-detail-template';

export default function StudijskaSminkaPage() {
  const service = services.find((s) => s.slug === 'studijska-sminka')!;
  return <ServiceDetailTemplate service={service} />;
}

import { services } from '@/data/services';
import { ServiceDetailTemplate } from '@/components/sections/service-detail-template';

export default function SvecanaSminkaPage() {
  const service = services.find((s) => s.slug === 'svecana-sminka')!;
  return <ServiceDetailTemplate service={service} />;
}

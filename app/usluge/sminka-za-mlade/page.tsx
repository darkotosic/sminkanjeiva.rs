import { services } from '@/data/services';
import { ServiceDetailTemplate } from '@/components/sections/service-detail-template';

export default function SminkaZaMladePage() {
  const service = services.find((s) => s.slug === 'sminka-za-mlade')!;
  return <ServiceDetailTemplate service={service} />;
}

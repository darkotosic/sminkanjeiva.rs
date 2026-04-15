import { services } from '@/data/services';
import { ServiceCard } from '@/components/ui/service-card';
import { SectionHeading } from '@/components/ui/section-heading';

export function FeaturedServices() {
  const featured = services.filter((service) => service.featured && service.active);
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Izdvojene usluge" subtitle="Jasno strukturisane usluge sa fokusom na rezultat, trajnost i sigurnost za događaj." />
        <div className="grid grid-4">{featured.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
      </div>
    </section>
  );
}

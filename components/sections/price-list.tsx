import { services } from '@/data/services';

export function PriceList() {
  return (
    <div className="card">
      <h2>Cenovnik</h2>
      {services.filter((service) => service.active).map((service) => (
        <p key={service.slug}><strong>{service.title}</strong>: {service.priceLabel}</p>
      ))}
      <p style={{ color: 'var(--muted)' }}>Cene mogu zavisiti od izlaska na teren, broja osoba i specifičnog paketa.</p>
    </div>
  );
}

import { SectionHeading } from '@/components/ui/section-heading';

const points = [
  {
    icon: '↺',
    title: 'Dugotrajna postojanost',
    description: 'Šminka koja traje ceo dan i noć.',
  },
  {
    icon: '♡',
    title: 'Higijenski protokoli',
    description: 'Najviši standard čistoće i higijene.',
  },
  {
    icon: '☻',
    title: 'Personalizovan pristup',
    description: 'Šminka prilagođena vama i vašim željama.',
  },
];

export function WhyChoose() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionHeading title="Profesionalna šminka prilagođena vama" subtitle="Kreiramo pažljivo prilagođene makeup look-ove koji traju, izgledaju besprekorno na fotografijama i prate vaš stil, ten i energiju." />
        <div className="grid grid-3">
          {points.map((point) => (
            <article key={point.title} className="feature-card card">
              <span className="feature-icon" aria-hidden="true">{point.icon}</span>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

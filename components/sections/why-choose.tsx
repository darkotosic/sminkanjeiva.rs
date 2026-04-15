import { SectionHeading } from '@/components/ui/section-heading';

const points = [
  'Prilagođen pristup licu, tenu i prilici',
  'Dugotrajna šminka sa urednim završnim izgledom',
  'Higijenski i profesionalan rad',
  'Mirna i organizovana priprema bez stresa',
  'Premium proizvodi i pažljiv odabir tehnike',
  'Pouzdanost za venčanja i važne događaje',
];

export function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Zašto klijentkinje biraju Atelje Eva" subtitle="Svaki makeup look planiran je tako da bude postojan, prilagođen i pouzdan kada je najvažnije." />
        <div className="grid grid-3">
          {points.map((point) => <div key={point} className="card">{point}</div>)}
        </div>
      </div>
    </section>
  );
}

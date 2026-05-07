import { TrustItem } from '@/components/ui/trust-item';

const items = ['Studio u Rumi', 'Rad na terenu', 'Glam šminka', 'Face painting', 'Specijalni efekti'];

export function TrustStrip() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container grid grid-4">{items.map((label) => <TrustItem key={label} label={label} />)}</div>
    </section>
  );
}

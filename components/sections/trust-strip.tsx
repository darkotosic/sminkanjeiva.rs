import { TrustItem } from '@/components/ui/trust-item';

const items = ['[10+] godina iskustva', '[900+] zadovoljnih klijentkinja', 'Profesionalni i higijenski standardi', 'Premium makeup proizvodi', 'Novi Sad studio / izlazak na teren'];

export function TrustStrip() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container grid grid-4">{items.map((label) => <TrustItem key={label} label={label} />)}</div>
    </section>
  );
}

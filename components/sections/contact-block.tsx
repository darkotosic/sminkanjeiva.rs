import { site } from '@/data/site';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

export function ContactBlock() {
  return (
    <section className="section">
      <div className="container card">
        <SectionHeading title="Kontakt i zakazivanje" subtitle="Za dostupnost termina, cenu i dodatne informacije pošaljite poruku ili pozovite direktno." />
        <p>Telefon: {site.phone}</p>
        <p>Email: {site.email}</p>
        <p>Instagram: {site.instagramUrl}</p>
        <p>Lokacija: {site.address}</p>
        <p>Radno vreme: {site.workingHours}</p>
        <Button href="/kontakt">Pošalji upit</Button>
      </div>
    </section>
  );
}

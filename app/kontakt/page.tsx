import { PageHero } from '@/components/sections/page-hero';
import { faqItems } from '@/data/faq';
import { site } from '@/data/site';
import { FaqItem } from '@/components/ui/faq-item';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Kontakt i zakazivanje',
  description: 'Pozovite nas direktno za dostupnost termina, cenu i preporuku usluge.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero title="Kontakt" intro="Pozovite nas direktno za termin, preporuku usluge i proveru dostupnosti." />
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h2>Kontakt detalji</h2>
            <p>Telefon: {site.phone}</p>
            <p>Email: {site.email}</p>
            <p>Lokacija: {site.address}</p>
            <p>Radno vreme: {site.workingHours}</p>
            <p><a href="https://maps.google.com" target="_blank">Otvori mapu</a></p>
          </div>
          <div className="card">
            <p className="eyebrow">Enterprise grade kontakt</p>
            <h2>Bez popunjavanja forme</h2>
            <p>Za najbrži dogovor oko termina i usluge, pozovite nas jednim klikom.</p>
            <Button href={`tel:${site.phone}`}>POZOVITE</Button>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}><div className="container"><h2>FAQ mini blok</h2><div className="grid">{faqItems.slice(0, 4).map((item) => <FaqItem key={item.question} question={item.question} answer={item.answer} />)}</div></div></section>
    </>
  );
}

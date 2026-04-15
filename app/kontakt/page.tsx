import { PageHero } from '@/components/sections/page-hero';
import { faqItems } from '@/data/faq';
import { site } from '@/data/site';
import { FaqItem } from '@/components/ui/faq-item';

export const metadata = {
  title: 'Kontakt i zakazivanje',
  description: 'Kontaktirajte nas za dostupnost termina, cenu i preporuku usluge.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero title="Kontakt" intro="Pošaljite upit za termin i dobijte brzu preporuku usluge i dostupnosti." />
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
            <h2>Booking / inquiry forma</h2>
            <form name="booking-inquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/kontakt?hvala=1">
              <input type="hidden" name="form-name" value="booking-inquiry" />
              <p hidden><label>Ne popunjavaj: <input name="bot-field" /></label></p>
              <p><label>Ime i prezime <input name="name" required /></label></p>
              <p><label>Telefon <input name="phone" required /></label></p>
              <p><label>Email <input name="email" type="email" /></label></p>
              <p><label>Usluga <input name="service" /></label></p>
              <p><label>Datum događaja <input name="eventDate" type="date" /></label></p>
              <p><label>Poruka <textarea name="message" rows={4} required /></label></p>
              <button type="submit">Pošalji upit</button>
            </form>
            <p style={{ color: 'var(--muted)' }}>Fallback: ako forma ne prođe, pošaljite email na {site.email} ili pozovite {site.phone}.</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}><div className="container"><h2>FAQ mini blok</h2><div className="grid">{faqItems.slice(0, 4).map((item) => <FaqItem key={item.question} question={item.question} answer={item.answer} />)}</div></div></section>
    </>
  );
}

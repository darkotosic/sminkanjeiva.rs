import { Service } from '@/data/services';
import { Button } from '@/components/ui/button';
import { FaqItem } from '@/components/ui/faq-item';
import { PageHero } from '@/components/sections/page-hero';
import { AnimatedNumberText } from '@/components/ui/animated-number-text';

export function ServiceDetailTemplate({ service }: { service: Service }) {
  return (
    <>
      <PageHero title={service.title} intro={service.fullIntro} />
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container grid grid-2">
          <div className="card"><h2>Za koga je usluga</h2><p>{service.whoItIsFor}</p></div>
          <div className="card"><h2>Trajanje i cena</h2><p><AnimatedNumberText text={service.duration} /></p><p><strong><AnimatedNumberText text={service.priceLabel} /></strong></p></div>
          <div className="card"><h2>Šta je uključeno</h2><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="card"><h2>Priprema pre termina</h2><ul>{service.prepNotes.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container"><h2>FAQ</h2><div className="grid">{service.faq.map((item) => <FaqItem key={item.question} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}><div className="container card"><h2>Spremni za rezervaciju?</h2><p>Pošaljite upit i dobijte brzu potvrdu dostupnosti.</p><Button href="/kontakt">Zakaži termin</Button></div></section>
    </>
  );
}

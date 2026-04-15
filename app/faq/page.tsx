import { PageHero } from '@/components/sections/page-hero';
import { faqItems } from '@/data/faq';
import { FaqItem } from '@/components/ui/faq-item';

export default function FaqPage() {
  const categories = ['Zakazivanje', 'Usluga', 'Dolazak / lokacija', 'Plaćanje / otkazivanje'];
  return (
    <>
      <PageHero title="FAQ" intro="Odgovori na pitanja o zakazivanju, uslugama, lokaciji i pravilima termina." />
      <section className="section"><div className="container">{categories.map((category) => (<div key={category} style={{ marginBottom: '2rem' }}><h2>{category}</h2><div className="grid">{faqItems.filter((item) => item.category === category).map((item) => <FaqItem key={item.question} question={item.question} answer={item.answer} />)}</div></div>))}</div></section>
    </>
  );
}

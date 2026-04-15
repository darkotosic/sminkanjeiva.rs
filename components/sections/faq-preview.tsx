import { faqItems } from '@/data/faq';
import { FaqItem } from '@/components/ui/faq-item';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

export function FaqPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Česta pitanja" />
        <div className="grid">{faqItems.slice(0, 7).map((item) => <FaqItem key={item.question} question={item.question} answer={item.answer} />)}</div>
        <div style={{ marginTop: '1rem' }}><Button href="/faq" variant="secondary">Sva pitanja</Button></div>
      </div>
    </section>
  );
}

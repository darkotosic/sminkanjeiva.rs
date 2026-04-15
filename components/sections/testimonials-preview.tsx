import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/section-heading';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export function TestimonialsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Iskustva klijentkinja" subtitle="Poverenje se gradi kroz rezultat, iskustvo i preporuke." />
        <div className="grid grid-3">{testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}</div>
      </div>
    </section>
  );
}

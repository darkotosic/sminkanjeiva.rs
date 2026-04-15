import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export function ReviewList() {
  return <div className="grid grid-3">{testimonials.map((item) => <TestimonialCard key={`${item.name}-${item.service}`} item={item} />)}</div>;
}

import { Hero } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { FeaturedServices } from '@/components/sections/featured-services';
import { WhyChoose } from '@/components/sections/why-choose';
import { PortfolioPreview } from '@/components/sections/portfolio-preview';
import { TestimonialsPreview } from '@/components/sections/testimonials-preview';
import { BookingCta } from '@/components/sections/booking-cta';
import { FaqPreview } from '@/components/sections/faq-preview';
import { ContactBlock } from '@/components/sections/contact-block';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata('/');

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedServices />
      <WhyChoose />
      <PortfolioPreview />
      <TestimonialsPreview />
      <BookingCta />
      <FaqPreview />
      <ContactBlock />
    </>
  );
}

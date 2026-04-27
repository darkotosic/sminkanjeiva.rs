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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container card">
          <h2>Najtraženije lokacije i termini</h2>
          <p>
            Izdvojene stranice za lokalne upite: <a href="/sminkanje-ruma">šminkanje Ruma</a>,{' '}
            <a href="/sminkanje-beograd">šminkanje Beograd</a>, <a href="/sminkanje-novi-sad">šminkanje Novi Sad</a>,{' '}
            <a href="/sminkanje-za-vencanje">šminkanje za venčanje</a> i{' '}
            <a href="/sminkanje-za-decije-rodjendane">šminkanje za dečije rođendane</a>.
          </p>
        </div>
      </section>
    </>
  );
}

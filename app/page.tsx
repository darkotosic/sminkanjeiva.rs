import { Hero } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { WhyChoose } from '@/components/sections/why-choose';
import { BookingCta } from '@/components/sections/booking-cta';
import { HomeServiceOverview } from '@/components/sections/home-service-overview';
import { AboutPreview } from '@/components/sections/about-preview';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata('/');

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServiceOverview />
      <AboutPreview />
      <TrustStrip />
      <WhyChoose />
      <BookingCta />
    </>
  );
}

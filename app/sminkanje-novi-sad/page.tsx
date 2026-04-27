import { cityLandings } from '@/data/local-seo';
import { buildLandingMetadata } from '@/lib/seo';
import { LocalSeoLanding } from '@/components/sections/local-seo-landing';

const cityData = cityLandings.find((item) => item.slug === 'sminkanje-novi-sad')!;

export const metadata = buildLandingMetadata({
  title: cityData.title,
  description: cityData.intro,
  path: '/sminkanje-novi-sad',
  keywords: cityData.keywordVariants,
});

export default function SminkanjeNoviSadPage() {
  return <LocalSeoLanding cityData={cityData} />;
}

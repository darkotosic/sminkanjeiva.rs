import { cityLandings } from '@/data/local-seo';
import { buildLandingMetadata } from '@/lib/seo';
import { LocalSeoLanding } from '@/components/sections/local-seo-landing';

const cityData = cityLandings.find((item) => item.slug === 'sminkanje-beograd')!;

export const metadata = buildLandingMetadata({
  title: cityData.title,
  description: cityData.intro,
  path: '/sminkanje-beograd',
  keywords: cityData.keywordVariants,
});

export default function SminkanjeBeogradPage() {
  return <LocalSeoLanding cityData={cityData} />;
}

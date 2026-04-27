import { cityLandings } from '@/data/local-seo';
import { buildLandingMetadata } from '@/lib/seo';
import { LocalSeoLanding } from '@/components/sections/local-seo-landing';

const cityData = cityLandings.find((item) => item.slug === 'sminkanje-ruma')!;

export const metadata = buildLandingMetadata({
  title: cityData.title,
  description: cityData.intro,
  path: '/sminkanje-ruma',
  keywords: cityData.keywordVariants,
});

export default function SminkanjeRumaPage() {
  return <LocalSeoLanding cityData={cityData} />;
}

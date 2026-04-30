import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { programmaticSeoRoutes, sitemapRoutes } from '@/data/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = [
    ...sitemapRoutes.topLevel,
    ...sitemapRoutes.serviceRequired,
    ...sitemapRoutes.education,
    ...sitemapRoutes.marketingSeo,
    ...programmaticSeoRoutes.bridalByCity.map((city) => `/sminka-za-mlade-${city}`),
    ...programmaticSeoRoutes.proMuaByCity.map((city) => `/profesionalni-sminker-${city}`),
    ...programmaticSeoRoutes.weddingByCity.map((city) => `/svadbena-sminka-${city}`),
  ];

  const dedupedRoutes = Array.from(new Set(allRoutes));

  return dedupedRoutes.map((route) => ({
    url: `${site.canonicalDomain}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}

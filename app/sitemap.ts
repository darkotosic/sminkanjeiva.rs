import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { sitemapRoutes } from '@/data/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = [
    ...sitemapRoutes.topLevel,
    ...sitemapRoutes.serviceRequired,
    ...sitemapRoutes.education,
    ...sitemapRoutes.marketingSeo,
  ];

  return allRoutes.map((route) => ({
    url: `${site.canonicalDomain}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}

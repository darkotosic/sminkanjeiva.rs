import type { Metadata } from 'next';
import { seoByRoute } from '@/data/seo';

export function getMetadata(route: string): Metadata {
  const seo = seoByRoute[route] ?? seoByRoute['/'];
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
  };
}

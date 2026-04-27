import type { Metadata } from 'next';
import { seoByRoute } from '@/data/seo';
import { site } from '@/data/site';

export function getMetadata(route: string): Metadata {
  const seo = seoByRoute[route] ?? seoByRoute['/'];
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: site.brandName,
      locale: 'sr_RS',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  };
}

export function buildLandingMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords: readonly string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.brandName,
      locale: 'sr_RS',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

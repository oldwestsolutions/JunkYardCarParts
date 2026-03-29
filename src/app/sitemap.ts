import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { SHOP_CATEGORIES } from '@/data/shop-categories';

const STATIC_PATHS = [
  '',
  '/products',
  '/legal',
  '/shipping',
  '/terms',
  '/privacy',
  '/solutions',
  '/blockchain',
  '/network',
  '/marketplace',
  '/signature',
  '/careers',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/products' ? 0.95 : 0.75,
  }));

  const categoryEntries: MetadataRoute.Sitemap = SHOP_CATEGORIES.map((c) => ({
    url: `${SITE_URL}/categories/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...categoryEntries];
}

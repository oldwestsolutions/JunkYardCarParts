/** Canonical site URL for metadata, sitemap, and structured data. Override with NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.junkyardcarparts.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Junkyard Car Parts';

export const SITE_TAGLINE = 'Used Car Parts Marketplace';

export const DEFAULT_DESCRIPTION =
  'Buy used car parts online: verified OEM and aftermarket listings, salvage and junkyard-sourced inventory, transparent condition notes, and shipping across the U.S. Junkyard Car Parts is a used auto parts marketplace based in Louisiana.';

export const DEFAULT_KEYWORDS = [
  'used car parts',
  'used auto parts',
  'used car parts online',
  'junkyard car parts',
  'salvage auto parts',
  'used OEM parts',
  'buy used car parts',
  'used automotive parts marketplace',
  'pre-owned auto parts',
  'Louisiana used car parts',
] as const;

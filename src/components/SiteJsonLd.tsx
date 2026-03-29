import { SITE_NAME, SITE_URL } from '@/lib/site';

/** Organization + WebSite + SearchAction for Google rich results */
export default function SiteJsonLd() {
  const payload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          'Used car parts marketplace: verified listings for OEM, aftermarket, and salvage inventory.',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'LA',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          'Shop used car parts online with verified sellers, clear condition notes, and nationwide shipping.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

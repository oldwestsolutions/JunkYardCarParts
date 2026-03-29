import type { Metadata } from 'next';
import ProductsCatalog from '@/components/ProductsCatalog';

export const metadata: Metadata = {
  title: 'Used Car Parts',
  description:
    'Browse used car parts by category: engine, brakes, lighting, wheels, interior, electronics, and more. Verified listings, clear condition notes, and shipping across the United States.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Used Car Parts for Sale Online',
    description:
      'Search OEM and aftermarket used auto parts. Transparent sourcing, seller verification, and secure checkout.',
    url: '/products',
  },
};

export default function ProductsPage() {
  return <ProductsCatalog basePath="/products" />;
}
